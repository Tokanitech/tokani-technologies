"use client";

import { useId, useState } from "react";
import Link from "next/link";

const products = [
  {
    id: "tala-leka", name: "Tala Leka", audience: "For logistics operators & merchants",
    status: "Controlled rollout", title: "Connect the last-mile fulfilment workflow.",
    description: "Developed by Tokani for Unravel Viti, bringing merchant orders, dispatch, mobile drivers and delivery evidence into one platform.",
    steps: ["Merchant order intake", "Dispatch & driver fulfilment", "Proof of delivery & reporting"],
    href: "/products#tala-leka", action: "Explore Tala Leka",
  },
  {
    id: "careers", name: "Tokani Careers", audience: "For students & families",
    status: "Public platform", title: "From school subjects to your next step.",
    description: "Explore how subjects connect to careers and study pathways in Fiji. Use the guidance to start a conversation with your school or institution.",
    steps: ["Choose your subjects", "Explore career matches", "Check study pathways"],
    href: "/products#careers", action: "Explore Tokani Careers",
  },
  {
    id: "travelops", name: "TravelOps", audience: "For operators & organisations",
    status: "In development", title: "Bring the transport workflow together.",
    description: "Being developed around transport requests, bookings, scheduling and completion records. Talk to us about your workflow and the current product stage.",
    steps: ["Request & booking", "Schedule & dispatch", "Completion & reporting"],
    href: "/products#travelops", action: "Learn about TravelOps",
  },
];

export default function ProductExplorer() {
  const [selected, setSelected] = useState(0);
  const panelId = useId();
  const product = products[selected];
  return (
    <div className="product-explorer">
      <div className="product-switcher" role="group" aria-label="Explore a Tokani product">
        {products.map((item, index) => (
          <button key={item.id} type="button" aria-pressed={selected === index} aria-controls={panelId} onClick={() => setSelected(index)}>
            <strong>{item.name}</strong><span>{item.audience}</span>
          </button>
        ))}
      </div>
      <div id={panelId}>
        <article key={product.id} className="product-preview showcase-enter" id={product.id === "careers" ? "education-case" : undefined}>
          <span className={`status ${product.id === "careers" ? "status-public" : ""}`}>{product.status}</span>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <ol className="product-steps" aria-label={product.id === "tala-leka" ? "Tala Leka fulfilment workflow" : product.id === "travelops" ? "Planned TravelOps workflow" : "Career exploration steps"}>
            {product.steps.map((step, index) => <li key={step}><span aria-hidden="true">0{index + 1}</span>{step}</li>)}
          </ol>
          <small>{product.id === "tala-leka" ? "Client deployment · Controlled rollout with Unravel Viti" : product.id === "travelops" ? "Product direction · Features are still being developed" : "Guidance only · Confirm official entry requirements"}</small>
          <Link className="text-link" href={product.href}>{product.action} ↗</Link>
        </article>
      </div>
      <noscript><p><Link href="/products">View Tala Leka, Tokani Careers and TravelOps details →</Link></p></noscript>
    </div>
  );
}
