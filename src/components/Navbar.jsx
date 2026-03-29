import React, { useState, useEffect } from 'react';
import { Sparkles, Home, Briefcase, Users, FolderOpen, MessageCircle, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo_new.png';
import useIsMobile from '../hooks/useIsMobile';

const navLinks = [
  { name: 'الرئيسية', href: '/', icon: <Home /> },
  { name: 'خدماتنا', href: '/services', icon: <Briefcase /> },
  { name: 'من نحن', href: '/about', icon: <Users /> },
  { name: 'أعمالنا', href: '/portfolio', icon: <FolderOpen /> },
  { name: 'تواصل', href: '/contact', icon: <MessageCircle /> }
];

const Navbar = ({ toggleTheme, theme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        /* ── Premium Glassy Header (Desktop & Mobile) ── */
        .premium-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: ${isScrolled ? '0.75rem 0' : '1.25rem 0'};
          background: ${theme === 'light'
            ? (isScrolled ? 'rgba(252, 253, 254, 0.95)' : 'rgba(252, 253, 254, 0.8)')
            : (isScrolled ? 'rgba(3, 7, 18, 0.85)' : 'transparent')};
          backdrop-filter: ${isScrolled ? 'blur(24px)' : 'none'};
          -webkit-backdrop-filter: ${isScrolled ? 'blur(24px)' : 'none'};
          border-bottom: 1px solid ${theme === 'light'
            ? (isScrolled ? 'rgba(15, 23, 42, 0.1)' : 'transparent')
            : (isScrolled ? 'rgba(255, 255, 255, 0.05)' : 'transparent')};
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: ${theme === 'light' && isScrolled ? '0 4px 20px rgba(0,0,0,0.03)' : 'none'};
        }

        .header-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Subtle glow block behind logo so it always pops */
        .logo-wrap {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .logo-glow {
          position: absolute;
          width: 100%; height: 50%;
          background: radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15), transparent 70%);
          filter: blur(12px);
          z-index: -1;
          opacity: ${isScrolled ? 1 : 0.5};
          transition: opacity 0.5s ease;
        }

        .brand-logo {
          height: ${isScrolled ? '85px' : '105px'};
          width: auto;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.12));
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .brand-logo {
            height: ${isScrolled ? '65px' : '85px'};
          }
        }

        /* ── Desktop Links ── */
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .desktop-link {
          color: ${theme === 'light' ? 'rgba(15, 23, 42, 0.65)' : 'rgba(255, 255, 255, 0.65)'};
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .desktop-link:hover, .desktop-link.active {
          color: ${theme === 'light' ? 'rgba(15, 23, 42, 1)' : 'rgba(255, 255, 255, 1)'};
        }

        .desktop-link::after {
          content: '';
          position: absolute;
          bottom: 0px; left: 50%;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #06b6d4, #8b5cf6);
          background-size: 200% auto;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateX(-50%);
          border-radius: 2px;
          opacity: 0;
        }

        .desktop-link:hover::after, .desktop-link.active::after {
          width: 100%;
          opacity: 1;
        }

        /* Shimmering CTA Button */
        .cta-shimmer {
          background: ${theme === 'light'
            ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))'
            : 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(139, 92, 246, 0.15))'};
          border: 1px solid ${theme === 'light' ? 'rgba(6, 182, 212, 0.2)' : 'rgba(6, 182, 212, 0.3)'};
          color: ${theme === 'light' ? '#1e293b' : 'white'};
          text-decoration: none;
          padding: 0.65rem 1.4rem;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(10px);
        }

        .cta-shimmer::before {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: skewX(-20deg);
          animation: shimmer 4s infinite cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-shimmer:hover {
          transform: translateY(-2px);
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2));
          border-color: rgba(139, 92, 246, 0.4);
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.2);
        }

        @keyframes shimmer {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }

        /* ── Mobile Apple-Style Bottom Glass Shelf ── */
        .mobile-glass-shelf {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 75px; /* Shorter */
          padding-bottom: env(safe-area-inset-bottom);
          z-index: 1000;
          background: ${theme === 'light'
            ? 'rgba(248, 250, 252, 0.8)'
            : 'rgba(11, 15, 25, 0.75)'};
          backdrop-filter: blur(24px) saturate(150%);
          -webkit-backdrop-filter: blur(24px) saturate(150%);
          border-top: 1px solid ${theme === 'light' ? 'rgba(15, 23, 42, 0.08)' : 'rgba(255, 255, 255, 0.08)'};
          display: flex;
          align-items: center; /* Center items instead of flex-start */
          justify-content: space-around;
        }

        /* A subtle highlight on the very top edge to catch "light" */
        .mobile-glass-shelf::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, ${theme === 'light' ? 'rgba(15,23,42,0.05)' : 'rgba(255,255,255,0.15)'}, transparent);
        }

        .shelf-item {
          flex: 1;
          height: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: ${theme === 'light' ? 'rgba(15, 23, 42, 0.4)' : 'rgba(255, 255, 255, 0.4)'};
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .shelf-item.active {
          color: ${theme === 'light' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
        }

        .shelf-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .shelf-item.active .shelf-icon-wrapper {
          transform: translateY(-4px);
        }

        .theme-toggle {
          background: transparent;
          border: 1px solid ${theme === 'light' ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
          color: ${theme === 'light' ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.7)'};
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          background: ${theme === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)'};
          color: ${theme === 'light' ? '#000' : '#fff'};
        }
      `}</style>

      {/* ── Global Header (Desktop & Mobile) ── */}
      <header className="premium-header">
        <div className="header-container" style={{ direction: 'rtl' }}>
          {/* Logo First = Right Side in RTL */}
          <Link to="/" className="logo-wrap" style={{ order: 3 }}>
            <div className="logo-glow" />
            <img src={logoImg} alt="Digital Creation" className="brand-logo" />
          </Link>

          {/* Desktop Nav in Center */}
          {!isMobile && (
            <nav className="nav-links-desktop" style={{ order: 2, flex: 1, justifyContent: 'center' }}>
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className={`desktop-link ${location.pathname === link.href ? 'active' : ''}`}>
                  {link.name}
                </Link>
              ))}
            </nav>
          )}

          {/* CTA & Theme Button = Left Side in RTL */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', order: 1 }}>
            {isMobile ? (
              <Link to="/start-project" className="cta-shimmer" style={{ padding: '0.4rem 0.9rem', fontSize: '0.75rem', borderRadius: '8px' }}>
                <Sparkles size={12} /> ابدأ
              </Link>
            ) : (
              <Link to="/start-project" className="cta-shimmer" style={{ padding: '0.6rem 1.25rem' }}>
                <Sparkles size={16} /> ابدأ مشروعك
              </Link>
            )}
            
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme" style={{ width: '34px', height: '34px' }}>
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Apple-Style Bottom Shelf ── */}
      {isMobile && (
        <nav className="mobile-glass-shelf">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`shelf-item ${isActive ? 'active' : ''}`}
                aria-label={link.name}
              >
                <div className="shelf-icon-wrapper" style={{ marginBottom: '2px' }}>
                  {/* Fill icon if active, outline if inactive */}
                  {React.cloneElement(link.icon, {
                    size: isActive ? 22 : 20,
                    strokeWidth: isActive ? 2.5 : 2,
                    fill: isActive ? 'url(#gradientFill)' : 'none',
                    color: isActive ? 'transparent' : 'currentColor'
                  })}
                </div>
                <span style={{ 
                  fontSize: '0.65rem', 
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? (theme === 'light' ? 'var(--color-primary)' : '#fff') : (theme === 'light' ? 'rgba(15, 23, 42, 0.5)' : 'rgba(255, 255, 255, 0.6)'),
                  marginTop: '4px',
                  transition: 'color 0.3s ease'
                }}>
                  {link.name}
                </span>
              </Link>
            );
          })}

          {/* SVG Gradient Def for Active Icons */}
          <svg style={{ width: 0, height: 0, position: 'absolute' }}>
            <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </svg>
        </nav>
      )}
    </>
  );
};

export default Navbar;
