import type { Metadata } from "next";
import { fotosLocalidades } from "@/lib/localidades";

export const metadata: Metadata = {
  title: "Créditos",
  robots: { index: false },
};

export default function CreditosPage() {
  const creditos = Object.entries(fotosLocalidades).flatMap(([ciudad, f]) => (f.credito ? [[ciudad, f.credito] as const] : []));

  return (
    <div className="contenedor max-w-3xl py-16">
      <h1 className="titulo-seccion">Créditos</h1>
      <p className="mt-4 text-gris">Fotos de localidades obtenidas de Wikimedia Commons, usadas según sus licencias.</p>
      <ul className="mt-8 divide-y divide-linea rounded-2xl bg-white px-5 ring-1 ring-linea">
        {creditos.map(([ciudad, c]) => (
          <li key={ciudad} className="flex flex-wrap justify-between gap-2 py-4 text-sm">
            <span className="font-semibold text-marino">{ciudad}</span>
            <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-gris hover:text-petroleo hover:underline">
              {c.autor} · {c.licencia}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
