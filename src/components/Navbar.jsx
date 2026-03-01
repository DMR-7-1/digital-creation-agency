import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo_new.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .nav-link {
          position: relative;
          padding: 0.5rem 0;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #06b6d4);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        .cta-btn {
          background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
          position: relative;
          overflow: hidden;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        .cta-btn:hover::before { left: 100%; }
        
        /* DESKTOP */
        @media (min-width: 769px) {
          .desktop-menu { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
        
        /* MOBILE */
        @media (max-width: 768px) {
          .navbar-inner {
            padding: 0 0.75rem !important;
          }
          .navbar-logo {
            height: 36px !important;
            margin: 0 !important;
          }
          .desktop-menu, .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>

      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: isScrolled ? '0.4rem 0' : '0.6rem 0',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: isScrolled 
          ? 'rgba(15, 23, 42, 0.92)' 
          : 'rgba(15, 23, 42, 0.5)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
      }}>
        <div 
          className="navbar-inner"
          style={{ 
            maxWidth: '100%', 
            margin: '0 auto', 
            padding: '0 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >

          {/* Logo — white glow makes dark text visible */}
          <Link 
            to="/"
            onClick={() => setIsMenuOpen(false)}
            style={{ textDecoration: 'none', zIndex: 1001, display: 'flex', alignItems: 'center' }}
          >
              <img 
                src={logoImg} 
                alt="Digital Creation" 
                className="navbar-logo"
                style={{ 
                  height: isScrolled ? '110px' : '150px', 
                  width: 'auto',
                  transition: 'all 0.4s ease',
                  display: 'block',
                  filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.5)) drop-shadow(0 0 2px rgba(255,255,255,0.3)) drop-shadow(0 0 6px rgba(139,92,246,0.3))',
                  marginTop: '-45px',
                  marginBottom: '-45px'
                }} 
              />
          </Link>

          {/* CENTER - Desktop Links */}
          <div 
            className="desktop-menu"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
              flex: 1,
              marginLeft: '2rem',
              marginRight: '2rem'
            }}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}
                style={{
                  color: location.pathname === link.href ? '#8b5cf6' : 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.05rem',
                  transition: 'color 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT — CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link 
              to="/start-project" 
              className="btn cta-btn desktop-cta"
              style={{ 
                display: 'none',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.4rem',
                borderRadius: '10px',
                color: 'white',
                fontWeight: '600',
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.35)'
              }}
            >
              <Sparkles size={16} />
              ابدأ مشروعك
            </Link>

            <button 
              onClick={() => setIsMenuOpen(true)}
              className="mobile-toggle"
              style={{ 
                background: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '10px',
                color: 'white',
                cursor: 'pointer',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px'
              }}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE FULL-SCREEN MENU */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.99) 0%, rgba(30, 41, 59, 0.99) 100%)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          animation: 'fadeIn 0.15s ease-out'
        }}>
          {/* Header */}
          <div style={{ 
            padding: '0.6rem 1rem', 
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.06)'
          }}>
            <img 
              src={logoImg} 
              alt="Digital Creation" 
              style={{ 
                height: '32px', width: 'auto', display: 'block',
                filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.9)) drop-shadow(0 0 3px rgba(255,255,255,0.7))'
              }} 
            />
            <button 
              onClick={() => setIsMenuOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Links */}
          <div style={{ 
            flex: 1, display: 'flex', flexDirection: 'column', 
            alignItems: 'center', justifyContent: 'center',
            gap: '1.5rem'
          }}>
            {navLinks.map((link, index) => (
              <Link 
                key={link.name} to={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  fontSize: '1.4rem', fontWeight: '700',
                  color: location.pathname === link.href ? '#8b5cf6' : 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                  animation: `slideIn 0.3s ease-out forwards ${index * 0.04}s`,
                  opacity: 0
                }}
              >{link.name}</Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ padding: '1rem 1.25rem' }}>
            <Link 
              to="/start-project" onClick={() => setIsMenuOpen(false)}
              className="btn cta-btn"
              style={{ 
                width: '100%', padding: '0.85rem', fontSize: '0.95rem',
                borderRadius: '12px', color: 'white',
                display: 'flex', justifyContent: 'center', gap: '0.5rem',
                textDecoration: 'none'
              }}
            >
              <Sparkles size={16} /> ابدأ مشروعك
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
