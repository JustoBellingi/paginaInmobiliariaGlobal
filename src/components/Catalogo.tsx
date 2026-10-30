"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { tipoLabel, type Propiedad } from "@/lib/propiedades";
import { TarjetaPropiedad } from "./TarjetaPropiedad";

type Props = { propiedades: Propiedad[]; zonas: string[] };

export function Catalogo({ propiedades, zonas }: Props) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const operacion = params.get("operacion") ?? "";
  const zona = params.get("zona") ?? "";
  const tipo = params.get("tipo") ?? "";
  const dormitorios = Number(params.get("dormitorios") ?? 0);
  const precioMin = Number(params.get("precioMin") ?? 0);
  const precioMax = Number(params.get("precioMax") ?? 0);
  const orden = params.get("orden") ?? "";

  function setFiltro(nombre: string, valor: string) {
    const nuevos = new URLSearchParams(params.toString());
    if (valor) nuevos.set(nombre, valor);
    else nuevos.delete(nombre);
    router.replace(`${pathname}?${nuevos.toString()}`, { scroll: false });
  }

  const resultado = propiedades
    .filter(
      (p) =>
        (!operacion || p.operacion === operacion) &&
        (!zona || p.zona === zona) &&
        (!tipo || p.tipo === tipo) &&
        p.dormitorios >= dormitorios &&
        (!precioMin || p.precio >= precioMin) &&
        (!precioMax || p.precio <= precioMax),
    )
    .sort((a, b) => (orden === "menor" ? a.precio - b.precio : orden === "mayor" ? b.precio - a.precio : 0));

  const hayFiltros = params.size > 0;
  const moneda = operacion === "venta" ? "US$" : operacion === "alquiler" ? "$" : "";

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <aside className="h-fit space-y-4 rounded-2xl border border-linea bg-white p-5 lg:sticky lg:top-24">
        <div>
          <span className="etiqueta">Operación</span>
          <div className="grid grid-cols-3 gap-1 rounded-lg bg-fondo p-1 text-sm font-medium">
            {[
              ["", "Todas"],
              ["venta", "Venta"],
              ["alquiler", "Alquiler"],
            ].map(([valor, label]) => (
              <button
                key={valor}
                type="button"
                onClick={() => setFiltro("operacion", valor)}
                className={`rounded-md py-1.5 transition ${
                  operacion === valor ? "bg-marca text-white shadow" : "hover:bg-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <label className="block">
          <span className="etiqueta">Zona</span>
          <select className="campo" value={zona} onChange={(e) => setFiltro("zona", e.target.value)}>
            <option value="">Todas las zonas</option>
            {zonas.map((z) => (
              <option key={z}>{z}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="etiqueta">Tipo</span>
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
                className={`rounded-md border py-1.5 transition ${
                  dormitorios === n ? "border-marca bg-marca text-white" : "border-linea hover:border-marca-claro"
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
            <input
              key={`min-${precioMin}`}
              className="campo"
              inputMode="numeric"
              placeholder="Mínimo"
              defaultValue={precioMin || ""}
              onBlur={(e) => setFiltro("precioMin", e.target.value.replace(/\D/g, ""))}
              onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
            />
            <input
              key={`max-${precioMax}`}
              className="campo"
              inputMode="numeric"
              placeholder="Máximo"
              defaultValue={precioMax || ""}
              onBlur={(e) => setFiltro("precioMax", e.target.value.replace(/\D/g, ""))}
              onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
            />
          </div>
          {!operacion && (
            <p className="mt-1 text-xs text-gris">Elegí venta (US$) o alquiler ($) para comparar precios.</p>
          )}
        </div>
        {hayFiltros && (
          <button
            type="button"
            onClick={() => router.replace(pathname, { scroll: false })}
            className="w-full text-sm font-semibold text-marca-claro underline-offset-4 hover:underline"
          >
            Limpiar filtros
          </button>
        )}
      </aside>

      <section>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-gris">
            {resultado.length} propiedad{resultado.length === 1 ? "" : "es"}
          </p>
          <select
            className="campo w-auto"
            value={orden}
            onChange={(e) => setFiltro("orden", e.target.value)}
            aria-label="Ordenar"
          >
            <option value="">Más recientes</option>
            <option value="menor">Menor precio</option>
            <option value="mayor">Mayor precio</option>
          </select>
        </div>
        {resultado.length ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {resultado.map((p) => (
              <TarjetaPropiedad key={p.slug} propiedad={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-linea bg-white p-10 text-center">
            <p className="font-semibold">No encontramos propiedades con esos filtros.</p>
            <p className="mt-1 text-sm text-gris">Probá ampliar la búsqueda o escribinos y te avisamos cuando entre algo.</p>
          </div>
        )}
      </section>
    </div>
  );
}
