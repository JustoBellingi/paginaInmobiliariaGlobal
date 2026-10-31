# Global Inmobiliaria

Sitio web de Global Inmobiliaria (Misiones), hecho con Next.js 16 y Tailwind CSS 4.

## Qué incluye

- **Portada** con buscador, propiedades destacadas, localidades, sección "Nosotros" y llamados a tasación y WhatsApp.
- **Catálogo** (`/propiedades`) con filtros por operación, localidad, barrio, tipo, precio y dormitorios. Los filtros quedan en la URL, así que una búsqueda se puede compartir.
- **Ficha de cada propiedad**: galería (mosaico en computadora, carrusel en celular), datos principales, ficha técnica, mapa y botones de WhatsApp y llamada.
- **WhatsApp**: el mensaje sale con el código, el título, el precio y el link de la propiedad.
- **Tasación online** (`/tasaciones`): el pedido llega por mail. Si el mail no está configurado o falla, el formulario ofrece mandar los mismos datos por WhatsApp.
- **Contacto** (`/contacto`) con mapa de la oficina, y **Créditos** (`/creditos`) de las fotos de Wikimedia.
- **Vista previa al compartir**: cada propiedad sale con su foto, título y precio. El resto de las páginas usa una imagen con el logo (`src/app/opengraph-image.tsx`).
- **SEO**: `sitemap.xml`, `robots.txt`, URLs canónicas y datos estructurados (schema.org) de la inmobiliaria y de cada propiedad.

## Desarrollo

```bash
npm install
npm run dev
```

Se abre en http://localhost:3000.

## Dónde se cambia cada cosa

| Qué | Dónde |
| --- | --- |
| WhatsApp, teléfono, mail, dirección, horario, matrícula, redes | `src/lib/config.ts` |
| Propiedades | `src/lib/propiedades.ts` |
| Fotos de las localidades (portada) | `src/lib/localidades.ts` |
| Colores y tipografías | `src/app/globals.css` (bloque `@theme`) y `src/app/layout.tsx` |
| Logo | `src/components/Logo.tsx` (SVG), `src/app/icon.svg` (favicon), `public/logo.png` (original) |

### Cargar una propiedad

1. Crear la carpeta `public/propiedades/<slug>/` y poner las fotos (`1.jpg`, `2.jpg`, …). Conviene que pesen menos de 500 KB cada una.
2. En `src/lib/propiedades.ts`, copiar un bloque y cambiar los datos. El `slug` (la dirección de la página) y el `codigo` tienen que ser únicos. En `fotos` va `"/propiedades/<slug>/1.jpg"`, etc.
3. Para `ubicacion`: buscar la dirección en Google Maps, hacer clic derecho sobre el punto y copiar los dos números (latitud y longitud).
4. Marcar `destacada: true` para que aparezca en la portada.
5. Commit y push: Vercel publica el cambio en uno o dos minutos.

Las propiedades que hay ahora son **de ejemplo** (fotos de Unsplash). Cuando se carguen las reales, borrar las de ejemplo y, si ya no se usa, el dominio `images.unsplash.com` de `next.config.ts`.

## Variables de entorno

Copiar `.env.example` a `.env.local` y cargar las mismas en Vercel:

| Variable | Para qué |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Dirección pública del sitio (sin barra final). Se usa en los links de WhatsApp, el sitemap y las vistas previas. |
| `RESEND_API_KEY` | Clave de [Resend](https://resend.com) para enviar los mails de tasación. |
| `TASACION_EMAIL` | A dónde llegan los pedidos de tasación. Si no se carga, se usa el mail de `config.ts`. |
| `TASACION_FROM` | Remitente del mail (requiere el dominio verificado en Resend). |

## Publicar

1. Importar el repo en [Vercel](https://vercel.com/new).
2. Cargar las variables de entorno.
3. Conectar el dominio.
4. En Google Search Console, verificar el dominio y enviar `https://<dominio>/sitemap.xml`.

## Notas técnicas

- Next.js 16 con `cacheComponents`. Las APIs cambiaron respecto de versiones anteriores: antes de tocar código, leer la guía correspondiente en `node_modules/next/dist/docs/`.
- No usar `new Date()`, `Date.now()` ni `Math.random()` directamente en componentes del servidor: rompen el build. Ver `AnioActual` en `src/components/Footer.tsx`.
- Las clases propias de Tailwind (`boton`, `campo`, `contenedor`…) se definen con `@utility` en `globals.css`.

Sitio web por [webpmarg](https://webpmarg.com.ar).
