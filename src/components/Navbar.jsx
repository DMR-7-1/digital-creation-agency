import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo_new.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll logic
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'من نحن', href: '/about' },
    { name: 'أعمالنا', href: '/portfolio' },
    { name: 'تواصل معنا', href: '/contact' }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          
          {/* Logo */}
          <Link to="/" className="nav-logo-wrapper" onClick={() => setIsMenuOpen(false)}>
            <img 
              src={logoImg} 
              alt="Digital Creation" 
              className="nav-logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="navIndicator"
                      className="nav-link-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action & Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/start-project" className="nav-cta desktop-only">
              <Sparkles size={16} />
              <span>ابدأ مشروعك</span>
            </Link>

            <button 
              className="mobile-toggle"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close Button Positioned absolutely at top right */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '1.5rem',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              <X size={28} />
            </button>

            {/* Background Blob */}
            <div className="mobile-menu-bg" />

            {/* Links */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', zIndex: 10 }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                >
                  <Link 
                    to={link.href} 
                    className={`mobile-nav-link ${location.pathname === link.href ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ marginTop: '3rem', width: '100%', maxWidth: '300px' }}
            >
              <Link 
                to="/start-project" 
                className="nav-cta" 
                style={{ justifyContent: 'center', padding: '1rem' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles size={20} />
                <span>ابدأ مشروعك الآن</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
