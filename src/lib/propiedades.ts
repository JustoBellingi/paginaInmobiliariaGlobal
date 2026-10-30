export type Operacion = "venta" | "alquiler";
export type Tipo = "casa" | "departamento" | "duplex" | "terreno" | "chacra" | "local" | "oficina";
export type Moneda = "USD" | "ARS";

export type Propiedad = {
  slug: string;
  codigo: string;
  titulo: string;
  operacion: Operacion;
  tipo: Tipo;
  precio: number;
  moneda: Moneda;
  expensas?: number;
  ciudad: string;
  barrio: string;
  direccion: string;
  ubicacion: { lat: number; lng: number };
  dormitorios: number;
  banos: number;
  ambientes: number;
  superficieTotal: number;
  superficieCubierta: number;
  cocheras: number;
  antiguedad?: number;
  descripcion: string;
  caracteristicas: string[];
  fotos: string[];
  destacada?: boolean;
};

const foto = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=75`;

// PROPIEDADES DE EJEMPLO: reemplazar por las reales.
// Para agregar una propiedad, copiar un bloque, cambiar los datos y usar un slug y un código únicos
// (el slug es la dirección de la página: /propiedades/<slug>).
// Las fotos propias van en public/propiedades/<slug>/1.jpg, 2.jpg… y se escriben "/propiedades/<slug>/1.jpg".
export const propiedades: Propiedad[] = [
  {
    slug: "casa-3-dormitorios-pileta-villa-sarita-posadas",
    codigo: "GV-101",
    titulo: "Casa de 3 dormitorios con pileta en Villa Sarita",
    operacion: "venta",
    tipo: "casa",
    precio: 165000,
    moneda: "USD",
    ciudad: "Posadas",
    barrio: "Villa Sarita",
    direccion: "Villa Sarita, Posadas",
    ubicacion: { lat: -27.378, lng: -55.887 },
    dormitorios: 3,
    banos: 2,
    ambientes: 5,
    superficieTotal: 450,
    superficieCubierta: 190,
    cocheras: 2,
    antiguedad: 10,
    descripcion:
      "Casa en una planta en uno de los barrios más buscados de Posadas. Living comedor amplio con salida a la galería, cocina integrada con isla, tres dormitorios (el principal en suite con vestidor) y escritorio.\n\nAl fondo, galería con parrilla, pileta y jardín parquizado. Cochera para dos autos, lavadero independiente y aire acondicionado en todos los ambientes.",
    caracteristicas: ["Pileta", "Parrilla", "Suite con vestidor", "Aire acondicionado", "Jardín", "Lavadero", "Escritorio"],
    fotos: [
      foto("photo-1600596542815-ffad4c1539a9"),
      foto("photo-1600585154340-be6161a56a0c"),
      foto("photo-1600607687939-ce8a6c25118c"),
      foto("photo-1600566753190-17f0baa2a6c3"),
      foto("photo-1600047509807-ba8f99d2cdde"),
    ],
    destacada: true,
  },
  {
    slug: "departamento-2-dormitorios-costanera-posadas",
    codigo: "GA-102",
    titulo: "Departamento de 2 dormitorios con vista al río",
    operacion: "alquiler",
    tipo: "departamento",
    precio: 650000,
    moneda: "ARS",
    expensas: 85000,
    ciudad: "Posadas",
    barrio: "Costanera",
    direccion: "Av. Costanera, Posadas",
    ubicacion: { lat: -27.3585, lng: -55.8985 },
    dormitorios: 2,
    banos: 2,
    ambientes: 3,
    superficieTotal: 85,
    superficieCubierta: 78,
    cocheras: 1,
    antiguedad: 4,
    descripcion:
      "Departamento en piso alto con balcón y vista abierta al río Paraná. Living comedor luminoso, cocina integrada, dos dormitorios con placard (uno en suite) y cochera cubierta.\n\nEdificio con seguridad, pileta, gimnasio y SUM. A metros de la costanera.",
    caracteristicas: ["Vista al río", "Balcón", "Cochera cubierta", "Pileta en edificio", "Gimnasio", "Seguridad 24 h"],
    fotos: [
      foto("photo-1522708323590-d24dbb6b0267"),
      foto("photo-1502672260266-1c1ef2d93688"),
      foto("photo-1560448204-e02f11c3d0e2"),
      foto("photo-1484154218962-a197022b5858"),
    ],
    destacada: true,
  },
  {
    slug: "casa-4-dormitorios-itaembe-guazu-posadas",
    codigo: "GV-103",
    titulo: "Casa moderna de 4 dormitorios en Itaembé Guazú",
    operacion: "venta",
    tipo: "casa",
    precio: 245000,
    moneda: "USD",
    ciudad: "Posadas",
    barrio: "Itaembé Guazú",
    direccion: "Itaembé Guazú, Posadas",
    ubicacion: { lat: -27.4235, lng: -55.9605 },
    dormitorios: 4,
    banos: 3,
    ambientes: 6,
    superficieTotal: 800,
    superficieCubierta: 260,
    cocheras: 2,
    antiguedad: 2,
    descripcion:
      "Casa de diseño contemporáneo en dos plantas. Doble altura en el living, cocina con desayunador, cuatro dormitorios con placares y dos en suite.\n\nQuincho con parrilla, pileta y amplio parque. Paneles solares para agua caliente y portón automático.",
    caracteristicas: ["Pileta", "Quincho", "Doble altura", "Paneles solares", "Portón automático", "Alarma"],
    fotos: [
      foto("photo-1613490493576-7fde63acd811"),
      foto("photo-1613977257363-707ba9348227"),
      foto("photo-1616594039964-ae9021a400a0"),
      foto("photo-1617104678098-de229db51175"),
    ],
    destacada: true,
  },
  {
    slug: "casa-3-dormitorios-centro-obera",
    codigo: "GV-104",
    titulo: "Casa de 3 dormitorios a cuadras del centro de Oberá",
    operacion: "venta",
    tipo: "casa",
    precio: 98000,
    moneda: "USD",
    ciudad: "Oberá",
    barrio: "Centro",
    direccion: "Centro, Oberá",
    ubicacion: { lat: -27.4871, lng: -55.1199 },
    dormitorios: 3,
    banos: 2,
    ambientes: 5,
    superficieTotal: 360,
    superficieCubierta: 150,
    cocheras: 1,
    antiguedad: 18,
    descripcion:
      "Casa sólida en barrio residencial, a pocas cuadras de la avenida Libertad. Living, comedor, cocina, tres dormitorios y dos baños. Patio con parrilla y frutales.\n\nIdeal familia. Apta crédito hipotecario.",
    caracteristicas: ["Parrilla", "Patio", "Frutales", "Apta crédito"],
    fotos: [
      foto("photo-1568605114967-8130f3a36994"),
      foto("photo-1556912173-3bb406ef7e77"),
      foto("photo-1505693416388-ac5ce068fe85"),
    ],
  },
  {
    slug: "duplex-2-dormitorios-alquiler-garupa",
    codigo: "GA-105",
    titulo: "Dúplex de 2 dormitorios con patio en Garupá",
    operacion: "alquiler",
    tipo: "duplex",
    precio: 480000,
    moneda: "ARS",
    ciudad: "Garupá",
    barrio: "Fátima",
    direccion: "Barrio Fátima, Garupá",
    ubicacion: { lat: -27.4795, lng: -55.829 },
    dormitorios: 2,
    banos: 2,
    ambientes: 3,
    superficieTotal: 120,
    superficieCubierta: 85,
    cocheras: 1,
    antiguedad: 3,
    descripcion:
      "Dúplex a estrenar en complejo cerrado. Planta baja con living comedor, cocina y toilette; planta alta con dos dormitorios y baño completo. Patio propio y cochera.",
    caracteristicas: ["Patio propio", "Cochera", "Complejo cerrado", "Toilette", "Acepta mascotas"],
    fotos: [
      foto("photo-1493809842364-78817add7ffb"),
      foto("photo-1574362848149-11496d93a7c7"),
      foto("photo-1556911220-bff31c812dba"),
    ],
  },
  {
    slug: "casa-con-parque-puerto-iguazu",
    codigo: "GV-106",
    titulo: "Casa con parque y galería en Puerto Iguazú",
    operacion: "venta",
    tipo: "casa",
    precio: 135000,
    moneda: "USD",
    ciudad: "Puerto Iguazú",
    barrio: "Villa Nueva",
    direccion: "Villa Nueva, Puerto Iguazú",
    ubicacion: { lat: -25.6005, lng: -54.566 },
    dormitorios: 3,
    banos: 2,
    ambientes: 5,
    superficieTotal: 1000,
    superficieCubierta: 170,
    cocheras: 2,
    antiguedad: 8,
    descripcion:
      "Casa rodeada de verde sobre lote de 1.000 m². Galería perimetral, living comedor con hogar, cocina amplia y tres dormitorios.\n\nPor su ubicación, también es una excelente opción como alquiler turístico.",
    caracteristicas: ["Parque", "Galería", "Hogar", "Apto alquiler turístico", "Pozo de agua"],
    fotos: [
      foto("photo-1580587771525-78b9dba3b914"),
      foto("photo-1564013799919-ab600027ffc6"),
      foto("photo-1576941089067-2de3c901e126"),
    ],
    destacada: true,
  },
  {
    slug: "chacra-12-hectareas-eldorado",
    codigo: "GV-107",
    titulo: "Chacra de 12 hectáreas con casa en Eldorado",
    operacion: "venta",
    tipo: "chacra",
    precio: 120000,
    moneda: "USD",
    ciudad: "Eldorado",
    barrio: "Zona rural",
    direccion: "Ruta Nacional 12, Eldorado",
    ubicacion: { lat: -26.4084, lng: -54.6383 },
    dormitorios: 2,
    banos: 1,
    ambientes: 4,
    superficieTotal: 120000,
    superficieCubierta: 110,
    cocheras: 2,
    descripcion:
      "Chacra de 12 hectáreas con acceso por ruta asfaltada. Casa de material con dos dormitorios, galpón, vertiente natural y monte nativo.\n\nParte del campo con yerba mate en producción.",
    caracteristicas: ["Yerba mate en producción", "Vertiente", "Monte nativo", "Galpón", "Acceso asfaltado"],
    fotos: [
      foto("photo-1500382017468-9049fed747ef"),
      foto("photo-1449844908441-8829872d2607"),
      foto("photo-1430285561322-7808604715df"),
    ],
  },
  {
    slug: "terreno-450-m2-itaembe-mini-posadas",
    codigo: "GV-108",
    titulo: "Terreno de 450 m² en Itaembé Miní",
    operacion: "venta",
    tipo: "terreno",
    precio: 32000,
    moneda: "USD",
    ciudad: "Posadas",
    barrio: "Itaembé Miní",
    direccion: "Itaembé Miní, Posadas",
    ubicacion: { lat: -27.4205, lng: -55.927 },
    dormitorios: 0,
    banos: 0,
    ambientes: 0,
    superficieTotal: 450,
    superficieCubierta: 0,
    cocheras: 0,
    descripcion:
      "Lote de 15 x 30 m con todos los servicios: luz, agua y cloacas. Calle asfaltada, en zona de gran crecimiento cerca de colegios y comercios. Escritura inmediata.",
    caracteristicas: ["Todos los servicios", "Calle asfaltada", "Escritura inmediata"],
    fotos: [foto("photo-1523217582562-09d0def993a6"), foto("photo-1500382017468-9049fed747ef")],
  },
];

export function getPropiedad(slug: string) {
  return propiedades.find((p) => p.slug === slug);
}

/** Ciudades con sus barrios y cantidad de propiedades, ordenadas por cantidad. */
export function getCiudades() {
  const mapa = new Map<string, { barrios: Set<string>; cantidad: number }>();
  for (const p of propiedades) {
    const c = mapa.get(p.ciudad) ?? { barrios: new Set(), cantidad: 0 };
    c.barrios.add(p.barrio);
    c.cantidad++;
    mapa.set(p.ciudad, c);
  }
  return [...mapa]
    .map(([nombre, c]) => ({ nombre, cantidad: c.cantidad, barrios: [...c.barrios].sort() }))
    .sort((a, b) => b.cantidad - a.cantidad || a.nombre.localeCompare(b.nombre));
}

export const tipoLabel: Record<Tipo, string> = {
  casa: "Casa",
  departamento: "Departamento",
  duplex: "Dúplex",
  terreno: "Terreno",
  chacra: "Chacra",
  local: "Local",
  oficina: "Oficina",
};

export function formatPrecio(precio: number, moneda: Moneda) {
  const num = new Intl.NumberFormat("es-AR").format(precio);
  return moneda === "USD" ? `US$ ${num}` : `$ ${num}`;
}

export function precioConPeriodo(p: Propiedad) {
  return formatPrecio(p.precio, p.moneda) + (p.operacion === "alquiler" ? " /mes" : "");
}

export function formatSuperficie(m2: number) {
  return m2 >= 10000
    ? `${new Intl.NumberFormat("es-AR", { maximumFractionDigits: 1 }).format(m2 / 10000)} ha`
    : `${new Intl.NumberFormat("es-AR").format(m2)} m²`;
}
