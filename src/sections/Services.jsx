import React from 'react';
import { Globe, ShoppingBag, Terminal, Database } from 'lucide-react';
import { StaggerContainer, StaggerItem, AnimatedSection } from '../components/AnimatedSection';
import useIsMobile from '../hooks/useIsMobile';

const services = [
  { icon: <Globe size={28} color="#06b6d4" />, title: 'تصميم المواقع', desc: 'موقع يعبّر عنك ويخلّي الزبون يثق فيك من أول زيارة.' },
  { icon: <ShoppingBag size={28} color="#F472B6" />, title: 'المتاجر الإلكترونية', desc: 'بيع أونلاين بنظام متكامل — من الطلب للتوصيل.' },
  { icon: <Terminal size={28} color="#A78BFA" />, title: 'تطبيقات الويب', desc: 'أنظمة ذكية تخدم على المتصفح بنفس قوة التطبيقات.' },
  { icon: <Database size={28} color="#34D399" />, title: 'أنظمة الشركات', desc: 'لوحات تحكم تخلّيك تسيّر شركتك من مكان واحد.' }
];

const Services = () => {
  const isMobile = useIsMobile();

  if (isMobile) return <MobileServices />;
  return <DesktopServices />;
};

/* ══════════════════════════════════════════
   MOBILE SERVICES — Animated Horizontal Grid
   ══════════════════════════════════════════ */
const MobileServices = () => (
  <section style={{ padding: '1rem 0 1.5rem', overflow: 'hidden' }}>
    <div style={{ padding: '0 1.25rem', marginBottom: '0.75rem' }}>
      <AnimatedSection direction="up" delay={0.1}>
        <h2 style={{ fontSize: '1.25rem', textAlign: 'center', marginBottom: '0.3rem', background: 'linear-gradient(to right, #fff, #a5b4fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>خدماتنا</h2>
        <p style={{ fontSize: '0.8rem', textAlign: 'center', color: 'var(--color-text-muted)', margin: 0 }}>
          كل مشروع يبدا بفكرة ويولّي منتج رقمي كامل
        </p>
      </AnimatedSection>
    </div>

    {/* 2×2 Grid */}
    <StaggerContainer style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0.6rem',
      padding: '0 1.25rem'
    }} staggerDelay={0.1}>
      {services.map((s, i) => (
        <StaggerItem key={i}>
          <div
            style={{
              background: 'var(--card-bg)',
              border: '1px solid rgba(255,255,255,0.03)',
              borderRadius: '20px',
              padding: '1.25rem 0.85rem',
              textAlign: 'center',
              boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 4px 20px rgba(0,0,0,0.3)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            className="service-card-mobile"
          >
            {/* Inner top glow */}
            <div style={{
              position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)'
            }} />
            
            {/* Subtle glow behind icon */}
            <div style={{
              position: 'absolute', top: '15px', left: '50%', transform: 'translateX(-50%)',
              width: '45px', height: '45px', background: s.icon.props.color || '#fff',
              filter: 'blur(30px)', opacity: 0.2, zIndex: 0
            }} />
            
            <div style={{
              width: '46px', height: '46px', borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 0.8rem',
              position: 'relative', zIndex: 1,
              boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.1)'
            }}>
              {React.cloneElement(s.icon, { size: 22 })}
            </div>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.35rem', color: 'var(--color-text-main)', position: 'relative', zIndex: 1 }}>{s.title}</h3>
            <p style={{ fontSize: '0.7rem', lineHeight: 1.6, color: 'var(--color-text-muted)', margin: 0, position: 'relative', zIndex: 1 }}>{s.desc}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  </section>
);

/* ══════════════════════════════════════════
   DESKTOP SERVICES (unchanged)
   ══════════════════════════════════════════ */
const DesktopServices = () => (
  <section id="services" className="section" style={{ position: 'relative' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>خدماتنا</h2>
        <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.15rem' }}>
          كل مشروع عندنا يبدا بفكرة ويولّي منتج رقمي كامل — جاهز ينافس.
        </p>
      </div>
      <StaggerContainer className="services-home-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }} staggerDelay={0.12}>
        {services.map((service, index) => (
          <StaggerItem key={index}>
            <ServiceCard service={service} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className="glass-panel" style={{ 
      padding: '2.5rem 2rem', 
      textAlign: 'center', 
      cursor: 'pointer',
      background: 'var(--card-bg)',
      borderRadius: '24px',
      border: '1px solid rgba(255,255,255,0.03)',
      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 10px 30px rgba(0,0,0,0.2)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
    }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top light edge */}
      <div style={{
        position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
      }} />

      {/* Background glow on hover */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: '100px', height: '100px', background: service.icon.props.color || '#fff',
        filter: 'blur(50px)', opacity: isHovered ? 0.2 : 0, transition: 'opacity 0.4s ease', zIndex: 0
      }} />

      <div style={{
        background: isHovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        width: '85px', height: '85px', borderRadius: '20px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 1.5rem', position: 'relative', zIndex: 1,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
        boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.1)'
      }}>
        {React.cloneElement(service.icon, { size: 36 })}
      </div>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem', color: 'var(--color-text-main)', transition: 'color 0.3s', position: 'relative', zIndex: 1, fontWeight: 800 }}>{service.title}</h3>
      <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-text-muted)', position: 'relative', zIndex: 1 }}>{service.desc}</p>
    </div>
  );
};

export default Services;
