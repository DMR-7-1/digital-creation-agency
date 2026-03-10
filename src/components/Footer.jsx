import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logoFull from '../assets/logo_full.png';
import useIsMobile from '../hooks/useIsMobile';

const Footer = () => {
  const isMobile = useIsMobile();
  if (isMobile) return <MobileFooter />;
  return <DesktopFooter />;
};

/* ══════════════════════════════════════
   MOBILE FOOTER — Ultra compact
   ══════════════════════════════════════ */
const MobileFooter = () => (
  <footer style={{
    background: 'var(--card-bg)',
    borderTop: '1px solid var(--glass-border)',
    padding: '1.5rem 1.25rem 1rem'
  }}>
    {/* Logo + Tagline */}
    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <img src={logoFull} alt="Digital Creation" style={{
        height: '45px', width: 'auto', marginBottom: '0.5rem',
        filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.4))'
      }} />
      <p style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
        فريق جزائري يحوّل أفكارك الرقمية لواقع
      </p>
    </div>

    {/* Quick links — inline row */}
    <div style={{
      display: 'flex', justifyContent: 'center', gap: '1rem',
      marginBottom: '1rem', flexWrap: 'wrap'
    }}>
      {[
        { to: '/', text: 'الرئيسية' },
        { to: '/services', text: 'خدماتنا' },
        { to: '/portfolio', text: 'أعمالنا' },
        { to: '/about', text: 'من نحن' },
        { to: '/contact', text: 'تواصل' }
      ].map((link, i) => (
        <Link key={i} to={link.to} style={{
          color: 'var(--color-text-main)', textDecoration: 'none',
          fontSize: '0.72rem', fontWeight: 500, opacity: 0.7
        }}>
          {link.text}
        </Link>
      ))}
    </div>

    {/* Contact info — compact */}
    <div style={{
      display: 'flex', justifyContent: 'center', gap: '1.25rem',
      marginBottom: '1rem', flexWrap: 'wrap'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>
        <MapPin size={12} color="var(--color-primary)" /> باتنة
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>
        <Phone size={12} color="var(--color-primary)" /> <span dir="ltr">0770 78 44 04</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>
        <Mail size={12} color="var(--color-primary)" /> contact@digitalcreation.dz
      </div>
    </div>

    {/* Social icons */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
      {[Facebook, Instagram, Linkedin].map((Icon, i) => (
        <a key={i} href="#" style={{
          width: '30px', height: '30px', borderRadius: '50%',
          background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-main)'
        }}>
          <Icon size={14} />
        </a>
      ))}
    </div>

    {/* Copyright */}
    <div style={{
      borderTop: '1px solid var(--glass-border)', paddingTop: '0.6rem',
      textAlign: 'center', fontSize: '0.6rem', color: 'var(--color-text-muted)', opacity: 0.6
    }}>
      © 2026 Digital Creation Agency
    </div>
  </footer>
);

/* ══════════════════════════════════════
   DESKTOP FOOTER (unchanged)
   ══════════════════════════════════════ */
const DesktopFooter = () => (
  <footer style={{
    background: 'var(--card-bg)',
    borderTop: '1px solid var(--glass-border)',
    paddingTop: '4rem', paddingBottom: '2rem',
    position: 'relative', overflow: 'hidden'
  }}>
    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)', opacity: 0.3 }} />
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        <div>
          <img src={logoFull} alt="Digital Creation" style={{ height: '80px', marginBottom: '1.5rem', width: 'auto' }} />
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            فريق جزائري يحوّل أفكارك الرقمية لواقع. مواقع، متاجر، وأنظمة ويب — بتصميم يبهر ونتيجة تبان.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <SocialIcon icon={<Facebook size={18} />} href="#" />
            <SocialIcon icon={<Instagram size={18} />} href="#" />
            <SocialIcon icon={<Linkedin size={18} />} href="#" />
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-main)' }}>روابط سريعة</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <FooterLink to="/" text="الرئيسية" />
            <FooterLink to="/services" text="خدماتنا" />
            <FooterLink to="/portfolio" text="أعمالنا" />
            <FooterLink to="/about" text="من نحن" />
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-main)' }}>تواصل معنا</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', opacity: 0.8 }}>
              <MapPin size={18} style={{ color: '#8b5cf6', marginTop: '4px' }} /><span>باتنة، الجزائر</span>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.8 }}>
              <Phone size={18} style={{ color: '#8b5cf6' }} /><span dir="ltr">0770 78 44 04 / 0652 49 41 59</span>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.8 }}>
              <Mail size={18} style={{ color: '#8b5cf6' }} /><span>contact@digitalcreation.dz</span>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
        <p>© 2026 Digital Creation Agency. جميع الحقوق محفوظة.</p>
        <div style={{ display: 'flex', gap: '2rem' }}><span>سياسة الخصوصية</span><span>شروط الاستخدام</span></div>
      </div>
    </div>
  </footer>
);

const SocialIcon = ({ icon, href }) => (
  <a href={href} style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.1)' }}
    onMouseEnter={(e) => { e.currentTarget.style.background = '#8b5cf6'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
  >{icon}</a>
);

const FooterLink = ({ to, text }) => (
  <li style={{ marginBottom: '0.75rem' }}>
    <Link to={to} style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7, transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = '#8b5cf6'; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.color = 'inherit'; }}
    >{text}</Link>
  </li>
);

export default Footer;
