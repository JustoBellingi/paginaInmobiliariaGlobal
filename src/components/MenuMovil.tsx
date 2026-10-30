"use client";

import Link from "next/link";
import { useState } from "react";
import { linkTelefono, linkWhatsapp, sitio } from "@/lib/config";
import { IconoCerrar, IconoMenu, IconoTelefono } from "./Iconos";
import { IconoWhatsapp } from "./IconoWhatsapp";

const enlaces = [
  { href: "/propiedades?operacion=venta", label: "Comprar" },
  { href: "/propiedades?operacion=alquiler", label: "Alquilar" },
  { href: "/propiedades", label: "Todas las propiedades" },
  { href: "/tasaciones", label: "Tasá tu propiedad" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function MenuMovil() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setAbierto(true)}
        className="flex h-11 w-11 items-center justify-center rounded-full text-selva hover:bg-arena"
        aria-label="Abrir menú"
        aria-expanded={abierto}
      >
        <IconoMenu className="h-6 w-6" />
      </button>
      {abierto && (
        <div className="fixed inset-0 z-50 bg-selva/50" onClick={() => setAbierto(false)}>
          <nav
            className="ml-auto flex h-full w-[min(88vw,360px)] flex-col bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setAbierto(false)}
              className="ml-auto flex h-11 w-11 items-center justify-center rounded-full hover:bg-arena"
              aria-label="Cerrar menú"
            >
              <IconoCerrar className="h-6 w-6" />
            </button>
            <ul className="mt-4 divide-y divide-linea">
              {enlaces.map((e) => (
                <li key={e.href}>
                  <Link
                    href={e.href}
                    onClick={() => setAbierto(false)}
                    className="block py-4 font-display text-xl text-selva"
                  >
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-3">
              <a href={linkWhatsapp("Hola, quería hacer una consulta.")} className="boton-whatsapp w-full">
                <IconoWhatsapp /> WhatsApp
              </a>
              <a href={linkTelefono} className="boton-borde w-full">
                <IconoTelefono className="h-4 w-4" /> {sitio.telefono}
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
