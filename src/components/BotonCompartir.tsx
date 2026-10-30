"use client";

import { useState } from "react";

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
      className="w-full rounded-full border border-marca px-5 py-3 text-sm font-semibold text-marca transition hover:bg-marca hover:text-white"
    >
      {copiado ? "¡Link copiado!" : "Compartir propiedad"}
    </button>
  );
}
