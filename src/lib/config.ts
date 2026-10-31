// Datos de la inmobiliaria. Cambiar acá y se actualiza en todo el sitio.
// TODO: reemplazar todos los datos de contacto por los reales.
export const sitio = {
  nombre: "Global Inmobiliaria",
  eslogan: "Propiedades en Misiones",
  descripcion:
    "Inmobiliaria en Misiones. Casas, departamentos, terrenos y chacras en venta y alquiler en Posadas, Oberá, Puerto Iguazú y toda la provincia. Tasaciones profesionales.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Número en formato internacional sin "+", espacios ni guiones (549 + característica + número).
  whatsapp: "5492216900406",
  telefono: "221 690-0406",
  email: "globalsi.net@gmail.com",
  direccion: "Calle Ejemplo 1234",
  ciudad: "Posadas",
  provincia: "Misiones",
  ubicacion: { lat: -27.3671, lng: -55.8961 },
  horario: "Lunes a viernes de 8 a 12:30 y de 16 a 20 h · Sábados de 9 a 12:30 h",
  matricula: "Corredor Inmobiliario · Mat. Nº 000",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
};

export function linkWhatsapp(mensaje: string) {
  return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

// Es un celular: se llama con el mismo número internacional que WhatsApp (+54 9 …).
export const linkTelefono = `tel:+${sitio.whatsapp}`;
