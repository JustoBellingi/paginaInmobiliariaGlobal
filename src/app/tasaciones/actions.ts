"use server";

import { sitio } from "@/lib/config";

export type EstadoTasacion = { ok: boolean; mensaje: string } | null;

const campos = {
  nombre: "Nombre",
  telefono: "Teléfono",
  email: "Email",
  operacion: "Quiere",
  tipo: "Tipo de propiedad",
  direccion: "Dirección",
  zona: "Zona / barrio",
  ambientes: "Ambientes",
  dormitorios: "Dormitorios",
  banos: "Baños",
  superficie: "Superficie (m²)",
  antiguedad: "Antigüedad",
  comentarios: "Comentarios",
} as const;

const escapar = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function enviarTasacion(_prev: EstadoTasacion, form: FormData): Promise<EstadoTasacion> {
  // Campo trampa para bots: las personas no lo ven.
  if (form.get("web")) return { ok: true, mensaje: "¡Gracias! Te contactamos a la brevedad." };

  const datos = Object.fromEntries(
    Object.keys(campos).map((k) => [k, String(form.get(k) ?? "").trim().slice(0, 2000)]),
  ) as Record<keyof typeof campos, string>;

  if (!datos.nombre || !datos.telefono || !datos.direccion) {
    return { ok: false, mensaje: "Completá nombre, teléfono y dirección de la propiedad." };
  }

  const filas = (Object.keys(campos) as (keyof typeof campos)[])
    .filter((k) => datos[k])
    .map((k) => `<tr><td style="padding:4px 12px 4px 0;color:#5b6470">${campos[k]}</td><td><b>${escapar(datos[k])}</b></td></tr>`)
    .join("");

  const apiKey = process.env.RESEND_API_KEY;
  const destino = process.env.TASACION_EMAIL ?? sitio.email;

  if (!apiKey) {
    console.warn("[tasación] Falta RESEND_API_KEY: el pedido no se envió por mail.", datos);
    return { ok: false, mensaje: "No pudimos enviar el formulario. Escribinos por WhatsApp y lo vemos enseguida." };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.TASACION_FROM ?? `${sitio.nombre} <onboarding@resend.dev>`,
      to: [destino],
      reply_to: datos.email || undefined,
      subject: `Nueva tasación: ${datos.direccion} (${datos.nombre})`,
      html: `<h2>Pedido de tasación desde la web</h2><table>${filas}</table>`,
    }),
  });

  if (!res.ok) {
    console.error("[tasación] Error de Resend", res.status, await res.text());
    return { ok: false, mensaje: "No pudimos enviar el formulario. Escribinos por WhatsApp y lo vemos enseguida." };
  }

  return { ok: true, mensaje: "¡Gracias! Recibimos los datos y te contactamos a la brevedad." };
}
