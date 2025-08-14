// components/UnitGallery.tsx
import Image from "next/image";
import type { UnitDetail } from "@/data/units";

export default function UnitGallery({ unit }: { unit: UnitDetail }) {
  const items = unit.gallery ?? [];
  if (!items.length) return null;

  return (
    <section className="container py-12">
      <h2 className="h2">Galeria</h2>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => {
          const src = item.src; // <- aqui garantimos string
          const alt = item.alt ?? `${unit.shortName ?? unit.name} — foto ${i + 1}`;

          // Se width/height vierem, usamos; senão, usamos layout fill
          const hasDim = Number.isFinite(item.width) && Number.isFinite(item.height);

          return (
            <div
              key={i}
              className="relative w-full overflow-hidden rounded-xl bg-white/5 aspect-[4/3]"
            >
              {hasDim ? (
                <Image
                  src={src}
                  alt={alt}
                  width={item.width as number}
                  height={item.height as number}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
