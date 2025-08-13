"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

const items = [
  { id: "unidades", label: "Unidades" },
  { id: "horarios", label: "Horários" },
  { id: "projetos", label: "Projetos Sociais" },
  { id: "contato",  label: "Contato" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Usamos sempre UrlObject para satisfazer o typedRoutes
  const toHomeHash = (id: string) => ({ pathname: "/", hash: id } as const);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-white/5">
      <div className="container mx-auto h-16 px-4 flex items-center justify-between">
        <Link href={{ pathname: "/" }} className="flex items-center gap-3" prefetch={false}>
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white">
            <Image src="/logo-bruxo.png" alt="Bruxo Team" width={26} height={26} priority />
          </span>
          <span className="font-extrabold tracking-wide">BRUXO TEAM</span>
        </Link>

        {/* menu desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {items.map((it) => (
            <Link
              key={it.id}
              href={toHomeHash(it.id)}
              prefetch={false}
              className="text-sm text-white/80 hover:text-white"
            >
              {it.label}
            </Link>
          ))}
        </nav>

        {/* botão mobile */}
        <button
          className="md:hidden p-2 rounded-md border border-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* menu mobile */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-background/95">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            {items.map((it) => (
              <Link
                key={it.id}
                href={toHomeHash(it.id)}
                prefetch={false}
                className="text-sm"
                onClick={() => setOpen(false)}
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
