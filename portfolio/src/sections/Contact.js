import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const socialLinks = [
  { href: 'https://github.com/JosieCarine', label: 'GitHub', icon: '↗' },
  { href: 'https://www.linkedin.com/in/josie-carine-ngaha-nana-659a93202/', label: 'LinkedIn', icon: '↗' },
];

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:carinengaha@gmail.com?subject=Portfolio Kontakt von ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailto;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__grid" aria-hidden="true" />
      <motion.div
        className="contact__container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title section-title--large">
          Bereit für das nächste Projekt?
        </h2>
        <p className="contact__subtitle">
          Ich freue mich auf Ihre Nachricht. Kontaktieren Sie mich gerne!
        </p>

        <div className="contact__content">
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ihr Name"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="ihre@email.de"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Nachricht</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Ihre Nachricht..."
              />
            </div>
            <button type="submit" className="btn btn--primary contact__submit">
              Nachricht senden
            </button>
          </motion.form>

          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="contact__email">
              <strong>E-Mail:</strong>{' '}
              <a href="mailto:carinengaha@gmail.com">carinengaha@gmail.com</a>
            </p>
            <p className="contact__location">
              <strong>Standort:</strong> Karlsbad, Deutschland
            </p>
            <div className="contact__social">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  {link.label} {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
