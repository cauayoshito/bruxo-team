import Image from "next/image";
import { UnitDetail } from "@/data/units";

export default function UnitGallery({ unit }: { unit: UnitDetail }) {
  if (!unit.gallery?.length) return null;
  return (
    <section className="container py-12">
      <h2 className="h2">Galeria</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {unit.gallery.map((src, i) => (
          <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl bg-white/5">
            <Image
              src={src}
              alt={`${unit.shortName} foto ${i + 1}`}
              width={1200}
              height={900}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
