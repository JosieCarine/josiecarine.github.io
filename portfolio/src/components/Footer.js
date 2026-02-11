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
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Josie Carine" className="footer__logo" />
        <p className="footer__copyright">
          © {currentYear} Josie Carine. Alle Rechte vorbehalten.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
