import type { Metadata } from "next";
import { Suspense } from "react";
import { Catalogo } from "@/components/Catalogo";
import { TarjetaPropiedad } from "@/components/TarjetaPropiedad";
import { getCiudades, propiedades } from "@/lib/propiedades";

export const metadata: Metadata = {
  title: "Propiedades en venta y alquiler en Misiones",
  description:
    "Casas, departamentos, terrenos y chacras en venta y alquiler en Posadas, Oberá, Puerto Iguazú y toda Misiones. Filtrá por localidad, precio y dormitorios.",
  alternates: { canonical: "/propiedades" },
};

export default function PropiedadesPage() {
  return (
    <div className="contenedor py-12">
      {/* El fallback es el listado completo: así el HTML inicial (y Google) ya trae todas las propiedades. */}
      <Suspense
        fallback={
          <>
            <h1 className="titulo-seccion">Propiedades en Misiones</h1>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {propiedades.map((p) => (
                <TarjetaPropiedad key={p.slug} propiedad={p} />
              ))}
            </div>
          </>
        }
      >
        <Catalogo propiedades={propiedades} ciudades={getCiudades()} />
      </Suspense>
    </div>
  );
}
