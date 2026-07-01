import Link from "next/link";
import { Palette } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8B5E3C] text-white transition hover:bg-[#6D472C]">
        <Palette className="h-5 w-5" />
      </div>

      <div>
        <h2 className="font-serif text-xl font-bold tracking-wide text-[#2F2F2F]">
        Artistic
        </h2>

        <p className="-mt-1 text-xs tracking-[0.25em] uppercase text-gray-500">
          Gallery
        </p>
      </div>
    </Link>
  );
}