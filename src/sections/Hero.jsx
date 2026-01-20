import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero_bg.png';
import logoNew from '../assets/logo_new.png';

const Hero = () => {
  return (
    <section id="hero" className="section" style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      overflow: 'hidden',
      paddingTop: '8rem' // Account for fixed navbar
    }}>
      {/* Background Ambience - Hidden on mobile via CSS to prevent clutter */}
      <div className="hero-blob" style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
        opacity: 0.15,
        filter: 'blur(80px)',
        zIndex: -1
      }} />
      <div className="hero-blob" style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)',
        opacity: 0.15,
        filter: 'blur(80px)',
        zIndex: -1
      }} />

      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        
        {/* Text Content */}
        <div style={{ maxWidth: '650px', zIndex: 1, position: 'relative' }}>
          {/* Mobile Logo - Hidden on Desktop */}
          <img 
            src={logoNew} 
            alt="Digital Creation Logo" 
            className="mobile-hero-logo"
            style={{ 
              display: 'none', // Hidden by default (desktop), shown via mobile.css
              maxWidth: '120px',
              margin: '0 auto 1rem',
              filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.3))'
            }}
          />
          
          <div className="glass-panel hero-badge" style={{ 
            display: 'inline-block', 
            padding: '0.5rem 1rem', 
            marginBottom: '1.5rem', 
            borderRadius: '2rem',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            background: 'rgba(6, 182, 212, 0.1)'
          }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '0.9rem' }}>
              وكالة جزائرية 100% 🇩🇿
            </span>
          </div>

          <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.3', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            هل لديك مشروع أو شركة في الجزائر <br />
            <span style={{ 
              background: 'linear-gradient(to left, var(--color-primary), var(--color-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '800'
            }}>
              وتريد نظامًا أو موقعًا يليق بمستوى عملك؟
            </span>
          </h1>

          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '550px' }}>
            نحن وكالة متخصصة في بناء المواقع الإلكترونية، المتاجر الرقمية، تطبيقات الويب، والأنظمة المخصصة للشركات باحترافية عالية وتصميم عصري.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
              ابدأ مشروعك الآن
              <ArrowLeft size={20} style={{ marginRight: '10px' }} />
            </Link>
          </div>
          
          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399' }}></span>
               دعم فني مستمر
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399' }}></span>
               تصميم عصري
             </div>
          </div>
        </div>

        {/* Visual Content - Hidden on mobile to focus on copy */}
        <div className="hero-visual" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
           <img 
             src={heroBg} 
             alt="Digital Creation Dashboard" 
             className="animate-float"
             style={{ 
               width: '100%', 
               maxWidth: '550px',
               borderRadius: '20px',
               boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
               border: '1px solid rgba(255,255,255,0.1)'
             }} 
           />
           
           {/* Floating Badge */}
           <div className="glass-panel" style={{
             position: 'absolute',
             bottom: '10%',
             left: '-5%',
             padding: '1rem 1.5rem',
             zIndex: 2,
             background: 'rgba(17, 24, 39, 0.9)',
             borderLeft: '4px solid var(--color-primary)',
             display: 'flex',
             alignItems: 'center',
             gap: '1rem'
           }}>
             <div>
               <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Active Projects</div>
               <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>+24 System</div>
             </div>
           </div>
        </div>
      </div>
      
      {/* CSS for responsiveness */}
      <style>{`
        @media (min-width: 1024px) {
          .container { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 1023px) {
          .hero-visual { display: none !important; }
          .hero-blob { opacity: 0.05 !important; width: 80vw !important; height: 80vw !important; } /* Reduce visual noise on mobile */
          #hero { padding-top: 6rem !important; min-height: auto !important; padding-bottom: 4rem !important; } /* Compact hero on mobile */
        }
      `}</style>
    </section>
  );
};

export default Hero;
