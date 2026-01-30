import React, { useRef } from 'react';
import { motion as Motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowLeft, Sparkles, Activity, Layers, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero_bg.png';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  
  // 1. Setup Motion Values for high-performance tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Add Spring physics for "super smooth" feel (stiffness/damping control the "weight")
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // 3. Transform spring values into tilt/move effects
  const rotateX = useTransform(springY, [-500, 500], [5, -5]); // Inverted for natural tilt
  const rotateY = useTransform(springX, [-500, 500], [-5, 5]);
  const translateX = useTransform(springX, [-1000, 1000], [-10, 10]);
  const translateY = useTransform(springY, [-1000, 1000], [-10, 10]);

  const handleMouseMove = (e) => {
    // Check if containerRef.current exists before accessing dimensions
    if (!containerRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to center of the section
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  return (
    <section 
      ref={containerRef} 
      className="hero-section" 
      onMouseMove={handleMouseMove}
      style={{ overflow: 'hidden' }} // Ensure no scrollbars from parallax
    >
      {/* Animated Background Mesh - Optimize opacity and scale separately */}
      <div className="hero-bg-mesh">
        <Motion.div 
          className="mesh-blob mesh-blob-1"
          animate={{ x: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <Motion.div 
          className="mesh-blob mesh-blob-2"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </div>

      <div className="container hero-content">
        
        {/* --- Text Content Side --- */}
        <Motion.div 
          className="hero-text-side"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <Motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={16} className="text-secondary" />
            <span>وكالة التحول الرقمي الأولى 🇩🇿</span>
          </Motion.div>

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
              <Motion.button 
                className="btn-base btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout // Optimizes layout changes
              >
                ابدأ رحلة التغيير
                <ArrowLeft size={20} />
              </Motion.button>
            </Link>
            
            <Link to="/portfolio">
              <Motion.button 
                className="btn-base btn-glass"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                layout 
              >
                شاهد أعمالنا
              </Motion.button>
            </Link>
          </div>

          {/* Social Proof */}
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
        </Motion.div>

        {/* --- Visual Side (Desktop) --- */}
        <Motion.div 
          className="hero-visual-side"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          style={{ 
            perspective: '1200px',
            transformStyle: 'preserve-3d'
          }} 
        >
           {/* Main Glass Card with Physics-based Parallax */}
           <Motion.div 
             className="hero-card-glass"
             style={{ 
               rotateX, 
               rotateY,
               x: translateX,
               y: translateY,
               boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
             }}
           >
             <img 
               src={heroBg} 
               alt="Digital Dashboard Interface" 
               style={{ width: '100%', borderRadius: '12px', display: 'block', border: '1px solid rgba(255,255,255,0.05)' }}
             />
             
             {/* Floating Badge 1 - Independent Parallax Depth */}
             <Motion.div 
               className="hero-floating-badge"
               style={{ 
                 top: '10%', 
                 right: '-30px', 
                 x: useTransform(springX, [-500, 500], [15, -15]), // Moves faster (closer depth)
                 y: useTransform(springY, [-500, 500], [15, -15])
               }}
             >
               <Activity size={20} color="#10B981" />
               <span>Growth +120%</span>
             </Motion.div>

             {/* Floating Badge 2 */}
             <Motion.div 
               className="hero-floating-badge"
               style={{ 
                 bottom: '15%', 
                 left: '-30px',
                 x: useTransform(springX, [-500, 500], [-20, 20]), 
                 y: useTransform(springY, [-500, 500], [-10, 10])
               }}
             >
               <Sparkles size={20} color="#F59E0B" />
               <span>Premium UI</span>
             </Motion.div>

           </Motion.div>
        </Motion.div>

      </div>
    </section>
  );
};

export default Hero;
