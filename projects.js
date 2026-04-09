const { useEffect, useState } = React;

function ProjectsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [activeDocument, setActiveDocument] = useState(null);
  const [activeDocumentPage, setActiveDocumentPage] = useState(1);

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
    if (!activeImage && !activeDocument) {
      return undefined;
    }

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
        setActiveDocument(null);
        setActiveDocumentPage(1);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [activeImage, activeDocument]);

  const projects = [
    {
      title: "Projet Modelisation 3D d'un Moteur de bras robotise",
      period: 'avr. 2025 - avr. 2025',
      associated: 'Associe a EPF Engineering School',
      summary: 'Conception et validation mecanique d\'un moteur dedie a la rotation complete de l\'effecteur final.',
      highlights: [
        "Moteur permettant une rotation complete de l'effecteur final sur son axe de rotation.",
        'Assemblage du moteur: 2 parties pour le chassis et 4 vis de fixation.',
        'Realisation de tests de deformation pour valider la pression surfacique cible.'
      ],
      stack: ['AutoCAD', 'Modelisation 3D', 'Simulation mecanique', 'Analyse de donnees', 'Validation'],
      media: ['Deformation du solide', 'Forces + Contraintes', 'Photo du modele 3D'],
      mediaAssets: [
        {
          kind: 'image',
          label: 'Photo 1 - Bras robotise',
          src: 'bras robotisé/1745430916148.jfif'
        },
        {
          kind: 'image',
          label: 'Photo 2 - Bras robotise',
          src: 'bras robotisé/1745430943827.jfif'
        },
        {
          kind: 'image',
          label: 'Photo 3 - Bras robotise',
          src: 'bras robotisé/1745431035015.jfif'
        },
        {
          kind: 'image',
          label: 'Photo 4 - Bras robotise',
          src: 'bras robotisé/1745431093739.jfif'
        }
      ]
    },
    {
      title: "Projet Programmation Automatisation d'un vehicule en Python",
      period: 'mars 2025 - avr. 2025',
      summary: 'Developpement d\'un vehicule autonome avec visualisation temps reel et interface de supervision.',
      highlights: [
        'Visualisation en temps reel du vehicule et de son environnement.',
        "Controle autonome avec detection d'obstacles et de passages pietons.",
        'Interface utilisateur interactive: vitesse, tours/minute et rapport engage.',
        'Developpement via Python et bibliotheques comme Pygame.'
      ],
      stack: ['Python', 'Pygame', 'Autonomie', 'Algorithmique', 'Simulation'],
      media: ['Photo du circuit de la voiture'],
      mediaAssets: [
        {
          kind: 'image',
          label: 'Photo du circuit de la voiture',
          src: 'Automatisation Véhicule/Photo de profil.jfif'
        }
      ]
    },
    {
      title: "Projet Modelisation 3D d'un Moteur Quatre Cylindres",
      period: 'mars 2025 - mars 2025',
      summary: "Modelisation et assemblage complet d'un moteur quatre cylindres sous CATIA V5.",
      highlights: [
        "Modelisation 3D detaillee d'un moteur a quatre cylindres sous CATIA V5.",
        'Conception des composants critiques: pistons, vilebrequin et bielles.',
        "Assemblage complet pour valider la cinematique et la structure du moteur."
      ],
      stack: ['CATIA V5', 'Conception mecanique', 'Assemblage CAO', 'Automobile'],
      media: ['Photo du piston + bielle', 'Photo du vilebrequin', 'Photo du moteur quatre cylindres'],
      mediaAssets: [
        {
          kind: 'image',
          label: 'Photo du piston + bielle',
          src: '4 cylindres/1744970192748.jfif'
        },
        {
          kind: 'image',
          label: 'Photo du vilebrequin',
          src: '4 cylindres/1744970212380.jfif'
        },
        {
          kind: 'image',
          label: 'Photo du moteur quatre cylindres',
          src: '4 cylindres/1744970228222.jfif'
        }
      ]
    },
    {
      title: "Projet de creation d'une application de recyclage des dechets electroniques et electriques",
      period: 'janv. 2025 - fevr. 2025',
      associated: 'Associe a EPF Engineering School',
      summary: 'Projet full-stack et produit autour de la collecte intelligente des dechets DEEE.',
      highlights: [
        'Analyse de marche complete et etude de faisabilite.',
        "Conception UX avec wireframes et sitemap.",
        "Developpement front-end et back-end de l'application.",
        "Modelisation 3D d'une borne intelligente sous CATIA V5.",
        'Integration de verrouillage securise et capteurs de capacite connectes.'
      ],
      stack: ['UX', 'Wireframes', 'Sitemap', 'Developpement web', 'CATIA V5', 'IoT']
    },
    {
      title: "Creation d'un portfolio en ligne",
      period: 'sept. 2024 - dec. 2024',
      associated: 'Associe a EPF Engineering School',
      summary: 'Conception d\'un portfolio web statique responsive, accessible et optimise.',
      highlights: [
        'Developpement du portfolio en HTML, CSS et JavaScript.',
        'Conception de l\'interface graphique personnalisee.',
        'Structuration logique des contenus.',
        'Responsive desktop/tablette/mobile, accessibilite WCAG 2.0 AA et conformite W3C.',
        'Versionnement Git et hebergement GitHub Pages.'
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub Pages', 'Accessibilite'],
      media: ['Projet portfolio'],
      mediaAssets: [
        {
          kind: 'image',
          label: 'Miniature du portfolio Robin Vaz',
          src: 'portfolio-thumbnail.svg'
        }
      ]
    },
    {
      title: "Gestion de bases de donnees d'une entreprise",
      period: 'janv. 2023 - mai 2023',
      associated: 'Associe a EPF Engineering School',
      summary: 'Structuration et administration de donnees en environnement entreprise.',
      highlights: [
        "Gestion et structuration des donnees au sein d'un environnement d'entreprise.",
        'Exploitation avancee de Microsoft Access pour administrer les bases.',
        "Conception de l'architecture relationnelle et creation des tables."
      ],
      stack: ['SQL', 'Microsoft Access', 'Modelisation relationnelle', 'Data management']
    },
    {
      title: 'Maquette fauteuil roulant connecte - logiciel Arduino (chef de projet)',
      period: 'sept. 2022 - janv. 2023',
      associated: 'Associe a EPF Engineering School',
      summary: 'Conception d\'un fauteuil roulant connecte avec capteurs, multi-commandes et securite embarquee.',
      highlights: [
        'Definition et analyse du cahier des charges.',
        'Modelisation 3D de la maquette sous CATIA V5.',
        'Programmation Arduino des composants: joystick, moteurs, capteurs, afficheur LCD.',
        "Assemblage materiel et architecture du programme principal.",
        'Verification de conformite et ajustements finaux.',
        'Controle via joystick, telecommande infrarouge et application mobile Bluetooth.'
      ],
      stack: ['Arduino', 'Bluetooth', 'Capteurs ultrason', 'CATIA V5', 'Gestion de projet'],
      media: ['Rapport projet fauteuil roulant connecte'],
      mediaAssets: [
        {
          kind: 'file',
          label: 'Rapport projet fauteuil roulant connecte',
          src: 'Fauteuil roulant/Projet Fauteuil roulant connecté.pdf',
          thumbnail: 'Fauteuil roulant/rapport-fauteuil-thumbnail.svg'
        }
      ]
    },
    {
      title: "Creation d'un jeu de strategie (jeu de pions)",
      period: 'janv. 2022 - mai 2022',
      associated: 'Associe a EPF Engineering School',
      summary: 'Jeu de pions en Java avec IA, sauvegarde JSON et interface graphique interactive.',
      highlights: [
        'Programmation orientee objet: classes Pieces, Plateau, Joueur, IA, Sauvegarde.',
        'Developpement du programme principal et de l\'architecture globale.',
        'Conception de l\'interface graphique avec JFrame Form.',
        'Sauvegarde des parties en JSON et mode contre IA.',
        'Recette technique et verification des exigences.'
      ],
      stack: ['Java', 'POO', 'JFrame', 'JSON', 'Algorithmique'],
      media: ['Rapport projet Java: jeu de pions'],
      mediaAssets: [
        {
          kind: 'file',
          label: 'Rapport projet Java: jeu de pions',
          src: 'Jeu java/Projet Java  Jeu de pions.pdf'
        }
      ]
    },
    {
      title: 'Maquette avec mecanisme transformable lit/bureau (chef de projet)',
      period: 'sept. 2021 - janv. 2022',
      summary: 'Projet mecanique de maquette transformable avec cinematiques translation/rotation.',
      highlights: [
        'Analyse approfondie du cahier des charges.',
        'Modelisation 3D complete sous CATIA V5.',
        'Realisation d\'une maquette physique fonctionnelle.'
      ],
      stack: ['CATIA V5', 'Conception mecanique', 'Prototype', 'Gestion de projet']
    },
    {
      title: "Creation d'un site de vente automobile",
      period: 'janv. 2020 - mai 2020',
      associated: 'Associe a Lycee Jules Ferry',
      summary: 'Site web automobile avec interface dynamique et base de donnees SQL.',
      highlights: [
        'Creation d\'une interface graphique dynamique en HTML, CSS et JavaScript.',
        'Gestion des utilisateurs et stockage via base de donnees SQL.'
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'SQL']
    }
  ];

  const monthOrder = {
    janv: 0,
    fevr: 1,
    mars: 2,
    avr: 3,
    mai: 4,
    juin: 5,
    juil: 6,
    aout: 7,
    sept: 8,
    oct: 9,
    nov: 10,
    dec: 11
  };

  const getStartOrderValue = (period) => {
    const start = period.split('-')[0].trim().toLowerCase();
    const match = start.match(/([a-z]+)\.?\s*(\d{4})/i);

    if (!match) {
      return Number.MAX_SAFE_INTEGER;
    }

    const monthKey = match[1];
    const year = Number(match[2]);
    const month = monthOrder[monthKey] ?? 0;

    return year * 12 + month;
  };

  const sortedProjects = [...projects].sort((a, b) => getStartOrderValue(b.period) - getStartOrderValue(a.period));

  const getDocumentViewerSrc = (documentSrc, page) => {
    const hashSeparator = documentSrc.includes('#') ? '&' : '#';
    return `${documentSrc}${hashSeparator}page=${page}&view=Fit&zoom=90&toolbar=0&navpanes=0&scrollbar=1`;
  };

  const getDocumentThumbnailSrc = (documentSrc) => {
    const hashSeparator = documentSrc.includes('#') ? '&' : '#';
    return `${documentSrc}${hashSeparator}page=1&view=FitH&zoom=70&toolbar=0&navpanes=0&scrollbar=0`;
  };

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
          <a href="index.html#top" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
          <a href="projects.html" onClick={() => setMobileMenuOpen(false)}>Projets</a>
          <a href="index.html#competences" onClick={() => setMobileMenuOpen(false)}>Competences</a>
          <a href="experience.html" onClick={() => setMobileMenuOpen(false)}>Experiences</a>
          <a href="contact.html" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <main id="top" className="container">
        <section className="hero reveal projects-hero">
          <p className="eyebrow">Portfolio</p>
          <h1>Projets techniques</h1>
          <p className="hero-domain">Ingenierie, systemes embarques, data et automobile</p>
          <p className="lead">
            Cette page rassemble mes projets academiques et techniques les plus representatifs. Chaque projet met en
            avant une competence cle: conception, data, developpement, prototypage ou modelisation 3D.
          </p>
        </section>

        <section id="projects-tree" className="projects-tree reveal visible" aria-label="Arbre chronologique des projets">
          <ol className="tree-list">
            {sortedProjects.map((project, index) => {
              const branchSide = index % 2 === 0 ? 'left' : 'right';
              const startLabel = project.period.split('-')[0].trim();

              return (
                <li className={`tree-node ${branchSide}`} key={project.title}>
                  <span className="tree-date-badge">{startLabel}</span>
                  <article className="project-card card">
                    <p className="project-period">{project.period}</p>
                    {project.associated ? <p className="project-assoc">{project.associated}</p> : null}
                    <h2>{project.title}</h2>
                    <p>{project.summary}</p>
                    <ul className="project-highlights" aria-label={`Details ${project.title}`}>
                      {project.highlights.map((item) => (
                        <li key={`${project.title}-${item}`}>{item}</li>
                      ))}
                    </ul>
                    {project.media && project.media.length ? (
                      <div className="project-media">
                        <p className="project-media-title">Medias:</p>
                        {project.media.map((item) => (
                          <span key={`${project.title}-media-${item}`}>{item}</span>
                        ))}
                      </div>
                    ) : null}
                    {project.mediaAssets && project.mediaAssets.length ? (
                      <div className="project-gallery" aria-label={`Galerie ${project.title}`}>
                        {project.mediaAssets.map((asset) => {
                          const assetUrl = encodeURI(asset.src);
                          const isImage = asset.kind === 'image';

                          return (
                            isImage ? (
                              <button
                                key={`${project.title}-asset-${asset.src}`}
                                type="button"
                                className="project-gallery-item is-image"
                                onClick={() => setActiveImage({ src: assetUrl, label: asset.label })}
                                title={asset.label}
                              >
                                <img src={assetUrl} alt={asset.label} loading="lazy" />
                              </button>
                            ) : (
                              <button
                                key={`${project.title}-asset-${asset.src}`}
                                type="button"
                                className="project-gallery-item is-file"
                                onClick={() => {
                                  setActiveDocument({ src: assetUrl, label: asset.label });
                                  setActiveDocumentPage(1);
                                }}
                                title={asset.label}
                              >
                                <div className="project-file-thumb-wrap">
                                  <iframe
                                    className="project-file-preview"
                                    title={`Apercu ${asset.label}`}
                                    src={getDocumentThumbnailSrc(assetUrl)}
                                    loading="lazy"
                                    tabIndex={-1}
                                  ></iframe>
                                  <span className="project-file-badge">PDF</span>
                                </div>
                              </button>
                            )
                          );
                        })}
                      </div>
                    ) : null}
                    <div className="project-tags">
                      {project.stack.map((tag) => (
                        <span key={`${project.title}-${tag}`}>{tag}</span>
                      ))}
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </section>

      </main>

      {activeImage || activeDocument ? (
          <div
            className={`image-lightbox ${activeDocument ? 'image-lightbox--doc' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label={activeImage ? activeImage.label : activeDocument.label}
          onClick={() => {
            setActiveImage(null);
            setActiveDocument(null);
            setActiveDocumentPage(1);
          }}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => {
              setActiveImage(null);
              setActiveDocument(null);
              setActiveDocumentPage(1);
            }}
            aria-label="Fermer"
          >
            x
          </button>
          {activeImage ? (
            <figure className="lightbox-content" onClick={(event) => event.stopPropagation()}>
              <img src={activeImage.src} alt={activeImage.label} />
              <figcaption>{activeImage.label}</figcaption>
            </figure>
          ) : (
            <section className="doc-lightbox-content" onClick={(event) => event.stopPropagation()}>
              <header className="doc-lightbox-toolbar">
                <button
                  type="button"
                  className="doc-nav-btn"
                  onClick={() => setActiveDocumentPage((page) => Math.max(1, page - 1))}
                  disabled={activeDocumentPage <= 1}
                  aria-label="Page precedente"
                >
                  ←
                </button>
                <p>{activeDocument.label} - Page {activeDocumentPage}</p>
                <button
                  type="button"
                  className="doc-nav-btn"
                  onClick={() => setActiveDocumentPage((page) => page + 1)}
                  aria-label="Page suivante"
                >
                  →
                </button>
              </header>
              <iframe
                key={`${activeDocument.src}-${activeDocumentPage}`}
                title={activeDocument.label}
                className="doc-frame"
                src={getDocumentViewerSrc(activeDocument.src, activeDocumentPage)}
              ></iframe>
            </section>
          )}
        </div>
      ) : null}

      <footer className="site-footer">
        <p>Page Projets - Robin Vaz</p>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProjectsPage />);
