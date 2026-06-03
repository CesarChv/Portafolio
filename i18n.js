/* ============================================================
   i18n · Traductor ES ⇄ EN para ambos portafolios
   - No requiere marcar el HTML: traduce por coincidencia de frase.
   - Persiste el idioma elegido en localStorage.
   ============================================================ */
(function () {
  "use strict";

  /* ---- Diccionario: frase en español (normalizada) -> inglés ---- */
  var DICT = {
    // Navegación
    "Estadísticas": "Stats",
    "Habilidades": "Skills",
    "Misiones": "Quests",
    "Campaña": "Campaign",
    "Proyectos": "Projects",
    "Experiencia": "Experience",
    "Contacto": "Contact",
    "Vista clásica": "Classic view",
    "Vista RPG": "RPG view",

    // Encabezados de sección
    "Árbol de Habilidades": "Skill Tree",
    "Misiones · Proyectos": "Quests · Projects",
    "Diario de Campaña · Experiencia": "Campaign Log · Experience",
    "Fortalezas": "Strengths",
    "Trofeos": "Trophies",
    "Stack técnico": "Tech Stack",
    "Trayectoria": "Career",
    "Portafolio": "Portfolio",
    "Proyectos destacados": "Featured Projects",

    // Hero / presentación
    "Experiencia en desarrollo de software, integración de servicios web y administración de bases de datos. Poseo una fuerte pasión por las tecnologías emergentes y la programación. Me considero una persona ambiciosa con una aptitud natural para el aprendizaje rápido y la superación personal. Mi enfoque radica en el desarrollo de software, configuración y administración de redes. Tengo un gran interés en el aprendizaje continuo en diversos dominios, resolver desafíos complejos y la dedicación a contribuir al éxito de los proyectos a través del trabajo en equipo y el logro de resultados beneficiosos.":
      "Experience in software development, web service integration, and database administration. I have a strong passion for emerging technologies and programming. I consider myself an ambitious person with a natural aptitude for fast learning and self-improvement. My focus lies in software development, network configuration, and administration. I have a great interest in continuous learning across diverse domains, solving complex challenges, and a dedication to contributing to project success through teamwork and achieving beneficial results.",

    "Disponible para misiones": "Available for missions",
    "2+ años de experiencia": "2+ years of experience",

    // Botones
    "Ver proyectos": "View projects",
    "Ver misiones ▸": "View quests ▸",
    "Ver repo →": "View repo →",
    "Ver todos los repos ↗": "View all repos ↗",

    // Tarjetas de stats (RPG)
    "Control de Versiones · Git": "Version Control · Git",
    "Bases de Datos": "Databases",
    "Desarrollo Front-end / Back-end": "Front-end / Back-end Development",
    "Integración WS / APIs": "WS Integration / APIs",

    // Categorías de skills
    "Lenguajes & Servidor": "Languages & Server",
    "Persistencia & SQL": "Persistence & SQL",
    "Integración & Herramientas": "Integration & Tools",

    // Proyectos · tipos / dificultad
    "Proyecto Web · Hosting": "Web Project · Hosting",
    "Proyecto web · Hosting": "Web project · Hosting",
    "Algoritmos · Optimización": "Algorithms · Optimization",
    "Machine Learning · Clasificación": "Machine Learning · Classification",
    "Redes Neuronales · IA": "Neural Networks · AI",
    "Estructura de Datos": "Data Structures",
    "Épica": "Epic",
    "Élite": "Elite",
    "Rara": "Rare",

    // Proyectos · títulos
    "Agente Viajero": "Traveling Salesman",
    "KNN · Prototipo": "KNN · Prototype",
    "Memoria Asociativa": "Associative Memory",

    // Proyectos · descripciones
    "Sitio web e implementación de un hosting gratuito para la página ICO de la UAEM Zumpango.":
      "Website and implementation of free hosting for the ICO page of UAEM Zumpango.",
    "Solución al Problema del Agente Viajero (TSP) aplicando técnicas de optimización de rutas.":
      "Solution to the Traveling Salesman Problem (TSP) applying route optimization techniques.",
    "Algoritmo de clustering K-Means aplicado sobre conjuntos de datos en un espacio tridimensional.":
      "K-Means clustering algorithm applied to datasets in a three-dimensional space.",
    "Clasificador K-Nearest Neighbors para el reconocimiento y la clasificación de patrones.":
      "K-Nearest Neighbors classifier for pattern recognition and classification.",
    "Implementación de memorias asociativas para el almacenamiento y la recuperación de patrones.":
      "Implementation of associative memories for pattern storage and retrieval.",
    "Proyecto de estructuras de datos con prácticas y ejercicios de algoritmia en Java.":
      "Data structures project with practices and algorithm exercises in Java.",

    // Estados
    "◆ Público": "◆ Public",
    "● Público": "● Public",

    // Experiencia
    "jun. 2024 — Actualidad · 2 años 1 mes": "Jun 2024 — Present · 2 yrs 1 mo",
    "abr. 2024 — jun. 2024 · 3 meses": "Apr 2024 — Jun 2024 · 3 mos",
    "Desarrollador Web": "Web Developer",
    "Becario de Ingeniería de Software": "Software Engineering Intern",
    "MC COLLECT · Jornada completa · Presencial": "MC COLLECT · Full-time · On-site",
    "MC COLLECT · Jornada parcial": "MC COLLECT · Part-time",
    "Desarrollo y mantenimiento de aplicaciones web en Ciudad de México. Trabajo con Git, CSS y otras tecnologías del stack, colaborando en proyectos internos de la empresa.":
      "Development and maintenance of web applications in Mexico City. I work with Git, CSS, and other stack technologies, collaborating on the company's internal projects.",
    "Prácticas en ingeniería de software, apoyando en el desarrollo y la mejora de sistemas internos.":
      "Software engineering internship, supporting the development and improvement of internal systems.",

    // Fortalezas
    "Resiliente": "Resilient",
    "Constancia bajo presión": "Consistency under pressure",
    "Trabajo en equipo": "Teamwork",
    "Colaboración efectiva": "Effective collaboration",
    "Creativo": "Creative",
    "Soluciones originales": "Original solutions",
    "Proactivo": "Proactive",
    "Iniciativa propia": "Self-initiative",
    "Liderazgo": "Leadership",
    "Guía y dirección": "Guidance and direction",
    "Adaptabilidad": "Adaptability",
    "Flexible al cambio": "Flexible to change",

    // Contacto
    "Trabajemos juntos": "Let's work together",
    "¿Listo para tu próximo proyecto?": "Ready for your next project?",
    "Estoy disponible para nuevos proyectos y oportunidades. Si buscas un Full Stack Developer para tu equipo, hablemos.":
      "I'm available for new projects and opportunities. If you're looking for a Full Stack Developer for your team, let's talk.",

    // Footer (RPG)
    "⟡ Desarrollado con código y dedicación · © 2026 Cesar Chavez Zamorano ⟡":
      "⟡ Built with code and dedication · © 2026 Cesar Chavez Zamorano ⟡"
  };

  /* ---- Estilo del botón de idioma ---- */
  var st = document.createElement("style");
  st.textContent =
    ".lang-btn{font-family:inherit;font-weight:700;letter-spacing:.12em;text-transform:uppercase;" +
    "font-size:12px;padding:7px 13px;cursor:pointer;color:inherit;background:transparent;" +
    "border:1px solid currentColor;border-radius:7px;opacity:.75;line-height:1;" +
    "transition:opacity .2s, background .2s;}" +
    ".lang-btn:hover{opacity:1;background:rgba(127,142,180,.16);}";
  document.head.appendChild(st);

  var SEL = "a,p,span,h1,h2,h3,h4,li,button,div,small,strong,em";
  var STORE = "portfolio-lang";

  function norm(s) { return (s || "").replace(/\s+/g, " ").trim(); }

  function inSkip(el) {
    if (!el) return false;
    if (el.id === "langBtn") return true;
    // no tocar el panel de Tweaks (React lo re-renderiza)
    if (el.closest && el.closest("#tweaks-root")) return true;
    return false;
  }

  function translate(lang) {
    var nodes = document.querySelectorAll(SEL);
    nodes.forEach(function (el) {
      if (el.childElementCount !== 0) return;     // solo hojas con texto
      if (inSkip(el)) return;
      if (lang === "en") {
        var key = norm(el.textContent);
        if (DICT[key]) {
          if (el.dataset.es == null) el.dataset.es = el.textContent;
          el.textContent = DICT[key];
        }
      } else {
        if (el.dataset.es != null) {
          el.textContent = el.dataset.es;
        }
      }
    });
    document.documentElement.lang = lang;
    var btn = document.getElementById("langBtn");
    if (btn) btn.textContent = (lang === "en") ? "ES" : "EN";
    try { localStorage.setItem(STORE, lang); } catch (e) {}
  }

  function current() {
    try { return localStorage.getItem(STORE) || "es"; } catch (e) { return "es"; }
  }

  function init() {
    var btn = document.getElementById("langBtn");
    if (btn) {
      btn.addEventListener("click", function () {
        translate(current() === "en" ? "es" : "en");
      });
    }
    if (current() === "en") translate("en");
    else if (btn) btn.textContent = "EN";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
