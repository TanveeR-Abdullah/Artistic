import {
  Award,
  Brush,
  ShoppingBag,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: Brush,
    value: "48",
    label: "Paintings",
  },
  {
    icon: ShoppingBag,
    value: "630+",
    label: "Sales",
  },
  {
    icon: Users,
    value: "18K",
    label: "Followers",
  },
  {
    icon: Award,
    value: "12",
    label: "Awards",
  },
];

export function ArtistStats() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-3xl border border-[#E8E3DB] bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F3EDE6]">
                <Icon
                  className="text-[#8B5E3C]"
                  size={30}
                />
              </div>

              <h2 className="mt-6 text-4xl font-bold text-[#2F2F2F]">
                {item.value}
              </h2>

              <p className="mt-2 text-gray-500">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}