import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ 
      background: 'rgba(15, 23, 42, 0.95)', 
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      paddingTop: '4rem',
      position: 'relative',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Column */}
          <div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              marginBottom: '1rem',
              background: 'linear-gradient(to right, #fff, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Digital Creation
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              نحول رؤيتك إلى واقع رقمي. وكالة جزائرية رائدة في تصميم وتطوير الحلول الرقمية المتكاملة.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <SocialIcon Icon={Facebook} href="#" />
              <SocialIcon Icon={Instagram} href="#" />
              <SocialIcon Icon={Linkedin} href="#" />
              <SocialIcon Icon={Twitter} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#fff' }}>روابط سريعة</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <FooterLink to="/" label="الرئيسية" />
              <FooterLink to="/about" label="من نحن" />
              <FooterLink to="/services" label="خدماتنا" />
              <FooterLink to="/portfolio" label="أعمالنا" />
              <FooterLink to="/blog" label="المدونة" />
              <FooterLink to="/contact" label="تواصل معنا" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#fff' }}>خدماتنا</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>تصميم المواقع</li>
              <li style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>تطوير التطبيقات</li>
              <li style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>التسويق الرقمي</li>
              <li style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>استشارات تقنية</li>
              <li style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>تحسين محركات البحث</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#fff' }}>معلومات الاتصال</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ContactItem Icon={Phone} text="+213 555 123 456" />
              <ContactItem Icon={Mail} text="contact@digitalcreation.dz" />
              <ContactItem Icon={MapPin} text="الجزائر العاصمة، الجزائر" />
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
          padding: '2rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>
            © {new Date().getFullYear()} Digital Creation Agency. جميع الحقوق محفوظة.
          </p>
          
          <button 
            onClick={scrollToTop}
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            className="hover:bg-primary"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ 
      color: 'var(--color-text-muted)', 
      transition: 'color 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
    onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
  >
    <Icon size={20} />
  </a>
);

const FooterLink = ({ to, label }) => (
  <li>
    <Link 
      to={to} 
      style={{ 
        color: 'var(--color-text-muted)', 
        textDecoration: 'none', 
        fontSize: '0.9rem',
        transition: 'color 0.3s ease' 
      }}
      onMouseEnter={(e) => {
        e.target.style.color = '#fff';
        e.target.style.paddingRight = '5px';
      }}
      onMouseLeave={(e) => {
        e.target.style.color = 'var(--color-text-muted)';
        e.target.style.paddingRight = '0';
      }}
    >
      {label}
    </Link>
  </li>
);

const ContactItem = ({ Icon, text }) => (
  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
    <Icon size={18} style={{ color: '#8b5cf6' }} />
    <span dir="ltr">{text}</span>
  </li>
);

export default Footer;
