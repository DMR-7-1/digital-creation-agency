import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logoFull from '../assets/logo_full.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow-line" />

      <div className="container">
        <div className="footer-content">
          
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <img 
              src={logoFull} 
              alt="Digital Creation" 
              style={{ height: '80px', marginBottom: '1.5rem', width: 'auto' }} 
            />
            <p>
              نحول رؤيتك الرقمية إلى واقع ملموس. وكالة جزائرية رائدة في تطوير الويب والتصميم الإبداعي، نساعد الشركات على النمو في العصر الرقمي.
            </p>
            <div className="social-links">
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="footer-title">روابط سريعة</h3>
            <ul className="footer-links-list">
              <FooterLink to="/" text="الرئيسية" />
              <FooterLink to="/services" text="خدماتنا" />
              <FooterLink to="/portfolio" text="أعمالنا" />
              <FooterLink to="/about" text="من نحن" />
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="footer-title">تواصل معنا</h3>
            <ul className="footer-links-list">
              <li className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>باتنة، الجزائر</span>
              </li>
              <li className="contact-item">
                <Phone size={18} className="contact-icon" />
                <span dir="ltr">0770 78 44 04 / 0652 49 41 59</span>
              </li>
              <li className="contact-item">
                <Mail size={18} className="contact-icon" />
                <span>contact@digitalcreation.dz</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 Digital Creation Agency. جميع الحقوق محفوظة.</p>
          <div className="footer-legal">
            <span>سياسة الخصوصية</span>
            <span>شروط الاستخدام</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a href={href} className="social-icon">
    {icon}
  </a>
);

const FooterLink = ({ to, text }) => (
  <li className="footer-link-item">
    <Link to={to} className="footer-link">
      {text}
    </Link>
  </li>
);

export default Footer;
