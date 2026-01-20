import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      {/* ... (background code skipped, can assume it remains if not touched, but replace_file_content needs context. 
          Actually, let's just replace the specific block with buttons if possible, or the whole file if safer.
          The file is small enough to be safe replacing the top part).
      */}
      {/* Background Ambience handled in CSS or below, not replacing usage. */}
      
      {/* Let's try to target the imports and the text content area specifically. */}

      {/* Background Ambience */}
      <div style={{
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
      <div style={{
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

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', lg: { gridTemplateColumns: '1fr 1fr' }, gap: '3rem', alignItems: 'center' }}>
        
        {/* Text Content */}
        <div style={{ maxWidth: '650px', zIndex: 1 }}>
          <div className="glass-panel" style={{ 
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

          <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.3', fontSize: '2.8rem' }}>
            هل لديك مشروع أو شركة في الجزائر <br />
            <span style={{ 
              background: 'linear-gradient(to left, var(--color-primary), var(--color-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              وتريد نظامًا أو موقعًا يليق بمستوى عملك؟
            </span>
          </h1>

          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95, lineHeight: '1.8' }}>
            نحن وكالة متخصصة في <strong>بناء المواقع الإلكترونية، المتاجر الرقمية، تطبيقات الويب، والأنظمة المخصصة للشركات</strong> باحترافية عالية وتصميم عصري.
          </p>

          {/* Value Props from Ad - Animated */}
          <div style={{ marginBottom: '2rem', display: 'grid', gap: '0.75rem' }}>
            {[
              'حلول مخصصة حسب نشاطك',
              'تصميم حديث وسريع',
              'أنظمة تسهّل عملك وتزيد مبيعاتك',
              'خبرة في العمل مع السوق الجزائري'
            ].map((text, index) => (
              <div 
                key={index}
                className="fade-in-up"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  animationDelay: `${0.2 + index * 0.1}s`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                <span style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>✔️</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              🎁 استشارة مجانية + اقتراح تقني
              <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} />
            </Link>
            <Link to="/services" className="btn btn-outline">
              شاهد خدماتنا
            </Link>
          </div>
        </div>

        {/* Hero Visual (Stock Image) */}
        <div className="hero-visual" style={{ 
          position: 'relative', 
          height: '450px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          '@media (max-width: 768px)': { display: 'none' } 
        }}>
           <div className="glass-panel" style={{
             padding: '10px',
             borderRadius: '24px',
             background: 'rgba(255,255,255,0.05)',
             border: '1px solid rgba(255,255,255,0.1)',
             boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
           }}>
             <img 
               src="/src/assets/hero_bg.png" 
               alt="Team Working" 
               style={{ 
                 borderRadius: '16px', 
                 maxWidth: '100%', 
                 height: 'auto',
                 maxHeight: '400px',
                 objectFit: 'cover'
               }} 
             />
           </div>

           {/* Floating Badge */}
           <div className="glass-panel animate-float" style={{
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
        }
      `}</style>
    </section>
  );
};

export default Hero;
