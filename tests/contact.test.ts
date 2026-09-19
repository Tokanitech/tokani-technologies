import { test, afterEach } from "node:test";
import assert from "node:assert/strict";
import { POST } from "../app/api/contact/route.ts";
const originalFetch = globalThis.fetch;
const originalKey = process.env.RESEND_API_KEY;
afterEach(() => {
  globalThis.fetch = originalFetch;
  if (originalKey === undefined) delete process.env.RESEND_API_KEY;
  else process.env.RESEND_API_KEY = originalKey;
});
const payload = {
  name: "Test Client",
  business: "",
  email: "client@example.com",
  phone: "+679 9000000",
  service: "Not sure yet",
  contact: "Email",
  details: "Test enquiry only",
  website: "",
};
function req(body: unknown = payload, origin = "https://www.tokani.com.fj") {
  return new Request("https://www.tokani.com.fj/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", origin },
    body: JSON.stringify(body),
  });
}
test("invalid shapes, enums, oversized text and malformed emails never send", async () => {
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    return new Response("{}");
  };
  for (const body of [
    null,
    [],
    { ...payload, name: {} },
    { ...payload, email: "a@@b.com" },
    { ...payload, service: "unknown" },
    { ...payload, details: "x".repeat(4001) },
    { ...payload, name: "line\nbreak" },
  ])
    assert.equal((await POST(req(body))).status, 400);
  assert.equal(calls, 0);
});
test("rejects an oversized chunked body and malformed JSON", async () => {
  const big = new Request("https://www.tokani.com.fj/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: " ".repeat(25000),
  });
  assert.equal((await POST(big)).status, 400);
  const broken = new Request("https://www.tokani.com.fj/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: "{",
  });
  assert.equal((await POST(broken)).status, 400);
});
test("rejects another origin", async () => {
  assert.equal((await POST(req(payload, "https://other.example"))).status, 403);
});
test("honeypot never contacts email provider", async () => {
  globalThis.fetch = async () => {
    throw new Error("must not send");
  };
  assert.equal((await POST(req({ ...payload, website: "spam" }))).status, 200);
});
test("missing configuration offers explicit email fallback", async () => {
  delete process.env.RESEND_API_KEY;
  const r = await POST(req());
  assert.equal(r.status, 503);
  assert.equal((await r.json()).fallback, true);
});
test("notification failure does not attempt customer confirmation", async () => {
  process.env.RESEND_API_KEY = "test-key";
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    return new Response("{}", { status: 500 });
  };
  assert.equal((await POST(req())).status, 502);
  assert.equal(calls, 1);
});
test("network failure before notification returns an error", async () => {
  process.env.RESEND_API_KEY = "test-key";
  globalThis.fetch = async () => {
    throw new Error("network");
  };
  assert.equal((await POST(req())).status, 502);
});
test("confirmation rejection preserves successful enquiry", async () => {
  process.env.RESEND_API_KEY = "test-key";
  let calls = 0;
  globalThis.fetch = async () =>
    new Response("{}", { status: ++calls === 1 ? 200 : 500 });
  const r = await POST(req());
  assert.equal(r.status, 200);
  assert.deepEqual(await r.json(), { ok: true, confirmationSent: false });
});
test("confirmation network failure preserves successful enquiry", async () => {
  process.env.RESEND_API_KEY = "test-key";
  let calls = 0;
  globalThis.fetch = async () => {
    if (++calls === 2) throw new Error("network");
    return new Response("{}");
  };
  const r = await POST(req());
  assert.equal(r.status, 200);
  assert.deepEqual(await r.json(), { ok: true, confirmationSent: false });
});
test("successful delivery escapes HTML and uses correct recipients and reply addresses", async () => {
  process.env.RESEND_API_KEY = "test-key";
  const sent: Record<string, unknown>[] = [];
  globalThis.fetch = async (_input, init) => {
    sent.push(JSON.parse(String(init?.body)));
    return new Response("{}");
  };
  const r = await POST(
    req({
      ...payload,
      name: "<b>Client</b>",
      details: "<script>alert(1)</script>",
    }),
  );
  assert.deepEqual(await r.json(), { ok: true, confirmationSent: true });
  assert.deepEqual(sent[0].to, ["askme@tokani.com.fj"]);
  assert.equal(sent[0].reply_to, "client@example.com");
  assert.deepEqual(sent[1].to, ["client@example.com"]);
  assert.equal(sent[1].reply_to, "askme@tokani.com.fj");
  assert.ok(String(sent[0].html).includes("&lt;script&gt;"));
  assert.ok(!String(sent[0].html).includes("<script>"));
});
