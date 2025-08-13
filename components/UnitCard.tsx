import { Unit } from '@/data/units';
import { waLink } from '@/lib/whatsapp';

export default function UnitCard({unit}:{unit:Unit}){
  return (
    <div className="card p-5 flex flex-col gap-4">
      <div className="aspect-video rounded-xl bg-white/5" />
      <div className="flex-1">
        <h3 className="h3">{unit.name}</h3>
        <p className="p mt-2">{unit.address}</p>
        <div className="mt-4">
          <iframe
            className="w-full h-40 rounded-xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(unit.mapQuery)}&output=embed`}
          />
        </div>
      </div>
      <a className="btn-primary mt-2 text-center" href={waLink(unit.whatsapp, `Quero treinar na ${unit.name}`)}>Inscreva-se nessa unidade</a>
    </div>
  );
}
