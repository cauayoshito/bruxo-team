'use client';
import { Unit } from '@/data/units';
import { useState } from 'react';
import clsx from 'clsx';

export default function Schedule({units}:{units:Unit[]}){
  const [active, setActive] = useState(units[0].slug);
const current = units.find(u => u.slug === active)!;
  return (
    <section id="horarios" className="container py-16">
      <h2 className="h2">Horários de Treino</h2>
      <div className="mt-6 flex gap-2 flex-wrap">
        {units.map(u=> (
          <button key={u.slug} onClick={()=>setActive(u.slug)} className={clsx('btn', active===u.slug ? 'btn-primary' : 'btn-outline')}>{u.name}</button>
        ))}
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-[480px] w-full text-left border-separate border-spacing-y-2">
          <thead className="text-muted">
            <tr>
              <th className="px-3 py-2">Dia</th>
              <th className="px-3 py-2">Turma</th>
              <th className="px-3 py-2">Horário</th>
            </tr>
          </thead>
          <tbody>
            {current.schedule.map((s,i)=>(
              <tr key={i} className="card">
                <td className="px-3 py-3">{s.day}</td>
                <td className="px-3 py-3">{s.group}</td>
                <td className="px-3 py-3">{s.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
