import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import logoFull from '../assets/logo_full.png';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'linear-gradient(to top, #0f172a, #131c36)', 
      borderTop: '1px solid rgba(139, 92, 246, 0.15)',
      paddingTop: '4rem',
      paddingBottom: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)'
      }} />

      <div className="container">
        {/* Main Footer Content */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          
          {/* Column 1: Brand */}
          <div>
            <img src={logoFull} alt="Digital Creation" style={{ height: '80px', marginBottom: '1.5rem', width: 'auto' }} />
            <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: '1.8', marginBottom: '1.5rem' }}>
              نحول رؤيتك الرقمية إلى واقع ملموس. وكالة جزائرية رائدة في تطوير الويب والتصميم الإبداعي.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#fff' }}>روابط سريعة</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <FooterLink to="/" text="الرئيسية" />
              <FooterLink to="/services" text="خدماتنا" />
              <FooterLink to="/portfolio" text="أعمالنا" />
              <FooterLink to="/about" text="من نحن" />
              <FooterLink to="/blog" text="المدونة" />
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#fff' }}>تواصل معنا</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', opacity: 0.8 }}>
                <MapPin size={18} style={{ color: '#8b5cf6', marginTop: '4px' }} />
                <span>باتنة، الجزائر</span>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.8 }}>
                <Phone size={18} style={{ color: '#8b5cf6' }} />
                <span dir="ltr">0770 78 44 04 / 0652 49 41 59</span>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.8 }}>
                <Mail size={18} style={{ color: '#8b5cf6' }} />
                <span>contact@digitalcreation.dz</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.9rem',
          opacity: 0.6
        }}>
          <p>© 2026 Digital Creation Agency. جميع الحقوق محفوظة.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>سياسة الخصوصية</span>
            <span>شروط الاستخدام</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a href={href} style={{ 
    width: '36px', 
    height: '36px', 
    borderRadius: '50%', 
    background: 'rgba(255,255,255,0.05)', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: '#fff',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255,255,255,0.1)'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = '#8b5cf6';
    e.currentTarget.style.transform = 'translateY(-3px)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
    e.currentTarget.style.transform = 'translateY(0)';
  }}
  >
    {icon}
  </a>
);

const FooterLink = ({ to, text }) => (
  <li style={{ marginBottom: '0.75rem' }}>
    <Link to={to} style={{ 
      color: 'inherit', 
      textDecoration: 'none', 
      opacity: 0.7, 
      transition: 'all 0.2s',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.opacity = '1';
      e.currentTarget.style.color = '#8b5cf6';
      e.currentTarget.style.paddingRight = '5px';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.opacity = '0.7';
      e.currentTarget.style.color = 'inherit';
      e.currentTarget.style.paddingRight = '0';
    }}
    >
      {text}
    </Link>
  </li>
);

export default Footer;
