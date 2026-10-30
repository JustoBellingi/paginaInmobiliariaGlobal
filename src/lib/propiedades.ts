export type Operacion = "venta" | "alquiler";
export type Tipo = "casa" | "departamento" | "ph" | "terreno" | "local" | "oficina";
export type Moneda = "USD" | "ARS";

export type Propiedad = {
  slug: string;
  titulo: string;
  operacion: Operacion;
  tipo: Tipo;
  precio: number;
  moneda: Moneda;
  expensas?: number;
  zona: string;
  direccion: string;
  ubicacion: { lat: number; lng: number };
  dormitorios: number;
  banos: number;
  ambientes: number;
  superficieTotal: number;
  superficieCubierta: number;
  cochera: boolean;
  antiguedad?: number;
  descripcion: string;
  caracteristicas: string[];
  fotos: string[];
  destacada?: boolean;
};

const foto = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=75`;

// PROPIEDADES DE EJEMPLO: reemplazar por las reales.
// Para agregar una propiedad, copiar un bloque, cambiar los datos y usar un slug único
// (el slug es la dirección de la página: /propiedades/<slug>).
export const propiedades: Propiedad[] = [
  {
    slug: "casa-3-dormitorios-city-bell",
    titulo: "Casa de 3 dormitorios con pileta en City Bell",
    operacion: "venta",
    tipo: "casa",
    precio: 185000,
    moneda: "USD",
    zona: "City Bell",
    direccion: "Calle 14 y 470, City Bell",
    ubicacion: { lat: -34.8722, lng: -58.0463 },
    dormitorios: 3,
    banos: 2,
    ambientes: 5,
    superficieTotal: 600,
    superficieCubierta: 180,
    cochera: true,
    antiguedad: 12,
    descripcion:
      "Casa en una planta sobre lote de 600 m², a pocas cuadras del centro de City Bell. Living comedor con hogar y salida al jardín, cocina integrada con isla, tres dormitorios (el principal en suite) y galería con parrilla. Pileta, cochera para dos autos y lavadero independiente.",
    caracteristicas: ["Pileta", "Parrilla", "Hogar a leña", "Suite", "Jardín", "Lavadero", "Cochera doble"],
    fotos: [
      foto("photo-1600596542815-ffad4c1539a9"),
      foto("photo-1600585154340-be6161a56a0c"),
      foto("photo-1600607687939-ce8a6c25118c"),
      foto("photo-1600566753190-17f0baa2a6c3"),
    ],
    destacada: true,
  },
  {
    slug: "departamento-2-ambientes-centro-la-plata",
    titulo: "Departamento 2 ambientes con balcón en el centro",
    operacion: "alquiler",
    tipo: "departamento",
    precio: 420000,
    moneda: "ARS",
    expensas: 65000,
    zona: "La Plata Centro",
    direccion: "Calle 8 entre 50 y 51, La Plata",
    ubicacion: { lat: -34.9153, lng: -57.9524 },
    dormitorios: 1,
    banos: 1,
    ambientes: 2,
    superficieTotal: 48,
    superficieCubierta: 44,
    cochera: false,
    antiguedad: 8,
    descripcion:
      "Departamento al frente con balcón, muy luminoso. Living comedor, cocina separada, dormitorio con placard y baño completo. Edificio con ascensor y portero eléctrico, a metros de Plaza San Martín.",
    caracteristicas: ["Balcón", "Ascensor", "Al frente", "Placard", "Apto profesional"],
    fotos: [
      foto("photo-1522708323590-d24dbb6b0267"),
      foto("photo-1502672260266-1c1ef2d93688"),
      foto("photo-1560448204-e02f11c3d0e2"),
    ],
    destacada: true,
  },
  {
    slug: "ph-3-ambientes-tolosa",
    titulo: "PH de 3 ambientes con patio en Tolosa",
    operacion: "venta",
    tipo: "ph",
    precio: 78000,
    moneda: "USD",
    zona: "Tolosa",
    direccion: "Calle 3 y 528, Tolosa",
    ubicacion: { lat: -34.8996, lng: -57.9696 },
    dormitorios: 2,
    banos: 1,
    ambientes: 3,
    superficieTotal: 110,
    superficieCubierta: 75,
    cochera: false,
    antiguedad: 30,
    descripcion:
      "PH en planta baja sin expensas, con entrada independiente. Living comedor, cocina comedor, dos dormitorios y patio con parrilla. Ideal primera vivienda. Apto crédito.",
    caracteristicas: ["Patio", "Parrilla", "Sin expensas", "Apto crédito"],
    fotos: [
      foto("photo-1568605114967-8130f3a36994"),
      foto("photo-1556912173-3bb406ef7e77"),
      foto("photo-1505693416388-ac5ce068fe85"),
    ],
  },
  {
    slug: "casa-4-dormitorios-gonnet",
    titulo: "Casa de 4 dormitorios en barrio parque de Gonnet",
    operacion: "venta",
    tipo: "casa",
    precio: 320000,
    moneda: "USD",
    zona: "Gonnet",
    direccion: "Camino Centenario y 501, Gonnet",
    ubicacion: { lat: -34.8822, lng: -58.0172 },
    dormitorios: 4,
    banos: 3,
    ambientes: 6,
    superficieTotal: 900,
    superficieCubierta: 260,
    cochera: true,
    antiguedad: 5,
    descripcion:
      "Casa moderna en dos plantas sobre lote parquizado. Doble altura en el living, cocina con desayunador, cuatro dormitorios con placares, dos en suite. Quincho con parrilla, pileta climatizada y cochera para tres autos.",
    caracteristicas: ["Pileta climatizada", "Quincho", "Doble altura", "Suite", "Alarma", "Riego automático"],
    fotos: [
      foto("photo-1613490493576-7fde63acd811"),
      foto("photo-1613977257363-707ba9348227"),
      foto("photo-1616594039964-ae9021a400a0"),
      foto("photo-1617104678098-de229db51175"),
    ],
    destacada: true,
  },
  {
    slug: "departamento-3-ambientes-alquiler-la-plata",
    titulo: "Departamento 3 ambientes con cochera",
    operacion: "alquiler",
    tipo: "departamento",
    precio: 650000,
    moneda: "ARS",
    expensas: 90000,
    zona: "La Plata Centro",
    direccion: "Diagonal 74 y 12, La Plata",
    ubicacion: { lat: -34.9105, lng: -57.9452 },
    dormitorios: 2,
    banos: 2,
    ambientes: 3,
    superficieTotal: 82,
    superficieCubierta: 75,
    cochera: true,
    antiguedad: 3,
    descripcion:
      "Departamento a estrenar en edificio con amenities. Living comedor con balcón corrido, cocina integrada, dos dormitorios (uno en suite) y cochera cubierta. SUM, terraza con parrilla y laundry.",
    caracteristicas: ["Cochera", "Balcón", "SUM", "Terraza", "Laundry", "Suite"],
    fotos: [
      foto("photo-1493809842364-78817add7ffb"),
      foto("photo-1484154218962-a197022b5858"),
      foto("photo-1574362848149-11496d93a7c7"),
    ],
  },
  {
    slug: "casa-2-dormitorios-alquiler-berisso",
    titulo: "Casa de 2 dormitorios con jardín en Berisso",
    operacion: "alquiler",
    tipo: "casa",
    precio: 380000,
    moneda: "ARS",
    zona: "Berisso",
    direccion: "Calle 12 y 164, Berisso",
    ubicacion: { lat: -34.8745, lng: -57.8862 },
    dormitorios: 2,
    banos: 1,
    ambientes: 4,
    superficieTotal: 250,
    superficieCubierta: 90,
    cochera: true,
    antiguedad: 20,
    descripcion:
      "Casa en una planta con jardín al fondo y garage. Living comedor, cocina, dos dormitorios y lavadero. Barrio tranquilo, cerca de escuelas y comercios.",
    caracteristicas: ["Jardín", "Garage", "Lavadero", "Acepta mascotas"],
    fotos: [
      foto("photo-1570129477492-45c003edd2be"),
      foto("photo-1583608205776-bfd35f0d9f83"),
      foto("photo-1556911220-bff31c812dba"),
    ],
  },
];

export function getPropiedad(slug: string) {
  return propiedades.find((p) => p.slug === slug);
}

export function getZonas() {
  return [...new Set(propiedades.map((p) => p.zona))].sort();
}

export const tipoLabel: Record<Tipo, string> = {
  casa: "Casa",
  departamento: "Departamento",
  ph: "PH",
  terreno: "Terreno",
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
