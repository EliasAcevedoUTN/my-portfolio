/* ===== Shared content (EN/ES) + sample app screens ===== */
const EMAIL = 'elias.acevedo.06.22@gmail.com';
const LINKS = {
  linkedin: 'https://linkedin.com/in/e-acevedo-fullstack-developer',
  github: 'https://github.com/EliasAcevedoUTN',
  cv: 'assets/Elias_Acevedo_Fullstack_Resume.pdf'
};

const T = {
  en: {
    navAbout: 'About', navWork: 'Projects', navExp: 'Experience', navStack: 'Stack', navImpact: 'Impact', navContact: 'Contact',
    role: 'Fullstack Developer · Java / Spring Boot & Angular',
    status: 'Open to remote roles with U.S. companies',
    heroTitle: 'I build reliable backends and the interfaces people actually use.',
    heroLead: '5+ years shipping enterprise applications and microservices with Java / Spring Boot and Angular — and, on my own time, mobile apps that real people use every day.',
    ctaTalk: 'Let’s talk', ctaCv: 'Download résumé', ctaWork: 'See projects',
    usTitle: 'Built for U.S. teams',
    usLead: 'Everything a hiring manager usually asks before the first call.',
    usTzK: 'Time zone', usTzV: 'Based in GMT-3 (Mendoza, Argentina), just 1–2 h ahead of New York. Flexible schedule — I can work the hours of any U.S. time zone.',
    usEnK: 'English', usEnV: 'Professional working proficiency — daily standups, code reviews and written specs in English.',
    usCtK: 'Engagement', usCtV: 'Full-time remote as an independent contractor (Deel or direct contract).',
    usWyK: 'How I work', usWyV: 'Agile/Scrum, async-friendly, clear written updates, tests before merge, AI-assisted workflows validated by hand.',
    aboutTitle: 'About',
    about1: 'I’m a <strong>fullstack developer</strong> focused on <strong>Java / Spring Boot and Angular</strong>. I deliver secure, scalable REST APIs, modernize legacy systems into microservices, and deploy containerized services on <strong>Kubernetes / OpenShift</strong>.',
    about2: 'Over the past year I’ve built <strong>AI-assisted development workflows</strong> for test generation, documentation and code review — always validating each result before merging. I enjoy mentoring and I taught Java to 100 students at Digital House.',
    about3: 'Outside work I build <strong>mobile apps end to end</strong>: one already runs a real dance studio every day, the other is a family finance app on its way to Google Play.',
    workTitle: 'Projects',
    workLead: 'Two apps I designed and built from scratch — idea, UX, architecture and delivery.',
    sampleNote: 'Sample screens — real screenshots coming soon.',
    privateNote: 'Private code — product overview only.',
    expTitle: 'Experience', stackTitle: 'Tech stack', impactTitle: 'Impact', eduTitle: 'Education',
    eduDegree: 'Bachelor’s Degree in Software Engineering', eduSchool: 'Universidad Tecnológica Nacional — Mendoza, Argentina',
    contactTitle: 'Let’s build something together.',
    contactLead: 'I’m looking for a remote backend or fullstack role with a U.S.-based company. Email is the fastest way to reach me.',
    copy: 'Copy email', copied: 'Email copied', present: 'Present',
    footer: 'Designed & built by Elias Acevedo · Mendoza, Argentina'
  },
  es: {
    navAbout: 'Sobre mí', navWork: 'Proyectos', navExp: 'Experiencia', navStack: 'Stack', navImpact: 'Impacto', navContact: 'Contacto',
    role: 'Desarrollador Fullstack · Java / Spring Boot y Angular',
    status: 'Disponible para trabajo remoto con empresas de EE.UU.',
    heroTitle: 'Construyo backends sólidos y las interfaces que la gente realmente usa.',
    heroLead: 'Más de 5 años desarrollando aplicaciones empresariales y microservicios con Java / Spring Boot y Angular — y, en mi tiempo libre, apps móviles que personas reales usan todos los días.',
    ctaTalk: 'Hablemos', ctaCv: 'Descargar CV', ctaWork: 'Ver proyectos',
    usTitle: 'Listo para equipos de EE.UU.',
    usLead: 'Lo que un reclutador suele preguntar antes de la primera llamada.',
    usTzK: 'Zona horaria', usTzV: 'Desde GMT-3 (Mendoza, Argentina), apenas 1 a 2 h adelante de Nueva York. Horario flexible — puedo trabajar en el horario de cualquier zona de EE.UU.',
    usEnK: 'Inglés', usEnV: 'Nivel profesional — dailies, code reviews y especificaciones escritas en inglés.',
    usCtK: 'Contratación', usCtV: 'Remoto full-time como contractor independiente (Deel o contrato directo).',
    usWyK: 'Cómo trabajo', usWyV: 'Agile/Scrum, cómodo en modo asincrónico, avances claros por escrito, tests antes de mergear, flujos con IA validados a mano.',
    aboutTitle: 'Sobre mí',
    about1: 'Soy <strong>desarrollador fullstack</strong> especializado en <strong>Java / Spring Boot y Angular</strong>. Entrego APIs REST seguras y escalables, modernizo sistemas legacy hacia microservicios y despliego servicios en contenedores sobre <strong>Kubernetes / OpenShift</strong>.',
    about2: 'Durante el último año armé <strong>flujos de desarrollo asistidos por IA</strong> para generar tests, documentación y code review — siempre validando cada resultado antes de mergear. Me gusta enseñar: di clases de Java a 100 alumnos en Digital House.',
    about3: 'Fuera del trabajo desarrollo <strong>apps móviles de punta a punta</strong>: una ya administra un estudio de danza real todos los días y la otra es una app de finanzas familiares camino a Google Play.',
    workTitle: 'Proyectos',
    workLead: 'Dos apps que diseñé y construí desde cero — idea, UX, arquitectura y entrega.',
    sampleNote: 'Pantallas de ejemplo — pronto, capturas reales.',
    privateNote: 'Código privado — solo descripción del producto.',
    expTitle: 'Experiencia', stackTitle: 'Stack tecnológico', impactTitle: 'Impacto', eduTitle: 'Formación',
    eduDegree: 'Ingeniería en Sistemas de Información', eduSchool: 'Universidad Tecnológica Nacional — Mendoza, Argentina',
    contactTitle: 'Construyamos algo juntos.',
    contactLead: 'Busco un puesto remoto backend o fullstack en una empresa de EE.UU. El email es la forma más rápida de contactarme.',
    copy: 'Copiar email', copied: 'Email copiado', present: 'Actualidad',
    footer: 'Diseñado y desarrollado por Elias Acevedo · Mendoza, Argentina'
  }
};

