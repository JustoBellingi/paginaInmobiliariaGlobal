"use client";

import { useActionState } from "react";
import { enviarTasacion } from "@/app/tasaciones/actions";
import { linkWhatsapp } from "@/lib/config";
import { tipoLabel } from "@/lib/propiedades";

export function FormTasacion() {
  const [estado, accion, enviando] = useActionState(enviarTasacion, null);

  if (estado?.ok) {
    return (
      <div className="rounded-2xl border border-linea bg-white p-8 text-center">
        <p className="text-4xl">✓</p>
        <p className="mt-2 text-lg font-semibold text-marca">{estado.mensaje}</p>
      </div>
    );
  }

  return (
    <form action={accion} className="space-y-6 rounded-2xl border border-linea bg-white p-6 sm:p-8">
      <fieldset className="grid gap-4 sm:grid-cols-3">
        <legend className="mb-3 font-bold text-marca">Tus datos</legend>
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
        <legend className="mb-3 font-bold text-marca">Tu propiedad</legend>
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

      {estado && !estado.ok && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
          {estado.mensaje}{" "}
          <a href={linkWhatsapp("Hola, quiero tasar mi propiedad.")} className="font-semibold underline">
            Abrir WhatsApp
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="w-full rounded-full bg-marca px-6 py-3.5 font-semibold text-white transition hover:bg-marca-claro disabled:opacity-60 sm:w-auto"
      >
        {enviando ? "Enviando…" : "Pedir tasación"}
      </button>
    </form>
  );
}
