/* ═══════════════════════════════════════════════════════
   EDRIC CARVALHO — Interactive Portfolio Script
   Network Canvas | PT/EN i18n | Filters | Theme | UX
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // ── i18n Dictionary (PT-BR & EN) ──
  const I18N = {
    pt: {
      'nav.about': 'Sobre',
      'nav.highlights': 'Diferenciais',
      'nav.skills': 'Competências',
      'nav.projects': 'Projetos',
      'nav.experience': 'Trajetória',
      'nav.contact': 'Contato',
      'nav.cv': 'Currículo',

      'hero.status': 'Aberto a Estágios · Presencial, Híbrido ou Remoto · Qualquer Período',
      'hero.greeting': 'Olá, eu sou',
      'hero.lead':
        'Estudante de <strong>Engenharia da Computação</strong> com perfil mão na massa, conectando <strong>software, hardware, eletrônica e infraestrutura de redes</strong>. Comprometido em vestir a camisa, aprender rápido, liderar com clareza e entregar resultados exemplares no prazo.',
      'hero.track1': 'Engenharia da Computação',
      'hero.track2': 'Eletrônica & Embarcados',
      'hero.track3': 'Infraestrutura de Redes',
      'hero.ctaProjects': 'Explorar Projetos',
      'hero.ctaContact': 'Falar Comigo',

      'card.role': 'Engenharia da Computação · UniCEUB',
      'card.kTarget': 'Objetivo',
      'card.vTarget': 'Vagas de Estágio',
      'card.kMode': 'Modalidade',
      'card.vMode': 'Presencial · Híbrido · Remoto',
      'card.kShift': 'Disponibilidade',
      'card.vShift': 'Qualquer período (M / T / N)',
      'card.kCert': 'Certificação',
      'card.vCert': 'CCNA — Cisco NetAcad (Em curso)',
      'card.kLang': 'Idiomas',
      'card.vLang': 'Português (Nativo) · Inglês (Avançado)',
      'card.copyEmail': 'Copiar E-mail',

      'about.kicker': '01 // Sobre Mim',
      'about.title': 'Engenharia prática com <span class="gradient-text">foco em resultado</span>',
      'about.p1':
        'Sou <strong>Edric da Silva de Carvalho</strong>, graduando em <strong>Engenharia da Computação</strong> pelo UniCEUB (2023 – 2027), em Brasília – DF. Tenho perfil genuinamente <strong>mão na massa</strong>: gosto de ir à raiz do problema, analisar causas, prototipar e entregar soluções limpas, confiáveis e eficientes.',
      'about.p2':
        'Minha base une <strong>software, hardware, eletrônica e infraestrutura de redes</strong> — desde programação em C, Java e Python até diagnóstico avançado de computadores, projetos com microcontroladores (<strong>Raspberry Pi RP2040</strong>), roteamento com <strong>Load Balance Dual-WAN</strong> e preparação para certificação <strong>CCNA</strong>.',
      'about.p3':
        'Busco uma oportunidade de <strong>estágio</strong> onde eu possa vestir a camisa da empresa, evoluir em ritmo acelerado e contribuir desde o primeiro dia com dedicação, organização e liderança colaborativa.',
      'about.m1': 'Previsão de Formatura (UniCEUB)',
      'about.m2': 'Frentes: Comp., Eletrônica & Redes',
      'about.m3': 'Inglês Avançado (Leitura, Escrita e Fala)',
      'about.m4': 'Flexível: Presencial, Híbrido ou Remoto',

      'hi.kicker': '02 // Diferenciais Profissionais',
      'hi.title': 'Como eu trabalho e <span class="gradient-text">gero valor</span>',
      'hi.c1Title': 'Alta Dedicação & Senso de Dono',
      'hi.c1Desc':
        'Trabalho duro e visto a camisa da empresa. Encaro cada tarefa como um compromisso pessoal de qualidade, assumindo responsabilidade do diagnóstico inicial até a entrega final validada.',
      'hi.c1Tag': 'Comprometimento & Ownership',
      'hi.c2Title': 'Aprendizado Acelerado',
      'hi.c2Desc':
        'Curva de aprendizado rápida para absorver novas stacks, equipamentos e protocolos — comprovada transitando entre C, Java, Python, Linux, CCNA, RP2040 e IA local.',
      'hi.c2Tag': 'Fast Learner',
      'hi.c3Title': 'Liderança Técnica',
      'hi.c3Desc':
        'Experiência prática liderando equipe na construção do robô <strong>762 Raptor</strong> e atuando como monitor de programação, alinhando pessoas e destravando problemas técnicos.',
      'hi.c3Tag': 'Team Leadership',
      'hi.c4Title': 'Gestão de Tempo & Entrega Exemplar',
      'hi.c4Desc':
        'Organização sistemática de prioridades e cronogramas. Consigo equilibrar graduação, preparação CCNA, projetos pessoais e atendimento a clientes mantendo rigor técnico e entregas pontuais.',
      'hi.c4Tag': 'Disciplina & Excelência',

      'skills.kicker': '03 // Stack & Competências',
      'skills.title': 'Arsenal <span class="gradient-text">técnico</span>',
      'skills.netTitle': 'Redes & Infraestrutura',
      'skills.netSub': 'Foco CCNA & Alta Disponibilidade',
      'skills.osTitle': 'Sistemas Operacionais & DevOps',
      'skills.osSub': 'Administração, Containers & IA Local',
      'skills.hwTitle': 'Hardware & Eletrônica',
      'skills.hwSub': 'Embarcados, Robótica & Diagnóstico',
      'skills.devTitle': 'Programação, Dados & APIs',
      'skills.devSub': 'Desenvolvimento & Ciência de Dados',

      'filter.all': 'Todos',
      'filter.network': 'Redes & Infra',
      'filter.hardware': 'Eletrônica & HW',
      'filter.robotics': 'Robótica & Eletrônica',
      'filter.software': 'Software & Dados',

      'proj.kicker': '04 // Projetos & Prática',
      'proj.title': 'Soluções construídas <span class="gradient-text">na prática</span>',
      'proj.ongoing': 'Contínuo',
      'proj.viewGh': 'Ver GitHub',
      'proj.p1Badge': 'Liderança · Robótica',
      'proj.p1Title': 'Robô 762 Raptor — Batalha de Robôs UniCEUB',
      'proj.p1Desc':
        'Liderei a equipe multidisciplinar da concepção à competição na disciplina de Robótica (Prof. Hudson Zaidan). Coordenamos cronograma, delegação de tarefas, modelagem 3D, eletrônica, sensores e controle embarcado para construir um robô competitivo de sumô sob prazo rigoroso.',
      'proj.p2Badge': 'Infraestrutura · Redes',
      'proj.p2Title': 'Infraestrutura de Rede com Load Balance Dual-WAN',
      'proj.p2Desc':
        'Projeto e implementação de infraestrutura de rede doméstica avançada com balanceamento de carga Dual-WAN, garantindo redundância, failover automático e alta disponibilidade, alinhado aos estudos de roteamento e switching para certificação CCNA.',
      'proj.p2Meta': 'Alta Disponibilidade & Redundância',
      'proj.p3Badge': 'Eletrônica · Embarcados',
      'proj.p3Title': 'Sistemas Embarcados com Raspberry Pi RP2040',
      'proj.p3Desc':
        'Prototipagem e desenvolvimento de projetos práticos utilizando microcontroladores Raspberry Pi RP2040, integrando circuitos de eletrônica básica, leitura de periféricos e firmware eficiente.',
      'proj.p4Badge': 'IA Local · Dados',
      'proj.p4Title': 'Execução de IA Local (Ollama) & Desafios Kaggle',
      'proj.p4Desc':
        'Configuração, otimização e execução de modelos de linguagem locais via Ollama em ambiente Linux/WSL 2, somada à participação em desafios práticos de ciência de dados no Kaggle utilizando Python e SQL.',
      'proj.p5Badge': 'Experiência · Autônomo',
      'proj.p5Title': 'Suporte Técnico, Diagnóstico & Recuperação de Dados',
      'proj.p5Desc':
        'Atuação autônoma em montagem, manutenção preventiva/corretiva, diagnóstico avançado de hardware/software, otimização de sistemas operacionais, recuperação de dados e configuração de redes para clientes finais.',
      'proj.p5Meta': 'Gestão de prazos & qualidade ponta a ponta',
      'proj.p6Badge': 'Acadêmico · Mentoria',
      'proj.p6Title': 'Monitoria de Programação em Linguagem C',
      'proj.p6Desc':
        'Apoio técnico e didático a colegas de engenharia na construção de lógica de programação, depuração de código e resolução de problemas em C — fortalecendo comunicação clara e domínio algorítmico.',

      'exp.kicker': '05 // Trajetória & Formação',
      'exp.title': 'Evolução acadêmica e <span class="gradient-text">certificações</span>',
      'exp.t1Date': '2023 – Previsão: 2027',
      'exp.t1Title': 'Bacharelado em Engenharia da Computação',
      'exp.t1Desc':
        'Formação completa integrando arquitetura de computadores, eletrônica, redes, sistemas operacionais, engenharia de software e ciência de dados.',
      'exp.t2Date': 'Em andamento',
      'exp.t2Title': 'Preparatório para Certificação CCNA',
      'exp.t2Desc':
        'Aprofundamento prático em roteamento, switching, protocolos de rede, segurança básica e laboratórios no Cisco Packet Tracer.',
      'exp.t3Date': '2024 – Atual',
      'exp.t3Title': 'Técnico de Suporte e Manutenção de Computadores',
      'exp.t3Org': 'Atuação Autônoma',
      'exp.t3Desc':
        'Diagnóstico avançado, montagem, otimização de sistemas, recuperação de dados e configuração de redes locais com gestão direta de prazos.',
      'exp.t4Title': 'Líder de Projeto de Robótica & Java Avançado',
      'exp.t4Desc':
        'Liderança da equipe do robô 762 Raptor na Batalha de Robôs do UniCEUB e conclusão do curso Java (Do Básico ao Avançado) pela Cod3r.',
      'exp.t5Title': 'Monitor de Programação em C',
      'exp.t5Desc':
        'Apoio individual e em grupo na compreensão de lógica de programação, resolução de algoritmos e depuração de código em C.',
      'exp.focusTitle': 'Áreas de Interesse para Estágio',
      'exp.f1': 'Engenharia da Computação & Desenvolvimento',
      'exp.f2': 'Eletrônica, Hardware & Sistemas Embarcados',
      'exp.f3': 'Infraestrutura de Redes, Suporte & Operações (NOC)',
      'exp.f4': 'Sistemas Linux, Automação & Dados',
      'exp.docsTitle': 'Baixar Currículo (.docx)',
      'exp.docsNote': 'Versões enxutas de 1 página, otimizadas para sistemas ATS e prontas para revisão rápida.',
      'exp.dlPt': 'Currículo em Português (.docx)',
      'exp.dlEn': 'English Resume (.docx)',

      'contact.kicker': '06 // Contato',
      'contact.title': 'Pronto para <span class="gradient-text">somar ao seu time</span>',
      'contact.bannerTitle': 'Disponível imediatamente para vagas de estágio',
      'contact.bannerSub':
        'Engenharia da Computação · Eletrônica · Infraestrutura de Redes — Presencial, Híbrido ou Remoto, em qualquer período.',
      'contact.waCta': 'Chamar no WhatsApp',
      'contact.phoneLabel': 'Telefone / WhatsApp',
      'contact.formTitle': 'Envie uma mensagem direta',
      'contact.fName': 'Seu nome',
      'contact.fEmail': 'Seu e-mail',
      'contact.fSubject': 'Assunto',
      'contact.fMsg': 'Mensagem',
      'contact.pName': 'Ex: Ana Paula (Recrutamento)',
      'contact.pEmail': 'voce@empresa.com',
      'contact.pSubject': 'Oportunidade de Estágio / Projeto',
      'contact.pMsg': 'Conte um pouco sobre a vaga, projeto ou desafio...',
      'contact.send': 'Enviar Mensagem',

      'footer.built': 'Desenvolvido por',
      'toast.copied': 'Copiado para a área de transferência:',
      'toast.mailOpen': 'Abrindo seu cliente de e-mail para enviar a mensagem...'
    },

    en: {
      'nav.about': 'About',
      'nav.highlights': 'Strengths',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.experience': 'Background',
      'nav.contact': 'Contact',
      'nav.cv': 'Resume',

      'hero.status': 'Open to Internships · On-site, Hybrid or Remote · Any Shift',
      'hero.greeting': "Hi, I'm",
      'hero.lead':
        'Hands-on <strong>Computer Engineering</strong> undergraduate bridging <strong>software, hardware, electronics, and network infrastructure</strong>. Committed to full ownership, rapid learning, clear leadership, and delivering exemplary work on schedule.',
      'hero.track1': 'Computer Engineering',
      'hero.track2': 'Electronics & Embedded',
      'hero.track3': 'Network Infrastructure',
      'hero.ctaProjects': 'Explore Projects',
      'hero.ctaContact': 'Get in Touch',

      'card.role': 'Computer Engineering · UniCEUB',
      'card.kTarget': 'Goal',
      'card.vTarget': 'Internship Roles',
      'card.kMode': 'Work Mode',
      'card.vMode': 'On-site · Hybrid · Remote',
      'card.kShift': 'Availability',
      'card.vShift': 'Any shift (M / A / E)',
      'card.kCert': 'Certification',
      'card.vCert': 'CCNA — Cisco NetAcad (In Progress)',
      'card.kLang': 'Languages',
      'card.vLang': 'Portuguese (Native) · English (Advanced)',
      'card.copyEmail': 'Copy Email',

      'about.kicker': '01 // About Me',
      'about.title': 'Hands-on engineering built for <span class="gradient-text">real results</span>',
      'about.p1':
        'I am <strong>Edric da Silva de Carvalho</strong>, a <strong>Computer Engineering</strong> undergraduate at UniCEUB (2023 – 2027) in Brasília, Brazil. I bring a practical, root-cause approach: analyzing problems thoroughly, prototyping cleanly, and shipping reliable solutions.',
      'about.p2':
        'My skill set bridges <strong>software, hardware, electronics, and network infrastructure</strong> — from C, Java, and Python development to advanced PC diagnostics, microcontroller projects (<strong>Raspberry Pi RP2040</strong>), <strong>Dual-WAN Load Balancing</strong>, and active <strong>CCNA</strong> certification training.',
      'about.p3':
        'I am seeking an <strong>internship</strong> where I can fully commit to the team’s mission, learn fast, and add value from day one through hard work, strong time management, and collaborative leadership.',
      'about.m1': 'Expected Graduation (UniCEUB)',
      'about.m2': 'Core Tracks: Comp., Electronics & Net.',
      'about.m3': 'Advanced English (Working Proficiency)',
      'about.m4': 'Flexible: On-site, Hybrid or Remote',

      'hi.kicker': '02 // Core Strengths',
      'hi.title': 'How I work and <span class="gradient-text">deliver value</span>',
      'hi.c1Title': 'Strong Work Ethic & Ownership',
      'hi.c1Desc':
        'Hard-working and deeply committed to company goals. I treat every assignment as a personal quality standard, taking full ownership from initial diagnostics to validated delivery.',
      'hi.c1Tag': 'Dedication & Ownership',
      'hi.c2Title': 'Rapid Learning Curve',
      'hi.c2Desc':
        'Quick to ramp up on new stacks, hardware, and protocols — proven by smoothly moving across C, Java, Python, Linux, CCNA labs, RP2040, and local AI deployments.',
      'hi.c2Tag': 'Fast Learner',
      'hi.c3Title': 'Technical Leadership',
      'hi.c3Desc':
        'Led a student engineering team in building the <strong>762 Raptor</strong> combat robot and mentored peers as a C Programming Teaching Assistant, aligning people to solve tough blockers.',
      'hi.c3Tag': 'Team Leadership',
      'hi.c4Title': 'Time Management & Exemplary Delivery',
      'hi.c4Desc':
        'Systematic organization of schedules and priorities. Balancing engineering coursework, CCNA studies, personal labs, and freelance IT support while consistently delivering quality on time.',
      'hi.c4Tag': 'Discipline & Excellence',

      'skills.kicker': '03 // Tech Stack & Skills',
      'skills.title': 'Technical <span class="gradient-text">toolkit</span>',
      'skills.netTitle': 'Networking & Infrastructure',
      'skills.netSub': 'CCNA Track & High Availability',
      'skills.osTitle': 'Operating Systems & DevOps',
      'skills.osSub': 'Administration, Containers & Local AI',
      'skills.hwTitle': 'Hardware & Electronics',
      'skills.hwSub': 'Embedded Systems, Robotics & Diagnostics',
      'skills.devTitle': 'Programming, Data & APIs',
      'skills.devSub': 'Software Development & Data Science',

      'filter.all': 'All',
      'filter.network': 'Networking & Infra',
      'filter.hardware': 'Electronics & HW',
      'filter.robotics': 'Robotics & Electronics',
      'filter.software': 'Software & Data',

      'proj.kicker': '04 // Projects & Experience',
      'proj.title': 'Solutions built <span class="gradient-text">hands-on</span>',
      'proj.ongoing': 'Ongoing',
      'proj.viewGh': 'View GitHub',
      'proj.p1Badge': 'Leadership · Robotics',
      'proj.p1Title': '762 Raptor Robot — UniCEUB Robot Battle',
      'proj.p1Desc':
        'Led a multidisciplinary student team from concept to competition in Robotics (Prof. Hudson Zaidan). Managed milestones, task delegation, 3D modeling, electronics, sensors, and embedded control under tight deadlines.',
      'proj.p2Badge': 'Infrastructure · Networking',
      'proj.p2Title': 'High-Availability Dual-WAN Network Infrastructure',
      'proj.p2Desc':
        'Designed and implemented an advanced home network featuring Dual-WAN Load Balancing, ensuring link redundancy, automatic failover, and connection stability alongside CCNA routing & switching labs.',
      'proj.p2Meta': 'High Availability & Redundancy',
      'proj.p3Badge': 'Electronics · Embedded',
      'proj.p3Title': 'Embedded Systems with Raspberry Pi RP2040',
      'proj.p3Desc':
        'Prototyped and built practical microcontroller projects using Raspberry Pi RP2040, combining foundational electronics circuits, peripheral interfacing, and clean firmware.',
      'proj.p4Badge': 'Local AI · Data',
      'proj.p4Title': 'Local AI Deployment (Ollama) & Kaggle Data Challenges',
      'proj.p4Desc':
        'Configured and ran local Large Language Models via Ollama on Linux/WSL 2 environments, paired with ongoing participation in practical data science competitions on Kaggle using Python and SQL.',
      'proj.p5Badge': 'Experience · Freelance',
      'proj.p5Title': 'IT Support, Diagnostics & Data Recovery',
      'proj.p5Desc':
        'Freelance custom PC assembly, preventive/corrective maintenance, advanced hardware/software troubleshooting, OS optimization, storage data recovery, and local network setup for end-user clients.',
      'proj.p5Meta': 'End-to-end timelines & service quality',
      'proj.p6Badge': 'Academic · Mentorship',
      'proj.p6Title': 'C Programming Teaching Assistant',
      'proj.p6Desc':
        'Mentored fellow undergraduates in programming logic, debugging techniques, and algorithmic problem-solving in C — sharpening clear technical communication.',

      'exp.kicker': '05 // Background & Education',
      'exp.title': 'Academic journey & <span class="gradient-text">certifications</span>',
      'exp.t1Date': '2023 – Expected 2027',
      'exp.t1Title': 'B.S. in Computer Engineering',
      'exp.t1Desc':
        'Comprehensive engineering curriculum spanning computer architecture, electronics, networking, operating systems, software engineering, and data science.',
      'exp.t2Date': 'In Progress',
      'exp.t2Title': 'CCNA Certification Training',
      'exp.t2Desc':
        'Hands-on training in routing, switching, network protocols, foundational security, and simulated topologies in Cisco Packet Tracer.',
      'exp.t3Date': '2024 – Present',
      'exp.t3Title': 'IT Support & Computer Maintenance Technician',
      'exp.t3Org': 'Freelance',
      'exp.t3Desc':
        'Advanced troubleshooting, PC assembly, OS optimization, data recovery, and local network configuration with direct client and deadline management.',
      'exp.t4Title': 'Robotics Team Lead & Advanced Java Course',
      'exp.t4Desc':
        'Led the 762 Raptor team at the UniCEUB Robot Battle and completed the Java (Beginner to Advanced) training at Cod3r.',
      'exp.t5Title': 'C Programming Teaching Assistant',
      'exp.t5Desc':
        'Guided engineering students individually and in groups on programming logic, algorithm design, and C debugging.',
      'exp.focusTitle': 'Target Internship Areas',
      'exp.f1': 'Computer Engineering & Software Development',
      'exp.f2': 'Electronics, Hardware & Embedded Systems',
      'exp.f3': 'Network Infrastructure, Support & NOC Operations',
      'exp.f4': 'Linux Systems, Automation & Data',
      'exp.docsTitle': 'Download Resume (.docx)',
      'exp.docsNote': 'Concise 1-page versions tailored for ATS screening and fast recruiter review.',
      'exp.dlPt': 'Portuguese Resume (.docx)',
      'exp.dlEn': 'English Resume (.docx)',

      'contact.kicker': '06 // Contact',
      'contact.title': 'Ready to <span class="gradient-text">join your team</span>',
      'contact.bannerTitle': 'Immediately available for internship opportunities',
      'contact.bannerSub':
        'Computer Engineering · Electronics · Network Infrastructure — On-site, Hybrid, or Remote, across any shift.',
      'contact.waCta': 'Message on WhatsApp',
      'contact.phoneLabel': 'Phone / WhatsApp',
      'contact.formTitle': 'Send a direct message',
      'contact.fName': 'Your name',
      'contact.fEmail': 'Your email',
      'contact.fSubject': 'Subject',
      'contact.fMsg': 'Message',
      'contact.pName': 'e.g. Alex Smith (Recruiting)',
      'contact.pEmail': 'you@company.com',
      'contact.pSubject': 'Internship Opportunity / Project',
      'contact.pMsg': 'Tell me about the role, team, or challenge...',
      'contact.send': 'Send Message',

      'footer.built': 'Built by',
      'toast.copied': 'Copied to clipboard:',
      'toast.mailOpen': 'Opening your email client to send the message...'
    }
  };

  const TYPING_PHRASES = {
    pt: [
      'Engenharia da Computação · UniCEUB',
      'Infraestrutura de Redes & CCNA',
      'Eletrônica, Robótica & RP2040',
      'C · Java · Python · Linux · Docker'
    ],
    en: [
      'Computer Engineering · UniCEUB',
      'Network Infrastructure & CCNA Track',
      'Electronics, Robotics & RP2040',
      'C · Java · Python · Linux · Docker'
    ]
  };

  let currentLang = localStorage.getItem('edric-lang') || 'pt';
  let currentTheme = localStorage.getItem('edric-theme') || 'dark';

  // ── Avatar Fallback Handling (never shows broken image if eu.jpg is absent) ──
  const avatarFrame = document.getElementById('avatar-frame');
  const profileImg = document.getElementById('profile-img');
  if (profileImg && avatarFrame) {
    const showFallback = () => avatarFrame.classList.add('no-photo');
    profileImg.addEventListener('error', showFallback);
    if (profileImg.complete && profileImg.naturalWidth === 0) {
      showFallback();
    }
  }

  // ── Toast Utility ──
  const toastEl = document.getElementById('toast');
  let toastTimer = null;
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2600);
  }

  // ── Apply Language ──
  function applyLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'pt';
    localStorage.setItem('edric-lang', currentLang);
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'pt-BR';

    const dict = I18N[currentLang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    document.querySelectorAll('.lang-opt').forEach((opt) => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === currentLang);
    });

    const navCv = document.getElementById('nav-cv-btn');
    if (navCv) {
      navCv.setAttribute(
        'href',
        currentLang === 'en'
          ? 'assets/Resume_Edric_Carvalho_EN.docx'
          : 'assets/Curriculo_Edric_Carvalho.docx'
      );
    }

    // Reset typing cycle smoothly for new language
    phraseIdx = 0;
    charIdx = 0;
    deleting = false;
    pauseUntil = 0;
  }

  // ── Apply Theme ──
  function applyTheme(theme) {
    currentTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('edric-theme', currentTheme);
  }

  // ── Typing Effect ──
  const typingEl = document.getElementById('typing-text');
  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;
  let pauseUntil = 0;

  function tickTyping() {
    if (!typingEl) return;
    const now = Date.now();
    if (now < pauseUntil) {
      setTimeout(tickTyping, 120);
      return;
    }

    const list = TYPING_PHRASES[currentLang];
    const phrase = list[phraseIdx % list.length];

    if (!deleting) {
      charIdx++;
      typingEl.textContent = phrase.slice(0, charIdx);
      if (charIdx >= phrase.length) {
        deleting = true;
        pauseUntil = now + 2100;
      }
    } else {
      charIdx--;
      typingEl.textContent = phrase.slice(0, charIdx);
      if (charIdx <= 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % list.length;
        pauseUntil = now + 300;
      }
    }

    setTimeout(tickTyping, deleting ? 32 : 58);
  }

  applyTheme(currentTheme);
  applyLanguage(currentLang);
  tickTyping();

  // Toggle buttons
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    applyLanguage(currentLang === 'pt' ? 'en' : 'pt');
  });

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // ── Interactive Filter Bars (Skills & Projects) ──
  document.querySelectorAll('.filter-bar').forEach((bar) => {
    const group = bar.getAttribute('data-filter-group');
    const grid = document.getElementById(`${group}-grid`);
    if (!grid) return;

    bar.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        bar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        grid.querySelectorAll('[data-category]').forEach((card) => {
          const match = filter === 'all' || card.getAttribute('data-category') === filter;
          card.classList.toggle('is-hidden', !match);
          if (match) {
            card.classList.add('visible');
          }
        });
      });
    });
  });

  // ── Mouse Spotlight Glow on Cards ──
  document.querySelectorAll('.spotlight-card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });

  // ── Copy to Clipboard Buttons ──
  document.querySelectorAll('.copy-trigger').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const value = btn.getAttribute('data-copy');
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        const tmp = document.createElement('textarea');
        tmp.value = value;
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand('copy');
        tmp.remove();
      }
      showToast(`${I18N[currentLang]['toast.copied']} ${value}`);
    });
  });

  // ── Contact Form (clean pre-filled mailto) ──
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    const body = `Nome / Name: ${name}\nE-mail: ${email}\n\n${message}`;
    const mailto = `mailto:edricdecarvalho@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast(I18N[currentLang]['toast.mailOpen']);
    window.location.href = mailto;
  });

  // ── Navbar, Scroll Progress, Active Links & Back to Top ──
  const navbar = document.getElementById('navbar');
  const progressBar = document.getElementById('scroll-progress');
  const backToTop = document.getElementById('back-to-top');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  function handleScroll() {
    const y = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar && maxScroll > 0) {
      progressBar.style.width = `${Math.min(100, (y / maxScroll) * 100)}%`;
    }

    navbar?.classList.toggle('scrolled', y > 30);
    backToTop?.classList.toggle('visible', y > 480);

    let activeId = '';
    sections.forEach((sec) => {
      if (y >= sec.offsetTop - 130) {
        activeId = sec.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Mobile Menu Drawer ──
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-links');

  navToggle?.addEventListener('click', () => {
    const open = navToggle.classList.toggle('active');
    navMenu?.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });

  navMenu?.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      navToggle?.classList.remove('active');
      navMenu.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // ── Scroll Reveal Observer ──
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  // ── Footer Year ──
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // ── Subtle Interactive Network Topology Canvas (Hero Background) ──
  const canvas = document.getElementById('network-canvas');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (canvas && !reducedMotion) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let nodes = [];
    const mouse = { x: -9999, y: -9999 };

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(22, Math.min(54, Math.floor((width * height) / 22000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        r: Math.random() * 1.6 + 1.2
      }));
    }

    const heroEl = document.getElementById('hero');
    heroEl?.addEventListener('pointermove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    heroEl?.addEventListener('pointerleave', () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    function drawNetwork() {
      ctx.clearRect(0, 0, width, height);
      const isLight = currentTheme === 'light';
      const nodeColor = isLight ? 'rgba(8, 145, 178, 0.55)' : 'rgba(34, 211, 238, 0.55)';
      const maxDist = 140;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;

        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isLight ? 0.16 : 0.22);
            ctx.strokeStyle = isLight
              ? `rgba(79, 70, 229, ${alpha})`
              : `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < 170) {
          const alpha = (1 - md / 170) * (isLight ? 0.28 : 0.42);
          ctx.strokeStyle = isLight
            ? `rgba(8, 145, 178, ${alpha})`
            : `rgba(34, 211, 238, ${alpha})`;
          ctx.lineWidth = 1.1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(drawNetwork);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    requestAnimationFrame(drawNetwork);
  }
});
