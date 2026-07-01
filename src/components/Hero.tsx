import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#FAF9F6]">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8E3DB] bg-white px-4 py-2 text-sm text-[#8B5E3C] shadow-sm">
            <Sparkles className="h-4 w-4" />
            Discover Original Masterpieces
          </div>

          <h1 className="text-5xl font-bold leading-tight text-[#2F2F2F] md:text-6xl xl:text-7xl">
            Bring
            <span className="block text-[#8B5E3C]">
              Beautiful Art
            </span>
            Into Your Home
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Explore carefully curated paintings from talented artists around
            the world. Every piece tells a story and transforms your living
            space into something extraordinary.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/paintings"
              className="inline-flex items-center gap-2 rounded-xl bg-[#8B5E3C] px-8 py-4 font-medium text-white transition hover:bg-[#6D472C]"
            >
              Explore Collection
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/artists"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E8E3DB] bg-white px-8 py-4 font-medium text-[#2F2F2F] transition hover:bg-[#F5F1EB]"
            >
              <Search className="h-5 w-5" />
              Browse Artists
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-[#8B5E3C]">500+</h3>
              <p className="mt-2 text-sm text-gray-600">
                Original Paintings
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#8B5E3C]">120+</h3>
              <p className="mt-2 text-sm text-gray-600">
                Professional Artists
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#8B5E3C]">10k+</h3>
              <p className="mt-2 text-sm text-gray-600">
                Happy Collectors
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute -left-6 -top-6 h-full w-full rounded-[40px] bg-[#F3EDE6]" />

          <div className="relative overflow-hidden rounded-[40px] shadow-2xl">
            <Image
              src="/2.jpg"
              alt="Featured Painting"
              width={700}
              height={850}
              priority
              className="h-[650px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}