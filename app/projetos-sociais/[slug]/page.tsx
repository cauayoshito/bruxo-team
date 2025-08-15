// app/projetos-sociais/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS_INDEX } from "@/data/projects";
import ProjectSchedule from "@/components/ProjectSchedule";

export default function Page({ params }: { params: { slug: string } }) {
  const project =
    PROJECTS_INDEX[params.slug] || PROJECTS_INDEX[params.slug.toLowerCase()];
  if (!project) return notFound();

  // WhatsApp
  const whatsappLink = project.whatsapp
    ? `https://wa.me/${String(project.whatsapp).replace(/\D/g, "")}?text=${encodeURIComponent(
        `Olá! Quero informações sobre o ${project.name}.`
      )}`
    : null;

  // Map query (garante string antes de usar encodeURIComponent)
  const mapQuery = (project as any).mapQuery as string | undefined;
  const mapsLink =
    typeof mapQuery === "string" && mapQuery.trim().length > 0
      ? `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}`
      : null;

  // Imagem (aceita heroImage ou image)
  const heroSrc =
    (project as any).heroImage ??
    (project as any).image ??
    null;

  return (
    <main>
      {/* Header simples */}
      <section className="container py-10 grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/5">
            {heroSrc ? (
              <Image
                src={heroSrc}
                alt={`Imagem do ${project.name}`}
                width={1200}
                height={900}
                className="w-full h-full object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full grid place-items-center text-sm opacity-70">
                Sem imagem
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-7">
          <h1 className="h1">{project.name}</h1>
          {project.description && <p className="p mt-3">{project.description}</p>}
          {(project as any).address && (
            <p className="p mt-2 opacity-80">{(project as any).address}</p>
          )}

          <div className="mt-6 flex gap-3">
            {whatsappLink && (
              <a
                className="btn-primary"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            )}

            {mapsLink && (
              <a
                className="btn-secondary"
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no mapa
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Horários do projeto (usa [] se não existir) */}
      <ProjectSchedule schedule={(project as any).schedule ?? []} />

      {/* Galeria (opcional) */}
      {Array.isArray((project as any).gallery) && (project as any).gallery.length > 0 && (
        <section className="container pb-16">
          <h2 className="h2">Galeria</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {(project as any).gallery.map((g: any, idx: number) => (
              <div
                key={g.src + idx}
                className="relative w-full overflow-hidden rounded-xl aspect-[4/3]"
              >
                <Image
                  src={g.src}
                  alt={g.alt || `Imagem ${idx + 1} do ${project.name}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
