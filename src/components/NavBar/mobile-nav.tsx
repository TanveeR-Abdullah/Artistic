"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/paintings", label: "Paintings" },
  { href: "/artists", label: "Artists" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="lg:hidden">
        <Menu className="h-7 w-7" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-white p-6">
          <div className="mb-10 flex justify-end">
            <button onClick={() => setOpen(false)}>
              <X className="h-7 w-7" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}