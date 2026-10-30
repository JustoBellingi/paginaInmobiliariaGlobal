import Image from "next/image";
import Link from "next/link";
import { TarjetaPropiedad } from "@/components/TarjetaPropiedad";
import { linkWhatsapp } from "@/lib/config";
import { getZonas, propiedades } from "@/lib/propiedades";

export default function Home() {
  const destacadas = propiedades.filter((p) => p.destacada).slice(0, 6);
  const zonas = getZonas();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-marca">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=70"
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-10 object-cover opacity-35"
        />
        <div className="contenedor py-20 sm:py-28">
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Encontrá la propiedad que estás buscando
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            Casas, departamentos y PH en venta y alquiler. Buscá, mirá las fotos y escribinos por WhatsApp.
          </p>

          <form
            action="/propiedades"
            className="mt-8 grid max-w-3xl gap-3 rounded-2xl bg-white p-4 shadow-xl sm:grid-cols-[1fr_1fr_1fr_auto]"
          >
            <label>
              <span className="etiqueta">Operación</span>
              <select name="operacion" className="campo">
                <option value="venta">Comprar</option>
                <option value="alquiler">Alquilar</option>
              </select>
            </label>
            <label>
              <span className="etiqueta">Zona</span>
              <select name="zona" className="campo">
                <option value="">Todas</option>
                {zonas.map((z) => (
                  <option key={z}>{z}</option>
                ))}
              </select>
            </label>
            <label>
              <span className="etiqueta">Dormitorios</span>
              <select name="dormitorios" className="campo">
                <option value="">Todos</option>
                <option value="1">1 o más</option>
                <option value="2">2 o más</option>
                <option value="3">3 o más</option>
                <option value="4">4 o más</option>
              </select>
            </label>
            <button className="self-end rounded-lg bg-acento px-6 py-2.5 font-semibold text-marca transition hover:bg-acento-oscuro hover:text-white">
              Buscar
            </button>
          </form>
        </div>
      </section>

      <section className="contenedor mt-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold text-marca">Propiedades destacadas</h2>
          <Link href="/propiedades" className="shrink-0 text-sm font-semibold text-marca-claro hover:underline">
            Ver todas →
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destacadas.map((p) => (
            <TarjetaPropiedad key={p.slug} propiedad={p} />
          ))}
        </div>
      </section>

      <section className="contenedor mt-20 grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl bg-marca p-8 text-white sm:p-10">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">¿Querés vender o alquilar tu propiedad?</h2>
          <p className="mt-3 text-white/80">Pedí una tasación online. Te contactamos para coordinar la visita.</p>
          <Link
            href="/tasaciones"
            className="mt-6 inline-block rounded-full bg-acento px-6 py-3 font-semibold text-marca transition hover:bg-white"
          >
            Tasar mi propiedad
          </Link>
        </div>
        <div className="rounded-3xl border border-linea bg-white p-8 sm:p-10">
          <h2 className="font-display text-2xl font-semibold text-marca sm:text-3xl">¿No encontrás lo que buscás?</h2>
          <p className="mt-3 text-gris">Contanos qué necesitás y te avisamos cuando ingrese una propiedad así.</p>
          <a
            href={linkWhatsapp("Hola, estoy buscando una propiedad con estas características: ")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-[#25d366] px-6 py-3 font-semibold text-white transition hover:brightness-95"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
