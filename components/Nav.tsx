// components/Nav.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

type HomeItem = { id: "unidades" | "horarios" | "contato"; label: string };
type PageItem = { href: Route; label: string };

const itemsHome: HomeItem[] = [
  { id: "unidades", label: "Unidades" },
  { id: "horarios", label: "Horários" },
  { id: "contato",  label: "Contato" },
];

const itemsPages: PageItem[] = [
  { href: "/competicao" as Route,       label: "Competição" },
  { href: "/loja" as Route,             label: "Loja" },
  { href: "/projetos-sociais" as Route, label: "Projetos Sociais" },
  { href: "/faq" as Route,              label: "FAQ" },
];

const toHomeHash = (id: HomeItem["id"]) =>
  ({ pathname: "/", hash: id } as const);

// LINKS DE CONTATO (troque aqui se quiser outro IG/WhatsApp)
const INSTAGRAM_URL = "https://instagram.com/bruxoteam_matriz";
const WHATSAPP_URL  = "https://wa.me/5571991843706";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-bruxo.png"
            alt="Logo Bruxo Team"
            width={40}
            height={40}
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {/* Unidades + Horários */}
          {itemsHome
            .filter((it) => it.id !== "contato")
            .map((it) => (
              <Link key={it.id} href={toHomeHash(it.id)} className="px-3 py-2 hover:underline">
                {it.label}
              </Link>
            ))}

          {/* Contato + ícones */}
          <div className="flex items-center">
            <Link href={toHomeHash("contato")} className="px-3 py-2 hover:underline">
              Contatos
            </Link>
            <div className="flex items-center gap-2 pl-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition"
                title="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition"
                title="WhatsApp"
              >
                {/* Ícone WhatsApp (SVG puro) */}
                <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M19.11 17.53c-.28-.14-1.64-.81-1.9-.9-.26-.09-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.17.18-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.49-.64-.49-.16 0-.35-.02-.54-.02s-.49.07-.75.35c-.26.28-1 1-1 2.44 0 1.44 1.02 2.83 1.16 3.03.14.19 2 3.05 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z"/>
                  <path d="M26.67 5.33A13.3 13.3 0 0 0 16 2.67C8.64 2.67 2.67 8.64 2.67 16c0 2.33.61 4.51 1.76 6.45L2.67 29.33l7.02-1.71A13.26 13.26 0 0 0 16 29.33C23.36 29.33 29.33 23.36 29.33 16c0-3.55-1.38-6.88-3.66-9.17zM16 26.67c-2.2 0-4.24-.64-5.97-1.85l-.42-.28-4.16 1.02 1.11-4.06-.29-.42a10.65 10.65 0 1 1 9.73 5.59z"/>
                </svg>
              </a>
            </div>
          </div>

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
            {/* Unidades + Horários */}
            {itemsHome
              .filter((it) => it.id !== "contato")
              .map((it) => (
                <Link
                  key={it.id}
                  href={toHomeHash(it.id)}
                  className="px-2 py-3 hover:bg-white/5 rounded-lg"
                  onClick={close}
                >
                  {it.label}
                </Link>
              ))}

            {/* Contatos com ícones */}
            <div className="px-2 py-3 rounded-lg">
              <Link
                href={toHomeHash("contato")}
                className="block mb-2 font-medium"
                onClick={close}
              >
                Contatos
              </Link>
              <div className="flex items-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition"
                  title="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition"
                  title="WhatsApp"
                >
                  <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M19.11 17.53c-.28-.14-1.64-.81-1.9-.9-.26-.09-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.17.18-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.49-.64-.49-.16 0-.35-.02-.54-.02s-.49.07-.75.35c-.26.28-1 1-1 2.44 0 1.44 1.02 2.83 1.16 3.03.14.19 2 3.05 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z"/>
                    <path d="M26.67 5.33A13.3 13.3 0 0 0 16 2.67C8.64 2.67 2.67 8.64 2.67 16c0 2.33.61 4.51 1.76 6.45L2.67 29.33l7.02-1.71A13.26 13.26 0 0 0 16 29.33C23.36 29.33 29.33 23.36 29.33 16c0-3.55-1.38-6.88-3.66-9.17zM16 26.67c-2.2 0-4.24-.64-5.97-1.85l-.42-.28-4.16 1.02 1.11-4.06-.29-.42a10.65 10.65 0 1 1 9.73 5.59z"/>
                  </svg>
                </a>
              </div>
            </div>

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
