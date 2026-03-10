import React from 'react';
import { CheckCircle } from 'lucide-react';
import logoFull from '../assets/logo_full.png';
import { AnimatedSection, FadeIn, AnimatedCounter, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import useIsMobile from '../hooks/useIsMobile';

const About = () => {
  const isMobile = useIsMobile();
  if (isMobile) return <MobileAbout />;
  return <DesktopAbout />;
};

/* ══════════════════════════════════════
   MOBILE ABOUT — Clean app-like layout
   ══════════════════════════════════════ */
const MobileAbout = () => (
  <section style={{ padding: '1.25rem 1.25rem 1.5rem' }}>
    {/* Badge */}
    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'var(--badge-bg)', borderRadius: '20px' }}>
        <span style={{ color: 'var(--color-secondary)', fontWeight: 700, fontSize: '0.72rem' }}>من نحن</span>
      </div>
    </div>

    {/* Headline */}
    <h2 style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '0.6rem', lineHeight: 1.3, color: 'var(--color-text-main)' }}>
      فريق جزائري يفهم السوق ويتقن التقنية
    </h2>
    <p style={{ fontSize: '0.78rem', lineHeight: 1.6, color: 'var(--color-text-muted)', textAlign: 'center', marginBottom: '1.25rem', maxWidth: '340px', margin: '0 auto 1.25rem' }}>
      <strong style={{ color: 'var(--color-primary)' }}>Digital Creation</strong> شريكك اللي يفهم شنو تحتاج، يبنيلك حل يناسب مشروعك، ويبقى معاك حتى بعد التسليم.
    </p>

    {/* Checklist — 2×2 grid */}
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0.4rem', marginBottom: '1rem'
    }}>
      {['فريق شغوف', 'تقنيات حديثة', 'نعرفو السوق', 'دعم مستمر'].map((item, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: '0.3rem',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '8px', padding: '0.35rem 0.5rem',
          fontSize: '0.68rem', color: 'var(--color-text-muted)'
        }}>
          <CheckCircle size={12} color="var(--color-primary)" />
          {item}
        </div>
      ))}
    </div>

    {/* Stats — horizontal row */}
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <div style={{
        flex: 1, background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: '12px', padding: '0.75rem', textAlign: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>
          <AnimatedCounter target={50} prefix="+" />
        </div>
        <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>مشروع ناجح</div>
      </div>
      <div style={{
        flex: 1, background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: '12px', padding: '0.75rem', textAlign: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-secondary)' }}>
          <AnimatedCounter target={100} suffix="%" />
        </div>
        <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>رضا العملاء</div>
      </div>
      <div style={{
        flex: 1, background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: '12px', padding: '0.75rem', textAlign: 'center'
      }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '0.2rem' }}>تقنياتنا</div>
        <div style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>React • Node • Cloud</div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════
   DESKTOP ABOUT (unchanged)
   ══════════════════════════════════════ */
const DesktopAbout = () => (
  <section id="about" className="section" style={{ background: 'transparent' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
        <FadeIn direction="right">
          <div className="glass-panel" style={{ padding: '4rem 3rem', textAlign: 'center', background: 'var(--card-bg)', border: '1px solid var(--glass-border)', position: 'relative', overflow: 'hidden', minHeight: '450px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '350px', height: '350px', background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0, opacity: 0.1 }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <img src={logoFull} alt="Digital Creation" style={{ maxWidth: '100%', height: 'auto', margin: '0 auto', filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.4))' }} />
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.2}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(139, 92, 246, 0.2)', borderRadius: '20px', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--color-secondary)', fontWeight: '700' }}>من نحن</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>فريق جزائري يفهم السوق ويتقن التقنية</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              <strong style={{ color: 'var(--color-primary)' }}>Digital Creation</strong> مش مجرد وكالة تصمّملك موقع وتمشي.
              نحن شريكك اللي يفهم شنو تحتاج، يبنيلك حل يناسب مشروعك، ويبقى معاك حتى بعد التسليم.
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

      <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }} staggerDelay={0.15}>
        <StaggerItem>
          <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '0.5rem' }}><AnimatedCounter target={50} prefix="+" /></h3>
            <p style={{ fontSize: '1.1rem' }}>مشروع رقمي ناجح</p>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}><AnimatedCounter target={100} suffix="%" /></h3>
            <p style={{ fontSize: '1.1rem' }}>رضا العملاء</p>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem' }}>تقنيات حديثة</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', color: 'var(--color-text-muted)', flexWrap: 'wrap' }}>
              <span>React</span><span>•</span><span>Node</span><span>•</span><span>Cloud</span>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </div>
  </section>
);

export default About;
