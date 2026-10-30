import Link from "next/link";

export default function NotFound() {
  return (
    <div className="contenedor py-24 text-center">
      <h1 className="font-display text-3xl font-semibold text-marca">No encontramos esta página</h1>
      <p className="mt-2 text-gris">Puede que la propiedad ya no esté publicada.</p>
      <Link href="/propiedades" className="mt-6 inline-block rounded-full bg-marca px-6 py-3 font-semibold text-white">
        Ver propiedades
      </Link>
    </div>
  );
}
