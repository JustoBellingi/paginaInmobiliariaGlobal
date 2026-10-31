"use client";

import { useState } from "react";
import { IconoCompartir } from "./Iconos";

export function BotonCompartir({ titulo, url }: { titulo: string; url: string }) {
  const [copiado, setCopiado] = useState(false);

  async function compartir() {
    if (navigator.share) {
      try {
        await navigator.share({ title: titulo, url });
      } catch {}
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={compartir}
      className="flex w-full items-center justify-center gap-2 py-2 text-sm font-semibold text-gris transition hover:text-marino"
    >
      <IconoCompartir className="h-4 w-4" />
      {copiado ? "¡Link copiado!" : "Compartir propiedad"}
    </button>
  );
}
