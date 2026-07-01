import Link from "next/link";
import {
  Globe, 
} from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

type ArtistSocialsProps = {
  website?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
};

export function ArtistSocials({
  website,
  instagram,
  facebook,
  linkedin,
}: ArtistSocialsProps) {
  return (
    <section className="py-20 bg-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-[32px] border border-[#E8E3DB] bg-white p-10">

          <h2 className="text-3xl font-bold text-[#2F2F2F]">
            Connect With The Artist
          </h2>

          <p className="mt-4 max-w-2xl text-gray-600">
            Follow the artists latest work, exhibitions,
            and creative journey across different platforms.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            {website && (
              <Link
                href={website}
                target="_blank"
                className="flex items-center gap-3 rounded-2xl border border-[#E8E3DB] px-6 py-4 transition hover:bg-[#F3EDE6]"
              >
                <Globe />
                Website
              </Link>
            )}

            {instagram && (
              <Link
                href={instagram}
                target="_blank"
                className="flex items-center gap-3 rounded-2xl border border-[#E8E3DB] px-6 py-4 transition hover:bg-[#F3EDE6]"
              >
                <FaInstagram />
                Instagram
              </Link>
            )}

            {facebook && (
              <Link
                href={facebook}
                target="_blank"
                className="flex items-center gap-3 rounded-2xl border border-[#E8E3DB] px-6 py-4 transition hover:bg-[#F3EDE6]"
              >
                <FaFacebook />
                Facebook
              </Link>
            )}

            {linkedin && (
              <Link
                href={linkedin}
                target="_blank"
                className="flex items-center gap-3 rounded-2xl border border-[#E8E3DB] px-6 py-4 transition hover:bg-[#F3EDE6]"
              >
                <FaLinkedin />
                LinkedIn
              </Link>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}