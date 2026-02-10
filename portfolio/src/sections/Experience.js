import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role: 'Werkstudentin Software Engineering',
    company: 'Hermann Ultraschall',
    location: 'Ittersbach',
    date: '12/2023 – 03/2024',
    description: [
      'Entwicklung eines Benutzerinterfaces mit Elixir und Phoenix LiveView',
      'Mitarbeit an Visualisierungs- und Bedienkonzepten für industrielle Anwendungen',
    ],
  },
  {
    role: 'Softwareentwicklerin (Projektarbeit)',
    company: 'AtelierBlau',
    location: 'Worms',
    date: '02/2025 – 04/2025',
    description: [
      'Optimierung und Weiterentwicklung einer bestehenden Unternehmenswebseite',
      'Umsetzung interaktiver UI-Elemente und Animationen',
      'Mitarbeit in einem kleinen Entwicklungsteam nach Scrum',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__grid" aria-hidden="true" />
      <motion.div
        className="experience__container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Berufserfahrung</h2>
        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.company + exp.date}
              className="experience__card"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <div className="experience__card-header">
                <span className="experience__date">{exp.date}</span>
                <h3 className="experience__role">{exp.role}</h3>
                <p className="experience__company">
                  {exp.company} · {exp.location}
                </p>
              </div>
              <ul className="experience__list">
                {exp.description.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
