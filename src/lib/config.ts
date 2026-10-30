// Datos de la inmobiliaria. Cambiar acá y se actualiza en todo el sitio.
export const sitio = {
  nombre: "Global Inmobiliaria",
  descripcion:
    "Compra, venta y alquiler de propiedades. Encontrá tu próxima casa o departamento y pedí la tasación de tu propiedad online.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Número en formato internacional sin "+", espacios ni guiones (549 + característica + número).
  whatsapp: "5492210000000",
  telefono: "(221) 000-0000",
  email: "contacto@globalinmobiliaria.com.ar",
  direccion: "Calle 00 nº 000, La Plata, Buenos Aires",
  horario: "Lunes a viernes de 9 a 18 h · Sábados de 9 a 13 h",
  instagram: "https://www.instagram.com/",
};

export function linkWhatsapp(mensaje: string) {
  return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
