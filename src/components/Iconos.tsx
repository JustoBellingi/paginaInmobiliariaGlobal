import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

function Base({ children, className = "h-5 w-5", ...props }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconoCama = (p: P) => (
  <Base {...p}>
    <path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5M7 11.5a1.5 1.5 0 1 0 0-.01" />
  </Base>
);
export const IconoBano = (p: P) => (
  <Base {...p}>
    <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3ZM6 12V6a2 2 0 0 1 3.7-1M7 19l-1 2M17 19l1 2" />
  </Base>
);
export const IconoSuperficie = (p: P) => (
  <Base {...p}>
    <path d="M4 4h16v16H4zM4 9h5M15 4v5M4 15h5v5M15 20v-5h5" />
  </Base>
);
export const IconoAuto = (p: P) => (
  <Base {...p}>
    <path d="M5 16V11l2-5h10l2 5v5M3 16h18v3h-3v-1M6 18v1H3M7.5 13.5h.01M16.5 13.5h.01" />
  </Base>
);
export const IconoAmbientes = (p: P) => (
  <Base {...p}>
    <path d="M3 21V9l9-6 9 6v12H3ZM9 21v-6h6v6" />
  </Base>
);
export const IconoPin = (p: P) => (
  <Base {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Base>
);
export const IconoTelefono = (p: P) => (
  <Base {...p}>
    <path d="M5 3h3.5l1.7 4.4-2.4 1.5a11 11 0 0 0 5.3 5.3l1.5-2.4L19 13.5V17a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.2 2 2 0 0 1 5 3Z" />
  </Base>
);
export const IconoMail = (p: P) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6 8.5 7 8.5-7" />
  </Base>
);
export const IconoReloj = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Base>
);
export const IconoCheck = (p: P) => (
  <Base {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Base>
);
export const IconoFlecha = (p: P) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);
export const IconoMenu = (p: P) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);
export const IconoCerrar = (p: P) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);
export const IconoFiltros = (p: P) => (
  <Base {...p}>
    <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" />
    <circle cx="16" cy="6" r="2" />
    <circle cx="10" cy="12" r="2" />
    <circle cx="18" cy="18" r="2" />
  </Base>
);
export const IconoCompartir = (p: P) => (
  <Base {...p}>
    <circle cx="18" cy="5" r="2.5" />
    <circle cx="6" cy="12" r="2.5" />
    <circle cx="18" cy="19" r="2.5" />
    <path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4" />
  </Base>
);
export const IconoEscudo = (p: P) => (
  <Base {...p}>
    <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Base>
);
export const IconoGrafico = (p: P) => (
  <Base {...p}>
    <path d="M4 20V4M4 20h16M8 16l4-5 3 3 5-6" />
  </Base>
);
export const IconoLlave = (p: P) => (
  <Base {...p}>
    <circle cx="8" cy="15" r="4" />
    <path d="m11 12 9-9M17 6l2 2M15 8l2 2" />
  </Base>
);
export const IconoCamara = (p: P) => (
  <Base {...p}>
    <path d="M4 8h3l2-3h6l2 3h3v11H4V8Z" />
    <circle cx="12" cy="13" r="3.5" />
  </Base>
);
