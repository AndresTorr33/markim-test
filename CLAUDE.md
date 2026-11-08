# CLAUDE.md — Web de Agencia Markim

Este archivo le da contexto a Claude Code sobre el proyecto. Léelo completo antes de hacer cambios.

## Qué es

Sitio web de presentación de **Markim**, agencia de marketing de Kimberly Vargas (Lima, Perú).
Objetivo: que un posible cliente entienda en segundos qué hace Markim, vea trabajos reales y
escriba por WhatsApp o por el formulario. Idioma del sitio: español (Perú). Moneda: soles (S/).

Hay una versión anterior en un solo `index.html` (Tailwind por CDN, en GitHub Pages). Se reemplaza
por este proyecto; usar ese archivo solo como referencia de estilo y datos de contacto.

## Stack

- **Astro** (sitio estático, multipágina, cero JS por defecto).
- **Tailwind CSS** instalado vía `npx astro add tailwind` (nada de CDN).
- Iconos: `astro-icon` o SVG inline. No cargar Font Awesome completo por CDN.
- Imágenes: siempre locales en `src/assets/` y servidas con `<Image />` / `<Picture />` de `astro:assets`.
- JS solo donde haga falta (menú móvil, envío del formulario), como `<script>` dentro del componente.
- Node LTS. Gestor de paquetes: npm.

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor local en http://localhost:4321
npm run build      # genera el sitio en dist/
npm run preview    # sirve dist/ para revisar el build final
```

Antes de dar una tarea por terminada: `npm run build` debe pasar sin errores ni warnings.

## Estructura

```
src/
  layouts/BaseLayout.astro      # <head>, SEO, Header, Footer, botón WhatsApp
  components/                   # Header, Footer, MobileMenu, WhatsAppButton, ServiceCard,
                                # ProjectCard, ClientLogos, Testimonial, ContactForm, SectionTitle
  pages/
    index.astro                 # Inicio
    servicios.astro             # Servicios / packs
    portafolio/index.astro      # Galería de trabajos
    portafolio/[slug].astro     # Detalle de cada caso
    nosotros.astro              # Kimberly, historia, forma de trabajo, herramientas
    clientes.astro              # Logos + testimonios
    contacto.astro              # Formulario, WhatsApp, horario, mapa
    privacidad.astro            # Política de privacidad (el formulario recoge datos personales)
    404.astro
  content/                      # Content collections (fáciles de editar sin tocar código)
    servicios/*.md
    proyectos/*.md              # un archivo por trabajo del portafolio
    testimonios/*.md
  data/site.ts                  # datos de contacto, redes, horario: ÚNICA fuente de verdad
  assets/                       # imágenes y logos
public/                         # favicon, og-image, robots.txt
```

Header, footer y datos de contacto se definen UNA vez. Nunca copiar el header en cada página.

## Páginas y contenido

- **Inicio**: hero con propuesta de valor clara + CTA a WhatsApp; resumen de servicios (3–5);
  trabajos destacados (3–6); logos de clientes; 1–2 testimonios; CTA final.
- **Servicios**: Pack Videos, Pack Fotos, Edición, Gestión de RR.SS., Plan de Marketing, Asistencia
  de Marca. Cada uno: qué incluye, para quién es, CTA. Precios solo si Kimberly los confirma.
- **Portafolio**: grid filtrable por tipo (video, foto, redes). Detalle: cliente, reto, qué se hizo,
  resultado. Videos verticales embebidos (TikTok/Instagram/YouTube Shorts) o mp4 propio comprimido.
- **Nosotros**: foto y bio de Kimberly, historia, cómo trabaja (proceso en pasos). El antiguo bloque
  "Equipamiento" (iPhone, gimbal DJI, CapCut) va aquí como subsección "Con qué trabajamos", breve.
- **Clientes**: logos (con permiso) y testimonios.
- **Contacto**: formulario + WhatsApp + correo + horario + mapa embebido (si hay dirección pública).

## Reglas de contenido (importante)

- **No inventar** clientes, testimonios, cifras, resultados, premios ni años de experiencia.
  Si falta un dato, dejar un placeholder visible tipo `[[PENDIENTE: testimonio de cliente]]`
  y listarlo en `PENDIENTES.md`.
- **No enlazar imágenes de otros sitios** (hotlinking). Solo imágenes propias de Markim o de bancos
  libres (Unsplash/Pexels) descargadas a `src/assets/`, anotando la fuente en `PENDIENTES.md`.
- Eliminar todo rastro de la plantilla de maquinaria (alts tipo "Retroexcavadora", valores
  `retroexcavadora` en el select, "Equipos Nuevos/Semi Nuevos", foto de maquinaria del hero).
- Confirmar con el usuario la segunda dirección (Ate) antes de publicarla.
- Textos cortos, directos, tuteo, orientados a beneficios para el cliente.

## Diseño

- Paleta base heredada: crema `#f4f1ea`, casi negro `#1d1c1a`, acento amarillo/dorado
  (ajustar al logo real cuando esté). Definir colores como tokens en el CSS de Tailwind (`@theme`).
- Una tipografía display con personalidad para títulos + una sans legible para texto (Google Fonts
  autoalojadas con `@fontsource` o la API de fuentes de Astro).
- Mobile first: la mayoría de visitas vendrá desde Instagram/TikTok en celular.
- Animaciones sutiles (CSS / `IntersectionObserver`); respetar `prefers-reduced-motion`. No usar AOS.

## Calidad

- Accesibilidad: un solo `<h1>` por página, jerarquía de headings correcta, `alt` descriptivos,
  `<label for>` en cada input, foco visible, contraste AA, menú móvil con `aria-expanded`.
- SEO: `<title>` y `meta description` únicos por página, Open Graph + imagen `og-image` (para que el
  link se vea bien al compartirlo por WhatsApp), `@astrojs/sitemap`, `robots.txt`, `lang="es"`,
  datos estructurados `LocalBusiness` en Inicio.
- Rendimiento: Lighthouse ≥ 90 en móvil en todas las categorías.
- Enlaces internos con rutas relativas a `import.meta.env.BASE_URL` si se despliega en subcarpeta.

## Formulario

- Servicio externo gratuito (Web3Forms o Formspree) que envía al correo de la agencia.
  La access key va en variable de entorno pública (`PUBLIC_FORM_KEY`), nunca hardcodeada.
- Campos con `name`, validación HTML5, honeypot anti-spam, mensaje de éxito/error sin recargar.
- Checkbox de aceptación de la política de privacidad.

## Deploy

- Repo en GitHub. Deploy automático en cada push a `main`.
- Opción preferida: Cloudflare (conectar repo; build `npm run build`; salida `dist`).
  HTTPS gratis y automático; luego se conecta el dominio propio.
- Alternativa: GitHub Pages con la GitHub Action oficial de Astro (configurar `site` y, si es
  `usuario.github.io/repo`, también `base`).
- `astro.config.mjs` debe tener `site` con la URL final.

## Forma de trabajar

- Trabajar por fases, en una rama por fase, con commits pequeños y descriptivos.
- Al terminar cada fase: `npm run build`, revisar en `npm run dev` (móvil y escritorio) y
  actualizar `PENDIENTES.md`.

### Fases

1. [ ] Crear proyecto Astro + Tailwind, `BaseLayout`, Header/Footer/WhatsApp, `site.ts`.
2. [ ] Página de Inicio completa (con placeholders donde falte contenido).
3. [ ] Servicios y Contacto (incluye formulario funcionando).
4. [ ] Portafolio con content collection + página de detalle.
5. [ ] Nosotros, Clientes, Privacidad, 404.
6. [ ] SEO, Open Graph, sitemap, accesibilidad, Lighthouse.
7. [ ] Deploy + dominio propio.
