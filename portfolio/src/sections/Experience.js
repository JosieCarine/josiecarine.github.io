import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { experiencesData } from "../data/experiencesData";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__grid" aria-hidden="true" />
      <motion.div
        className="experience__container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Berufserfahrung</h2>

        <div className="experience__timeline">
          {experiencesData.map((exp, i) => (
            <motion.article
              key={exp.slug}
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

              {exp.details?.whatIDid && (
                <ul className="experience__list">
                  {exp.details.whatIDid.slice(0, 2).map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}

              {/* bouton en bas, comme Projects */}
              <Link to={`/erfahrung/${exp.slug}`} className="experience__btn">
                Mehr erfahren →
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