const PROJECTS = [
  {
    id: 'cursia', name: 'Cursia', color: '#1f6f8b',
    status: { en: 'In production · used daily', es: 'En producción · uso diario' },
    tagline: { en: 'Management app for dance studios and course-based businesses.', es: 'App de gestión para estudios de danza y negocios de cursos.' },
    story: {
      en: 'Born from a real need: my wife runs a folk dance studio and was tracking students, fees and attendance on paper and WhatsApp. Cursia replaced all of it — she runs the studio from her phone every day, and every new version comes from her feedback.',
      es: 'Nació de una necesidad real: mi esposa dirige un estudio de danza folklórica y llevaba alumnos, cuotas y asistencia en papel y WhatsApp. Cursia reemplazó todo eso — ella maneja el estudio desde el celular todos los días, y cada versión nueva surge de su feedback.'
    },
    features: {
      en: ['Students, parents/guardians and courses in one place', 'Per-course fees, due dates, late fees and enrollment — with the option to waive a surcharge', 'Attendance, events and class planning', 'Payment reminders to families via WhatsApp', 'Editable flyers exported as images for WhatsApp groups', 'Offline-first: data stays on the phone, with backup export/import', 'Custom branding: studio name, logo, colors and currency'],
      es: ['Alumnos, padres/tutores y cursos en un solo lugar', 'Cuotas, vencimientos, recargos e inscripción por curso — con opción de perdonar un recargo', 'Asistencia, eventos y planificación de clases', 'Recordatorios de pago a las familias por WhatsApp', 'Flyers editables exportados como imagen para grupos de WhatsApp', 'Offline-first: los datos quedan en el celular, con backup para exportar/importar', 'Marca personalizable: nombre del estudio, logo, colores y moneda']
    },
    stack: ['Ionic', 'Angular', 'Capacitor', 'SQLite', 'Android'],
    screens: ['c1', 'c2', 'c3']
  },
  {
    id: 'finanzia', name: 'Finanzia', color: '#d9467a',
    status: { en: 'In development · Google Play launch planned', es: 'En desarrollo · lanzamiento en Google Play' },
    tagline: { en: 'Personal and family finance app with a shared household space.', es: 'App de finanzas personales y familiares con un espacio compartido.' },
    story: {
      en: 'A full product, not a demo: mobile app plus a containerized backend, designed screen by screen and built in stages toward a public launch with a Premium subscription.',
      es: 'Un producto completo, no una demo: app móvil más un backend en contenedores, diseñada pantalla por pantalla y construida por etapas hacia un lanzamiento público con suscripción Premium.'
    },
    features: {
      en: ['Income, expenses and budgets by category', 'Credit-card purchases in installments, with interest, charged on each statement’s closing month', 'Long-term debts such as loans or car plans of up to ~70 installments', 'Shared family space: the owner decides who can edit and who can only view', 'Premium subscription via Google Play (monthly and yearly)'],
      es: ['Ingresos, gastos y presupuestos por categoría', 'Compras con tarjeta en cuotas, con interés, imputadas en el mes de cierre del resumen', 'Deudas largas como préstamos o planes de auto de hasta ~70 cuotas', 'Espacio familiar compartido: el dueño define quién edita y quién solo mira', 'Suscripción Premium vía Google Play (mensual y anual)']
    },
    stack: ['Ionic', 'Angular', 'REST API', 'Docker', 'Railway', 'Google Play Billing'],
    screens: ['f1', 'f2', 'f3']
  }
];

