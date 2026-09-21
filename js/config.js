/**
 * ============================================================
 *  CONFIG.JS — Plantilla Madre Simple
 * ============================================================
 *  Centraliza TODOS los datos del negocio.
 *  Para personalizar la landing page, edita únicamente este
 *  archivo. El main.js inyectará los valores automáticamente.
 * ============================================================
 */

const CONFIG = {

  /* ── IDENTIDAD DEL NEGOCIO ─────────────────────────────── */
  businessName:    "GreenLeaf Pro",
  tagline:         "Cuidado del jardín con ciencia y pasión",
  logoText:        "GreenLeaf Pro",
  logoIcon:        "🌿",

  /* ── CONTACTO ──────────────────────────────────────────── */
  phoneCall:       "+34 612 345 678",
  phoneWhatsApp:   "34612345678",
  whatsAppMessage: "Hola, me gustaría solicitar un presupuesto gratuito para mi jardín.",
  email:           "hola@greenleafpro.es",
  address:         "Calle del Jardín Botánico 14, 28001 Madrid",

  /* ── WEB3FORMS ─────────────────────────────────────────── */
  web3formsKey:    "TU_ACCESS_KEY_AQUI",

  /* ── REDES SOCIALES ────────────────────────────────────── */
  social: {
    instagram: "https://instagram.com/greenleafpro",
    facebook:  "https://facebook.com/greenleafpro",
    youtube:   "https://youtube.com/greenleafpro",
  },

  /* ── NAVEGACIÓN ────────────────────────────────────────── */
  navLinks: [
    { label: "Servicios",   href: "#servicios" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Nosotros",    href: "#feature" },
    { label: "FAQ",         href: "#faq" },
    { label: "Contacto",    href: "#contacto" },
  ],

  /* ── HERO SECTION ──────────────────────────────────────── */
  hero: {
    headline:    "Precision lawn care for lasting results",
    subheadline: "Servicio profesional y orgánico de jardinería para hogares y empresas. Resultados garantizados, construidos con ciencia real.",
    ctaLabel:    "Solicitar presupuesto gratis",
    trustBadges: [
      { icon: "✅", text: "Más de 500 clientes felices" },
      { icon: "🏆", text: "10 años de experiencia" },
      { icon: "🌱", text: "Productos 100% orgánicos" },
    ],
    formFields: {
      serviceOptions: [
        "Corte y mantenimiento",
        "Fertilización orgánica",
        "Diseño de jardines",
        "Riego automático",
        "Limpieza y poda",
      ],
      sizeOptions: [
        "Menos de 50 m²",
        "50 – 150 m²",
        "150 – 500 m²",
        "Más de 500 m²",
      ],
      frequencyOptions: [
        "Una vez",
        "Semanal",
        "Quincenal",
        "Mensual",
      ],
    },
  },

  /* ── ESTADÍSTICAS ──────────────────────────────────────── */
  trustStats: [
    { value: "500+", label: "Clientes satisfechos" },
    { value: "10",   label: "Años de experiencia" },
    { value: "98%",  label: "Satisfacción" },
    { value: "24h",  label: "Respuesta garantizada" },
  ],

  /* ── SERVICIOS ─────────────────────────────────────────── */
  services: [
    {
      id:          "mowing",
      title:       "Corte & Mantenimiento",
      description: "Seguimos planes de corte científicos adaptados al tipo de hierba para un resultado uniforme y duradero.",
      image:       "img/service-mowing.jpg",
      imageAlt:    "Servicio de corte de césped profesional",
      badge:       "Más popular",
    },
    {
      id:          "fertilizing",
      title:       "Fertilización Orgánica",
      description: "Nutrimos el suelo con productos 100% orgánicos para un crecimiento sano sin dañar el medio ambiente.",
      image:       "img/service-fertilizing.jpg",
      imageAlt:    "Fertilización orgánica de jardines",
      badge:       null,
    },
    {
      id:          "landscaping",
      title:       "Diseño de Jardines",
      description: "Transformamos espacios exteriores en jardines de ensueño con diseños personalizados y plantas seleccionadas.",
      image:       "img/service-landscaping.jpg",
      imageAlt:    "Diseño profesional de jardines",
      badge:       "Nuevo",
    },
    {
      id:          "irrigation",
      title:       "Riego Automático",
      description: "Instalamos sistemas de riego inteligentes que ahorran hasta un 40% de agua y mantienen tu jardín siempre verde.",
      image:       "img/service-irrigation.jpg",
      imageAlt:    "Sistema de riego automático para jardines",
      badge:       null,
    },
    {
      id:          "cleanup",
      title:       "After-Care & Poda",
      description: "Recogida de hojas, poda de árboles y arbustos, limpieza general y preparación estacional del jardín.",
      image:       "img/service-cleanup.jpg",
      imageAlt:    "Limpieza y poda de jardines",
      badge:       null,
    },
  ],

  /* ── TESTIMONIOS ───────────────────────────────────────── */
  testimonials: [
    {
      name:   "Gloria M.",
      role:   "Propietaria de vivienda",
      stars:  5,
      text:   "Llevaban 3 años viniendo al jardín de mi madre y el cambio es increíble. Siempre puntuales, educados y el resultado habla por sí solo. ¡Totalmente recomendados!",
      avatar: "G",
    },
    {
      name:   "Carlos Ruiz",
      role:   "Director de comunidad",
      stars:  5,
      text:   "Gestionan los jardines de nuestra comunidad de vecinos con un nivel de detalle y profesionalidad que no habíamos visto antes. El precio es justo y el servicio, excelente.",
      avatar: "C",
    },
    {
      name:   "María Bellido",
      role:   "Restaurante El Vergel",
      stars:  5,
      text:   "Le encargamos el diseño completo de la terraza de nuestro restaurante y superaron todas las expectativas. Los clientes continuamente preguntan por nuestro jardín.",
      avatar: "M",
    },
  ],

  /* ── FEATURE SECTION ───────────────────────────────────── */
  feature: {
    headline:    "Customized lawn care with a scientific approach",
    subheadline: "Analizamos el suelo, el microclima y el tipo de césped de tu jardín para crear un plan de cuidado 100% personalizado que maximiza resultados.",
    highlights: [
      { icon: "🔬", label: "Análisis de suelo",  value: "Incluido" },
      { icon: "📊", label: "Plan personalizado", value: "Incluido" },
      { icon: "🌱", label: "Productos orgánicos", value: "100%" },
      { icon: "💧", label: "Ahorro en agua",      value: "Hasta 40%" },
    ],
    ctaLabel: "Ver planes y precios",
    ctaHref:  "#servicios",
    image:    "img/feature-scientific.jpg",
    imageAlt: "Enfoque científico para el cuidado del césped",
  },

  /* ── FAQ ───────────────────────────────────────────────── */
  faqTitle:    "Answers to common lawn care questions",
  faqSubtitle: "¿Tienes dudas? Aquí respondemos las preguntas más frecuentes de nuestros clientes.",
  faqs: [
    {
      question: "¿Con qué frecuencia se debe cortar el césped?",
      answer:   "La frecuencia ideal depende de la estación y el tipo de hierba. En primavera y verano suele ser cada 1-2 semanas; en otoño e invierno puede espaciarse a 3-4 semanas. En tu plan personalizado te recomendamos la frecuencia óptima.",
    },
    {
      question: "¿Cuándo es el mejor momento para fertilizar?",
      answer:   "La fertilización más efectiva se realiza en primavera (para activar el crecimiento) y en otoño (para fortalecer las raíces antes del invierno). Nuestros especialistas te indican el momento exacto según el estado de tu jardín.",
    },
    {
      question: "¿Es seguro el tratamiento para mascotas y niños?",
      answer:   "Sí. Utilizamos exclusivamente productos orgánicos certificados que son seguros para personas, mascotas y el medio ambiente. Tras la aplicación, recomendamos esperar 1-2 horas antes de acceder al jardín.",
    },
    {
      question: "¿Cuánto tiempo tarda en verse el resultado?",
      answer:   "La mayoría de nuestros clientes notan una mejora visible en el primer mes. Los resultados óptimos se alcanzan tras 2-3 tratamientos consecutivos, dependiendo del estado inicial del jardín.",
    },
    {
      question: "¿Cómo consigo un presupuesto?",
      answer:   "Muy fácil: rellena el formulario de esta página o llámanos directamente. En menos de 24 horas te contactamos con un presupuesto sin compromiso. La visita de valoración es completamente gratuita.",
    },
  ],

  /* ── FOOTER ────────────────────────────────────────────── */
  footer: {
    description: "Servicio profesional de jardinería y mantenimiento de jardines para hogares y empresas en Madrid y alrededores.",
    copyright:   "© 2026 GreenLeaf Pro. Todos los derechos reservados.",
    legalLinks: [
      { label: "Política de privacidad", href: "#privacidad" },
      { label: "Aviso legal",            href: "#legal" },
      { label: "Cookies",                href: "#cookies" },
    ],
  },

};
