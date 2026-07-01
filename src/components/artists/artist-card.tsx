import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Palette,
  Star,
} from "lucide-react";

type ArtistCardProps = {
  id: string;
  name: string;
  avatar: string;
  location: string;
  specialty: string;
  paintings: number;
  rating: number;
};

export function ArtistCard({
  id,
  name,
  avatar,
  location,
  specialty,
  paintings,
  rating,
}: ArtistCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-[#E8E3DB] bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-semibold text-[#2F2F2F]">
            {name}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            {location}
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-[#FAF9F6] p-4">
          <div>
            <p className="text-xs text-gray-500">Specialty</p>

            <p className="font-medium text-[#2F2F2F]">
              {specialty}
            </p>
          </div>

          <Palette className="h-6 w-6 text-[#8B5E3C]" />
        </div>

        <div className="flex justify-between text-sm">
          <div>
            <p className="text-gray-500">Paintings</p>
            <p className="font-semibold">{paintings}</p>
          </div>

          <div>
            <p className="text-gray-500">Rating</p>

            <div className="flex items-center gap-1 font-semibold">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {rating}
            </div>
          </div>
        </div>

        <Link
          href={`/artists/${id}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#8B5E3C] py-3 font-medium text-white transition hover:bg-[#6D472C]"
        >
          View Profile
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}