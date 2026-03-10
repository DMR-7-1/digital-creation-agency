import React, { useState, useEffect } from 'react';
import { Sparkles, Home, Briefcase, Users, FolderOpen, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo_new.png';
import useIsMobile from '../hooks/useIsMobile';

const navLinks = [
  { name: 'الرئيسية', href: '/', icon: <Home size={20} /> },
  { name: 'خدماتنا', href: '/services', icon: <Briefcase size={20} /> },
  { name: 'من نحن', href: '/about', icon: <Users size={20} /> },
  { name: 'أعمالنا', href: '/portfolio', icon: <FolderOpen size={20} /> },
  { name: 'تواصل', href: '/contact', icon: <MessageCircle size={20} /> }
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
        /* ── Premium Glassy Navbar (Desktop & Mobile Header) ── */
        .glass-navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: ${isScrolled ? '0.5rem 0' : '1rem 0'};
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: ${isScrolled ? 'rgba(15, 23, 42, 0.75)' : 'rgba(15, 23, 42, 0.3)'};
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, ${isScrolled ? '0.1' : '0.05'});
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo-container {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* Subtle glow stage behind logo */
        .nav-logo-stage {
          position: absolute;
          width: 80%; height: 50%;
          background: radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 70%);
          filter: blur(8px);
          z-index: -1;
        }

        .nav-logo {
          height: ${isScrolled ? '50px' : '70px'};
          width: auto;
          transition: all 0.4s ease;
          object-fit: contain;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
        }

        @media (max-width: 768px) {
          .nav-logo {
            height: ${isScrolled ? '45px' : '55px'};
          }
        }

        /* ── Desktop Links & CTA ── */
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          color: #fff;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 50%;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #06b6d4);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        .cta-btn {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(6, 182, 212, 0.9));
          color: white;
          text-decoration: none;
          padding: 0.6rem 1.4rem;
          border-radius: 99px;
          font-size: 0.95rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
          border: 1px solid rgba(255,255,255,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(139, 92, 246, 0.5);
        }

        /* ── Mobile Floating Pill Bottom Bar ── */
        .mobile-pill-bar {
          position: fixed;
          bottom: 1.25rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          padding: 0.5rem 1rem;
          border-radius: 99px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .mobile-pill-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.2rem;
          height: 3.2rem;
          border-radius: 50%;
          color: rgba(255,255,255,0.5);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        .mobile-pill-item.active {
          color: #fff;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2));
          box-shadow: inset 0 0 10px rgba(255,255,255,0.05);
        }
      `}</style>

      {/* Shared Glassy Header */}
      <header className="glass-navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo-container">
            <div className="nav-logo-stage" />
            <img src={logoImg} alt="Digital Creation" className="nav-logo" />
          </Link>

          {isMobile ? (
            <Link to="/start-project" className="cta-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              <Sparkles size={14} /> ابدأ مشروعك
            </Link>
          ) : (
            <>
              <div className="desktop-links">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.href} className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}>
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link to="/start-project" className="cta-btn">
                <Sparkles size={16} /> ابدأ مشروعك
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Floating Bottom Pill for Mobile */}
      {isMobile && (
        <nav className="mobile-pill-bar">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`mobile-pill-item ${isActive ? 'active' : ''}`}
                aria-label={link.name}
              >
                {React.cloneElement(link.icon, {
                  size: isActive ? 24 : 22,
                  color: isActive ? '#a855f7' : 'currentColor'
                })}
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
};

export default Navbar;
