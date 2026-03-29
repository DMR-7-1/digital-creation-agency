import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.png';
import useIsMobile from '../hooks/useIsMobile';

const Hero = () => {
  const isMobile = useIsMobile();

  if (isMobile) return <MobileHero />;
  return <DesktopHero />;
};

/* ══════════════════════════════════════════
   MOBILE HERO — Immersive 2026 Apple-Style
   ══════════════════════════════════════════ */
const MobileHero = () => (
  <section style={{ 
    position: 'relative', 
    padding: '2rem 1.25rem 2rem', 
    textAlign: 'center',
    overflow: 'hidden',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }}>
    {/* Animated Background Orbs - Optimized without CSS blur */}
    <motion.div
      style={{
        position: 'absolute', top: '-10%', left: '-20%',
        width: '80vw', height: '80vw',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)',
        zIndex: -1, borderRadius: '50%',
        willChange: 'transform, opacity'
      }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4], x: [0, 15, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      style={{
        position: 'absolute', bottom: '5%', right: '-20%',
        width: '65vw', height: '65vw',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0.05) 40%, transparent 70%)',
        zIndex: -1, borderRadius: '50%',
        willChange: 'transform, opacity'
      }}
      animate={{ scale: [1.15, 1, 1.15], opacity: [0.5, 0.3, 0.5], y: [0, -15, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Badge Removed per user request */}

    {/* Headline */}
    <motion.h1
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 150, damping: 20 }}
      style={{ fontSize: '2.1rem', lineHeight: 1.2, marginBottom: '1.25rem', fontWeight: 800, color: 'var(--color-text-main)' }}
    >
      مشروعك يستاهل يكون{' '}
      <br/>
      <span style={{
        background: 'linear-gradient(135deg, #06b6d4, #8b5cf6, #d946ef)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block'
      }}>
        على مستوى طموحك.
      </span>
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.6 }}
      style={{ fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6, color: 'var(--color-text-muted)', maxWidth: '340px', margin: '0 auto 2rem' }}
    >
      نصمّم لك مواقع، متاجر، وأنظمة ويب تخلّي الناس تثق فيك من أول نظرة.
    </motion.p>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <Link
        to="/start-project"
        className="cta-shimmer"
        style={{ 
          padding: '0.9rem 2rem', 
          fontSize: '1rem', 
          borderRadius: '16px', 
          width: '100%', 
          maxWidth: '280px', 
          justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)'
        }}
      >
        ابدأ مشروعك الآن
        <ArrowLeft size={18} style={{ marginRight: '8px' }} />
      </Link>
    </motion.div>

    {/* Trust indicators */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
      style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}
    >
      {['دعم فني مستمر', 'تصميم عصري'].map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'linear-gradient(135deg, #34d399, #10b981)', boxShadow: '0 0 10px rgba(52, 211, 153, 0.5)' }} />
          {t}
        </div>
      ))}
    </motion.div>
  </section>
);

/* ══════════════════════════════════════════
   DESKTOP HERO - Asymmetrical Cyber-Glass
   ══════════════════════════════════════════ */
const DesktopHero = () => (
  <section id="hero" className="section">
    {/* Premium Mesh Blobs */}
    <div className="hero-blob" style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', opacity: 0.12, filter: 'blur(80px)', zIndex: -1 }} />
    <div className="hero-blob" style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 60%)', opacity: 0.08, filter: 'blur(100px)', zIndex: -1 }} />

    {/* Asymmetrical Grid (Z-Pattern Flow) */}
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
      <div style={{ maxWidth: '750px', zIndex: 1, paddingRight: '2rem' }}>
        <motion.div className="glass-panel hero-badge" style={{ display: 'inline-block', padding: '0.6rem 1.2rem', marginBottom: '2rem', borderRadius: '2rem', border: '1px solid rgba(6, 182, 212, 0.2)', background: 'var(--badge-bg)' }}
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5, ease: [0, 0, 0.2, 1] }}
        >
          <span style={{ color: 'var(--color-primary)', fontWeight: '800', fontSize: '0.95rem' }}>وكالة جزائرية 100%</span>
        </motion.div>

        <motion.h1 style={{ marginBottom: '1.8rem', lineHeight: '1.2', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6, ease: [0, 0, 0.2, 1] }}
        >
          مشروعك يستاهل يكون <br />
          <span style={{ background: 'linear-gradient(to left, var(--color-primary), var(--color-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '900' }}>على مستوى طموحك.</span>
        </motion.h1>

        <motion.p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', lineHeight: '1.8' }}
          initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6, ease: [0, 0, 0.2, 1] }}
        >
          نصمّم لك مواقع، متاجر، وأنظمة ويب تخلّي الناس تثق فيك من أول نظرة. تصميم عصري، أداء خيالي، ونتيجة تبان من اليوم الأول.
        </motion.p>

        {/* Fitts's Law Enforced CTA */}
        <motion.div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.5, ease: [0, 0, 0.2, 1] }}
        >
          <Link to="/start-project" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem', minHeight: '60px', borderRadius: '16px' }}>
            ابدأ مشروعك الآن <ArrowLeft size={24} style={{ marginRight: '12px' }} />
          </Link>
          <Link to="/portfolio" className="btn btn-outline" style={{ padding: '0.9rem 2.5rem', fontSize: '1.1rem', minHeight: '60px', borderRadius: '16px', border: '1px solid var(--glass-border)', color: 'var(--color-text-main)' }}>
            استكشف أعمالنا
          </Link>
        </motion.div>

        <motion.div style={{ marginTop: '4rem', display: 'flex', gap: '2.5rem', fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-primary)', boxShadow: '0 0 12px var(--color-primary)' }} /> دعم فني مستمر
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-secondary)', boxShadow: '0 0 12px var(--color-secondary)' }} /> تقنيات حديثة
          </div>
        </motion.div>
      </div>

      <div className="hero-visual" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <motion.img src={heroBg} alt="Digital Creation Dashboard" style={{ width: '100%', maxWidth: '650px', borderRadius: '24px', boxShadow: '0 30px 60px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
          transition={{ opacity: { delay: 0.4, duration: 0.8 }, scale: { delay: 0.4, duration: 0.8 }, y: { delay: 1.2, duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
        />
        <motion.div className="glass-panel" style={{ position: 'absolute', bottom: '5%', left: '-10%', padding: '1.25rem 2rem', zIndex: 2, background: 'var(--glass-bg)', borderLeft: '4px solid var(--color-primary)', display: 'flex', alignItems: 'center', gap: '1.5rem', backdropFilter: 'blur(20px)' }}
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 0.6, ease: [0, 0, 0.2, 1] }}
        >
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>مشاريع ناجحة</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--color-text-main)' }}>+45 مشروع</div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
