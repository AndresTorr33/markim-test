// Única fuente de verdad para datos de contacto, redes, horario y menú.
export const site = {
  nombre: 'Markim',
  descripcion:
    'Agencia de marketing en Lima: videos, fotos, edición y gestión de redes sociales para que tu marca se vea y venda.',
  email: 'kimmarketing100@gmail.com',
  telefono: '+51 975-743-357',
  whatsapp: {
    numero: '51975743357',
    mensaje: 'Hola, deseo más información',
  },
  redes: {
    instagram: 'https://www.instagram.com/markim_estrategia_de_marca/',
    tiktok: 'https://www.tiktok.com/@agenciademarketing23',
  },
  // Dirección de Ate pendiente de confirmar (ver PENDIENTES.md)
  direccion: 'Jr. Tacna 675, Magdalena del Mar, Lima 15086',
  horario: ['Lunes a viernes: 8:00 am a 7:00 pm', 'Sábados: 8:00 am a 1:00 pm'],
  nav: [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/portafolio', label: 'Portafolio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/clientes', label: 'Clientes' },
    { href: '/contacto', label: 'Contacto' },
  ],
};

export const whatsappUrl = `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(site.whatsapp.mensaje)}`;

// Antepone BASE_URL para que los links funcionen si el sitio vive en una subcarpeta.
export const url = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
