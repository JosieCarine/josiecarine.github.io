import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="footer__container">
        <p className="footer__copyright">
          © {currentYear} Josie Carine. Alle Rechte vorbehalten.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
