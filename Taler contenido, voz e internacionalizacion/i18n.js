/**
 * i18n.js — Internacionalización ES / EN
 * CORRECCIÓN i18n: El sitio original no tenía soporte de idiomas.
 */

const translations = {
  es: {
    // Nav
    "nav.brands":      "Marcas",
    "nav.cinema":      "Cartelera de cine",
    "nav.promos":      "Promociones",
    "nav.news":        "Noticias",
    "nav.services":    "Servicios",
    "nav.about":       "Nosotros",
    "nav.contact":     "Contacto",

    // Marcas
    "marcas.title":    "Nuestras marcas",
    "marcas.subtitle": "En Unicentro Pasto encuentras más de 90 tiendas y restaurantes.",
    "marcas.cta":      "Conocer más",
    "cat.stores":      "TIENDAS",
    "cat.food":        "COMIDAS",
    "cat.entertainment":"ENTRETENIMIENTO",
    "cat.banks":       "BANCOS",

    // Promociones
    "promos.title":    "Promociones",
    "promos.all":      "¡Descúbrelas todas!",

    // Cine — CORRECCIÓN contenido: "Unicentro de película" con espacio
    "cinema.title":    "Unicentro de película",
    "cinema.desc":     "Disfruta de los mejores estrenos de cine en las salas Cinemark de Unicentro Pasto.",
    "cinema.cta":      "Explora la cartelera",

    // Noticias
    "news.title":               "Noticias y Actividades",
    "news.eco.title":           "EC♻AMIGOS",
    "news.eco.desc":            "Todos los martes y miércoles de 3:00 a 5:00 p.m. reclama tu Bolso Ecológico Exclusivo, por facturas del día en los Establecimientos Comerciales.",
    "news.winner.title":        "Ganador Mamá y Papá el motor de nuestra Vida",
    "news.mamapapa.title":      "Mamá y Papá el motor de nuestra Vida",
    "news.anniversary.title":   "16º Aniversario Unicentro Pasto",
    "news.readmore":            "Leer más",
    "news.all":                 "Conoce todas nuestras actividades",

    // Instagram
    "insta.title":     "Síguenos en Instagram",
    "insta.cta":       "Ver en Instagram",

    // Footer
    "footer.find":     "Encuéntranos",
    "footer.brands":   "Marcas",
    "footer.forYou":   "Para Ti",
    "footer.us":       "Nosotros",
    "footer.privacy":  "Aviso de Privacidad",
    "footer.rights":   "Todos los derechos reservados"
  },

  en: {
    // Nav
    "nav.brands":      "Brands",
    "nav.cinema":      "Movie Theater",
    "nav.promos":      "Promotions",
    "nav.news":        "News",
    "nav.services":    "Services",
    "nav.about":       "About Us",
    "nav.contact":     "Contact",

    // Marcas
    "marcas.title":    "Our Brands",
    "marcas.subtitle": "At Unicentro Pasto you'll find over 90 stores and restaurants.",
    "marcas.cta":      "Learn more",
    "cat.stores":      "STORES",
    "cat.food":        "FOOD COURT",
    "cat.entertainment":"ENTERTAINMENT",
    "cat.banks":       "BANKS",

    // Promociones
    "promos.title":    "Promotions",
    "promos.all":      "Discover them all!",

    // Cine
    "cinema.title":    "Unicentro at the Movies",
    "cinema.desc":     "Enjoy the latest film releases at Cinemark theaters inside Unicentro Pasto.",
    "cinema.cta":      "Explore showtimes",

    // Noticias
    "news.title":               "News & Activities",
    "news.eco.title":           "EC♻FRIENDS",
    "news.eco.desc":            "Every Tuesday and Wednesday from 3:00 p.m. to 5:00 p.m., claim your Exclusive Eco Bag with same-day receipts from participating stores.",
    "news.winner.title":        "Winner: Mom & Dad, the Engine of Our Lives",
    "news.mamapapa.title":      "Mom & Dad, the Engine of Our Lives",
    "news.anniversary.title":   "16th Anniversary of Unicentro Pasto",
    "news.readmore":            "Read more",
    "news.all":                 "See all our activities",

    // Instagram
    "insta.title":     "Follow us on Instagram",
    "insta.cta":       "View on Instagram",

    // Footer
    "footer.find":     "Find Us",
    "footer.brands":   "Brands",
    "footer.forYou":   "For You",
    "footer.us":       "About",
    "footer.privacy":  "Privacy Notice",
    "footer.rights":   "All rights reserved"
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Actualiza lang en <html>
  document.documentElement.lang = lang;

  // Textos
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  // Botones del switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.getAttribute('onclick') === `setLang('${lang}')`;
    btn.classList.toggle('active', isActive);
  });

  currentLang = lang;
  localStorage.setItem('lang', lang);
}

function setLang(lang) {
  applyTranslations(lang);
}

// Aplicar al cargar
document.addEventListener('DOMContentLoaded', () => applyTranslations(currentLang));
