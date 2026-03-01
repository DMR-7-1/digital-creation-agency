import React from 'react';
import { Globe, ShoppingBag, Terminal, Database } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
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
   MOBILE SERVICES — Horizontal scroll cards
   ══════════════════════════════════════════ */
const MobileServices = () => (
  <section style={{ padding: '1rem 0 1.5rem' }}>
    <div style={{ padding: '0 1.25rem', marginBottom: '0.75rem' }}>
      <h2 style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '0.3rem' }}>خدماتنا</h2>
      <p style={{ fontSize: '0.75rem', textAlign: 'center', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
        كل مشروع يبدا بفكرة ويولّي منتج رقمي كامل
      </p>
    </div>

    {/* Horizontal scroll */}
    <div style={{
      display: 'flex',
      gap: '0.6rem',
      overflowX: 'auto',
      padding: '0.5rem 1.25rem',
      scrollSnapType: 'x mandatory',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    }}>
      <style>{`.mobile-scroll-services::-webkit-scrollbar { display: none; }`}</style>
      {services.map((s, i) => (
        <div
          key={i}
          style={{
            minWidth: '140px',
            maxWidth: '140px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '0.85rem 0.7rem',
            textAlign: 'center',
            scrollSnapAlign: 'start',
            flexShrink: 0
          }}
        >
          <div style={{
            width: '42px', height: '42px', borderRadius: '10px',
            background: 'rgba(255,255,255,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 0.5rem'
          }}>
            {React.cloneElement(s.icon, { size: 20 })}
          </div>
          <h3 style={{ fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.25rem', color: 'white' }}>{s.title}</h3>
          <p style={{ fontSize: '0.62rem', lineHeight: 1.4, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{s.desc}</p>
        </div>
      ))}
    </div>
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
    <div className="glass-panel" style={{ padding: '2.5rem 2rem', textAlign: 'center', cursor: 'pointer' }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        background: isHovered ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.05)',
        width: '80px', height: '80px', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 1.5rem',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'scale(1.15) rotate(5deg)' : 'scale(1)'
      }}>
        {service.icon}
      </div>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem', color: isHovered ? 'var(--color-primary)' : 'white', transition: 'color 0.3s' }}>{service.title}</h3>
      <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>{service.desc}</p>
    </div>
  );
};

export default Services;
