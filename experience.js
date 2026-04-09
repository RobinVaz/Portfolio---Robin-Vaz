const { useEffect, useMemo } = React;

const svgIcon = (svg) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const experienceSkillIcons = {
  'Power BI': 'logo powerbi.png',
  SQL: 'logo-sql.svg',
  Python: svgIcon(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill="#3776AB" d="M12 2c-2.6 0-4.3 1.5-4.3 4v2.6h4.3v1.2H6.2C4 9.8 3 11 3 13.5V16c0 2.5 1.7 4 4.3 4H9v-3.1c0-2.4 1.3-3.7 3.7-3.7h2.3c2.1 0 3.8-1.4 3.8-4V6c0-2.5-1.7-4-4.3-4H12Zm-2.5 2.7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/><path fill="#FFD343" d="M12 22c2.6 0 4.3-1.5 4.3-4v-2.6H12v-1.2h5.8c2.2 0 3.2-1.2 3.2-3.7V8.4c0-2.5-1.7-4-4.3-4H15v3.1c0 2.4-1.3 3.7-3.7 3.7H9c-2.1 0-3.8 1.4-3.8 4v3c0 2.5 1.7 4 4.3 4H12Zm2.5-2.7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>'
  ),
  Statistiques: svgIcon(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d5e3f5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16"/><path d="M7 16V9"/><path d="M12 16V5"/><path d="M17 16v-4"/><path d="M6 19h12"/></svg>'
  ),
  Tarification: svgIcon(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d5e3f5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M16 7.5c0-1.9-1.8-3.5-4-3.5s-4 1.3-4 3 1.2 2.5 3 3l2 .5c2 .5 3 1.5 3 3.2 0 2-1.9 3.5-4 3.5s-4-1.1-4.5-3"/><path d="M8 6h8"/><path d="M8 18h8"/></svg>'
  ),
  'Analyse concurrentielle': svgIcon(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d5e3f5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16"/><path d="M7 17l3-3 2 2 5-6"/><path d="M14 10h3v3"/></svg>'
  ),
  'Aide a la decision': svgIcon(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d5e3f5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/><path d="M7 11.5l5 2.8 5-2.8"/></svg>'
  ),
  Logistique: svgIcon(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d5e3f5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h11v10H3z"/><path d="M14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="1.5"/><circle cx="18" cy="18" r="1.5"/></svg>'
  ),
  'Distribution de repas': svgIcon(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d5e3f5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16"/><path d="M7 12v6"/><path d="M12 12v6"/><path d="M17 12v6"/><path d="M6 6h12l-1 4H7z"/></svg>'
  ),
  Accueil: svgIcon(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d5e3f5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-6h4v6"/></svg>'
  ),
  'Ecoute et accompagnement': svgIcon(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d5e3f5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4c-4 0-7 2.9-7 6.5S8 17 12 17c.9 0 1.8-.1 2.6-.4L20 18l-1.6-4.4C19.5 12.8 19 11.7 19 10.5 19 6.9 16 4 12 4Z"/><path d="M9 10.5h6"/><path d="M9 13h4"/></svg>'
  ),
  DataViz: svgIcon(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d5e3f5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16"/><path d="M6 15V9"/><path d="M11 15V5"/><path d="M16 15v-7"/><path d="M5 19V4"/></svg>'
  ),
  'Formation utilisateurs': svgIcon(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d5e3f5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M17 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M3.8 19a4.2 4.2 0 0 1 8.4 0"/><path d="M13.2 19a3.2 3.2 0 0 1 6.4 0"/><path d="M14 6h6"/><path d="M17 3v6"/></svg>'
  ),
  'Accompagnement metier': svgIcon(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d5e3f5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M7 6h10"/><path d="M7 12h6"/><path d="M7 18h10"/><path d="M18.5 8.5l1.5 1.5-1.5 1.5"/><path d="M18 10H14"/></svg>'
  ),
  'Support technique': svgIcon(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d5e3f5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10v6H7z"/><path d="M6 21h12"/><path d="M10 15h4"/><path d="M9 9c0 1.7 1.3 3 3 3s3-1.3 3-3"/><path d="M9 3v3"/><path d="M15 3v3"/></svg>'
  ),
  'Diagnostic materiel': svgIcon(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d5e3f5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7h14v10H5z"/><path d="M9 7V4h6v3"/><path d="M9 11h6"/><path d="M9 14h3"/><path d="M18 18l2 2"/></svg>'
  ),
  'Relation client': svgIcon(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d5e3f5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3.2"/><path d="M6.5 8.5a3 3 0 0 0 0 4.2"/><path d="M17.5 8.5a3 3 0 0 1 0 4.2"/></svg>'
  )
};

