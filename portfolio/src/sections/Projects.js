import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'Full-Stack Fahrzeugverkaufssystem',
    description:
      'Webanwendung mit Angular, Node.js, MongoDB und MariaDB. Containerisierung mit Docker für eine skalierbare Architektur.',
    tech: ['Angular', 'Node.js', 'MongoDB', 'MariaDB', 'Docker'],
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop',
    github: 'https://github.com/JosieCarine',
  },
  {
    title: 'CI/CD Evaluierungsprojekt',
    description:
      'Bachelorprojekt: Analyse und Vergleich verschiedener CI/CD-Tools. Webanwendung mit Frontend-/Backend-Architektur und automatisierten Tests.',
    tech: ['CI/CD', 'Jenkins', 'Web App', 'Tests'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    github: 'https://github.com/JosieCarine',
  },
  {
    title: 'IoT Wetterstation',
    description:
      'Entwicklung einer Wetterstation mit Sensorintegration und grafischer Benutzeroberfläche zur Visualisierung von Sensordaten.',
    tech: ['IoT', 'Python', 'Arduino', 'Sensoren'],
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&h=400&fit=crop',
    github: 'https://github.com/JosieCarine',
  },
  {
    title: 'Telegram-Bot & ESP32 LED-Matrix',
    description:
      'IoT-Kommunikationssystem mit Telegram-Bot zur Fernkommunikation, Ansteuerung einer LED-Matrix über ESP32 und Visualisierung auf LED-Display.',
    tech: ['IoT', 'Telegram', 'ESP32', 'Python'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    github: 'https://github.com/JosieCarine',
  },
  {
    title: 'Mobile E-Commerce (Flutter)',
    description:
      'Entwicklung einer mobilen Webanwendung für Online-Handel mit Fokus auf Benutzerfreundlichkeit und responsivem Design.',
    tech: ['Flutter', 'Dart', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    github: 'https://github.com/JosieCarine',
  },
  {
    title: 'Polutec Firmenwebseite',
    description:
      'Konzeption und Entwicklung einer professionellen Firmenwebseite für Polutec (Frankreich).',
    tech: ['Web', 'HTML/CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    github: 'https://github.com/JosieCarine',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__grid" aria-hidden="true" />
      <motion.div
        className="projects__container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projekte</h2>
        <div className="projects__grid-cards">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-card__image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__image"
                />
                <div className="project-card__overlay" />
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-card__tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__btn"
                >
                  GitHub →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
