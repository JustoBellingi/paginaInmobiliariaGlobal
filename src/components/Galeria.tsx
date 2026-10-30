"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Galeria({ fotos, titulo }: { fotos: string[]; titulo: string }) {
  const [actual, setActual] = useState(0);
  const [abierta, setAbierta] = useState(false);
  const total = fotos.length;
  const mover = (d: number) => setActual((i) => (i + d + total) % total);

  useEffect(() => {
    if (!abierta) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierta(false);
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abierta]);

  const flechas = (
    <>
      <button
        type="button"
        onClick={() => mover(-1)}
        aria-label="Foto anterior"
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-marca shadow"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => mover(1)}
        aria-label="Foto siguiente"
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-marca shadow"
      >
        ›
      </button>
    </>
  );

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-linea">
        <button type="button" className="absolute inset-0" onClick={() => setAbierta(true)} aria-label="Ver foto grande">
          <Image
            src={fotos[actual]}
            alt={`${titulo} - foto ${actual + 1}`}
            fill
            preload
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover"
          />
        </button>
        {total > 1 && flechas}
        <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
          {actual + 1} / {total}
        </span>
      </div>
      {total > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {fotos.map((f, i) => (
            <button
              key={f}
              type="button"
              onClick={() => setActual(i)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg ring-2 transition ${
                i === actual ? "ring-acento" : "opacity-70 ring-transparent hover:opacity-100"
              }`}
              aria-label={`Ver foto ${i + 1}`}
            >
              <Image src={f} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {abierta && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setAbierta(false)}>
          <div className="relative h-full max-h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={fotos[actual]} alt={titulo} fill sizes="100vw" className="object-contain" />
            {total > 1 && flechas}
          </div>
          <button
            type="button"
            className="absolute right-4 top-4 text-3xl text-white"
            onClick={() => setAbierta(false)}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
