import Image from "next/image";
import { UnitDetail } from "@/data/units";

export default function UnitInstructors({ unit }: { unit: UnitDetail }) {
  if (!unit.instructors?.length) return null;
  return (
    <section className="container py-12">
      <h2 className="h2">Mestres & Instrutores</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {unit.instructors.map((p) => (
          <div key={p.name} className="card p-4">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-white/5">
              <Image
                src={p.photo}
                alt={p.name}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-3 font-semibold">{p.name}</h3>
            <p className="text-sm opacity-80">{p.role}</p>
            {p.bio && <p className="p mt-2">{p.bio}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
