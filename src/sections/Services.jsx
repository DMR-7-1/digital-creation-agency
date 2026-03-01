import React from 'react';
import { Globe, ShoppingBag, Terminal, Database } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '../components/AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: <Globe size={40} color="var(--color-primary)" />,
      title: 'تصميم المواقع',
      desc: 'موقع يعبّر عنك ويخلّي الزبون يثق فيك من أول زيارة.'
    },
    {
      icon: <ShoppingBag size={40} color="#F472B6" />,
      title: 'المتاجر الإلكترونية',
      desc: 'بيع أونلاين بنظام متكامل — من الطلب للتوصيل وكلشي بين يديك.'
    },
    {
      icon: <Terminal size={40} color="#A78BFA" />,
      title: 'تطبيقات الويب',
      desc: 'أنظمة ذكية تخدم على المتصفح بنفس قوة التطبيقات — بلا تحميل.'
    },
    {
      icon: <Database size={40} color="#34D399" />,
      title: 'أنظمة الشركات',
      desc: 'لوحات تحكم تخلّيك تسيّر شركتك من مكان واحد بلا صداع.'
    }
  ];

  return (
    <section id="services" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>خدماتنا</h2>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.15rem' }}>
            كل مشروع عندنا يبدا بفكرة ويولّي منتج رقمي كامل — جاهز ينافس.
          </p>
        </div>

        <StaggerContainer 
          className="services-home-grid" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2.5rem' 
          }}
          staggerDelay={0.12}
        >
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className="glass-panel" 
      style={{ 
        padding: '2.5rem 2rem', 
        textAlign: 'center',
        cursor: 'pointer'
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