function ExperiencePage() {
  const experiences = useMemo(
    () => [
      {
        role: 'Data Analyst - Direction Business Data & BI',
        company: 'Verisure',
        contract: 'Contrat en alternance',
        period: "sept. 2025 - aujourd'hui · 8 mois",
        location: 'Antony, Ile-de-France, France - Siege · Sur site',
        logo: "Logo d'enteprise/Verisure.png",
        logoBg: '#f7f9ff',
        accent: '#E21D2F',
        missions: [
          'Referent metier au sein de la direction Business DATA & BI',
          "Promotion et accompagnement des equipes dans la culture de l'analyse de donnees",
          'Mise a disposition et accessibilite des donnees pour les collaborateurs',
          'Formation des key users et des utilisateurs'
        ],
        skills: ['Power BI', 'SQL', 'DataViz', 'Formation utilisateurs', 'Accompagnement metier']
      },
      {
        role: "Charge d'etudes Actuarielle & Statistiques",
        company: 'Allianz France',
        contract: 'Stage',
        period: 'mai 2025 - aout 2025 · 4 mois',
        location: 'Paris - La Defense - Tour Allianz One - Siege · Sur site',
        logo: "Logo d'enteprise/Allianz.png",
        logoBg: '#f7f9ff',
        accent: '#0057B8',
        missions: [
          "Pilotage de l'internalisation d'un outil de veille tarifaire pour renforcer l'autonomie et reduire les couts",
          'Analyse concurrentielle et identification des variables cles des modeles de tarification',
          "Conception et developpement d'un robot automatise de collecte et d'exploitation de donnees",
          "Structuration et analyse des donnees pour l'aide a la decision"
        ],
        skills: ['Python', 'Statistiques', 'Tarification', 'Analyse concurrentielle', 'Aide a la decision']
      },
      {
        role: 'Assistant Logistique et Aide Alimentaire',
        company: 'Les Restos du Coeur',
        contract: 'Stage',
        period: 'juil. 2023 · 1 mois',
        location: 'Ville de Paris, Ile-de-France, France',
        logo: "Logo d'enteprise/Restos_du_coeur.png",
        logoBg: '#f7f9ff',
        accent: '#2B58C7',
        missions: ['Accueil des personnes dans le besoin', 'Gestion logistique', 'Distribution de repas', 'Accompagnement et ecoute'],
        skills: ['Logistique', 'Distribution de repas', 'Accueil', 'Ecoute et accompagnement']
      },
      {
        role: 'Assistant Logistique et Support Technique',
        company: 'Societe Winterflood',
        contract: 'Stage',
        period: 'juil. 2022 - aout 2022 · 2 mois',
        location: 'Versailles, Ile-de-France, France',
        logo: "Logo d'enteprise/Logo---Blanc-Brun.jpg",
        logoBg: '#f7f9ff',
        accent: '#A67C52',
        missions: [
          'Accueil des clients',
          'Gestion logistique',
          "Installation a domicile et depannage d'appareils numeriques, electromenagers et multimedia"
        ],
        skills: ['Support technique', 'Diagnostic materiel', 'Logistique', 'Relation client']
      }
    ],
    []
  );

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index * 55, 280)}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const navLinks = Array.from(document.querySelectorAll('.site-header nav a'));
    navLinks.forEach((link) => {
      const href = link.getAttribute('href') || '';
      link.classList.toggle('nav-active', href === 'experience.html');
    });
  }, []);

  return (
    <>
      <div className="bg-scene" aria-hidden="true">
        <span className="bg-blueprint-grid"></span>
        <span className="bg-ecu-schema"></span>
        <span className="bg-circuit-traces"></span>
        <span className="bg-telemetry-overlay"></span>
        <span className="bg-signal-wave"></span>
        <span className="bg-vehicle-schematic"></span>
        <span className="bg-car-blueprint bg-car-blueprint-a"></span>
        <span className="bg-car-blueprint bg-car-blueprint-b"></span>
        <span className="bg-tech-annotations"></span>
      </div>
      <div className="grain" aria-hidden="true"></div>

      <header className="site-header reveal">
        <a className="brand" href="index.html">Robin Vaz</a>
        <nav>
          <a href="index.html#top">Accueil</a>
          <a href="projects.html">Projets</a>
          <a href="index.html#competences">Competences</a>
          <a href="experience.html">Experiences</a>
          <a href="contact.html">Contact</a>
        </nav>
      </header>

      <main id="top" className="container">
        <section className="hero reveal projects-hero">
          <h1>Experiences professionnelles</h1>
          <p className="hero-domain">Data, automatisation, logistique et relation client</p>
          <p className="lead">Retrouve ci-dessous mes experiences professionnelles sous forme de timeline.</p>
        </section>

        <section className="experience-section reveal" aria-label="Experiences professionnelles">
          <div className="experience-kpi-grid">
            <article className="experience-kpi card">
              <p>Experiences</p>
              <strong>4</strong>
            </article>
            <article className="experience-kpi card">
              <p>Duree cumulee</p>
              <strong>15 mois</strong>
            </article>
            <article className="experience-kpi card">
              <p>Environnements</p>
              <strong>Data, Actuariat, Logistique, Support</strong>
            </article>
          </div>

          <ol className="experience-timeline">
            {experiences.map((experience) => (
              <li
                className="experience-item card"
                key={`${experience.company}-${experience.period}`}
                style={{ '--company-accent': experience.accent }}
              >
                <div className="experience-company-row">
                  <div className="experience-company-logo-wrap" style={{ '--logo-bg': experience.logoBg }} aria-hidden="true">
                    <img className="experience-company-logo" src={experience.logo} alt="" loading="lazy" />
                  </div>
                  <div className="experience-company-meta">
                    <p className="experience-role">{experience.role}</p>
                    <p className="experience-company">{experience.company} · {experience.contract}</p>
                    <p className="experience-location">{experience.location}</p>
                  </div>
                </div>

                <span className="experience-period">{experience.period}</span>

                <ul className="experience-missions" aria-label={`Missions ${experience.company}`}>
                  {experience.missions.map((mission) => (
                    <li key={`${experience.company}-${mission}`}>{mission}</li>
                  ))}
                </ul>

                <div className="experience-tags" aria-label={`Competences ${experience.company}`}>
                  {experience.skills.map((skill) => (
                    <span key={`${experience.company}-${skill}`}>
                      {experienceSkillIcons[skill] ? (
                        <img src={experienceSkillIcons[skill]} alt="" aria-hidden="true" loading="lazy" />
                      ) : null}
                      {skill}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="site-footer">
        <p>Experiences professionnelles - Robin Vaz</p>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExperiencePage />);
