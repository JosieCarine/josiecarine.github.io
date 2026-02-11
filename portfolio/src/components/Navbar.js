import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { section: 'home', label: 'Home' },
  { section: 'about', label: 'About' },
  { section: 'skills', label: 'Skills' },
  { section: 'projects', label: 'Projects' },
  { section: 'experience', label: 'Experience' },
  { section: 'contact', label: 'Contact' },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isHome) {
        const sections = navLinks.map((link) => link.section);
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.getBoundingClientRect().top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const handleLinkClick = (section) => {
    setMobileMenuOpen(false);
    if (!isHome) {
      navigate('/', { state: { scrollTo: section } });
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={() => setMobileMenuOpen(false)}>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Josie Carine" className="navbar__logo-img" />
        </Link>

        <button
          className="navbar__toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={mobileMenuOpen ? 'navbar__toggle-bar open' : 'navbar__toggle-bar'} />
          <span className={mobileMenuOpen ? 'navbar__toggle-bar open' : 'navbar__toggle-bar'} />
          <span className={mobileMenuOpen ? 'navbar__toggle-bar open' : 'navbar__toggle-bar'} />
        </button>

        <ul className={`navbar__links ${mobileMenuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(({ section, label }) => (
            <li key={section}>
              <button
                className={`navbar__link ${activeSection === section ? 'navbar__link--active' : ''}`}
                onClick={() => handleLinkClick(section)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
