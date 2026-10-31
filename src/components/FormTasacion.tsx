"use client";

import { useActionState, useEffect, useRef } from "react";
import { enviarTasacion } from "@/app/tasaciones/actions";
import { tipoLabel } from "@/lib/propiedades";
import { IconoCheck } from "./Iconos";
import { IconoWhatsapp } from "./IconoWhatsapp";

export function FormTasacion() {
  const [estado, accion, enviando] = useActionState(enviarTasacion, null);
  const resultado = useRef<HTMLDivElement>(null);

  // El formulario es largo: al terminar, llevamos la vista al mensaje de resultado.
  useEffect(() => {
    resultado.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [estado]);

  if (estado?.ok || estado?.whatsapp) {
    return (
      <div ref={resultado} className="h-fit rounded-3xl bg-white p-8 text-center shadow-[0_20px_50px_-25px_rgba(25,33,44,0.3)] ring-1 ring-linea sm:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-petroleo-suave text-petroleo">
          <IconoCheck className="h-7 w-7" />
        </span>
        <p className="mt-5 font-display text-2xl text-marino">
          {estado.ok ? "¡Gracias! Recibimos tus datos" : "Ya casi está"}
        </p>
        <p className="mx-auto mt-2 max-w-md text-gris">{estado.mensaje}</p>
        {estado.whatsapp && (
          <a href={estado.whatsapp} target="_blank" rel="noopener noreferrer" className="boton-whatsapp mt-7 px-8 py-3.5">
            <IconoWhatsapp /> Enviar por WhatsApp
          </a>
        )}
      </div>
    );
  }

  return (
    <form action={accion} className="space-y-6 rounded-3xl bg-white p-6 shadow-[0_20px_50px_-25px_rgba(15,47,38,0.3)] ring-1 ring-linea sm:p-10">
      <fieldset className="grid gap-4 sm:grid-cols-3">
        <legend className="mb-4 font-display text-xl text-marino">Tus datos</legend>
        <label>
          <span className="etiqueta">Nombre *</span>
          <input name="nombre" required className="campo" autoComplete="name" />
        </label>
        <label>
          <span className="etiqueta">Teléfono *</span>
          <input name="telefono" required type="tel" className="campo" autoComplete="tel" />
        </label>
        <label>
          <span className="etiqueta">Email</span>
          <input name="email" type="email" className="campo" autoComplete="email" />
        </label>
      </fieldset>

      <fieldset className="grid gap-4 sm:grid-cols-2">
        <legend className="mb-4 font-display text-xl text-marino">Tu propiedad</legend>
        <label>
          <span className="etiqueta">Querés</span>
          <select name="operacion" className="campo" defaultValue="Vender">
            <option>Vender</option>
            <option>Alquilar</option>
            <option>Vender o alquilar</option>
          </select>
        </label>
        <label>
          <span className="etiqueta">Tipo</span>
          <select name="tipo" className="campo">
            {Object.values(tipoLabel).map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label>
          <span className="etiqueta">Dirección *</span>
          <input name="direccion" required className="campo" placeholder="Calle, número, localidad" />
        </label>
        <label>
          <span className="etiqueta">Zona / barrio</span>
          <input name="zona" className="campo" />
        </label>
        <div className="grid grid-cols-3 gap-3 sm:col-span-2 sm:grid-cols-5">
          {[
            ["ambientes", "Ambientes"],
            ["dormitorios", "Dormit."],
            ["banos", "Baños"],
            ["superficie", "m²"],
            ["antiguedad", "Antigüedad"],
          ].map(([name, label]) => (
            <label key={name}>
              <span className="etiqueta">{label}</span>
              <input name={name} className="campo" inputMode={name === "antiguedad" ? "text" : "numeric"} />
            </label>
          ))}
        </div>
        <label className="sm:col-span-2">
          <span className="etiqueta">Comentarios</span>
          <textarea name="comentarios" rows={4} className="campo" placeholder="Estado, mejoras, cochera, pileta, cuándo podemos visitarla…" />
        </label>
      </fieldset>

      <input name="web" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {estado && !estado.ok && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{estado.mensaje}</p>}

      <button
        type="submit"
        disabled={enviando}
        className="boton-petroleo w-full px-8 py-3.5 disabled:opacity-60 sm:w-auto"
      >
        {enviando ? "Enviando…" : "Pedir tasación"}
      </button>
    </form>
  );
}
