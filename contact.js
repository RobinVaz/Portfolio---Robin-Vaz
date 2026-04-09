const { useState } = React;

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState([]);

  const handleFileAdd = (event) => {
    const files = Array.from(event.target.files);
    setAttachments([...attachments, ...files]);
    event.target.value = '';
  };

  const handleFileRemove = (index) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const composedSubject = subject?.trim() || 'Prise de contact';
    const fileList = attachments.length > 0 
      ? `\n\nFichiers joints: ${attachments.map(f => f.name).join(', ')}`
      : '';
    const composedMessage = [
      message?.trim() || '',
      '',
      `Nom: ${name || 'Non renseigne'}`,
      `Email: ${email || 'Non renseigne'}`,
      fileList
    ].join('\n');

    const mailtoUrl = `mailto:robin.vaz78@gmail.com?subject=${encodeURIComponent(composedSubject)}&body=${encodeURIComponent(composedMessage)}`;
    window.location.href = mailtoUrl;
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

      <header className="site-header">
        <a className="brand" href="index.html#top">
          Robin Vaz
        </a>
        <nav>
          <a href="index.html#top">Accueil</a>
          <a href="projects.html">Projets</a>
          <a href="index.html#competences">Competences</a>
          <a href="experience.html">Experiences</a>
          <a href="contact.html">Contact</a>
        </nav>
      </header>

      <main className="container" id="top">
        <section className="hero contact-page-hero">
          <div className="hero-content">
            <p className="eyebrow">Me contacter</p>
            <h1>Contact professionnel</h1>
            <p className="lead">
              Utilise ce formulaire pour preparer ton message. Au clic sur Envoyer, ton client mail
              s'ouvre avec l'adresse deja remplie vers robin.vaz78@gmail.com.
            </p>
          </div>
        </section>

        <section className="contact-compose card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Nom
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Votre nom"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="votre.email@exemple.com"
              />
            </label>

            <label>
              Objet
              <input
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
            </label>

            <label>
              Message
              <textarea
                rows="8"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
            </label>

            <div className="contact-attachments">
              <label className="attachment-label">
                <span>Fichiers joints</span>
                <button 
                  type="button" 
                  className="btn-add-file"
                  onClick={() => document.getElementById('file-input').click()}
                  title="Ajouter des fichiers"
                >
                  +
                </button>
                <input
                  id="file-input"
                  type="file"
                  multiple
                  onChange={handleFileAdd}
                  style={{ display: 'none' }}
                />
              </label>
              {attachments.length > 0 && (
                <ul className="attachment-list">
                  {attachments.map((file, index) => (
                    <li key={index}>
                      <span className="file-name">{file.name}</span>
                      <button
                        type="button"
                        className="btn-remove-file"
                        onClick={() => handleFileRemove(index)}
                        title="Supprimer ce fichier"
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {attachments.length > 0 && (
                <p className="attachment-note">
                  Les fichiers seront à joindre manuellement à votre email une fois le client mail ouvert.
                </p>
              )}
            </div>

            <div className="contact-form-actions">
              <button type="submit" className="btn btn-light">Envoyer par Gmail</button>
              <a
                className="btn btn-dark"
                href="https://www.linkedin.com/in/robin-vaz/"
                target="_blank"
                rel="noreferrer"
              >
                Voir mon LinkedIn
              </a>
            </div>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>Contact - Robin Vaz</p>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactPage />);
