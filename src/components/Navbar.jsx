import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location]);

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'من نحن', href: '/about' },
    { name: 'المدونة', href: '/blog' },
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
          padding: '0 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>

          {/* LEFT CORNER - Logo (no container) */}
          <Link 
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img 
              src="/src/assets/logo_new.png" 
              alt="Digital Creation" 
              style={{ 
                height: isScrolled ? '150px' : '200px',
                width: 'auto',
                transition: 'all 0.4s ease',
                filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.15))',
                marginTop: '-60px',
                marginBottom: '-60px'
              }} 
            />
          </Link>

          {/* CENTER - Navigation Links (spread out) */}
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
                onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
                onMouseLeave={(e) => e.target.style.color = location.pathname === link.href ? '#8b5cf6' : 'rgba(255,255,255,0.9)'}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT CORNER - CTA Button & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link 
              to="/contact" 
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
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(139, 92, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.35)';
              }}
            >
              <Sparkles size={16} />
              ابدأ مشروعك
            </Link>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: isScrolled ? '65px' : '80px',
          left: '1rem',
          right: '1rem',
          zIndex: 999,
          background: 'rgba(15, 23, 42, 0.98)',
          backdropFilter: 'blur(24px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1.5rem',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
          animation: 'slideIn 0.3s ease-out'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map((link, index) => (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  color: location.pathname === link.href ? '#8b5cf6' : 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.15rem',
                  padding: '0.9rem 1.2rem',
                  borderRadius: '12px',
                  background: location.pathname === link.href 
                    ? 'rgba(139, 92, 246, 0.15)' 
                    : 'transparent',
                  transition: 'all 0.3s ease',
                  animation: `slideIn 0.3s ease-out ${index * 0.05}s backwards`
                }}
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="cta-btn"
              style={{
                marginTop: '0.75rem',
                padding: '0.9rem 1.5rem',
                borderRadius: '12px',
                color: 'white',
                fontWeight: '700',
                fontSize: '1.05rem',
                textDecoration: 'none',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem'
              }}
            >
              <Sparkles size={18} />
              ابدأ مشروعك الآن
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
