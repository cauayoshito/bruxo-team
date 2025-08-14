// data/units.ts
export type DayKey = 'seg' | 'ter' | 'qua' | 'qui' | 'sex' | 'sab';

// ✅ nomes oficiais para as aulas
export type ClassLabel =
  | 'Jiu-Jitsu (com kimono)'
  | 'No-Gi (sem kimono)'
  | 'Mista'
  | 'Kids'
  | 'Feminino'
  | 'Competição'
  | '60+'
  | 'Open Mat';

export type ScheduleRow = {
  day: DayKey;
  label: ClassLabel;   // ← agora só aceita os nomes padronizados
  time: string;        // "06:00" ou "19:00–20:30"
};
