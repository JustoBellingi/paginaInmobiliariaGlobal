import type { Metadata } from "next";
import { FormTasacion } from "@/components/FormTasacion";
import { IconoCheck } from "@/components/Iconos";

export const metadata: Metadata = {
  title: "Tasación de propiedades en Misiones",
  description:
    "¿Querés vender o alquilar tu propiedad en Posadas o en cualquier punto de Misiones? Pedí una tasación profesional sin cargo.",
  alternates: { canonical: "/tasaciones" },
};

const pasos = [
  ["Completás el formulario", "Te lleva dos minutos y no te compromete a nada."],
  ["Visitamos la propiedad", "Un asesor coordina con vos el día y el horario."],
  ["Recibís la tasación", "Con el valor de mercado, comparables de la zona y una estrategia para venderla o alquilarla."],
];

export default function TasacionesPage() {
  return (
    <>
      <section className="bg-selva text-white">
        <div className="contenedor py-16 sm:py-20">
          <p className="sobretitulo text-tierra-suave/90">Tasación sin cargo</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl leading-tight font-medium sm:text-5xl">
            ¿Cuánto vale tu propiedad hoy?
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Casas, departamentos, terrenos y chacras en Posadas y toda Misiones. Valor real de mercado, sin compromiso.
          </p>
        </div>
      </section>
      <div className="contenedor grid gap-12 py-14 lg:grid-cols-[1fr_1.7fr]">
        <div>
          <h2 className="font-display text-2xl text-selva">Cómo funciona</h2>
          <ol className="mt-6 space-y-6">
            {pasos.map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tierra font-display text-lg text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-selva">{t}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-gris">{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 rounded-2xl bg-crema/70 p-6">
            <p className="font-bold text-selva">Tasamos para</p>
            <ul className="mt-3 space-y-2 text-sm">
              {["Venta", "Alquiler", "Sucesiones y divisiones", "Presentaciones bancarias"].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <IconoCheck className="h-4 w-4 text-tierra" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <FormTasacion />
      </div>
    </>
  );
}
