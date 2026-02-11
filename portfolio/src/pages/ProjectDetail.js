import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProjectDetail.css';

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="project-detail">
          <div className="project-detail__container">
            <p>Projekt nicht gefunden.</p>
            <button onClick={() => navigate('/', { state: { scrollTo: 'projects' } })} className="btn btn--primary">
              Zurück zu Projekten
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const { details } = project;

  return (
    <>
      <Navbar />
      <main className="project-detail">
        <div className="project-detail__grid" aria-hidden="true" />
        <motion.article
          className="project-detail__container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
            className="project-detail__back"
          >
            ← Zurück zu Projekten
          </button>

          <div className="project-detail__header">
            {project.headerMedia?.type === 'video' ? (
              <video
                className="project-detail__media"
                poster={project.headerMedia.poster || project.image}
                controls
                preload="auto"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={project.headerMedia.src} type="video/mp4" />
                Ihr Browser unterstützt das Video-Format nicht.
              </video>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="project-detail__image"
              />
            )}
            <div className="project-detail__header-content">
              <h1 className="project-detail__title">{project.title}</h1>
              <div className="project-detail__tech">
                {project.tech.map((t) => (
                  <span key={t} className="project-detail__tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              {details?.overview && (
                <div className="project-detail__overview">
                  <h2>Überblick</h2>
                  <p>{details.overview}</p>
                </div>
              )}
            </div>
          </div>

          <div className="project-detail__content">
            {details && (
              <>
                <section className="project-detail__section">
                  <h2>Was ich gemacht habe</h2>
                  <ul>
                    {details.whatIDid.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="project-detail__section">
                  <h2>Ergebnisse</h2>
                  <ul>
                    {details.results.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="project-detail__section">
                  <h2>Was ich gelernt habe</h2>
                  <ul>
                    {details.learned.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              </>
            )}
          </div>
        </motion.article>
      </main>
      <Footer />
    </>
  );
}

export default ProjectDetail;
