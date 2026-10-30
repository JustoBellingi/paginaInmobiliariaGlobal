"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { linkWhatsapp } from "@/lib/config";
import { tipoLabel, type Propiedad } from "@/lib/propiedades";
import { IconoCerrar, IconoFiltros } from "./Iconos";
import { IconoWhatsapp } from "./IconoWhatsapp";
import { TarjetaPropiedad } from "./TarjetaPropiedad";

type Ciudad = { nombre: string; barrios: string[] };
type Props = { propiedades: Propiedad[]; ciudades: Ciudad[] };

export function Catalogo({ propiedades, ciudades }: Props) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);

  const operacion = params.get("operacion") ?? "";
  const ciudad = params.get("ciudad") ?? "";
  const barrio = params.get("barrio") ?? "";
  const tipo = params.get("tipo") ?? "";
  const dormitorios = Number(params.get("dormitorios") ?? 0);
  const precioMin = Number(params.get("precioMin") ?? 0);
  const precioMax = Number(params.get("precioMax") ?? 0);
  const orden = params.get("orden") ?? "";

  function setFiltros(cambios: Record<string, string>) {
    const nuevos = new URLSearchParams(params.toString());
    for (const [nombre, valor] of Object.entries(cambios)) {
      if (valor) nuevos.set(nombre, valor);
      else nuevos.delete(nombre);
    }
    const qs = nuevos.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }
  const setFiltro = (nombre: string, valor: string) => setFiltros({ [nombre]: valor });

  const resultado = propiedades
    .filter(
      (p) =>
        (!operacion || p.operacion === operacion) &&
        (!ciudad || p.ciudad === ciudad) &&
        (!barrio || p.barrio === barrio) &&
        (!tipo || p.tipo === tipo) &&
        p.dormitorios >= dormitorios &&
        (!precioMin || p.precio >= precioMin) &&
        (!precioMax || p.precio <= precioMax),
    )
    .sort((a, b) => (orden === "menor" ? a.precio - b.precio : orden === "mayor" ? b.precio - a.precio : 0));

  const barrios = ciudades.find((c) => c.nombre === ciudad)?.barrios ?? [];
  const activos = [...params.keys()].filter((k) => k !== "orden" && params.get(k)).length;
  const moneda = operacion === "venta" ? "US$" : operacion === "alquiler" ? "$" : "";

  const titulo =
    (operacion === "venta" ? "Propiedades en venta" : operacion === "alquiler" ? "Propiedades en alquiler" : "Propiedades") +
    (ciudad ? ` en ${barrio ? `${barrio}, ` : ""}${ciudad}` : " en Misiones");

  const filtros = (
    <div className="space-y-5">
      <div>
        <span className="etiqueta">Operación</span>
        <div className="grid grid-cols-3 gap-1 rounded-lg bg-arena p-1 text-sm font-semibold">
          {[
            ["", "Todas"],
            ["venta", "Venta"],
            ["alquiler", "Alquiler"],
          ].map(([valor, label]) => (
            <button
              key={valor}
              type="button"
              onClick={() => setFiltros({ operacion: valor, precioMin: "", precioMax: "" })}
              className={`rounded-md py-2 transition ${operacion === valor ? "bg-selva text-white shadow" : "text-gris hover:bg-white"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <label className="block">
        <span className="etiqueta">Localidad</span>
        <select className="campo" value={ciudad} onChange={(e) => setFiltros({ ciudad: e.target.value, barrio: "" })}>
          <option value="">Toda Misiones</option>
          {ciudades.map((c) => (
            <option key={c.nombre}>{c.nombre}</option>
          ))}
        </select>
      </label>
      {barrios.length > 1 && (
        <label className="block">
          <span className="etiqueta">Barrio</span>
          <select className="campo" value={barrio} onChange={(e) => setFiltro("barrio", e.target.value)}>
            <option value="">Todos los barrios</option>
            {barrios.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
      )}
      <label className="block">
        <span className="etiqueta">Tipo de propiedad</span>
        <select className="campo" value={tipo} onChange={(e) => setFiltro("tipo", e.target.value)}>
          <option value="">Todos</option>
          {Object.entries(tipoLabel).map(([valor, label]) => (
            <option key={valor} value={valor}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <div>
        <span className="etiqueta">Dormitorios</span>
        <div className="grid grid-cols-5 gap-1 text-sm">
          {[0, 1, 2, 3, 4].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setFiltro("dormitorios", n ? String(n) : "")}
              className={`rounded-md border py-2 transition ${
                dormitorios === n ? "border-selva bg-selva text-white" : "border-linea bg-white hover:border-selva-claro"
              }`}
            >
              {n === 0 ? "Todos" : `${n}+`}
            </button>
          ))}
        </div>
      </div>
      <div>
        <span className="etiqueta">Precio {moneda && `(${moneda})`}</span>
        <div className="grid grid-cols-2 gap-2">
          {(
            [
              ["precioMin", precioMin, "Desde"],
              ["precioMax", precioMax, "Hasta"],
            ] as const
          ).map(([nombre, valor, placeholder]) => (
            <input
              key={`${nombre}-${valor}`}
              className="campo"
              inputMode="numeric"
              placeholder={placeholder}
              aria-label={`Precio ${placeholder.toLowerCase()}`}
              defaultValue={valor ? new Intl.NumberFormat("es-AR").format(valor) : ""}
              onBlur={(e) => setFiltro(nombre, e.target.value.replace(/\D/g, ""))}
              onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
            />
          ))}
        </div>
        {!operacion && <p className="mt-1.5 text-xs text-gris">Las ventas se publican en dólares y los alquileres en pesos.</p>}
      </div>
      {activos > 0 && (
        <button
          type="button"
          onClick={() => router.replace(pathname, { scroll: false })}
          className="w-full text-sm font-semibold text-tierra underline-offset-4 hover:underline"
        >
          Limpiar filtros
        </button>
      )}
    </div>
  );

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="titulo-seccion">{titulo}</h1>
          <p className="mt-2 text-gris">
            {resultado.length} resultado{resultado.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="flex w-full gap-2 sm:w-auto">
          <button
            type="button"
            onClick={() => setFiltrosAbiertos(true)}
            className="boton-borde flex-1 rounded-lg py-2.5 lg:hidden"
          >
            <IconoFiltros className="h-4 w-4" /> Filtros {activos > 0 && `(${activos})`}
          </button>
          <select
            className="campo flex-1 sm:w-48 sm:flex-none"
            value={orden}
            onChange={(e) => setFiltro("orden", e.target.value)}
            aria-label="Ordenar"
          >
            <option value="">Más recientes</option>
            <option value="menor">Menor precio</option>
            <option value="mayor">Mayor precio</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="hidden h-fit rounded-2xl bg-white p-6 ring-1 ring-linea lg:sticky lg:top-32 lg:block">
          <p className="mb-5 font-display text-xl text-selva">Filtrar búsqueda</p>
          {filtros}
        </aside>

        {filtrosAbiertos && (
          <div className="fixed inset-0 z-50 bg-selva/50 lg:hidden" onClick={() => setFiltrosAbiertos(false)}>
            <div
              className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-3xl bg-white p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="font-display text-xl text-selva">Filtrar búsqueda</p>
                <button type="button" onClick={() => setFiltrosAbiertos(false)} aria-label="Cerrar filtros" className="p-2">
                  <IconoCerrar className="h-6 w-6" />
                </button>
              </div>
              {filtros}
              <button type="button" onClick={() => setFiltrosAbiertos(false)} className="boton-primario mt-6 w-full">
                Ver {resultado.length} resultado{resultado.length === 1 ? "" : "s"}
              </button>
            </div>
          </div>
        )}

        <section>
          {resultado.length ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {resultado.map((p) => (
                <TarjetaPropiedad key={p.slug} propiedad={p} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-linea bg-white px-6 py-16 text-center">
              <p className="font-display text-2xl text-selva">No encontramos propiedades con esos filtros</p>
              <p className="mx-auto mt-2 max-w-md text-gris">
                Probá ampliar la búsqueda, o contanos qué buscás y te avisamos cuando ingrese algo así.
              </p>
              <a
                href={linkWhatsapp(`Hola, estoy buscando: ${titulo.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="boton-whatsapp mt-6"
              >
                <IconoWhatsapp /> Avisame por WhatsApp
              </a>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
