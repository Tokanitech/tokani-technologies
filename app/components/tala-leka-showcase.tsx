"use client";
import Image from "next/image";
import { useState } from "react";
import { talaLekaScreens } from "../lib/tala-leka-media";

export default function TalaLekaShowcase() {
  const [active, setActive] = useState(0);
  const screen = talaLekaScreens[active];
  return <section className="wrap section tala-case" aria-labelledby="tala-gallery-heading">
    <p className="eyebrow">Inside the system</p>
    <h2 id="tala-gallery-heading">See the technology in action.</h2>
    <p>Explore actual simulation screens and sample documents. No live customer records or issued commercial statements are shown.</p>
    <div className="tala-gallery-controls" role="group" aria-label="Choose a Tala Leka system preview">
      {talaLekaScreens.map((item,index) => <button key={item.key} type="button" aria-pressed={active===index} aria-controls="tala-gallery-panel" onClick={()=>setActive(index)}>{item.label}</button>)}
    </div>
    <div id="tala-gallery-panel" className="tala-gallery-display">
      <figure className={screen.key==="driver"?"tala-mobile-preview":"pdf" in screen?"tala-document-preview":""}>
        <a href={screen.src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${screen.label} at full size (new tab)`}>
          <Image src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} sizes="(max-width: 760px) 100vw, 850px" />
        </a>
        <figcaption>Simulation environment · Fictional data · {screen.label}</figcaption>
      </figure>
      <div aria-live="polite">
        <p className="eyebrow">{String(active+1).padStart(2,"0")} / {String(talaLekaScreens.length).padStart(2,"0")}</p>
        <h3>{screen.title}</h3><p>{screen.text}</p>
        <a className="text-link" href={screen.src} target="_blank" rel="noopener noreferrer">Open full-size preview ↗</a>
        {"pdf" in screen && <p><a className="text-link" href={screen.pdf} target="_blank" rel="noopener noreferrer">View complete sample PDF ↗</a></p>}
      </div>
    </div>
    <div className="tala-document-links">{talaLekaScreens.map(item=>"pdf" in item && <a key={item.key} className="text-link" href={item.pdf} target="_blank" rel="noopener noreferrer">{item.label} — sample PDF ↗</a>)}</div>
  </section>;
}
