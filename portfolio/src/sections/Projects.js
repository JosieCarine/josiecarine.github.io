import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import './Projects.css';

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
          {projectsData.map((project, i) => (
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
                <Link
                  to={`/projekt/${project.slug}`}
                  className="project-card__btn"
                >
                  Mehr lesen →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
