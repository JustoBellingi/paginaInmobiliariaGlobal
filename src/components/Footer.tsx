import Link from "next/link";
import { linkWhatsapp, sitio } from "@/lib/config";

export function Footer() {
  return (
    <footer className="mt-20 bg-marca text-white/80">
      <div className="contenedor grid gap-8 py-12 text-sm sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-white">{sitio.nombre}</p>
          <p className="mt-2 max-w-xs">{sitio.descripcion}</p>
        </div>
        <div className="space-y-1">
          <p className="mb-2 font-semibold text-white">Contacto</p>
          <p>{sitio.direccion}</p>
          <p>{sitio.horario}</p>
          <p>
            <a href={`tel:${sitio.telefono.replace(/\D/g, "")}`} className="hover:text-white">
              {sitio.telefono}
            </a>
          </p>
          <p>
            <a href={`mailto:${sitio.email}`} className="hover:text-white">
              {sitio.email}
            </a>
          </p>
        </div>
        <div className="space-y-1">
          <p className="mb-2 font-semibold text-white">Accesos</p>
          <p><Link href="/propiedades?operacion=venta" className="hover:text-white">Propiedades en venta</Link></p>
          <p><Link href="/propiedades?operacion=alquiler" className="hover:text-white">Propiedades en alquiler</Link></p>
          <p><Link href="/tasaciones" className="hover:text-white">Tasación online</Link></p>
          <p><a href={linkWhatsapp("Hola, quería hacer una consulta.")} className="hover:text-white">WhatsApp</a></p>
          <p><a href={sitio.instagram} className="hover:text-white">Instagram</a></p>
        </div>
      </div>
    </footer>
  );
}
