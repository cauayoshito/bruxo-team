// data/units.ts (trecho do tipo)
export type Instructor = {
  name: string;
  role?: string;
  image?: string;     // /images/... (opcional)
  bio?: string;
  instagram?: string; // @usuario (opcional)
};

export type UnitDetail = {
  slug: UnitSlug;
  name: string;
  shortName?: string;

  address?: string;
  city?: string;
  state?: string;
  phone?: string;
  whatsapp?: string;

  description?: string;
  seo?: { title: string; description: string };
  heroImage?: string;
  mapQuery?: string;

  gallery?: Array<{ src: string; alt?: string; width?: number; height?: number }>;
  featured?: boolean;

  /** NOVO: lista opcional de instrutores da unidade */
  instructors?: Instructor[];
};
