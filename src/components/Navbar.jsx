import React, { useState, useEffect } from 'react';
import { Sparkles, Home, Briefcase, Users, FolderOpen, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo_new.png';
import useIsMobile from '../hooks/useIsMobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '/', icon: <Home size={18} /> },
    { name: 'خدماتنا', href: '/services', icon: <Briefcase size={18} /> },
    { name: 'من نحن', href: '/about', icon: <Users size={18} /> },
    { name: 'أعمالنا', href: '/portfolio', icon: <FolderOpen size={18} /> },
    { name: 'تواصل', href: '/contact', icon: <MessageCircle size={18} /> }
  ];

  if (isMobile) return <MobileNavbar navLinks={navLinks} location={location} />;

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          padding: 0.5rem 0;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #06b6d4);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        .nav-link:hover::after,
        .nav-link.active::after { width: 100%; }
        .cta-btn {
          background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
          position: relative; overflow: hidden;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        .cta-btn:hover::before { left: 100%; }
      `}</style>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: isScrolled ? '0.4rem 0' : '0.6rem 0',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: isScrolled ? 'rgba(15, 23, 42, 0.92)' : 'rgba(15, 23, 42, 0.5)',
        backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
      }}>
        <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo with Smart Contrast Stage */}
          <Link to="/" style={{ textDecoration: 'none', zIndex: 1001, display: 'flex', alignItems: 'center' }}>
            <div style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {/* The Soft Glow "Halo" Behind the Logo */}
              <div style={{
                position: 'absolute',
                width: '70%', height: '40%',
                background: 'radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 70%)',
                filter: 'blur(10px)',
                zIndex: -1,
                opacity: isScrolled ? 1 : 0.7,
                transition: 'opacity 0.4s ease'
              }} />
              <img src={logoImg} alt="Digital Creation" style={{
                height: isScrolled ? '110px' : '150px',
                width: 'auto', transition: 'all 0.4s ease', display: 'block',
                filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))',
                marginTop: '-45px', marginBottom: '-45px'
              }} />
            </div>
          </Link>

          {/* Center Links */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem', flex: 1, marginLeft: '2rem', marginRight: '2rem' }}>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href}
                className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}
                style={{ color: location.pathname === link.href ? '#8b5cf6' : 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: '600', fontSize: '1.05rem', transition: 'color 0.3s ease', whiteSpace: 'nowrap' }}
              >{link.name}</Link>
            ))}
          </div>

          {/* CTA */}
          <Link to="/start-project" className="btn cta-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.4rem', borderRadius: '10px', color: 'white', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none', boxShadow: '0 4px 20px rgba(139, 92, 246, 0.35)' }}
          >
            <Sparkles size={16} /> ابدأ مشروعك
          </Link>
        </div>
      </nav>
    </>
  );
};

/* ══════════════════════════════════════
   MOBILE — Next-Level Header & Bottom Tab Bar
   ══════════════════════════════════════ */
const MobileNavbar = ({ navLinks, location }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <style>{`
        /* ── Full Width Modern Mobile Header ── */
        .mobile-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: ${isScrolled ? 'rgba(15, 23, 42, 0.85)' : 'transparent'};
          backdrop-filter: ${isScrolled ? 'blur(16px)' : 'none'};
          -webkit-backdrop-filter: ${isScrolled ? 'blur(16px)' : 'none'};
          border-bottom: ${isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'};
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(${isScrollingDown ? '-100%' : '0'});
        }

        /* Smart Logo Fix: Subtle Stage/Glow behind logo for true contrast */
        .logo-stage {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          padding: 0.25rem;
        }
        
        .logo-stage::before {
          content: '';
          position: absolute;
          width: 80%; height: 50%;
          background: radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 70%);
          z-index: -1;
          filter: blur(8px);
        }

        .mobile-logo {
          height: 80px;
          margin: -20px 0;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
          transition: transform 0.3s ease;
        }

        .mobile-cta {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(6, 182, 212, 0.9));
          color: white;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 99px;
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
          border: 1px solid rgba(255,255,255,0.1);
        }

        /* ── Floating Bottom Tab Bar ── */
        .mobile-tab-bar {
          position: fixed;
          bottom: 1rem;
          left: 1rem;
          right: 1rem;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.5rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(${isScrollingDown ? '150%' : '0'});
        }

        .mobile-tab {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
          text-decoration: none;
          padding: 0.4rem 0.5rem;
          border-radius: 16px;
          flex: 1;
          transition: all 0.3s ease;
        }

        .mobile-tab.active {
          background: rgba(139, 92, 246, 0.15);
        }

        .mobile-tab-label {
          font-size: 0.6rem;
          font-weight: 600;
          white-space: nowrap;
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Top Header */}
      <header className="mobile-header">
        <Link to="/" className="logo-stage">
          <img src={logoImg} alt="Digital Creation" className="mobile-logo" />
        </Link>
        <Link to="/start-project" className="mobile-cta">
          <Sparkles size={14} /> ابدأ
        </Link>
      </header>

      {/* Floating Bottom Navigation */}
      <nav className="mobile-tab-bar">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.name}
              to={link.href}
              className={`mobile-tab ${isActive ? 'active' : ''}`}
              style={{ color: isActive ? '#8b5cf6' : 'rgba(255,255,255,0.5)' }}
            >
              <div style={{
                transform: isActive ? 'translateY(-2px)' : 'none',
                transition: 'transform 0.3s ease'
              }}>
                {React.cloneElement(link.icon, {
                  size: 22,
                  color: isActive ? '#a855f7' : 'currentColor',
                  strokeWidth: isActive ? 2.5 : 1.5
                })}
              </div>
              {isActive && (
                <span className="mobile-tab-label">{link.name}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
