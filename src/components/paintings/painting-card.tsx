import Image from "next/image";
import Link from "next/link";
import { Heart, Star, Eye } from "lucide-react";

type PaintingCardProps = {
  id: string;
  title: string;
  artist: string;
  category: string;
  price: number;
  rating: number;
  image: string;
};

export function PaintingCard({
  id,
  title,
  artist,
  category,
  price,
  rating,
  image,
}: PaintingCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-[#E8E3DB] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={700}
          height={900}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 shadow-md transition hover:bg-[#8B5E3C] hover:text-white">
          <Heart size={18} />
        </button>

        <span className="absolute left-4 top-4 rounded-full bg-[#8B5E3C] px-3 py-1 text-xs font-medium text-white">
          {category}
        </span>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-[#2F2F2F]">
            {title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            by {artist}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#8B5E3C]">
            ${price}
          </span>

          <div className="flex items-center gap-1 text-amber-500">
            <Star className="fill-current" size={16} />
            <span className="text-sm">{rating}</span>
          </div>
        </div>

        <Link
          href={`/paintings/${id}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#8B5E3C] py-3 font-medium text-white transition hover:bg-[#6D472C]"
        >
          <Eye size={18} />
          View Painting
        </Link>
      </div>
    </div>
  );
}