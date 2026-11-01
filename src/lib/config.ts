// Datos de la inmobiliaria. Cambiar acá y se actualiza en todo el sitio.
// TODO: reemplazar todos los datos de contacto por los reales.
export const sitio = {
  nombre: "Global Inmobiliaria",
  eslogan: "Propiedades en Misiones",
  descripcion:
    "Inmobiliaria en Misiones. Casas, departamentos, terrenos y chacras en venta y alquiler en Posadas, Oberá, Puerto Iguazú y toda la provincia. Tasaciones profesionales.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Número en formato internacional sin "+", espacios ni guiones (549 + característica + número).
  whatsapp: "5493764448250",
  telefono: "(376) 444-8250",
  email: "globalsi.net@gmail.com",
  direccion: "Félix de Azara 1800",
  ciudad: "Posadas",
  provincia: "Misiones",
  ubicacion: { lat: -27.3671, lng: -55.89367 },
  horario: "Lunes a viernes de 8 a 12:30 y de 16 a 20 h · Sábados de 9 a 12:30 h",
  matricula: "Corredor Inmobiliario · Mat. Nº 000",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
};

export function linkWhatsapp(mensaje: string) {
  return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const linkTelefono = `tel:+54${sitio.telefono.replace(/\D/g, "")}`;
