import { ArtistCard } from "../artist-card";

type Artist = {
  id: string;
  name: string;
  avatar: string;
  location: string;
  specialty: string;
  paintings: number;
  rating: number;
};

type ArtistGridProps = {
  artists: Artist[];
};

export function ArtistGrid({ artists }: ArtistGridProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {artists.map((artist) => (
            <ArtistCard
              key={artist.id}
              {...artist}
            />
          ))}
        </div>
      </div>
    </section>
  );
}