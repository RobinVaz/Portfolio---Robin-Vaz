const { useEffect, useState } = React;

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <a className="brand" href="#top">
          Robin Vaz
        </a>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={mobileMenuOpen ? 'nav-open' : ''}>
          <a href="#top" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
          <a href="projects.html" onClick={() => setMobileMenuOpen(false)}>Projets</a>
          <a href="index.html#competences" onClick={() => setMobileMenuOpen(false)}>Competences</a>
          <a href="experience.html" onClick={() => setMobileMenuOpen(false)}>Experiences</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <main id="top" className="container">
        <section className="hero reveal">
          <div className="hero-layout">
            <div className="hero-content">
              <p className="eyebrow">Robin Vaz</p>
              <h1>Apprenti Ingenieur</h1>
              <p className="hero-domain">Vehicules, Systemes Autonomes et Connectes</p>
              <p className="lead">
                A la recherche d'une alternance en ingenierie dans les domaines des systemes embarques,
                de la data et de la mobilite intelligente.
              </p>
              <div className="hero-actions">
                <a className="btn btn-light" href="projects.html">
                  Explorer mes projets
                </a>
                <a className="btn btn-dark" href="#contact">
                  Me contacter
                </a>
              </div>
            </div>
            <div className="hero-photo-wrap" aria-label="Photo de profil">
              <img className="hero-photo" src="Photo%20de%20profil.jfif" alt="Photo de profil de Robin Vaz" />
            </div>
          </div>
        </section>

        <section id="a-propos" className="feature-section reveal">
          <div className="feature-media">
            <img src="A propos.png" alt="A propos - Ingenierie et systemes embarques" loading="lazy" />
          </div>
          <div className="feature-copy intro-panel">
            <h2>A propos</h2>
            <p>
              Etudiant en ingenierie avec une specialisation en systemes d'information et une orientation vers les
              systemes autonomes et connectes, je developpe des competences en programmation, analyse de donnees et
              conception de systemes.
            </p>
            <p>
              Au cours de mon parcours, j'ai acquis une double competence en data et en ingenierie, que j'ai pu mettre
              en pratique a travers des experiences en entreprise et des projets techniques concrets.
            </p>
            <p>
              Passionne par l'automobile et les technologies embarquees, je souhaite evoluer dans des environnements
              innovants et contribuer a des projets a fort impact.
            </p>
          </div>
        </section>

        <section id="competences" className="skills-section card reveal">
          <div className="skills-section-head">
            <p className="eyebrow">Outils utilises</p>
            <h2>Competences techniques</h2>
          </div>

          <div className="skills-grid" aria-label="Competences et outils">
            <article className="skills-group">
              <h3 className="skills-group-title">Developpement<br />Logiciel</h3>
              <div className="skills-group-tools">
                <div className="skill-card" style={{ borderTopColor: '#3776ab' }}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" className="skill-logo" loading="lazy" />
                  <span className="skill-name">Python</span>
                </div>
                <div className="skill-card" style={{ borderTopColor: '#007396' }}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" className="skill-logo" loading="lazy" />
                  <span className="skill-name">Java</span>
                </div>
                <div className="skill-card" style={{ borderTopColor: '#00979d' }}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original.svg" alt="Arduino" className="skill-logo" loading="lazy" />
                  <span className="skill-name">Arduino</span>
                </div>
                <div className="skill-card" style={{ borderTopColor: '#0066cc' }}>
                  <img src="logo CATIA V5.png" alt="CATIA V5" className="skill-logo" loading="lazy" />
                  <span className="skill-name">CATIA V5</span>
                </div>
              </div>
            </article>

            <article className="skills-group">
              <h3 className="skills-group-title">Developpement<br />Web</h3>
              <div className="skills-group-tools">
                <div className="skill-card" style={{ borderTopColor: '#e34c26' }}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" className="skill-logo" loading="lazy" />
                  <span className="skill-name">HTML</span>
                </div>
                <div className="skill-card" style={{ borderTopColor: '#1572b6' }}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" className="skill-logo" loading="lazy" />
                  <span className="skill-name">CSS</span>
                </div>
                <div className="skill-card" style={{ borderTopColor: '#f7df1e' }}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-logo" loading="lazy" />
                  <span className="skill-name">JavaScript</span>
                </div>
                <div className="skill-card" style={{ borderTopColor: '#777bb4' }}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="PHP" className="skill-logo" loading="lazy" />
                  <span className="skill-name">PHP</span>
                </div>
              </div>
            </article>

            <article className="skills-group">
              <h3 className="skills-group-title">Base de<br />donnees</h3>
              <div className="skills-group-tools">
                <div className="skill-card" style={{ borderTopColor: '#336791' }}>
                  <img src="logo-sql.svg" alt="SQL" className="skill-logo" loading="lazy" />
                  <span className="skill-name">SQL</span>
                </div>
                <div className="skill-card" style={{ borderTopColor: '#f29111' }}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" className="skill-logo" loading="lazy" />
                  <span className="skill-name">MySQL</span>
                </div>
                <div className="skill-card" style={{ borderTopColor: '#f2cc0c' }}>
                  <img src="logo powerbi.png" alt="Power BI" className="skill-logo" loading="lazy" />
                  <span className="skill-name">Power BI</span>
                </div>
                <div className="skill-card" style={{ borderTopColor: '#a4373a' }}>
                  <img src="logo Access.png" alt="Access" className="skill-logo" loading="lazy" />
                  <span className="skill-name">Access</span>
                </div>
              </div>
            </article>

            <article className="skills-group">
              <h3 className="skills-group-title">Outils</h3>
              <div className="skills-group-tools">
                <div className="skill-card" style={{ borderTopColor: '#f05032' }}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git" className="skill-logo" loading="lazy" />
                  <span className="skill-name">Git</span>
                </div>
                <div className="skill-card" style={{ borderTopColor: '#181717' }}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub" className="skill-logo" loading="lazy" />
                  <span className="skill-name">GitHub</span>
                </div>
                <div className="skill-card" style={{ borderTopColor: '#f36f21' }}>
                  <img src="logo matlab.png" alt="MATLAB" className="skill-logo" loading="lazy" />
                  <span className="skill-name">MATLAB</span>
                </div>
                <div className="skill-card" style={{ borderTopColor: '#ff8c1a' }}>
                  <img src="logo simulink.png" alt="Simulink" className="skill-logo" loading="lazy" />
                  <span className="skill-name">Simulink</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="contact card reveal contact-section">
          <div className="contact-section__intro">
            <p className="eyebrow">Contact rapide</p>
            <h2>Me contacter</h2>
            <p>
              Je suis disponible pour toute opportunite en alternance ou collaboration sur des projets techniques.
            </p>
          </div>

          <div className="contact-section__grid">
            <div className="contact-info-card">
              <span className="contact-info-label">Email</span>
              <a
                className="contact-info-link"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=robin.vaz78@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon" aria-hidden="true">
                  <img src="https://cdn.simpleicons.org/gmail/EA4335" alt="" loading="lazy" />
                </span>
                robin.vaz78@gmail.com
              </a>
            </div>
            <div className="contact-info-card">
              <span className="contact-info-label">LinkedIn</span>
              <a
                className="contact-info-link"
                href="https://www.linkedin.com/in/robin-vaz/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon" aria-hidden="true">
                  <img src="linkedin.png" alt="" loading="lazy" />
                </span>
                linkedin.com/in/robin-vaz
              </a>
            </div>
          </div>

        </section>
      </main>

      <footer className="site-footer">
        <p>Page d'accueil - Presentation. Les autres informations detaillees arrivent sur les prochaines pages du portfolio.</p>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
