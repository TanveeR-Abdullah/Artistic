import Link from "next/link";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { Logo } from "./logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E8E3DB] bg-[#FAF9F6]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <DesktopNav />

        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-full p-2 transition hover:bg-[#F3EDE6]">
            <Search className="h-5 w-5" />
          </button>

          <button className="rounded-full p-2 transition hover:bg-[#F3EDE6]">
            <Heart className="h-5 w-5" />
          </button>

          <button className="rounded-full p-2 transition hover:bg-[#F3EDE6]">
            <ShoppingCart className="h-5 w-5" />
          </button>

          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-gray-700 transition hover:text-[#8B5E3C]"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-[#8B5E3C] px-5 py-2.5 text-white transition hover:bg-[#6D472C]"
          >
            Sign Up
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}