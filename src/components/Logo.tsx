export function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <circle cx="20" cy="20" r="19" className={claro ? "fill-white/10" : "fill-selva"} />
        <path
          d="M9 21.5 20 12l11 9.5"
          fill="none"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-tierra"
        />
        <path d="M13 20v9h14v-9" fill="none" strokeWidth="2" strokeLinejoin="round" className="stroke-white" />
        <path d="M18 29v-5h4v5" fill="none" strokeWidth="2" strokeLinejoin="round" className="stroke-white" />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-[22px] font-semibold tracking-tight ${claro ? "text-white" : "text-selva"}`}>
          Global
        </span>
        <span className={`block text-[9.5px] font-bold tracking-[0.32em] ${claro ? "text-white/70" : "text-tierra"}`}>
          INMOBILIARIA
        </span>
      </span>
    </span>
  );
}
