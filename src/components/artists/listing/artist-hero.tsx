import Link from "next/link";
import { ArrowRight, Palette } from "lucide-react";
import { ArtistFilter } from "./artist-filter";
import { ArtistSearch } from "./artist-search";

export function ArtistHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#F3EDE6,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center lg:py-36">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#E8E3DB] bg-white px-5 py-2 text-sm font-medium text-[#8B5E3C] shadow-sm">
          <Palette className="h-4 w-4" />
          Meet Our Artists
        </div>

        <h1 className="mt-8 text-5xl font-bold leading-tight text-[#2F2F2F] md:text-7xl">
          Discover
          <span className="block text-[#8B5E3C]">
            Creative Minds
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          Explore talented artists from around the world. Discover unique
          styles, inspiring stories, and original paintings created with
          passion and craftsmanship.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 ">
          <ArtistSearch />
          <ArtistFilter />
        </div>


        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/paintings"
            className="rounded-xl bg-[#8B5E3C] px-8 py-4 text-white transition hover:bg-[#6D472C]"
          >
            Browse Paintings
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-2 rounded-xl border border-[#E8E3DB] bg-white px-8 py-4 transition hover:bg-[#F3EDE6]"
          >
            Learn More
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}