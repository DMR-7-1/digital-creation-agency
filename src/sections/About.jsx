import React from 'react';
import { CheckCircle } from 'lucide-react';
import logoFull from '../assets/logo_full.png';
import { AnimatedSection, FadeIn, AnimatedCounter, StaggerContainer, StaggerItem } from '../components/AnimatedSection';

const About = () => {
  return (
    <section id="about" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container">
        
        {/* Brand Story Section with Full Logo */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '4rem', 
          alignItems: 'center',
          marginBottom: '6rem'
        }}>
          
          {/* Full Logo Side */}
          <FadeIn direction="right">
            <div className="glass-panel" style={{ 
              padding: '4rem 3rem', 
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15))',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '450px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              {/* Decorative glow */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '350px',
                height: '350px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 0
              }} />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <img 
                  src={logoFull} 
                  alt="Digital Creation - نحوّل رؤيتك لواقع" 
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                    margin: '0 auto',
                    filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.4))'
                  }} 
                />
              </div>
            </div>
          </FadeIn>

          {/* About Text Side */}
          <FadeIn direction="left" delay={0.2}>
            <div style={{ maxWidth: '600px' }}>
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(139, 92, 246, 0.2)', borderRadius: '20px', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--color-secondary)', fontWeight: '700' }}>من نحن</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>فريق جزائري يفهم السوق ويتقن التقنية</h2>
              <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong style={{ color: 'var(--color-primary)' }}>Digital Creation</strong> مش مجرد وكالة تصمّملك موقع وتمشي. 
                نحن شريكك اللي يفهم شنو تحتاج، يبنيلك حل يناسب مشروعك، ويبقى معاك حتى بعد التسليم. 
                نجمعو بين فهمنا للسوق الجزائري وأحدث التقنيات العالمية باش نعطيك نتيجة تفتخر بيها.
              </p>

              <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                {['فريق جزائري شغوف بالتقنية', 'تقنيات عالمية حديثة', 'نعرفو السوق المحلي مليح', 'معاك حتى بعد ما نسلّمو'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <CheckCircle size={20} color="var(--color-primary)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats & Technologies */}
        <StaggerContainer 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}
          staggerDelay={0.15}
        >
          <StaggerItem>
            <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                <AnimatedCounter target={50} prefix="+" />
              </h3>
              <p style={{ fontSize: '1.1rem' }}>مشروع رقمي ناجح</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>
                <AnimatedCounter target={100} suffix="%" />
              </h3>
              <p style={{ fontSize: '1.1rem' }}>رضا العملاء</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem' }}>تقنيات حديثة</h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', color: 'var(--color-text-muted)', flexWrap: 'wrap' }}>
                <span>React</span>
                <span>•</span>
                <span>Node</span>
                <span>•</span>
                <span>Cloud</span>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default About;
