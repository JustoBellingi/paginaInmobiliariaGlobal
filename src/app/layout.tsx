import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappFlotante } from "@/components/WhatsappFlotante";
import { sitio } from "@/lib/config";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(sitio.url),
  title: {
    default: `${sitio.nombre} · Propiedades en venta y alquiler en Misiones`,
    template: `%s · ${sitio.nombre}`,
  },
  description: sitio.descripcion,
  openGraph: {
    siteName: sitio.nombre,
    locale: "es_AR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: sitio.nombre,
  url: sitio.url,
  telephone: sitio.telefono,
  email: sitio.email,
  areaServed: { "@type": "State", name: "Misiones, Argentina" },
  address: {
    "@type": "PostalAddress",
    streetAddress: sitio.direccion,
    addressLocality: sitio.ciudad,
    addressRegion: sitio.provincia,
    addressCountry: "AR",
  },
  geo: { "@type": "GeoCoordinates", latitude: sitio.ubicacion.lat, longitude: sitio.ubicacion.lng },
  sameAs: [sitio.instagram, sitio.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: algunas extensiones del navegador agregan clases al <html>/<body>
    // antes de que cargue React y Next lo marcaba como error.
    <html
      lang="es-AR"
      suppressHydrationWarning
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappFlotante />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
