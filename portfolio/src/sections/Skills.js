import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  { name: 'Java', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'Python', category: 'language' },
  { name: 'C/C++', category: 'language' },
  { name: 'Dart', category: 'language' },
  { name: 'Elixir', category: 'language' },
  { name: 'React', category: 'framework' },
  { name: 'Angular', category: 'framework' },
  { name: 'Node.js', category: 'framework' },
  { name: 'Flutter', category: 'framework' },
  { name: 'Phoenix LiveView', category: 'framework' },
  { name: 'REST APIs', category: 'framework' },
  { name: 'SQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'MariaDB', category: 'database' },
  { name: 'Git', category: 'tool' },
  { name: 'Docker', category: 'tool' },
  { name: 'CI/CD', category: 'tool' },
  { name: 'Jenkins', category: 'tool' },
  { name: 'GitLab', category: 'tool' },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__grid" aria-hidden="true" />
      <motion.div
        className="skills__container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills & Technologien</h2>
        <div className="skills__grid-cards">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skills__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ scale: 1.05, y: -6 }}
            >
              <span className="skills__card-name">{skill.name}</span>
              <span className={`skills__card-badge skills__card-badge--${skill.category}`}>
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
