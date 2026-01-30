import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';
import logoFull from '../assets/logo_full.png';

const About = () => {
  return (
    <div className="section" style={{ paddingTop: 'calc(var(--header-height) + 4rem)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}
          >
            نحن <span className="text-gradient">قصة نجاحك الرقمية</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)' }}
          >
            <strong style={{ color: 'var(--primary)' }}>Digital Creation</strong> ليست مجرد وكالة برمجة، نحن شركاء استراتيجيون. نؤمن بأن كل شركة جزائرية تستحق واجهة رقمية عالمية المعايير.
          </motion.p>
        </div>

        {/* Full Logo Showcase */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '4rem', 
          alignItems: 'center',
          marginBottom: '8rem'
        }}>
          <motion.div 
            className="glass-panel" 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              padding: '4rem 3rem', 
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              minHeight: '450px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background Glow */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
              filter: 'blur(60px)',
              zIndex: 0
            }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <img 
                src={logoFull} 
                alt="Digital Creation" 
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))'
                }} 
              />
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             style={{ maxWidth: '600px' }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>لماذا Digital Creation؟</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              لأننا نفهم السوق الجزائري وتحدياته. نحن لا نستخدم قوالب جاهزة؛ نبني أنظمة مُفصلة على قياس احتياجاتك، مع ضمان السرعة، الأمان، وسهولة الاستخدام.
            </p>

            <div style={{ display: 'grid', gap: '1.25rem' }}>
              {['فريق جزائري 100% يفهم عقليتك', 'تقنيات React & Node.js الحديثة', 'تسليم في الآجال المحددة', 'دعم فني حقيقي (مش مجرد كلام)'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle size={22} color="var(--primary)" />
                  <span style={{ fontSize: '1.05rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <Target size={32} />, title: 'رؤيتنا', desc: 'رقمنة الاقتصاد الجزائري بمشاريع ذات جودة عالمية.' },
            { icon: <Users size={32} />, title: 'فريقنا', desc: 'نخبة من المطورين والمصممين الشغوفين بالتفاصيل.' },
            { icon: <Zap size={32} />, title: 'التزامنا', desc: 'الجودة ليست خياراً، بل معيار ثابت في كل سطر كود.' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="glass-panel" 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ padding: '2.5rem', textAlign: 'center' }}
            >
              <div style={{ 
                color: 'var(--secondary)', 
                marginBottom: '1.5rem', 
                background: 'rgba(139, 92, 246, 0.1)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;
