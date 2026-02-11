import { motion } from 'framer-motion';
import './Hero.css';

const stats = [
  { value: '10+', label: 'Projects' },
  { value: '15+', label: 'Technologies' },
  { value: '100%', label: 'Motivation' },
];

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__container">
        <div className="hero__content">
          <motion.p
            className="hero__greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hallo, ich bin
          </motion.p>
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Josie
          </motion.h1>
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Software Developer | Informatik-Absolventin
          </motion.p>
          <motion.p
            className="hero__intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Ich bin Informatik-Absolventin mit internationalem Hintergrund und
            Abschluss an der Hochschule Worms. Mit Begeisterung entwickle ich
            strukturierte, zuverlässige und benutzerfreundliche Softwarelösungen
            im Web- und Full-Stack-Bereich.
          </motion.p>
          <motion.div
            className="hero__buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a
            href={`${process.env.PUBLIC_URL}/lebenslauf.pdf`}
            className="btn btn--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lebenslauf ansehen
          </a>  
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="hero__image-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/profil.png`}
              alt="Josie Carine"
              className="hero__image"
            />
            <div className="hero__glow" aria-hidden="true" />
          </div>
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
