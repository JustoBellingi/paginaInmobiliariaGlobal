import type { Metadata } from "next";
import { Suspense } from "react";
import { Catalogo } from "@/components/Catalogo";
import { getZonas, propiedades } from "@/lib/propiedades";

export const metadata: Metadata = {
  title: "Propiedades en venta y alquiler",
  description: "Buscá casas, departamentos y PH en venta y alquiler. Filtrá por zona, precio y dormitorios.",
  alternates: { canonical: "/propiedades" },
};

export default function PropiedadesPage() {
  return (
    <div className="contenedor py-10">
      <h1 className="font-display text-3xl font-semibold text-marca sm:text-4xl">Propiedades</h1>
      <p className="mt-2 text-gris">Filtrá por operación, zona, precio y dormitorios.</p>
      <div className="mt-8">
        <Suspense fallback={<p className="text-gris">Cargando propiedades…</p>}>
          <Catalogo propiedades={propiedades} zonas={getZonas()} />
        </Suspense>
      </div>
    </div>
  );
}
