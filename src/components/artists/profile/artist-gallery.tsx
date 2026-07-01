import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Painting = {
  id: string;
  title: string;
  image: string;
  price: number;
};

type ArtistGalleryProps = {
  paintings: Painting[];
};

export function ArtistGallery({
  paintings,
}: ArtistGalleryProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex items-end justify-between">

          <div>

            <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[#8B5E3C]">
              Portfolio
            </span>

            <h2 className="mt-3 text-4xl font-bold text-[#2F2F2F]">
              Featured Paintings
            </h2>

          </div>

          <Link
            href="/paintings"
            className="flex items-center gap-2 text-[#8B5E3C] hover:gap-3 transition-all"
          >
            View All
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {paintings.map((painting) => (
            <Link
              key={painting.id}
              href={`/paintings/${painting.id}`}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl">

                <Image
                  src={painting.image}
                  alt={painting.title}
                  width={600}
                  height={800}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="mt-5">

                <h3 className="text-xl font-semibold text-[#2F2F2F]">
                  {painting.title}
                </h3>

                <p className="mt-2 text-[#8B5E3C] font-semibold">
                  ${painting.price}
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}