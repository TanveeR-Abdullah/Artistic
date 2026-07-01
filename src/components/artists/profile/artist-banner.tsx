import Image from "next/image";

type ArtistBannerProps = {
  coverImage: string;
  avatar: string;
};

export function ArtistBanner({
  coverImage,
  avatar,
}: ArtistBannerProps) {
  return (
    <section className="relative">
      <div className="relative h-[350px] md:h-[450px]">
        <Image
          src={coverImage}
          alt="Artist Cover"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <div className="relative h-44 w-44 overflow-hidden rounded-full border-8 border-[#FAF9F6] bg-white shadow-xl">
          <Image
            src={avatar}
            alt="Artist Avatar"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}