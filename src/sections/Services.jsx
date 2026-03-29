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
        <h2 style={{ fontSize: '1.25rem', textAlign: 'center', marginBottom: '0.3rem', background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>خدماتنا</h2>
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
              border: '1px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '1.25rem 0.85rem',
              textAlign: 'center',
              boxShadow: 'var(--glass-shadow)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            className="service-card-mobile"
          >
            {/* Inner top glow */}
            <div style={{
              position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)'
            }} />
            
            {/* Subtle glow behind icon */}
            <div style={{
              position: 'absolute', top: '15px', left: '50%', transform: 'translateX(-50%)',
              width: '45px', height: '45px', background: s.icon.props.color || '#fff',
              filter: 'blur(30px)', opacity: 0.2, zIndex: 0
            }} />
            
            <div style={{
              width: '46px', height: '46px', borderRadius: '14px',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
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
   DESKTOP SERVICES - Anti-Generic Bento Box
   ══════════════════════════════════════════ */
const DesktopServices = () => (
  <section id="services" className="section" style={{ position: 'relative' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem', background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>خدماتنا</h2>
        <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.15rem' }}>
          كل مشروع عندنا يبدا بفكرة ويولّي منتج رقمي كامل — جاهز ينافس بطريقة استثنائية.
        </p>
      </div>
      <StaggerContainer className="services-home-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gridTemplateRows: 'repeat(2, auto)',
        gap: '2.5rem' 
      }} staggerDelay={0.12}>
        {services.map((service, index) => {
          // Asymmetrical Bento Layout: First item spans 2 columns, 3rd item spans 2 rows if possible
          // For 4 items: [Large] [Small] | [Small] [Large]
          const isLarge = index === 0 || index === 3;
          
          return (
            <StaggerItem 
              key={index} 
              style={{
                gridColumn: isLarge ? 'span 2' : 'span 1'
              }}
            >
              <ServiceCard service={service} isLarge={isLarge} />
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  </section>
);

const ServiceCard = ({ service, isLarge }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className="glass-panel" style={{ 
      padding: isLarge ? '3rem' : '2.5rem 2rem', 
      textAlign: isLarge ? 'right' : 'center', 
      display: isLarge ? 'flex' : 'block',
      alignItems: 'center',
      gap: '2rem',
      cursor: 'pointer',
      background: 'var(--card-bg)',
      borderRadius: '24px',
      border: '1px solid rgba(255,255,255,0.03)',
      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 10px 30px rgba(0,0,0,0.2)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      height: '100%'
    }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top light edge */}
      <div style={{
        position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)'
      }} />

      {/* Background glow on hover */}
      <div style={{
        position: 'absolute', top: isLarge ? '50%' : '10%', left: isLarge ? '10%' : '50%', transform: 'translate(-50%, -50%)',
        width: isLarge ? '150px' : '100px', height: isLarge ? '150px' : '100px', background: service.icon.props.color || '#fff',
        filter: 'blur(50px)', opacity: isHovered ? 0.2 : 0, transition: 'opacity 0.4s ease', zIndex: 0
      }} />

      <div style={{
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        minWidth: isLarge ? '100px' : '85px', 
        height: isLarge ? '100px' : '85px', 
        borderRadius: '20px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: isLarge ? '0' : '0 auto 1.5rem', position: 'relative', zIndex: 1,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
        boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.1)'
      }}>
        {React.cloneElement(service.icon, { size: isLarge ? 44 : 36 })}
      </div>
      
      <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <h3 style={{ marginBottom: '1rem', fontSize: isLarge ? '1.8rem' : '1.4rem', color: 'var(--color-text-main)', transition: 'color 0.3s', fontWeight: 800 }}>{service.title}</h3>
        <p style={{ fontSize: isLarge ? '1.1rem' : '1rem', lineHeight: '1.7', color: 'var(--color-text-muted)' }}>{service.desc}</p>
      </div>
    </div>
  );
};

export default Services;
