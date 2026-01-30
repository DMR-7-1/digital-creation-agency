import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowLeft, Sparkles, Activity, Layers, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero_bg.png';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  
  // Mouse Parallax Logic
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 15;
    
    if (ref.current) {
        ref.current.style.transform = `translate(${moveX / offsetFactor}px, ${moveY / offsetFactor}px)`;
    }
  };

  return (
    <section className="hero-section" onMouseMove={handleMouseMove}>
      {/* Animated Background Mesh */}
      <div className="hero-bg-mesh">
        <motion.div 
          className="mesh-blob mesh-blob-1"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="mesh-blob mesh-blob-2"
          animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container hero-content">
        
        {/* --- Text Content Side --- */}
        <motion.div 
          className="hero-text-side"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={16} className="text-secondary" />
            <span>وكالة التحول الرقمي الأولى 🇩🇿</span>
          </motion.div>

          {/* Heading */}
          <h1 className="hero-heading">
            حوّل طموحك إلى <br />
            <span className="text-gradient">هيمنة رقمية مطلقة</span>
          </h1>

          {/* Description */}
          <p className="hero-desc">
            في Digital Creation، نحن لا نبني مواقع إلكترونية فقط؛ نحن نصمم هويات رقمية تفرض حضورك في السوق. معايير عالمية، أداء خارق، ولمسة إبداعية تأسر عملائك من النظرة الأولى.
          </p>

          {/* Buttons */}
          <div className="hero-actions">
            <Link to="/start-project">
              <motion.button 
                className="btn-base btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ابدأ رحلة التغيير
                <ArrowLeft size={20} />
              </motion.button>
            </Link>
            
            <Link to="/portfolio">
              <motion.button 
                className="btn-base btn-glass"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                شاهد أعمالنا
              </motion.button>
            </Link>
          </div>

          {/* Social Proof / Trust Indicators */}
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2rem', opacity: 0.9 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
               <div style={{ background: 'rgba(6,182,212,0.1)', padding: '8px', borderRadius: '8px' }}>
                 <Rocket size={20} color="var(--primary)" />
               </div>
               <div>
                 <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>الأداء</div>
                 <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>فائق السرعة</div>
               </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
               <div style={{ background: 'rgba(139,92,246,0.1)', padding: '8px', borderRadius: '8px' }}>
                 <Layers size={20} color="var(--secondary)" />
               </div>
               <div>
                 <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>التصميم</div>
                 <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>إبداعي وحصري</div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* --- Visual Side (Desktop) --- */}
        <motion.div 
          className="hero-visual-side"
          initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          style={{ perspective: '1000px' }} 
        >
           {/* Main Glass Card with Mouse Parallax */}
           <div ref={ref} style={{ transition: 'transform 0.1s ease-out' }}>
             <motion.div 
               className="hero-card-glass"
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               style={{ transformStyle: 'preserve-3d', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
             >
               <img 
                 src={heroBg} 
                 alt="Digital Dashboard Interface" 
                 style={{ width: '100%', borderRadius: '12px', display: 'block', border: '1px solid rgba(255,255,255,0.05)' }}
               />
               
               {/* Floating Badge 1 */}
               <motion.div 
                 className="hero-floating-badge"
                 style={{ top: '10%', right: '-30px' }}
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               >
                 <Activity size={20} color="#10B981" />
                 <span>Growth +120%</span>
               </motion.div>

               {/* Floating Badge 2 */}
               <motion.div 
                 className="hero-floating-badge"
                 style={{ bottom: '15%', left: '-30px' }}
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
               >
                 <Sparkles size={20} color="#F59E0B" />
                 <span>Premium UI</span>
               </motion.div>

             </motion.div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
