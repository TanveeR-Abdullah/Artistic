import { Globe, MapPin, } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

type ArtistProfileProps = {
  name: string;
  specialty: string;
  location: string;
  bio: string;
};

export function ArtistProfile({
  name,
  specialty,
  location,
  bio,
}: ArtistProfileProps) {
  return (
    <section className="mx-auto mt-28 max-w-4xl px-6 text-center">
      <span className="rounded-full bg-[#F3EDE6] px-4 py-2 text-sm font-medium text-[#8B5E3C]">
        {specialty}
      </span>

      <h1 className="mt-6 text-5xl font-bold text-[#2F2F2F]">
        {name}
      </h1>

      <div className="mt-4 flex justify-center gap-6 text-gray-500">
        <div className="flex items-center gap-2">
          <MapPin size={18} />
          {location}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
        {bio}
      </p>

      <div className="mt-10 flex justify-center gap-5">
        <button className="rounded-full bg-[#8B5E3C] p-3 text-white transition hover:bg-[#6D472C]">
          <FaInstagram />
        </button>

        <button className="rounded-full bg-[#8B5E3C] p-3 text-white transition hover:bg-[#6D472C]">
          <FaFacebook />
        </button>

        <button className="rounded-full bg-[#8B5E3C] p-3 text-white transition hover:bg-[#6D472C]">
          <Globe />
        </button>
      </div>
    </section>
  );
}