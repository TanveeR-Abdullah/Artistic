import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PaintingGrid } from "@/components/paintings/painting-grid";

export default function PaintingSection() {
  return (
    <section className="bg-[#FAF9F6] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8B5E3C]">
              Collection
            </span>

            <h2 className="mt-3 text-4xl font-bold text-[#2F2F2F]">
              Explore Our Paintings
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              Browse original artwork from talented artists. Each piece is
              handcrafted to inspire your home, office, or gallery.
            </p>
          </div>

          <Link
            href="/paintings"
            className="inline-flex items-center gap-2 rounded-xl border border-[#E8E3DB] bg-white px-6 py-3 transition hover:bg-[#F3EDE6]"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        <PaintingGrid />
      </div>
    </section>
  );
}