import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brush,
  Globe,
  ShieldCheck,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Brush,
    title: "Original Artwork",
    description:
      "Every painting on our platform is created by talented independent artists.",
  },
  {
    icon: ShieldCheck,
    title: "Authenticity Guaranteed",
    description:
      "We carefully verify every artist and artwork before it reaches collectors.",
  },
  {
    icon: Truck,
    title: "Secure Delivery",
    description:
      "Professional packaging ensures your artwork arrives safely anywhere in the world.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description:
      "Discover unique paintings from artists across different cultures and countries.",
  },
];

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Images */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-6">
            <Image
              src="/images/about/about-1.jpg"
              alt="Artist painting"
              width={500}
              height={650}
              className="rounded-3xl object-cover shadow-lg"
            />

            <div className="space-y-6">
              <Image
                src="/images/about/about-2.jpg"
                alt="Painting gallery"
                width={500}
                height={300}
                className="rounded-3xl object-cover shadow-lg"
              />

              <Image
                src="/images/about/about-3.jpg"
                alt="Canvas artwork"
                width={500}
                height={320}
                className="rounded-3xl object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[#8B5E3C] px-8 py-6 text-white shadow-xl">
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="mt-1 text-sm text-white/90">
              Original Paintings
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8B5E3C]">
            About Turag Art
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#2F2F2F] md:text-5xl">
            Connecting Artists
            <br />
            With Art Lovers
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Turag Art is more than an online marketplace. We are a community
            dedicated to helping talented artists share their creativity while
            making original artwork accessible to collectors around the world.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Whether you are decorating your home, building a gallery, or
            searching for a meaningful gift, every painting carries a unique
            story created with passion and craftsmanship.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-[#E8E3DB] bg-[#FAF9F6] p-6 transition hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B5E3C] text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-semibold text-[#2F2F2F]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#8B5E3C] px-8 py-4 font-medium text-white transition hover:bg-[#6D472C]"
          >
            Learn More
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}