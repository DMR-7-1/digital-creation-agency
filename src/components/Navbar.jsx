import React, { useState, useEffect } from 'react';
import { Sparkles, Home, Briefcase, Users, FolderOpen, MessageCircle } from 'lucide-react';
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

const Navbar = () => {
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
          background: ${isScrolled ? 'rgba(11, 15, 25, 0.65)' : 'transparent'};
          backdrop-filter: ${isScrolled ? 'blur(24px)' : 'none'};
          -webkit-backdrop-filter: ${isScrolled ? 'blur(24px)' : 'none'};
          border-bottom: 1px solid ${isScrolled ? 'rgba(255, 255, 255, 0.03)' : 'transparent'};
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
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
          height: ${isScrolled ? '45px' : '55px'};
          width: auto;
          transition: height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
        }

        @media (max-width: 768px) {
          .brand-logo {
            height: ${isScrolled ? '40px' : '48px'};
          }
        }

        /* ── Desktop Links ── */
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .desktop-link {
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .desktop-link:hover, .desktop-link.active {
          color: rgba(255, 255, 255, 1);
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
          background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
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
          transition: all 0.3s ease;
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
          height: 85px; /* Taller to accommodate safe area + icons */
          padding-bottom: env(safe-area-inset-bottom);
          z-index: 1000;
          background: rgba(11, 15, 25, 0.75);
          backdrop-filter: blur(24px) saturate(150%);
          -webkit-backdrop-filter: blur(24px) saturate(150%);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: flex-start; /* Align to top of shelf */
          justify-content: space-around;
        }

        /* A subtle highlight on the very top edge to catch "light" */
        .mobile-glass-shelf::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
        }

        .shelf-item {
          flex: 1;
          height: 60px; /* Clickable area */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          margin-top: 4px; /* Push down slightly from top edge */
        }

        .shelf-item.active {
          color: rgba(255, 255, 255, 0.95);
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

        /* Active dot indicator */
        .shelf-dot {
          position: absolute;
          bottom: -8px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: linear-gradient(90deg, #8b5cf6, #06b6d4);
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 8px rgba(6, 182, 212, 0.8);
        }

        .shelf-item.active .shelf-dot {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      {/* ── Global Header (Desktop & Mobile) ── */}
      <header className="premium-header">
        <div className="header-container">
          <Link to="/" className="logo-wrap">
            <div className="logo-glow" />
            <img src={logoImg} alt="Digital Creation" className="brand-logo" />
          </Link>

          {isMobile ? (
            <Link to="/start-project" className="cta-shimmer" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', borderRadius: '8px' }}>
              <Sparkles size={14} /> ابدأ
            </Link>
          ) : (
            <>
              <nav className="nav-links-desktop">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.href} className={`desktop-link ${location.pathname === link.href ? 'active' : ''}`}>
                    {link.name}
                  </Link>
                ))}
              </nav>
              <Link to="/start-project" className="cta-shimmer">
                <Sparkles size={16} /> ابدأ مشروعك
              </Link>
            </>
          )}
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
                <div className="shelf-icon-wrapper">
                  {/* Fill icon if active, outline if inactive */}
                  {React.cloneElement(link.icon, {
                    size: isActive ? 24 : 22,
                    strokeWidth: isActive ? 2.5 : 2,
                    fill: isActive ? 'url(#gradientFill)' : 'none',
                    color: isActive ? 'transparent' : 'currentColor'
                  })}
                  <div className="shelf-dot" />
                </div>
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
