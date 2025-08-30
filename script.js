// Lightweight i18n loader for EN/ES
(function () {
  try { console.log('[i18n] script loaded'); } catch(e) {}
    const translations = {
      en: {
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.stack': 'Stack',
      'nav.services': 'Services',
      'nav.contact': 'Contact',
      'nav.blog': 'Blog',

      'hero.hello': "Hello, I'm",
      'hero.role': 'Backend Engineer',
      'hero.contact': 'Contact',
      'hero.info': 'Info',
      'hero.view': 'View',
      'hero.cv': 'CV',
      'hero.email': 'Email',
      'hero.me': 'Me',

      'aria.linkedin': 'LinkedIn profile',
      'aria.github': 'GitHub profile',

      'about.lead': 'Get To Know More',
      'about.title': 'About Me',
      'about.experience': 'Experience',
      'about.years': '3+ years Backend Development',
      'about.education': 'Education',
      'about.degrees': 'B.Sc. Information Systems<br> M.Sc. Data Science (In Progress)',
      'about.bio': "I’m a backend engineer specializing in building high-performance systems and scalable APIs with Rust and Node.js. I have led multiple projects from architecture to deployment, focusing on clean code, security, and observability. Currently, I’m enhancing my skills in Kubernetes, Infrastructure as Code, and cloud-native DevOps to deliver production-ready solutions.",

      'services.title': 'My Services',
      'services.api': 'API Architecture',
      'services.api_desc': 'Scalable RESTful APIs and backend logic with Rust and Node.js.',
      'services.system': 'System Design',
      'services.system_desc': 'Microservices, queues, and DB modeling optimized for performance.',
      'services.container': 'Containerization',
      'services.container_desc': 'CI/CD pipelines with Docker and automated deployments.',
      'services.ai': 'AI & Data Science',
      'services.ai_desc': 'Development of deep learning models, machine learning pipelines, and end-to-end data science solutions using Python, PyTorch, and modern tools.',

      'projects.lead': 'Browse My Recent',
      'projects.title': 'Projects',
      'projects.accountable': 'Accountable System',
      'projects.accountable_desc': 'Personal asset management platform — budgeting, reporting, and multi-wallet tracking in Rust + Postgres.',
      'projects.bingo': 'Bingo Management System',
      'projects.bingo_desc': 'Built for <span class="text-yellow-500">McKakos</span> — event scheduler, prize distribution, and real-time draw logic with Node.js backend.',
      'projects.dashboards': 'Dashboards',
      'projects.dashboards_desc': 'Developed at <span class="text-yellow-500">Zicom</span> — data-rich monitoring dashboards with advanced filtering and analytics in Vue3 + NestJS.',
      'projects.erp': 'ERP Systems',
      'projects.erp_desc': 'Delivered for <span class="text-yellow-500">Ecx-Labs</span> — modular business logic, invoicing, inventory, HR & permissions in a full-stack Rust environment.',
      'projects.security': 'Security Systems',
      'projects.security_desc': 'Built for <span class="text-yellow-500">Priverion</span> — audit trails, JWT-based auth, RBAC, and user logs with compliance-grade data isolation.',
      'projects.resources': 'Resources Management',
      'projects.resources_desc': 'Created for <span class="text-yellow-500">IEAN Jesus</span> — personnel, asset, and project allocation system designed for intuitive reporting and church resource transparency.',

      'tech.title': 'Technologies I Use',
      'tech.core': 'Core Stack',
      'tech.core_desc': 'Backend-first stack for building and scaling services.',
      'tech.messaging': 'Messaging & Gateways',
      'tech.messaging_desc': 'Async backbones and API edge for resilient systems.',
      'tech.data_ml': 'Data & ML',
      'tech.data_ml_desc': 'Pragmatic ML and analytics integrated into products.',
      'tech.frontend': 'Frontend & Mobile',
      'tech.frontend_desc': 'Product UIs for dashboards and apps.',
      'tech.databases': 'Databases',
      'tech.databases_desc': 'SQL and NoSQL engines I run in prod.',
      'tech.tooling': 'Tooling & DX',
      'tech.tooling_desc': 'Automation and developer experience essentials.',

      'contact.title': 'Get in Touch',
      'contact.email_me': 'Email Me',
      'contact.publications': 'Publications',

      'footer.tagline': 'Backend Engineer specializing in Rust and Node.js.',
      'footer.links': 'Links',
      'footer.contact': 'Contact',
      'footer.rights': 'All rights reserved.',
      'footer.top': 'Back to top',
    },
      es: {
      'nav.about': 'Sobre mí',
      'nav.projects': 'Proyectos',
      'nav.stack': 'Tecnologías',
      'nav.services': 'Servicios',
      'nav.contact': 'Contacto',
      'nav.blog': 'Blog',

      'hero.hello': 'Hola, soy',
      'hero.role': 'Ingeniero Backend',
      'hero.contact': 'Contacto',
      'hero.info': 'Info',
      'hero.view': 'Ver',
      'hero.cv': 'CV',
      'hero.email': 'Escríbeme',
      'hero.me': '',

      'aria.linkedin': 'Perfil de LinkedIn',
      'aria.github': 'Perfil de GitHub',

      'about.lead': 'Conóceme mejor',
      'about.title': 'Sobre mí',
      'about.experience': 'Experiencia',
      'about.years': '3+ años de desarrollo Backend',
      'about.education': 'Educación',
      'about.degrees': 'Lic. en Sistemas de Información<br> M.Sc. Ciencia de Datos (En curso)',
      'about.bio': 'Soy ingeniero backend especializado en sistemas de alto rendimiento y APIs escalables con Rust y Node.js. He liderado múltiples proyectos desde la arquitectura hasta el despliegue, con enfoque en código limpio, seguridad y observabilidad. Actualmente profundizo en Kubernetes, Infraestructura como Código y DevOps nativo en la nube para entregar soluciones listas para producción.',

      'services.title': 'Mis servicios',
      'services.api': 'Arquitectura de APIs',
      'services.api_desc': 'APIs REST escalables y lógica backend con Rust y Node.js.',
      'services.system': 'Diseño de sistemas',
      'services.system_desc': 'Microservicios, colas y modelado de BD optimizados por rendimiento.',
      'services.container': 'Contenerización',
      'services.container_desc': 'Pipelines CI/CD con Docker y despliegues automatizados.',
      'services.ai': 'IA y Ciencia de Datos',
      'services.ai_desc': 'Desarrollo de modelos deep learning, pipelines de ML y soluciones de datos de punta a punta con Python y PyTorch.',

      'projects.lead': 'Explora mis recientes',
      'projects.title': 'Proyectos',
      'projects.accountable': 'Sistema Accountable',
      'projects.accountable_desc': 'Plataforma de gestión de activos personales: presupuestos, reportes y múltiples billeteras en Rust + Postgres.',
      'projects.bingo': 'Sistema de Bingo',
      'projects.bingo_desc': 'Hecho para <span class="text-yellow-500">McKakos</span>: agenda de eventos, premios y sorteo en tiempo real con backend en Node.js.',
      'projects.dashboards': 'Dashboards',
      'projects.dashboards_desc': 'Desarrollado en <span class="text-yellow-500">Zicom</span>: paneles de monitoreo con filtros avanzados y analítica en Vue3 + NestJS.',
      'projects.erp': 'Sistemas ERP',
      'projects.erp_desc': 'Entregado para <span class="text-yellow-500">Ecx-Labs</span>: lógica modular, facturación, inventario, RRHH y permisos en stack Rust.',
      'projects.security': 'Sistemas de Seguridad',
      'projects.security_desc': 'Hecho para <span class="text-yellow-500">Priverion</span>: auditoría, autenticación con JWT, RBAC y trazabilidad con aislamiento de datos.',
      'projects.resources': 'Gestión de Recursos',
      'projects.resources_desc': 'Creado para <span class="text-yellow-500">IEAN Jesús</span>: personal, activos y proyectos con reportes intuitivos y transparencia.',

      'tech.title': 'Tecnologías que uso',
      'tech.core': 'Stack principal',
      'tech.core_desc': 'Stack backend para construir y escalar servicios.',
      'tech.messaging': 'Mensajería y Gateways',
      'tech.messaging_desc': 'Colas y puertas de enlace para sistemas resilientes.',
      'tech.data_ml': 'Datos e IA/ML',
      'tech.data_ml_desc': 'ML y analítica pragmáticos integrados al producto.',
      'tech.frontend': 'Frontend y Mobile',
      'tech.frontend_desc': 'Interfaces para dashboards y apps.',
      'tech.databases': 'Bases de datos',
      'tech.databases_desc': 'Motores SQL y NoSQL en producción.',
      'tech.tooling': 'Herramientas y DX',
      'tech.tooling_desc': 'Automatización y experiencia del desarrollador.',

      'contact.title': 'Ponte en contacto',
      'contact.email_me': 'Envíame un correo',
      'contact.publications': 'Publicaciones',
      'footer.tagline': 'Ingeniero Backend especializado en Rust y Node.js.',
      'footer.links': 'Enlaces',
      'footer.contact': 'Contacto',
      'footer.rights': 'Todos los derechos reservados.',
      'footer.top': 'Volver arriba',
    }
  };

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.setAttribute('lang', lang);
    // textContent targets
    document.querySelectorAll('[data-i18n]').forEach(el => {
      // If element is using data-i18n-attr, do not overwrite its inner content
      if (el.hasAttribute('data-i18n-attr')) return;
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (val != null) el.textContent = val;
    });
    // innerHTML targets (for keys that include markup like <br> or spans)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = dict[key];
      if (val != null) el.innerHTML = val;
    });
    // attribute targets (e.g., aria-label)
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attr = el.getAttribute('data-i18n-attr');
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (attr && val != null) el.setAttribute(attr, val);
    });
    // Toggle UI state for all language buttons (desktop + mobile)
    const enBtns = document.querySelectorAll('[data-lang-toggle][data-lang="en"]');
    const esBtns = document.querySelectorAll('[data-lang-toggle][data-lang="es"]');
    [...enBtns, ...esBtns].forEach(btn => btn.classList.remove('bg-yellow-400','text-black','bg-transparent','text-gray-300'));
    if (lang === 'es') {
      esBtns.forEach(b => b.classList.add('bg-yellow-400','text-black'));
      enBtns.forEach(b => b.classList.add('bg-transparent','text-gray-300'));
    } else {
      enBtns.forEach(b => b.classList.add('bg-yellow-400','text-black'));
      esBtns.forEach(b => b.classList.add('bg-transparent','text-gray-300'));
    }
  }

  function init() {
    const stored = localStorage.getItem('lang');
    const browser = (navigator.language || 'en').slice(0,2).toLowerCase();
    const initial = stored || (browser === 'es' ? 'es' : 'en');
    applyTranslations(initial);
    localStorage.setItem('lang', initial);

    // Bind language toggles (desktop + mobile)
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang') === 'es' ? 'es' : 'en';
        localStorage.setItem('lang', lang);
        applyTranslations(lang);
      });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('icon-open');
    const iconClose = document.getElementById('icon-close');
    function closeMenu() {
      if (!mobileMenu) return;
      mobileMenu.classList.add('hidden');
      if (menuToggle) menuToggle.setAttribute('aria-expanded','false');
      if (iconOpen) iconOpen.classList.remove('hidden');
      if (iconClose) iconClose.classList.add('hidden');
    }
    function openMenu() {
      if (!mobileMenu) return;
      mobileMenu.classList.remove('hidden');
      if (menuToggle) menuToggle.setAttribute('aria-expanded','true');
      if (iconOpen) iconOpen.classList.add('hidden');
      if (iconClose) iconClose.classList.remove('hidden');
    }
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        if (expanded) closeMenu(); else openMenu();
      });
      // Close when a link is clicked
      mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
      // Close on Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
      });
      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
          closeMenu();
        }
      });
    }

    // Set current year in footer
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
