# Global Inmobiliaria

Sitio web de Global Inmobiliaria hecho con Next.js 16 y Tailwind CSS.

## Qué incluye

- **Catálogo de propiedades** (`/propiedades`): cada ficha tiene galería de fotos, mapa, características y precio.
- **Buscador con filtros**: por venta o alquiler, zona, tipo, precio y dormitorios. Los filtros quedan en la URL, así que una búsqueda se puede compartir.
- **WhatsApp en cada propiedad**: el mensaje sale con el título, el precio y el link de la propiedad.
- **Tasación online** (`/tasaciones`): un formulario que manda el pedido por mail.
- **Vista previa al compartir**: cada propiedad muestra foto, precio y título al compartirla por WhatsApp o redes (Open Graph).
- **SEO**: `sitemap.xml`, `robots.txt`, URLs canónicas y datos estructurados (schema.org) de la inmobiliaria y de cada propiedad.

## Desarrollo

```bash
npm install
npm run dev
```

Se abre en http://localhost:3000.

## Datos para cambiar

- **Datos de contacto** (WhatsApp, teléfono, mail, dirección, horario): `src/lib/config.ts`.
- **Propiedades**: `src/lib/propiedades.ts`. Las que hay ahora son **de ejemplo**. Para agregar una, copiá un bloque y cambiá los datos. El `slug` tiene que ser único porque es la dirección de la página.
- **Fotos**: subilas a `public/propiedades/<slug>/` y referencialas como `/propiedades/<slug>/1.jpg`. Si están en otro servidor, agregá su dominio en `images.remotePatterns` de `next.config.ts`.
- **Colores y tipografías**: `src/app/globals.css` (bloque `@theme`) y `src/app/layout.tsx`.

## Variables de entorno

Copiá `.env.example` a `.env.local` (y cargá las mismas en Vercel):

| Variable | Para qué |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Dirección pública del sitio. Se usa en los links de WhatsApp, el sitemap y las vistas previas. |
| `RESEND_API_KEY` | Clave de [Resend](https://resend.com) para enviar los mails de tasación. |
| `TASACION_EMAIL` | Dirección donde llegan los pedidos de tasación. |
| `TASACION_FROM` | Remitente del mail (requiere el dominio verificado en Resend). |

Si falta `RESEND_API_KEY`, el formulario muestra un error y ofrece seguir por WhatsApp.

## Publicar

1. Importar el repo en [Vercel](https://vercel.com/new).
2. Cargar las variables de entorno.
3. Conectar el dominio.
4. En Google Search Console, verificar el dominio y enviar `https://<dominio>/sitemap.xml`.
