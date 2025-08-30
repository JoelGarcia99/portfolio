// Lightweight i18n loader for EN/ES
(function () {
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

      'contact.title': 'Get in Touch',
      'contact.email_me': 'Email Me',
      'contact.publications': 'Publications',
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

      'contact.title': 'Ponte en contacto',
      'contact.email_me': 'Envíame un correo',
      'contact.publications': 'Publicaciones',
    }
  };

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.setAttribute('lang', lang);
    // textContent targets
    document.querySelectorAll('[data-i18n]').forEach(el => {
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
    // Toggle UI state
    const enBtn = document.getElementById('lang-en');
    const esBtn = document.getElementById('lang-es');
    if (enBtn && esBtn) {
      // Normalize button classes before applying state
      [enBtn, esBtn].forEach(btn => btn.classList.remove('bg-yellow-400','text-black','bg-transparent','text-gray-300'));
      if (lang === 'es') {
        esBtn.classList.add('bg-yellow-400','text-black');
        enBtn.classList.add('bg-transparent','text-gray-300');
      } else {
        enBtn.classList.add('bg-yellow-400','text-black');
        esBtn.classList.add('bg-transparent','text-gray-300');
      }
    }
  }

  function init() {
    const stored = localStorage.getItem('lang');
    const browser = (navigator.language || 'en').slice(0,2).toLowerCase();
    const initial = stored || (browser === 'es' ? 'es' : 'en');
    applyTranslations(initial);
    localStorage.setItem('lang', initial);

    const enBtn = document.getElementById('lang-en');
    const esBtn = document.getElementById('lang-es');
    if (enBtn) enBtn.addEventListener('click', () => { localStorage.setItem('lang','en'); applyTranslations('en'); });
    if (esBtn) esBtn.addEventListener('click', () => { localStorage.setItem('lang','es'); applyTranslations('es'); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
