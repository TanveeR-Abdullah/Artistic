import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";

type PaintingCardProps = {
  id: number;
  title: string;
  artist: string;
  price: number;
  rating: number;
  image: string;
};

export default function PaintingCard({
  id,
  title,
  artist,
  price,
  rating,
  image,
}: PaintingCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-[#E8E3DB] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Wishlist */}
        <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 shadow transition hover:bg-[#8B5E3C] hover:text-white">
          <Heart className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-3 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#2F2F2F]">
            {title}
          </h3>

          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          by {artist}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-[#8B5E3C]">
            ${price}
          </span>

          <Link
            href={`/paintings/${id}`}
            className="rounded-xl bg-[#8B5E3C] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#6D472C]"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}