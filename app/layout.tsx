import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Bruxo Team — Jiu-Jitsu",
  description: "Unidades Stiep, Itapuã e Stella. Treine com quem vive o tatame.",
  openGraph: {
    title: "Bruxo Team — Jiu-Jitsu",
    description: "Unidades Stiep, Itapuã e Stella.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