const EXPERIENCE = [
  { role: { en: 'Fullstack Developer (Java / Angular)', es: 'Desarrollador Fullstack (Java / Angular)' }, org: 'NTT DATA', from: 'Jul 2025', to: null,
    bullets: { en: ['Build and maintain a microservices application with Spring Boot and Angular 17, deployed as independently scaled services on Kubernetes.', 'Ship frontend deployments on OpenShift and backend releases through Jenkins pipelines.', 'Use custom AI-assisted workflows to generate tests, documentation and code reviews — every result validated before merge.'],
      es: ['Desarrollo y mantengo una aplicación de microservicios con Spring Boot y Angular 17, desplegada como servicios escalados de forma independiente en Kubernetes.', 'Despliego el frontend en OpenShift y el backend mediante pipelines de Jenkins.', 'Uso flujos asistidos por IA para generar tests, documentación y code reviews — cada resultado validado antes de mergear.'] } },
  { role: { en: 'Fullstack Developer (Java / Angular)', es: 'Desarrollador Fullstack (Java / Angular)' }, org: 'IT Patagonia', from: 'Feb 2022', to: 'Jul 2025',
    bullets: { en: ['Led the migration of a monolith into microservices, cutting deployment time by 35%.', 'Designed authentication and role-based authorization with Spring Security, hardened against the OWASP Top 10.', 'Containerized apps with Docker (−40% environment setup time) and automated GitLab CI/CD (−20% time-to-production).'],
      es: ['Lideré la migración de un monolito a microservicios, reduciendo 35% el tiempo de despliegue.', 'Diseñé autenticación y autorización por roles con Spring Security, reforzada contra el OWASP Top 10.', 'Contenericé aplicaciones con Docker (−40% en armado de entornos) y automaticé CI/CD en GitLab (−20% en tiempo a producción).'] } },
  { role: { en: 'Java Instructor', es: 'Instructor de Java' }, org: 'Digital House', from: 'Jul 2022', to: 'Dec 2022',
    bullets: { en: ['Taught Java, Spring, REST API design and Hibernate to a cohort of 100 students; pass rate up 35%.'],
      es: ['Enseñé Java, Spring, diseño de APIs REST e Hibernate a una cohorte de 100 alumnos; la tasa de aprobación subió 35%.'] } },
  { role: { en: 'Fullstack Developer', es: 'Desarrollador Fullstack' }, org: 'Interkont', from: 'Feb 2021', to: 'Jan 2022',
    bullets: { en: ['Built features for a construction contract management system with 1,000+ users (Java, JSF).'],
      es: ['Desarrollé funcionalidades para un sistema de gestión de contratos de obra con más de 1.000 usuarios (Java, JSF).'] } }
];

