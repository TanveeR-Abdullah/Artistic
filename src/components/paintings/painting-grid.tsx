import { paintings } from "@/app/lib/data/paintings";
import { PaintingCard } from "./painting-card";

export function PaintingGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {paintings.map((painting) => (
        <PaintingCard
          key={painting.id}
          {...painting}
        />
      ))}
    </div>
  );
}