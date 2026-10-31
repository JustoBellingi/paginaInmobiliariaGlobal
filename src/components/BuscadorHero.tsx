import { getCiudades, tipoLabel } from "@/lib/propiedades";

export function BuscadorHero() {
  const ciudades = getCiudades();

  return (
    <form action="/propiedades" className="rounded-2xl bg-white p-2 shadow-2xl shadow-black/20">
      <div className="flex gap-1 p-2 pb-0">
        {[
          ["venta", "Comprar"],
          ["alquiler", "Alquilar"],
        ].map(([valor, label], i) => (
          <label
            key={valor}
            className="cursor-pointer rounded-t-lg border-b-2 border-transparent px-5 py-2 text-sm font-bold text-gris transition has-checked:border-petroleo has-checked:text-marino"
          >
            <input type="radio" name="operacion" value={valor} defaultChecked={i === 0} className="sr-only" />
            {label}
          </label>
        ))}
      </div>
      <div className="grid gap-3 border-t border-linea p-3 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_auto]">
        <label>
          <span className="etiqueta">Localidad</span>
          <select name="ciudad" className="campo">
            <option value="">Toda Misiones</option>
            {ciudades.map((c) => (
              <option key={c.nombre}>{c.nombre}</option>
            ))}
          </select>
        </label>
        <label>
          <span className="etiqueta">Tipo</span>
          <select name="tipo" className="campo">
            <option value="">Todos</option>
            {Object.entries(tipoLabel).map(([valor, label]) => (
              <option key={valor} value={valor}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="etiqueta">Dormitorios</span>
          <select name="dormitorios" className="campo">
            <option value="">Indistinto</option>
            <option value="1">1 o más</option>
            <option value="2">2 o más</option>
            <option value="3">3 o más</option>
            <option value="4">4 o más</option>
          </select>
        </label>
        <button className="boton-petroleo self-end rounded-lg px-8 py-[11px] sm:col-span-2 lg:col-span-1">Buscar</button>
      </div>
    </form>
  );
}
