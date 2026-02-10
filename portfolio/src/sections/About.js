import { motion } from 'framer-motion';
import './About.css';

const traits = [
  {
    icon: '📐',
    title: 'Strukturiert',
    desc: 'Strukturierte Arbeitsweise für klare, wartbare Lösungen',
  },
  {
    icon: '🔍',
    title: 'Analytisch',
    desc: 'Analytisches Denkvermögen und schnelle Auffassungsgabe',
  },
  {
    icon: '✨',
    title: 'Kreativ',
    desc: 'Kreative Lösungsansätze für komplexe Herausforderungen',
  },
  {
    icon: '🤝',
    title: 'Teamfähig',
    desc: 'Starke Kommunikation und Zusammenarbeit im Team',
  },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about__grid" aria-hidden="true" />
      <motion.div
        className="about__container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Über mich</h2>
        <div className="about__content">
          <p className="about__description">
            Motivierte Informatik-Absolventin mit fundierten Kenntnissen in
            Softwareentwicklung, Programmierung und Datenbanksystemen. Erfahrung
            im Umgang mit verschiedenen Technologien und Entwicklungsumgebungen
            sowie Interesse an der Entwicklung effizienter, zuverlässiger und
            skalierbarer Softwarelösungen.
          </p>
          <p className="about__description">
            Analytisches Denkvermögen, strukturierte Arbeitsweise und schnelle
            Auffassungsgabe zeichnen mich ebenso aus wie Teamfähigkeit und hohe
            Lernbereitschaft.
          </p>
          <div className="about__traits">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                className="about__trait"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <span className="about__trait-icon">{trait.icon}</span>
                <div>
                  <h3 className="about__trait-title">{trait.title}</h3>
                  <p className="about__trait-desc">{trait.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
