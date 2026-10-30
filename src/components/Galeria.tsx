"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconoCamara, IconoCerrar } from "./Iconos";

export function Galeria({ fotos, titulo }: { fotos: string[]; titulo: string }) {
  const [abierta, setAbierta] = useState<number | null>(null);
  const [actualMovil, setActualMovil] = useState(0);
  const total = fotos.length;

  useEffect(() => {
    if (abierta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierta(null);
      if (e.key === "ArrowRight") setAbierta((i) => ((i ?? 0) + 1) % total);
      if (e.key === "ArrowLeft") setAbierta((i) => ((i ?? 0) - 1 + total) % total);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [abierta, total]);

  const flecha = (dir: 1 | -1, onClick: () => void, extra = "") => (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 1 ? "Foto siguiente" : "Foto anterior"}
      className={`absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-selva shadow-lg transition hover:bg-white ${
        dir === 1 ? "right-3" : "left-3"
      } ${extra}`}
    >
      {dir === 1 ? "›" : "‹"}
    </button>
  );

  return (
    <>
      {/* Celular: carrusel deslizable */}
      <div className="relative -mx-4 sm:mx-0 md:hidden">
        <div
          onScroll={(e) => setActualMovil(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
          className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] sm:rounded-2xl"
        >
          {fotos.map((f, i) => (
            <button
              key={f}
              type="button"
              onClick={() => setAbierta(i)}
              className="relative aspect-[4/3] w-full shrink-0 snap-center bg-crema"
            >
              <Image src={f} alt={`${titulo} - foto ${i + 1}`} fill preload={i === 0} sizes="100vw" className="object-cover" />
            </button>
          ))}
        </div>
        <span className="absolute right-3 bottom-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
          {actualMovil + 1} / {total}
        </span>
      </div>

      {/* Escritorio: mosaico */}
      <div className="relative hidden h-[520px] gap-2 overflow-hidden rounded-3xl md:grid md:grid-cols-4 md:grid-rows-2">
        {fotos.slice(0, 5).map((f, i) => (
          <button
            key={f}
            type="button"
            onClick={() => setAbierta(i)}
            className={`group relative overflow-hidden bg-crema ${
              i === 0 ? (total === 1 ? "col-span-4 row-span-2" : "col-span-2 row-span-2") : ""
            } ${total === 2 && i === 1 ? "col-span-2 row-span-2" : ""} ${total === 3 && i > 0 ? "col-span-2" : ""} ${
              total === 4 && i === 3 ? "col-span-2" : ""
            }`}
          >
            <Image
              src={f}
              alt={`${titulo} - foto ${i + 1}`}
              fill
              preload={i === 0}
              sizes={i === 0 ? "50vw" : "25vw"}
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </button>
        ))}
        <button
          type="button"
          onClick={() => setAbierta(0)}
          className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-selva shadow-lg hover:bg-arena"
        >
          <IconoCamara className="h-4 w-4" /> Ver las {total} fotos
        </button>
      </div>

      {abierta !== null && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95" onClick={() => setAbierta(null)}>
          <div className="flex items-center justify-between p-4 text-sm text-white/80">
            <span>
              {abierta + 1} / {total}
            </span>
            <button type="button" onClick={() => setAbierta(null)} aria-label="Cerrar" className="p-2 text-white">
              <IconoCerrar className="h-7 w-7" />
            </button>
          </div>
          <div className="relative mx-auto w-full max-w-6xl flex-1" onClick={(e) => e.stopPropagation()}>
            <Image src={fotos[abierta]} alt={`${titulo} - foto ${abierta + 1}`} fill sizes="100vw" className="object-contain" />
            {total > 1 && (
              <>
                {flecha(-1, () => setAbierta((abierta - 1 + total) % total))}
                {flecha(1, () => setAbierta((abierta + 1) % total))}
              </>
            )}
          </div>
          <div className="flex justify-center gap-2 overflow-x-auto p-4" onClick={(e) => e.stopPropagation()}>
            {fotos.map((f, i) => (
              <button
                key={f}
                type="button"
                onClick={() => setAbierta(i)}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md ring-2 ${
                  i === abierta ? "ring-tierra" : "opacity-50 ring-transparent hover:opacity-100"
                }`}
                aria-label={`Ver foto ${i + 1}`}
              >
                <Image src={f} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