const IMPACT = [
  { n: '−35%', t: { en: 'deployment time after a monolith → microservices migration', es: 'en tiempo de despliegue tras migrar un monolito a microservicios' } },
  { n: '−40%', t: { en: 'environment setup time by standardizing on Docker', es: 'en armado de entornos al estandarizar con Docker' } },
  { n: '−20%', t: { en: 'time-to-production with GitLab CI/CD pipelines', es: 'en tiempo a producción con pipelines de GitLab CI/CD' } },
  { n: '1,000+', t: { en: 'active users on a contract management system', es: 'usuarios activos en un sistema de gestión de contratos' } },
  { n: '100', t: { en: 'students trained in Java and Spring at Digital House', es: 'alumnos formados en Java y Spring en Digital House' } }
];

const STACK = [
  { g: { en: 'Backend', es: 'Backend' }, items: ['Java 11/17', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'Microservices', 'Spring Cloud'] },
  { g: { en: 'Frontend & mobile', es: 'Frontend y mobile' }, items: ['Angular 14–17', 'TypeScript', 'RxJS', 'Ionic', 'Capacitor', 'Angular Material', 'PrimeNG'] },
  { g: { en: 'DevOps & cloud', es: 'DevOps y cloud' }, items: ['Docker', 'Kubernetes', 'OpenShift', 'Jenkins', 'GitLab CI/CD', 'Maven', 'AWS'] },
  { g: { en: 'Data & testing', es: 'Datos y testing' }, items: ['PostgreSQL', 'MySQL', 'SQLite', 'JUnit', 'Mockito', 'TDD'] },
  { g: { en: 'AI-assisted development', es: 'Desarrollo asistido por IA' }, items: ['Test generation', 'Automated docs', 'AI code review'] }
];

