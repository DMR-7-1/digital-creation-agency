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
          
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', zIndex: 1001, display: 'flex', alignItems: 'center' }}>
            <img src={logoImg} alt="Digital Creation" style={{
              height: isScrolled ? '110px' : '150px',
              width: 'auto', transition: 'all 0.4s ease', display: 'block',
              filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.5)) drop-shadow(0 0 2px rgba(255,255,255,0.3)) drop-shadow(0 0 6px rgba(139,92,246,0.3))',
              marginTop: '-45px', marginBottom: '-45px'
            }} />
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
   MOBILE — Fixed bottom tab bar
   ══════════════════════════════════════ */
const MobileNavbar = ({ navLinks, location }) => (
  <>
    <style>{`
      .mobile-tab-bar {
        position: fixed;
        bottom: 0; left: 0; right: 0;
        z-index: 1000;
        background: rgba(15, 23, 42, 0.95);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        padding: 0.3rem 0.25rem 0.4rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .mobile-tab {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.15rem;
        text-decoration: none;
        padding: 0.2rem 0;
        min-width: 48px;
        transition: all 0.2s ease;
      }
      .mobile-tab-label {
        font-size: 0.55rem;
        font-weight: 600;
        white-space: nowrap;
      }
    `}</style>

    <nav className="mobile-tab-bar">
      {navLinks.map((link) => {
        const isActive = location.pathname === link.href;
        return (
          <Link
            key={link.name}
            to={link.href}
            className="mobile-tab"
            style={{ color: isActive ? '#8b5cf6' : 'rgba(255,255,255,0.45)' }}
          >
            {React.cloneElement(link.icon, {
              size: 20,
              color: isActive ? '#8b5cf6' : 'rgba(255,255,255,0.45)',
              strokeWidth: isActive ? 2.5 : 1.8
            })}
            <span className="mobile-tab-label">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  </>
);

export default Navbar;
