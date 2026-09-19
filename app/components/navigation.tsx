"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
const links = [
  ["Services", "/services"],
  ["Products", "/products"],
  ["Our work", "/our-work"],
  ["About", "/about"],
];
export default function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="nav-shell">
        <Link
          href="/"
          className="brand"
          aria-label="Tokani Technologies home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/tokani-logo-transparent.webp"
            width={2019}
            height={779}
            alt="Tokani Technologies"
            priority
            sizes="180px"
          />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-controls="main-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}{" "}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "main-nav is-open" : "main-nav"}
        >
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={
                path === href || path.startsWith(href + "/")
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            className="button nav-cta"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
        <Link
          className="mobile-contact"
          href="/contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk ↗
        </Link>
      </div>
    </header>
  );
}
