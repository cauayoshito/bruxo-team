// components/ProjectGallery.tsx
import Image from "next/image";

type Img = { src: string; alt?: string; width?: number; height?: number };

export default function ProjectGallery({ images }: { images?: Img[] }) {
  if (!images || images.length === 0) return null;

  return (
    <section className="container py-12">
      <h2 className="h2">Galeria</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={img.src + i} className="card overflow-hidden">
            <div className="relative w-full aspect-[16/10]">
              <Image
                src={img.src}
                alt={img.alt ?? "Projeto social — foto"}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
