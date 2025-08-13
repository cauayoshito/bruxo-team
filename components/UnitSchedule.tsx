// components/UnitSchedule.tsx
import { UnitDetail } from "@/data/units";

const DAY_LABEL: Record<string, string> = {
  seg: "Seg",
  ter: "Ter",
  qua: "Qua",
  qui: "Qui",
  sex: "Sex",
  sab: "Sáb",
};

export default function UnitSchedule({ unit }: { unit: UnitDetail }) {
  const rows = unit.schedule;
  if (!rows?.length) return null;

  return (
    <section id="horarios" className="container py-12">
      <h2 className="h2">Horários</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm table-auto">
          <thead>
            <tr className="text-left">
              <th className="py-3 pr-4">Dia</th>
              <th className="py-3 pr-4">Turma</th>
              <th className="py-3">Horário</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-white/10">
                <td className="py-3 pr-4">{DAY_LABEL[r.day] ?? r.day}</td>
                <td className="py-3 pr-4">{r.label}</td>
                <td className="py-3">{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
