"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#work", label: "// projects", color: "hover:text-purple" },
    { href: "#skills", label: "// skills", color: "hover:text-pink" },
    { href: "#about", label: "// about", color: "hover:text-teal" },
  ];

  return (
    <header className="sticky top-0 z-20 bg-bg/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1040px] mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        <div className="font-mono text-sm text-ink flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded"
          />
          farida_emad.dev
        </div>

        {/* روابط سطح المكتب */}
        <nav className="hidden md:flex items-center gap-7">
          <ul className="flex gap-7 font-mono text-[13px] text-ink-soft">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={`transition-colors ${l.color}`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="font-mono text-[13px] border border-border rounded px-3.5 py-1.5 hover:border-purple hover:text-purple transition-colors"
          >
            get in touch
          </a>
        </nav>

        {/* زرار الهامبرجر - موبايل بس */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-ink transition-transform ${open ? "rotate-45 translate-y-[3px]" : ""}`}
          ></span>
          <span
            className={`block w-5 h-px bg-ink transition-transform ${open ? "-rotate-45 -translate-y-[3px]" : ""}`}
          ></span>
        </button>
      </div>

      {/* قائمة الموبايل المنسدلة */}
      {open && (
        <nav className="md:hidden border-t border-border bg-bg px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-mono text-sm text-ink-soft transition-colors ${l.color}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="font-mono text-sm text-center border border-border rounded px-3.5 py-2.5 hover:border-purple hover:text-purple transition-colors"
          >
            get in touch
          </a>
        </nav>
      )}
    </header>
  );
}
