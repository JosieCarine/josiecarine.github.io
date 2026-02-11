import { motion } from 'framer-motion';
import './About.css';

const competencies = [
  'Web- & Full-Stack-Entwicklung',
  'API-Design & Datenbanken',
  'Testing & Code-Qualität',
  'Teamarbeit (Scrum) & Kommunikation',
  'UI/UX Design & Micro-Interactions',
  'CI/CD & DevOps-Automatisierung',
];

const checkIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path
      d="M7.5 14.2L3.3 10l1.4-1.4 2.8 2.8 7-7L15.9 6l-8.4 8.2z"
      fill="currentColor"
    />
  </svg>
);

const languages = ['Deutsch – C1', 'Englisch – B2', 'Französisch – Muttersprache'];
const hobbies = [
  'Malen auf Leinwand & Illustrationen zeichnen',
  'Wandern & Natur fotografieren',
  'Lesen',
  'Reisen & neue Kulturen entdecken',
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about__grid" aria-hidden="true" />
      <motion.div
        className="about__container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="about__content">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="about__eyebrow">Über mich</span>
            <h2 className="about__headline">
              Wer bin ich?{' '}
              <span className="about__headline-highlight">Woran ich arbeite</span>
            </h2>
            <p className="about__paragraph">
              Statt nur Interfaces zu gestalten, begleite ich den kompletten Weg von der Architektur über Prototypen
              bis hin zur produktionsreifen Lösung – strukturiert, zuverlässig, datengetrieben und mit hoher
              Anpassungsfähigkeit an neue Technologien.
            </p>
            <p className="about__paragraph">
              Mich motivieren Herausforderungen, bei denen saubere APIs, durchdachte Datenmodelle und eine präzise
              Zusammenarbeit im Team entscheidend sind. Ich verbinde Designgespür mit technischer Tiefe und lerne
              kontinuierlich dazu, damit aus Ideen skalierbare Produkte entstehen, die Nutzer:innen wirklich weiterbringen.
            </p>

            <div className="about__competencies">
              {competencies.map((item, index) => (
                <motion.div
                  key={item}
                  className="about__competency"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="about__competency-icon">{checkIcon}</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about__visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="about__image-card">
              <img
                src={`${process.env.PUBLIC_URL}/ubermich.png`}
                alt="Josie Carine"
                className="about__portrait"
              />
              <span className="about__decor-square" aria-hidden="true" />
            </div>
          </motion.div>
        </div>

        <div className="about__meta-grid">
          <div className="about__meta-card">
            <h3>Führerschein</h3>
            <p>Klasse B</p>
          </div>
          <div className="about__meta-card">
            <h3>Sprachen</h3>
            <ul>
              {languages.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </div>
          <div className="about__meta-card">
            <h3>Hobbys</h3>
            <ul>
              {hobbies.map((hobby) => (
                <li key={hobby}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
