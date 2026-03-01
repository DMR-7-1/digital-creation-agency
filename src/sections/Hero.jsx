import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
  return (
    <section id="hero" className="section">
      {/* Background Ambience */}
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
          
          <motion.div 
            className="glass-panel hero-badge" 
            style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              marginBottom: '1.5rem', 
              borderRadius: '2rem',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              background: 'rgba(6, 182, 212, 0.1)'
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '0.9rem' }}>
              وكالة جزائرية 100% 🇩🇿
            </span>
          </motion.div>

          <motion.h1 
            style={{ marginBottom: '1.5rem', lineHeight: '1.3', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            مشروعك يستاهل يكون <br />
            <span style={{ 
              background: 'linear-gradient(to left, var(--color-primary), var(--color-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '800'
            }}>
              على مستوى طموحك.
            </span>
          </motion.h1>

          <motion.p 
            style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '550px' }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            نصمّم لك مواقع، متاجر، وأنظمة ويب تخلّي الناس تثق فيك من أول نظرة. تصميم عصري، أداء خرافي، ونتيجة تبان من اليوم الأول.
          </motion.p>

          <motion.div 
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            <Link to="/start-project" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
              ابدأ مشروعك الآن
              <ArrowLeft size={20} style={{ marginRight: '10px' }} />
            </Link>
          </motion.div>
          
          <motion.div 
            style={{ marginTop: '3rem', display: 'flex', gap: '2rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399' }}></span>
               دعم فني مستمر
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399' }}></span>
               تصميم عصري
             </div>
          </motion.div>
        </div>

        {/* Visual Content */}
        <div className="hero-visual" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
           <motion.img 
             src={heroBg} 
             alt="Digital Creation Dashboard" 
             style={{ 
               width: '100%', 
               maxWidth: '550px',
               borderRadius: '20px',
               boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
               border: '1px solid rgba(255,255,255,0.1)'
             }} 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
             transition={{ 
               opacity: { delay: 0.4, duration: 0.8 },
               scale: { delay: 0.4, duration: 0.8 },
               y: { delay: 1.2, duration: 5, repeat: Infinity, ease: 'easeInOut' }
             }}
           />
           
           {/* Floating Badge */}
           <motion.div 
             className="glass-panel" 
             style={{
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
             }}
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 1.0, duration: 0.6 }}
           >
             <div>
               <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>مشاريع نشطة</div>
               <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>+24 نظام</div>
             </div>
           </motion.div>
        </div>
      </div>
      
      {/* CSS for responsiveness */}
      <style>{`
        @media (min-width: 1024px) {
          .container { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 1023px) {
          .hero-visual { display: none !important; }
          .hero-blob { opacity: 0.05 !important; width: 80vw !important; height: 80vw !important; }
          #hero { padding-top: 6rem !important; min-height: auto !important; padding-bottom: 4rem !important; }
        }
      `}
      </style>
    </section>
  );
};

export default Hero;
