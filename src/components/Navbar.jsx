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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Close menu on route change
  // Note: We handle this via onClick on links to avoid React 19 cascading render lint warnings
  /* 
  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  }, [location, isMenuOpen]);
  */

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
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        .cta-btn:hover::before {
          left: 100%;
        }
        @media (min-width: 1024px) {
          .desktop-menu { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>

      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '0.6rem 0' : '0.9rem 0',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.08)' 
          : 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
      }}>
        <div style={{ 
          maxWidth: '100%', 
          margin: '0 auto', 
          padding: '0 4.5rem', // More breathing room from corners on desktop
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>

          {/* LEFT CORNER - Logo */}
          <Link 
            to="/"
            onClick={() => setIsMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'transform 0.3s ease',
              zIndex: 1001 // Ensure above mobile menu if needed, though menu covers all
            }}
          >
            <img 
              src={logoImg} 
              alt="Digital Creation" 
              className="nav-logo-mobile"
              style={{ 
                height: isScrolled ? '120px' : '160px', 
                width: 'auto',
                transition: 'all 0.4s ease',
                filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.15))',
                marginTop: '-40px',
                marginBottom: '-40px',
                transform: 'scale(1.4)', // Make logo bigger without affecting layout frame
                transformOrigin: 'center'
              }} 
            />
          </Link>

          {/* CENTER - Navigation Links (Desktop) */}
          <div 
            className="desktop-menu"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3rem',
              flex: 1,
              marginLeft: '3rem',
              marginRight: '3rem'
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

          {/* RIGHT CORNER - CTA & Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.35)',
                transition: 'all 0.3s ease'
              }}
            >
              <Sparkles size={16} />
              ابدأ مشروعك
            </Link>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="mobile-toggle"
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                width: '42px',
                height: '42px',
                transition: 'all 0.3s ease'
              }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* NEW PREMIUM FULL SCREEN MOBILE MENU */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0, // Top, right, bottom, left = 0
          zIndex: 9999,
          background: 'rgba(15, 23, 42, 0.98)', // Deep dark
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          {/* Header of Modal */}
          <div style={{ 
            padding: '1.5rem', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
          }}>
             <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>القائمة</span>
             <button 
               onClick={() => setIsMenuOpen(false)}
               style={{
                 background: 'rgba(255,255,255,0.1)',
                 border: 'none',
                 borderRadius: '50%',
                 width: '40px',
                 height: '40px',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 color: 'white',
                 cursor: 'pointer'
               }}
             >
               <X size={24} />
             </button>
          </div>

          {/* Links Container */}
          <div style={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '2rem'
          }}>
            {navLinks.map((link, index) => (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  fontSize: '2rem', // Massive font for premium app feel
                  fontWeight: '700',
                  color: location.pathname === link.href ? '#8b5cf6' : 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  animation: `slideIn 0.4s ease-out forwards ${index * 0.05}s`,
                  opacity: 0 // Start hidden for animation
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Footer of Modal */}
          <div style={{ padding: '2rem', width: '100%' }}>
            <Link 
              to="/start-project" 
              onClick={() => setIsMenuOpen(false)}
              className="btn cta-btn"
              style={{ 
                width: '100%', 
                padding: '1.2rem', 
                fontSize: '1.1rem',
                borderRadius: '16px',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <Sparkles size={20} />
              ابدأ مشروعك
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
