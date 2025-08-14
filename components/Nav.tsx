// components/Nav.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type HomeItem = { id: "unidades" | "horarios" | "contato"; label: string };
type PageItem = { href: string; label: string };

const itemsHome: HomeItem[] = [
  { id: "unidades", label: "Unidades" },
  { id: "horarios", label: "Horários" },
  { id: "contato",  label: "Contato" },
];

const itemsPages: PageItem[] = [
  { href: "/competicao",         label: "Competição" },
  { href: "/loja",               label: "Loja" },
  { href: "/projetos-sociais",   label: "Projetos Sociais" },
];

const toHomeHash = (id: HomeItem["id"]) =>
  ({ pathname: "/", hash: id } as const);

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between py-3">
        {/* Logo / nome do site */}
        <Link href="/" className="font-semibold text-lg">
          Bruxo Team
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {/* Anchors da home */}
          {itemsHome.map((it) => (
            <Link key={it.id} href={toHomeHash(it.id)} className="px-3 py-2 hover:underline">
              {it.label}
            </Link>
          ))}

          {/* Páginas */}
          {itemsPages.map((it) => (
            <Link key={it.href} href={it.href} className="px-3 py-2 hover:underline">
              {it.label}
            </Link>
          ))}
        </div>

        {/* Botão mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Drawer mobile */}
      {open && (
        <div className="md:hidden border-t">
          <div className="container py-2 flex flex-col">
            {/* Anchors da home */}
            {itemsHome.map((it) => (
              <Link
                key={it.id}
                href={toHomeHash(it.id)}
                className="px-2 py-3 hover:bg-white/5 rounded-lg"
                onClick={close}
              >
                {it.label}
              </Link>
            ))}

            {/* Páginas */}
            {itemsPages.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="px-2 py-3 hover:bg-white/5 rounded-lg"
                onClick={close}
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
