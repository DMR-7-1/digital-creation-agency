import React from 'react';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';
import logoFull from '../assets/logo_full.png';

const About = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Hero Section */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>من نحن</h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              <strong style={{ color: 'var(--color-primary)' }}>Digital Creation</strong> وكالة جزائرية رائدة في مجال التحول الرقمي، 
              نساعد الشركات والمشاريع على بناء حضور رقمي قوي واحترافي.
            </p>
          </div>

          {/* Full Logo Showcase */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '4rem', 
            alignItems: 'center',
            marginBottom: '6rem'
          }}>
            <div className="glass-panel" style={{ 
              padding: '4rem 3rem', 
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15))',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              minHeight: '450px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
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
                  alt="Digital Creation - We make your vision come true" 
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                    margin: '0 auto',
                    filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.4))'
                  }} 
                />
              </div>
            </div>

            <div style={{ maxWidth: '600px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>وكالة جزائرية متخصصة في التحول الرقمي</h2>
              <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                نحن شريكك في بناء حضور رقمي قوي. نفهم احتياجات السوق الجزائري ونستخدم أحدث التقنيات العالمية 
                لتقديم حلول تساعد مشروعك على النمو والتميز.
              </p>

              <div style={{ display: 'grid', gap: '1rem' }}>
                {['فريق جزائري محترف', 'تقنيات عالمية حديثة', 'فهم عميق للسوق المحلي', 'دعم مستمر بعد التسليم'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <CheckCircle size={20} color="var(--color-primary)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
            {[
              { icon: <Target size={32} />, title: 'رؤيتنا', desc: 'أن نكون الخيار الأول للشركات الجزائرية في التحول الرقمي' },
              { icon: <Users size={32} />, title: 'فريقنا', desc: 'خبراء جزائريون متخصصون في أحدث التقنيات العالمية' },
              { icon: <Zap size={32} />, title: 'نهجنا', desc: 'حلول مبتكرة مصممة خصيصاً لاحتياجات السوق المحلي' }
            ].map((item, i) => (
              <div key={i} className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
