"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
{ href: "/", label: "Home" },
  { href: "/FrontEnd/Guest/paintings", label: "Paintings" },
  { href: "/FrontEnd/Guest/artists", label: "Artists" },          
  { href: "/FrontEnd/Guest/about", label: "About" }, 
  

  // { href: "/categories", label: "Categories" }, 
  // { href: "/FrontEnd/Guest/contact", label: "Contact" },    
];

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`transition ${
            pathname === link.href
              ? "text-[#8B5E3C] font-semibold"
              : "text-gray-700 hover:text-[#8B5E3C]"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}