/* ---------- Sample app screens (SVG) ---------- */
let _pc = 0;
function phoneSVG(id) {
  const uid = id + '-' + (++_pc);
  const W = 260, H = 540;
  const t = (x, y, s, w, fill, txt, anchor) => `<text x="${x}" y="${y}" font-size="${s}" font-weight="${w}" fill="${fill}"${anchor ? ` text-anchor="${anchor}"` : ''}>${txt}</text>`;
  const r = (x, y, w, h, rx, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" ${extra}/>`;
  const frame = (bg, body) => `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Roboto,system-ui,sans-serif" role="img">
    ${r(0, 0, W, H, 34, '#111')}${r(8, 8, W - 16, H - 16, 27, bg)}
    <g clip-path="url(#clip-${uid})"><clipPath id="clip-${uid}">${r(8, 8, W - 16, H - 16, 27, '#000')}</clipPath>
    ${t(28, 34, 10, 600, '#555', '9:41')}${r(W / 2 - 34, 18, 68, 18, 9, '#111')}${r(W - 52, 26, 22, 9, 3, '#555')}
    ${body}</g></svg>`;
  const C = '#1f6f8b', CL = '#e7f1f4', F = '#d9467a', FL = '#fbe8ef', INK = '#1d2329', MUT = '#78828c';
  const chip = (x, y, txt, fg, bg) => r(x, y, txt.length * 5.6 + 14, 18, 9, bg) + t(x + 7, y + 12.5, 9.5, 600, fg, txt);
  if (id === 'c1') return frame('#f6f8f9', `
    ${r(8, 44, W - 16, 96, 0, C)}${t(24, 74, 10, 500, '#cfe3ea', 'Estudio de Danza')}${t(24, 98, 19, 700, '#fff', 'Hola, Marlene')}${t(24, 120, 10.5, 400, '#cfe3ea', 'Martes 24 · 2 clases hoy')}
    ${[['48', 'Alumnos'], ['7', 'Cuotas pend.'], ['92%', 'Asistencia']].map((s, i) => r(20 + i * 76, 152, 68, 64, 12, '#fff', 'stroke="#e3e8eb"') + t(54 + i * 76, 184, 18, 700, i === 1 ? '#c2453a' : INK, s[0], 'middle') + t(54 + i * 76, 202, 8.5, 500, MUT, s[1], 'middle')).join('')}
    ${t(22, 244, 12, 700, INK, 'Próximas clases')}
    ${[['18:00', 'Folklore Infantil', '14 alumnos'], ['19:30', 'Folklore Juvenil', '11 alumnos']].map((c, i) => r(20, 256 + i * 66, W - 40, 56, 12, '#fff', 'stroke="#e3e8eb"') + r(20, 256 + i * 66, 5, 56, 2, C) + t(36, 280 + i * 66, 13, 700, C, c[0]) + t(84, 279 + i * 66, 11.5, 600, INK, c[1]) + t(84, 296 + i * 66, 9.5, 400, MUT, c[2])).join('')}
    ${t(22, 412, 12, 700, INK, 'Evento')}${r(20, 424, W - 40, 62, 12, CL)}${t(34, 449, 11.5, 700, INK, 'Muestra de fin de año')}${t(34, 467, 9.5, 500, MUT, 'Sáb 13 dic · 20:00')}
    ${r(8, H - 58, W - 16, 50, 0, '#fff', 'stroke="#e3e8eb"')}${['Inicio', 'Alumnos', 'Cuotas', 'Más'].map((n, i) => t(42 + i * 59, H - 28, 9.5, i === 0 ? 700 : 500, i === 0 ? C : MUT, n, 'middle')).join('')}`);
  if (id === 'c2') return frame('#f6f8f9', `
    ${t(22, 70, 18, 700, INK, 'Cuotas · Noviembre')}${t(22, 90, 10, 500, MUT, 'Folklore Infantil')}
    ${r(20, 104, W - 40, 34, 17, '#fff', 'stroke="#e3e8eb"')}${t(38, 125, 10.5, 500, MUT, 'Buscar alumno…')}
    ${[['Sofía M.', 'Pagado', '#1d7a4c', '#e3f4ea'], ['Tomás R.', 'Vence el 10', '#8a5a00', '#fdf1d8'], ['Valentina G.', 'Atrasada + recargo', '#b43a30', '#fbe6e3'], ['Joaquín P.', 'Pagado', '#1d7a4c', '#e3f4ea'], ['Martina L.', 'Recargo perdonado', '#1f6f8b', '#e7f1f4']].map((s, i) => {
      const y = 152 + i * 56;
      return r(20, y, W - 40, 48, 12, '#fff', 'stroke="#e3e8eb"') + `<circle cx="42" cy="${y + 24}" r="12" fill="${CL}"/>` + t(42, y + 28, 10, 700, C, s[0][0], 'middle') + t(62, y + 21, 11, 600, INK, s[0]) + chip(62, y + 26, s[1], s[2], s[3]);
    }).join('')}
    ${r(20, H - 90, W - 40, 44, 22, '#25a35a')}${t(W / 2, H - 63, 11.5, 700, '#fff', 'Recordar por WhatsApp (2)', 'middle')}`);
  if (id === 'c3') return frame('#eef2f4', `
    ${t(22, 70, 18, 700, INK, 'Flyer del evento')}${t(22, 90, 10, 500, MUT, 'Se comparte como imagen')}
    ${r(28, 108, W - 56, 300, 14, C)}<circle cx="${W / 2}" cy="160" r="26" fill="#fff"/>${t(W / 2, 166, 15, 800, C, 'MB', 'middle')}
    ${t(W / 2, 218, 10, 600, '#cfe3ea', 'ESTUDIO DE DANZA', 'middle')}${t(W / 2, 252, 21, 800, '#fff', 'Muestra de', 'middle')}${t(W / 2, 278, 21, 800, '#fff', 'fin de año', 'middle')}
    ${r(64, 300, W - 128, 1, 0, '#7fb3c4')}${t(W / 2, 326, 12, 600, '#fff', 'Sábado 13 de diciembre', 'middle')}${t(W / 2, 346, 11, 500, '#cfe3ea', '20:00 · Salón principal', 'middle')}
    ${t(W / 2, 384, 10, 500, '#cfe3ea', '¡Las esperamos con sus familias!', 'middle')}
    ${r(28, 426, 96, 40, 20, '#fff', 'stroke="#cdd8dd"')}${t(76, 451, 11, 700, INK, 'Editar', 'middle')}
    ${r(134, 426, 98, 40, 20, '#25a35a')}${t(183, 451, 11, 700, '#fff', 'Compartir', 'middle')}`);
  if (id === 'f1') {
    const arcs = [[0.42, F], [0.24, '#f39bb9'], [0.18, '#7a5cc4'], [0.16, '#e2c9d2']];
    let a0 = -Math.PI / 2; const cx = 92, cy = 300, rr = 46;
    const donut = arcs.map(([p, col]) => { const a1 = a0 + p * 2 * Math.PI; const big = p > 0.5 ? 1 : 0; const d = `M ${cx + rr * Math.cos(a0)} ${cy + rr * Math.sin(a0)} A ${rr} ${rr} 0 ${big} 1 ${cx + rr * Math.cos(a1)} ${cy + rr * Math.sin(a1)}`; a0 = a1; return `<path d="${d}" stroke="${col}" stroke-width="18" fill="none"/>`; }).join('');
    return frame('#fff7fa', `
      ${t(22, 70, 10.5, 500, MUT, 'Noviembre · Familia')}${t(22, 100, 26, 800, INK, '$ 1.284.500')}${t(22, 120, 10, 500, '#1d7a4c', 'Disponible este mes')}
      ${r(20, 138, 106, 58, 12, '#fff', 'stroke="#f1d5df"')}${t(32, 160, 9, 500, MUT, 'Ingresos')}${t(32, 182, 14, 700, '#1d7a4c', '$ 2.150.000')}
      ${r(134, 138, 106, 58, 12, '#fff', 'stroke="#f1d5df"')}${t(146, 160, 9, 500, MUT, 'Gastos')}${t(146, 182, 14, 700, '#b43a30', '$ 865.500')}
      ${t(22, 228, 12, 700, INK, 'Gastos por categoría')}${donut}
      ${[['Hogar', F], ['Súper', '#f39bb9'], ['Auto', '#7a5cc4'], ['Otros', '#e2c9d2']].map((c, i) => `<circle cx="160" cy="${270 + i * 20}" r="5" fill="${c[1]}"/>` + t(172, 274 + i * 20, 10, 500, INK, c[0])).join('')}
      ${t(22, 384, 12, 700, INK, 'Últimos movimientos')}
      ${[['Supermercado', '−$ 48.300'], ['Sueldo', '+$ 1.150.000'], ['Nafta', '−$ 32.000']].map((m, i) => t(22, 410 + i * 24, 11, 500, INK, m[0]) + t(W - 22, 410 + i * 24, 11, 700, m[1][0] === '+' ? '#1d7a4c' : INK, m[1], 'end')).join('')}
      ${r(W - 70, H - 82, 46, 46, 23, F)}${t(W - 47, H - 52, 24, 400, '#fff', '+', 'middle')}`);
  }
  if (id === 'f2') return frame('#fff7fa', `
    ${t(22, 70, 18, 700, INK, 'Cuotas y deudas')}${t(22, 90, 10, 500, MUT, 'Impacta en el resumen de diciembre')}
    ${[['Heladera', 'Visa · 6 de 12', 6 / 12, '$ 58.900'], ['Préstamo auto', 'Banco · 14 de 70', 14 / 70, '$ 182.000'], ['Notebook', 'Master · 2 de 6', 2 / 6, '$ 95.400'], ['Colchón', 'Visa · 9 de 9', 1, '$ 41.200']].map((d, i) => {
      const y = 108 + i * 84;
      return r(20, y, W - 40, 74, 14, '#fff', 'stroke="#f1d5df"') + t(34, y + 24, 12, 700, INK, d[0]) + t(W - 34, y + 24, 12, 700, INK, d[3], 'end') + t(34, y + 41, 9.5, 500, MUT, d[1]) + r(34, y + 52, W - 68, 7, 4, '#f6dbe5') + r(34, y + 52, (W - 68) * d[2], 7, 4, d[2] === 1 ? '#1d7a4c' : F);
    }).join('')}
    ${r(20, H - 106, W - 40, 58, 14, FL)}${t(34, H - 80, 10, 500, MUT, 'Total cuotas del mes')}${t(34, H - 60, 16, 800, INK, '$ 377.500')}`);
  if (id === 'f3') return frame('#fff7fa', `
    ${t(22, 70, 18, 700, INK, 'Espacio familiar')}${t(22, 90, 10, 500, MUT, 'Todo se comparte entre integrantes')}
    ${r(20, 108, W - 40, 70, 14, F)}${t(34, 136, 13, 700, '#fff', 'Familia Acevedo')}${t(34, 156, 10, 500, '#fde3ec', '3 integrantes · Premium')}
    ${[['Elias', 'Dueño', '#fff', F], ['Marlene', 'Puede editar', F, FL], ['Invitado', 'Solo lectura', '#6b5aa8', '#efeaf9']].map((m, i) => {
      const y = 196 + i * 64;
      return r(20, y, W - 40, 54, 12, '#fff', 'stroke="#f1d5df"') + `<circle cx="46" cy="${y + 27}" r="15" fill="${FL}"/>` + t(46, y + 31, 11, 700, F, m[0][0], 'middle') + t(70, y + 31, 12, 600, INK, m[0]) + chip(W - 34 - (m[1].length * 5.6 + 14), y + 18, m[1], m[2], m[3]);
    }).join('')}
    ${r(20, 400, W - 40, 44, 22, '#fff', `stroke="${F}" stroke-width="1.5"`)}${t(W / 2, 427, 11.5, 700, F, 'Invitar integrante', 'middle')}
    ${t(W / 2, 474, 9.5, 500, MUT, 'El dueño define permisos de cada miembro', 'middle')}`);
  return '';
}

/* ---------- i18n runtime ---------- */
let LANG = 'en';
try { const s = localStorage.getItem('ea-lang'); if (s === 'es' || s === 'en') LANG = s; } catch (e) {}
const L = o => (o && typeof o === 'object' && !Array.isArray(o)) ? o[LANG] : o;
function applyLang(render) {
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-t]').forEach(el => { const v = T[LANG][el.dataset.t]; if (v != null) el.innerHTML = v; });
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === LANG));
  render();
}
function initLang(render) {
  document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => {
    LANG = b.dataset.lang; try { localStorage.setItem('ea-lang', LANG); } catch (e) {}
    applyLang(render);
  }));
  applyLang(render);
}
function copyEmail(toastEl) {
  const done = () => { if (!toastEl) return; toastEl.textContent = T[LANG].copied; toastEl.classList.add('show'); setTimeout(() => toastEl.classList.remove('show'), 1800); };
  try { navigator.clipboard.writeText(EMAIL).then(done, done); } catch (e) { done(); }
}

