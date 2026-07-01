"use client";

const categories = [
  "All",
  "Landscape",
  "Abstract",
  "Portrait",
  "Nature",
  "Modern",
  "Watercolor",
];

export function ArtistFilter() {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category, index) => (
        <button
          key={category}
          className={`rounded-full px-5 py-2 transition ${
            index === 0
              ? "bg-[#8B5E3C] text-white"
              : "border border-[#E8E3DB] bg-white hover:bg-[#F3EDE6]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}