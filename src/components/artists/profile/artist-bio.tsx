type ArtistBioProps = {
  biography: string;
  inspiration: string;
  experience: number;
};

export function ArtistBio({
  biography,
  inspiration,
  experience,
}: ArtistBioProps) {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-12">
          <span className="uppercase tracking-[0.3em] text-sm text-[#8B5E3C] font-semibold">
            Biography
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#2F2F2F]">
            The Story Behind The Artist
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <p className="leading-9 text-gray-600">
              {biography}
            </p>

            <div className="mt-10 rounded-3xl bg-white p-8 border border-[#E8E3DB]">
              <h3 className="text-2xl font-semibold text-[#2F2F2F]">
                Inspiration
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {inspiration}
              </p>
            </div>

          </div>

          <div>

            <div className="rounded-3xl border border-[#E8E3DB] bg-white p-8">

              <h4 className="text-lg font-semibold">
                Experience
              </h4>

              <p className="mt-3 text-5xl font-bold text-[#8B5E3C]">
                {experience}+
              </p>

              <p className="mt-2 text-gray-500">
                Years creating original artwork.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}