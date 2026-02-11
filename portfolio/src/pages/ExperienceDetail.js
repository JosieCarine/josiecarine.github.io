import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { experiencesData } from "../data/experiencesData";
import "./ExperienceDetail.css";

export default function ExperienceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const exp = experiencesData.find((e) => e.slug === slug);

  if (!exp) {
    return (
      <>
        <Navbar />
        <main className="experience-detail">
          <div className="experience-detail__container">
            <p>Erfahrung nicht gefunden.</p>
            <button
              onClick={() => navigate("/", { state: { scrollTo: "experience" } })}
              className="btn btn--primary"
            >
              Zurück zur Berufserfahrung
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const { details } = exp;

  return (
    <>
      <Navbar />
      <main className="experience-detail">
        <div className="experience-detail__grid" aria-hidden="true" />

        <motion.article
          className="experience-detail__container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate("/", { state: { scrollTo: "experience" } })}
            className="experience-detail__back"
          >
            ← Zurück zur Berufserfahrung
          </button>

          <div className="experience-detail__header">
            <img
              src={exp.image}
              alt={`${exp.company} cover`}
              className="experience-detail__image"
            />

            <div className="experience-detail__header-content">
              <h1 className="experience-detail__title">
                {exp.role} – {exp.company}
              </h1>
              <p className="experience-detail__meta">
                {exp.location} · {exp.date}
              </p>

              <div className="experience-detail__tech">
                {exp.tech.map((t) => (
                  <span key={t} className="experience-detail__tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="experience-detail__content">
            <section className="experience-detail__section">
              <h2>Überblick</h2>
              <p>{details.overview}</p>
            </section>

            <section className="experience-detail__section">
              <h2>Was ich gemacht habe</h2>
              <ul>
                {details.whatIDid.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </section>

            <section className="experience-detail__section">
              <h2>Zusammenarbeit im Team</h2>
              <ul>
                {details.teamwork.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </section>

            <section className="experience-detail__section">
              <h2>Ergebnisse</h2>
              <ul>
                {details.results.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </section>

            <section className="experience-detail__section">
              <h2>Was ich gelernt habe</h2>
              <ul>
                {details.learned.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </section>

            {exp.gallery?.length > 0 && (
              <section className="experience-detail__section">
                <h2>Einblicke</h2>
                <div className="experience-detail__gallery">
                  {exp.gallery.map((src) => (
                    <img key={src} src={src} alt="Einblick" />
                  ))}
                </div>
              </section>
            )}
          </div>
        </motion.article>
      </main>
      <Footer />
    </>
  );
}
