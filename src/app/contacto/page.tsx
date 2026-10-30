import type { Metadata } from "next";
import { IconoMail, IconoPin, IconoReloj, IconoTelefono } from "@/components/Iconos";
import { IconoWhatsapp } from "@/components/IconoWhatsapp";
import { linkTelefono, linkWhatsapp, sitio } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contactá a ${sitio.nombre} en ${sitio.ciudad}, ${sitio.provincia}. WhatsApp, teléfono, mail y horarios de atención.`,
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const datos = [
    { icono: IconoPin, titulo: "Oficina", texto: `${sitio.direccion}, ${sitio.ciudad}, ${sitio.provincia}` },
    { icono: IconoTelefono, titulo: "Teléfono", texto: sitio.telefono, href: linkTelefono },
    { icono: IconoMail, titulo: "Email", texto: sitio.email, href: `mailto:${sitio.email}` },
    { icono: IconoReloj, titulo: "Horario", texto: sitio.horario },
  ];

  return (
    <>
      <section className="bg-selva text-white">
        <div className="contenedor py-16 sm:py-20">
          <p className="sobretitulo text-tierra-suave/90">Contacto</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl leading-tight font-medium sm:text-5xl">
            Hablemos de tu próxima propiedad
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Escribinos por WhatsApp, llamanos o acercate a la oficina. Te respondemos en el día.
          </p>
          <a
            href={linkWhatsapp("Hola, quería hacer una consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="boton-whatsapp mt-8 px-8 py-4 text-base"
          >
            <IconoWhatsapp /> Escribinos por WhatsApp
          </a>
        </div>
      </section>
      <div className="contenedor grid gap-8 py-14 lg:grid-cols-[1fr_1.4fr]">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {datos.map(({ icono: Icono, titulo, texto, href }) => (
            <li key={titulo} className="flex gap-4 rounded-2xl bg-white p-6 ring-1 ring-linea">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tierra-suave text-tierra">
                <Icono className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="etiqueta">{titulo}</p>
                {href ? (
                  <a href={href} className="font-semibold break-words text-selva hover:text-tierra">{texto}</a>
                ) : (
                  <p className="font-semibold text-selva">{texto}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="min-h-[360px] overflow-hidden rounded-3xl ring-1 ring-linea">
          <iframe
            title={`Ubicación de ${sitio.nombre}`}
            src={`https://www.google.com/maps?q=${sitio.ubicacion.lat},${sitio.ubicacion.lng}&z=16&output=embed`}
            className="h-full min-h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
}
