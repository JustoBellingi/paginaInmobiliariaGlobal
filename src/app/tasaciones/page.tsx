import type { Metadata } from "next";
import { FormTasacion } from "@/components/FormTasacion";

export const metadata: Metadata = {
  title: "Tasación online de tu propiedad",
  description: "¿Querés vender o alquilar? Pedí la tasación de tu propiedad online y te contactamos.",
  alternates: { canonical: "/tasaciones" },
};

export default function TasacionesPage() {
  return (
    <div className="contenedor grid gap-10 py-12 lg:grid-cols-[1fr_1.6fr]">
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-acento-oscuro">Tasación online</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-marca sm:text-4xl">
          ¿Cuánto vale tu propiedad?
        </h1>
        <p className="mt-4 text-gris">
          Contanos sobre tu casa, departamento o terreno y un asesor te contacta para coordinar la visita y darte
          una tasación profesional, sin compromiso.
        </p>
        <ol className="mt-8 space-y-4">
          {[
            ["Completás el formulario", "Te lleva dos minutos."],
            ["Te llamamos", "Coordinamos una visita a la propiedad."],
            ["Recibís la tasación", "Con el valor de mercado y cómo la publicaríamos."],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-acento font-bold text-marca">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold">{t}</p>
                <p className="text-sm text-gris">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <FormTasacion />
    </div>
  );
}
