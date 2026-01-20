import React from 'react';
import { Globe, ShoppingBag, Terminal, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe size={40} color="var(--color-primary)" />,
      title: 'تصميم المواقع',
      desc: 'مواقع تعريفية احترافية تعكس هوية شركتك وتجذب العملاء.'
    },
    {
      icon: <ShoppingBag size={40} color="#F472B6" />,
      title: 'المتاجر الإلكترونية',
      desc: 'منصات بيع متكاملة مع بوابات دفع وأنظمة تسيير مخزون.'
    },
    {
      icon: <Terminal size={40} color="#A78BFA" />,
      title: 'Web Apps',
      desc: 'تطبيقات ويب متطورة تعمل على المتصفح بكفاءة التطبيقات الأصلية.'
    },
    {
      icon: <Database size={40} color="#34D399" />,
      title: 'أنظمة الشركات',
      desc: 'لوحات تحكم وأنظمة داخلية لتسهيل الإدارة ورفع الإنتاجية.'
    }
  ];

  return (
    <section id="services" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="fade-in-up">
          <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>خدماتنا</h2>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.15rem' }}>
            نقدّم حلولاً برمجية شاملة تبدأ من الفكرة وتنتهي بمنتج رقمي متكامل قابل للتطوير.
          </p>
        </div>

        <div className="services-home-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className="glass-panel fade-in-up" 
      style={{ 
        padding: '2.5rem 2rem', 
        textAlign: 'center',
        cursor: 'pointer',
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
        animationFillMode: 'forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ 
        background: isHovered ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.05)', 
        width: '80px', 
        height: '80px', 
        borderRadius: '50%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: '0 auto 1.5rem auto',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)'
      }}>
        {service.icon}
      </div>
      <h3 style={{ 
        marginBottom: '1rem', 
        fontSize: '1.4rem',
        color: isHovered ? 'var(--color-primary)' : 'white',
        transition: 'color 0.3s ease'
      }}>
        {service.title}
      </h3>
      <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>{service.desc}</p>
    </div>
  );
};

export default Services;
