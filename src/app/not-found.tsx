import Link from "next/link";

export default function NotFound() {
  return (
    <div className="contenedor py-28 text-center">
      <p className="sobretitulo">Error 404</p>
      <h1 className="titulo-seccion mt-3">No encontramos esta página</h1>
      <p className="mt-3 text-gris">Puede que la propiedad ya se haya vendido o alquilado.</p>
      <Link href="/propiedades" className="boton-primario mt-8">
        Ver propiedades disponibles
      </Link>
    </div>
  );
}
