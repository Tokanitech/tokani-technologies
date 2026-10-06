import test from 'node:test';
import assert from 'node:assert/strict';
const base=process.env.TEST_BASE_URL||'http://localhost:3000';
const pages=['/','/services','/services/website-development','/services/crm-workflows','/services/custom-systems','/products','/our-work','/case-studies','/about','/contact','/privacy','/case-studies/unravel-viti','/case-studies/vatudei','/case-studies/dfc','/case-studies/jad'];
const results=new Map();
for(const path of pages){test(`${path}: rendered content, metadata and valid internal links`,async()=>{const r=await fetch(base+path);assert.equal(r.status,200);const html=await r.text();results.set(path,html);assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1);const canonical=html.match(/rel="canonical" href="([^"]+)"/);assert.ok(canonical);assert.equal(new URL(canonical[1]).href,new URL(path,"https://www.tokani.com.fj").href);assert.match(html,/<meta name="description" content="[^"]+"/);assert.match(html,/<title>[^<]+<\/title>/);assert.ok(!html.includes('name="robots" content="noindex'));assert.match(html,/application\/ld\+json/);assert.ok(!html.includes('Zoho'));for(const match of html.matchAll(/href="(\/[^"?#]*)(?:[^"#]*)(?:#[^"]*)?"/g)){const href=match[1];if(href.startsWith('/_next')||href.startsWith('/brand')||href.startsWith('/portfolio'))continue;assert.ok(pages.includes(href),`unexpected internal link ${href}`);}assert.ok(!html.includes('/_vercel/insights/script.js'));});}
test('sitemap lists every intended public page exactly once',async()=>{const r=await fetch(base+'/sitemap.xml');assert.equal(r.status,200);const s=await r.text();const urls=[...s.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);assert.equal(urls.length,pages.length);assert.equal(new Set(urls).size,pages.length);for(const p of pages)assert.ok(urls.includes('https://www.tokani.com.fj'+(p==='/'?'':p)));});
test('robots allows production crawling and points to sitemap',async()=>{const r=await fetch(base+'/robots.txt');assert.equal(r.status,200);const s=await r.text();assert.match(s,/Allow: \//);assert.match(s,/Sitemap: https:\/\/www.tokani.com.fj\/sitemap.xml/);});
test('legacy URLs redirect to their replacements',async()=>{for(const [old,next]of [['/index.html','/'],['/solutions.html','/services'],['/story.html','/about'],['/how-we-work.html','/about#approach'],['/contact.html','/contact']]){const r=await fetch(base+old,{redirect:'manual'});assert.equal(r.status,308);assert.equal(new URL(r.headers.get('location'),base).href,base+next);}});
test('unknown services and case studies return 404',async()=>{for(const p of ['/services/missing','/case-studies/missing'])assert.equal((await fetch(base+p)).status,404);});
test('Vatudei is marked in development and appointment work is not claimed live',async()=>{const s=await(await fetch(base+'/case-studies/vatudei')).text();assert.match(s,/In development/);assert.match(s,/appointment scheduling is deferred/);assert.match(s,/does not claim live appointment booking/);});
test('form labels and mobile navigation control are rendered',async()=>{const s=await(await fetch(base+'/contact')).text();for(const field of ['name','business','email','phone','service','contact','details'])assert.ok(s.includes(`name="${field}"`));assert.match(s,/aria-controls="main-navigation"/);assert.match(s,/aria-expanded="false"/);assert.match(s,/href="\/privacy"/);});
test('local images resolve and security response headers exist',async()=>{const home=await fetch(base+'/');assert.equal(home.headers.get('x-content-type-options'),'nosniff');assert.equal(home.headers.get('x-frame-options'),'DENY');const csp=home.headers.get('content-security-policy')||'';assert.match(csp,/default-src 'self'/);assert.match(csp,/frame-ancestors 'none'/);for(const p of ['/portfolio/portfolio-vatudei.jpg','/portfolio/portfolio-unravel.jpg','/portfolio/jad-team-current.webp','/portfolio/jad-storefront.jpg','/brand/tokani-logo-transparent.webp'])assert.equal((await fetch(base+p)).status,200);});

test('service pages state the locked first-year value clearly',async()=>{const s=await(await fetch(base+'/services')).text();assert.match(s,/1 professional business email mailbox/);assert.match(s,/2 professional business email mailboxes/);assert.match(s,/SME digitisation package/);assert.ok(!s.includes('Website and CRM package'));});
test('DFC case study explains the interactive fare and planning work without claiming live fares',async()=>{const s=await(await fetch(base+'/case-studies/dfc')).text();assert.match(s,/Fare Pick Helper/);assert.match(s,/Before You Travel Planner/);assert.match(s,/general guidance rather than a live quote/);assert.match(s,/href="\/services\/custom-systems"/);assert.match(s,/portfolio\/portfolio-dfc\.jpg/);});

test('JAD case study credits the original build and shows current visual evidence alongside original-page comparisons',async()=>{const s=await(await fetch(base+'/case-studies/jad')).text();assert.match(s,/original JAD website/);assert.match(s,/second-generation revamp/);assert.match(s,/jad-team-current\.webp/);assert.match(s,/jad-storefront\.jpg/);assert.match(s,/See what changed, and why/);assert.match(s,/Groups and Visa pages were reported as unavailable/);});


test('case-study hub and detail pages expose strong discovery signals',async()=>{
  const hub=await(await fetch(base+'/case-studies')).text();
  assert.match(hub,/Fiji businesses\. Real digital work\./);
  for(const slug of ['unravel-viti','vatudei','dfc','jad']){
    assert.match(hub,new RegExp(`href="/case-studies/${slug}"`));
    const html=await(await fetch(base+`/case-studies/${slug}`)).text();
    assert.match(html,/Case study updated/);
    assert.ok(html.includes(`"dateModified":"${slug === "jad" ? "2026-10-06T12:26:00+12:00" : "2026-09-27T11:00:00+12:00"}"`));
    assert.match(html,/"articleSection":"Client case studies"/);
    assert.match(html,/property="og:type" content="article"/);
    assert.match(html,/Related case studies/);
  }
});

test('JAD case-study metadata targets Fiji website and revamp intent',async()=>{
  const s=await(await fetch(base+'/case-studies/jad')).text();
  assert.match(s,/<title>JAD Travel Website Build &amp; Revamp — Fiji \| Tokani Technologies<\/title>/);
  assert.match(s,/JAD Travel website: from original build to second-generation revamp\./);
  assert.match(s,/>6 October 2026<\/time>/);
  assert.match(s,/long-established Suva travel agency/);
  assert.match(s,/Fiji corporate travel/);
  assert.match(s,/structured data and route-specific search metadata/);
});

test('service pages link into relevant case-study clusters',async()=>{
  const websites=await(await fetch(base+'/services/website-development')).text();
  for(const slug of ['jad','unravel-viti','vatudei']) assert.match(websites,new RegExp(`href="/case-studies/${slug}"`));
  const custom=await(await fetch(base+'/services/custom-systems')).text();
  assert.match(custom,/href="\/case-studies\/dfc"/);
  assert.match(custom,/"@type":"Service"/);
});

test('production robots metadata permits rich Google previews',async()=>{
  const s=await(await fetch(base+'/case-studies/jad')).text();
  assert.match(s,/name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"/);
});

