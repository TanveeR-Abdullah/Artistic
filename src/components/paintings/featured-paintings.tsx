import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PaintingCard from "./PaintingCard";

const paintings = [
  {
    id: 1,
    title: "Silent Forest",
    artist: "Emma Wilson",
    image: "/images/paintings/painting1.jpg",
    rating: 4.9,
    price: 850,
  },
  {
    id: 2,
    title: "Golden Sunset",
    artist: "David Brown",
    image: "/images/paintings/painting2.jpg",
    rating: 4.8,
    price: 620,
  },
  {
    id: 3,
    title: "Blue Horizon",
    artist: "Sophia Lee",
    image: "/images/paintings/painting3.jpg",
    rating: 5.0,
    price: 1100,
  },
  {
    id: 4,
    title: "Autumn Path",
    artist: "Michael Scott",
    image: "/images/paintings/painting4.jpg",
    rating: 4.9,
    price: 780,
  },
];
export function FeaturedPaintings() {
  return (
    <section className="bg-[#FAF9F6] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8B5E3C]">
              Featured Collection
            </span>

            <h2 className="mt-3 text-4xl font-bold text-[#2F2F2F]">
              Curated Masterpieces
            </h2>

            <p className="mt-4 max-w-xl text-gray-600">
              Explore our hand-picked collection of original paintings from
              talented artists around the world.
            </p>
          </div>

          <Link
            href="/paintings"
            className="inline-flex items-center gap-2 rounded-xl border border-[#E8E3DB] bg-white px-6 py-3 transition hover:bg-[#F5F1EB]"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {paintings.map((painting) => (
            <PaintingCard
              key={painting.id}
              {...painting}
            />
          ))}
        </div>
      </div>
    </section>
  );
}