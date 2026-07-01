import Link from "next/link";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

type ArtistContactProps = {
  name: string;
  email?: string;
};

export function ArtistContact({
  name,
  email,
}: ArtistContactProps) {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-[32px] border border-[#E8E3DB] bg-white shadow-sm">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left */}
            <div className="space-y-6 p-10">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8B5E3C]">
                Contact Artist
              </span>

              <h2 className="text-4xl font-bold text-[#2F2F2F]">
                Interested in a Painting?
              </h2>

              <p className="leading-8 text-gray-600">
                Have a question about an artwork, custom commission, or
                collaboration? Reach out to {name} directly.
              </p>

              {email && (
                <div className="flex items-center gap-3 rounded-xl bg-[#FAF9F6] p-4">
                  <Mail className="h-5 w-5 text-[#8B5E3C]" />

                  <span className="text-gray-700">
                    {email}
                  </span>
                </div>
              )}
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center gap-5 bg-[#F8F5F1] p-10">
              <Link
                href={`mailto:${email}`}
                className="flex items-center justify-center gap-3 rounded-xl bg-[#8B5E3C] px-6 py-4 font-medium text-white transition hover:bg-[#6D472C]"
              >
                <Mail size={20} />
                Send Email
              </Link>

              <button className="flex items-center justify-center gap-3 rounded-xl border border-[#E8E3DB] bg-white px-6 py-4 font-medium transition hover:bg-[#F3EDE6]">
                <MessageCircle size={20} />
                Request Commission
              </button>

              <Link
                href="/paintings"
                className="flex items-center justify-center gap-2 text-[#8B5E3C] transition hover:gap-3"
              >
                Browse Paintings
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}