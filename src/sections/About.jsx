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
   DESKTOP ABOUT - Premium Cyber-Glass Asymmetry
   ══════════════════════════════════════ */
const DesktopAbout = () => (
  <section id="about" className="section" style={{ background: 'transparent' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '5rem', alignItems: 'center', marginBottom: '8rem' }}>
        <FadeIn direction="right">
          <div className="glass-panel" style={{ padding: '4rem 3rem', textAlign: 'center', background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.4)', position: 'relative', overflow: 'hidden', minHeight: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Glowing mesh orb behind logo */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 60%)', filter: 'blur(90px)', zIndex: 0, opacity: 0.15 }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <img src={logoFull} alt="Digital Creation" style={{ maxWidth: '100%', height: 'auto', margin: '0 auto', filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.5))' }} />
            </div>
            {/* Edge highlight */}
            <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)' }} />
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.2}>
          <div style={{ maxWidth: '650px' }}>
            <div style={{ display: 'inline-block', padding: '0.6rem 1.2rem', background: 'rgba(139, 92, 246, 0.15)', borderRadius: '20px', marginBottom: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
              <span style={{ color: 'var(--color-secondary)', fontWeight: '800' }}>من نحن</span>
            </div>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '1.8rem', lineHeight: '1.3' }}>فريق جزائري يفهم السوق ويتقن التقنية</h2>
            <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
              <strong style={{ color: 'var(--color-text-main)', fontWeight: '900' }}>Digital Creation</strong> مش مجرد وكالة تصمّملك موقع وتمشي.
              نحن شريكك اللي يفهم شنو تحتاج، يبنيلك حل يناسب مشروعك، ويبقى معاك حتى بعد التسليم.
            </p>
            <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '2rem' }}>
              {['فريق جزائري شغوف بالتقنية', 'تقنيات عالمية حديثة', 'نعرفو السوق المحلي مليح', 'معاك حتى بعد ما نسلّمو'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 500 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.1)' }}>
                    <CheckCircle size={18} color="var(--color-primary)" />
                  </div>
                  <span style={{ color: 'var(--color-text-main)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }} staggerDelay={0.15}>
        <StaggerItem>
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', background: 'var(--card-bg)', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 60%)', zIndex: 0 }} />
            <h3 style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--color-primary)', marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}><AnimatedCounter target={50} prefix="+" /></h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', position: 'relative', zIndex: 1, fontWeight: 600 }}>مشروع رقمي ناجح</p>
            <div style={{ position: 'absolute', bottom: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)', opacity: 0.3 }} />
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', background: 'var(--card-bg)', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-50%', right: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 60%)', zIndex: 0 }} />
            <h3 style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--color-secondary)', marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}><AnimatedCounter target={100} suffix="%" /></h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', position: 'relative', zIndex: 1, fontWeight: 600 }}>رضا العملاء</p>
            <div style={{ position: 'absolute', bottom: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--color-secondary), transparent)', opacity: 0.3 }} />
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', background: 'var(--card-bg)', borderRadius: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--color-text-main)' }}>تقنيات حديثة</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>React</span>
              <span style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Node</span>
              <span style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Cloud</span>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </div>
  </section>
);

export default About;
