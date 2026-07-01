"use client";

import { Search } from "lucide-react";

export function ArtistSearch() {
  return (
    <div className="relative w-full max-w-lg">
      <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search artists..."
        className="h-14 w-full rounded-2xl border border-[#E8E3DB] bg-white pl-14 pr-5 outline-none transition focus:border-[#8B5E3C]"
      />
    </div>
  );
}