{
  const $ = s => document.querySelector(s);
  $('#fan').innerHTML = ['c1', 'f1', 'c2', 'f3', 'c3'].map(phoneSVG).join('');
  $('#mail').textContent = EMAIL; $('#mail').href = 'mailto:' + EMAIL;
  ['#cvBtn', '#cvBtn2'].forEach(s => $(s).href = LINKS.cv);
  $('#li').href = LINKS.linkedin; $('#gh').href = LINKS.github;
  $('#yr').textContent = new Date().getFullYear();
  $('#copyBtn').addEventListener('click', () => copyEmail($('#toast')));
  const screens = {}; PROJECTS.forEach(p => p.screens.forEach(s => screens[s] = phoneSVG(s)));
  const bg = { cursia: '#17566c', finanzia: '#b8335f' };
  const render = () => {
    $('#projects').innerHTML = PROJECTS.map(p => `<section class="chapter" style="background:${bg[p.id]}"><div class="wrap ch">
      <div><span class="kick">${L(p.status)}</span><h3>${p.name}</h3><p class="tag">${L(p.tagline)}</p><p class="story">${L(p.story)}</p>
      <ul>${L(p.features).map(f => `<li>${f}</li>`).join('')}</ul>
      <div class="chips">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
      <p class="note">${T[LANG].sampleNote} ${T[LANG].privateNote}</p></div>
      <div class="shots">${p.screens.map(s => screens[s]).join('')}</div></div></section>`).join('');
    $('#exp').innerHTML = EXPERIENCE.map(e => `<div class="job"><div><div class="when">${e.from} — ${e.to || T[LANG].present}</div><div class="org">${e.org}</div></div>
      <div><h3>${L(e.role)}</h3><ul>${L(e.bullets).map(b => `<li>${b}</li>`).join('')}</ul></div></div>`).join('');
    $('#imp').innerHTML = IMPACT.map(i => `<div><b>${i.n}</b><p>${L(i.t)}</p></div>`).join('');
    $('#stk').innerHTML = STACK.map(g => `<div class="card"><b>${L(g.g)}</b><div class="chips" style="margin-top:8px">${g.items.map(s => `<span>${s}</span>`).join('')}</div></div>`).join('');
  };
  initLang(render);
}
