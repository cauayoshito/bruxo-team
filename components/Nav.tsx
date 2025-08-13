'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const nav = [
  { href: "#unidades", label: "Unidades" },
  { href: "#horarios", label: "Horários" },
  { href: "#projetos", label: "Projetos Sociais" },
  { href: "#contato", label: "Contato" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-white/5">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-extrabold text-xl tracking-wide">BRUXO TEAM</Link>
        <nav className="hidden md:flex gap-6">
          {nav.map(i => (
            <a key={i.href} href={i.href} className="text-sm text-muted hover:text-white">{i.label}</a>
          ))}
        </nav>
        <div className="md:hidden">
          <button className="btn btn-outline px-3" onClick={()=>setOpen(v=>!v)} aria-label="Menu"><Menu className="h-5 w-5"/></button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5">
          <div className="container py-3 flex flex-col gap-3">
            {nav.map(i => <a key={i.href} href={i.href} onClick={()=>setOpen(false)} className="text-sm">{i.label}</a>)}
          </div>
        </div>
      )}
    </header>
  );
}
