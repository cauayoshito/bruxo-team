// components/CompetitorsMarquee.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Img = { src: string; alt?: string };
type Props = {
  images: Img[];
  height?: number;   // altura do card (px)
  speed?: number;    // px/s na animação
};

export default function CompetitorsMarquee({ images, height = 200, speed = 40 }: Props) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // respeita preferências do usuário
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(m.matches);
    const cb = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    m.addEventListener?.("change", cb);
    return () => m.removeEventListener?.("change", cb);
  }, []);

  // duas cópias para loop perfeito
  const track = useMemo(() => [...images, ...images], [images]);

  // duração baseada no tamanho das imagens (aprox) e velocidade
  // estimativa: cada card ~ 320px largura
  const duration = Math.max(12, Math.round((images.length * 320) / speed));

  return (
    <div className="relative overflow-hidden rounded-2xl border">
      <div
        className={`flex items-center gap-4 py-3 ${
          reduceMotion ? "overflow-x-auto snap-x snap-mandatory" : "marquee"
        }`}
        style={
          reduceMotion
            ? undefined
            : { ["--marquee-dur" as any]: `${duration}s` }
        }
        aria-roledescription="carousel"
        aria-label="Galeria de competidores da Bruxo Team"
      >
        {track.map((img, i) => (
          <figure
            key={`${img.src}-${i}`}
            className={`shrink-0 rounded-xl overflow-hidden bg-white/5 border snap-start`}
            style={{ width: 320, height }}
            title={img.alt}
          >
            <Image
              src={img.src}
              alt={img.alt ?? "Atleta da Bruxo Team em competição"}
              width={320}
              height={height}
              className="w-[320px] h-full object-cover"
              sizes="(min-width: 1024px) 320px, 70vw"
              priority={i < 3}
            />
          </figure>
        ))}
      </div>

      {/* Estilos da animação (styled-jsx) */}
      {!reduceMotion && (
        <style jsx>{`
          .marquee {
            display: flex;
            width: max-content;
            animation: marquee var(--marquee-dur) linear infinite;
          }
          .marquee:hover {
            animation-play-state: paused;
          }
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      )}
    </div>
  );
}
