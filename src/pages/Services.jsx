import React from 'react';
import { Globe, ShoppingBag, Terminal, Database, Check, Server, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition, AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import useIsMobile from '../hooks/useIsMobile';

const plans = [
  {
    name: 'Start', price: 'تواصل معنا',
    features: ['موقع تعريفي (Landing Page)', 'دومين واستضافة مجانية', 'تصميم متجاوب', 'SEO أساسي'],
  },
  {
    name: 'Pro', price: 'الأكثر طلبًا',
    features: ['موقع كامل (Multi-page)', 'لوحة تحكم (CMS)', 'نظام لغات (عربي/فرنسي)', 'سرعة فائقة', 'ربط مع Social Media'],
    highlight: true
  },
  {
    name: 'Business', price: 'للشركات',
    features: ['نظام مخصص حسب طلبك', 'قاعدة بيانات متقدمة', 'ربط مع أنظمة خارجية (API)', 'دعم فني متواصل', 'حماية عالية المستوى']
  }
];

const features = [
  { icon: <Zap size={24} color="#FBBF24" />, title: 'أداء خرافي', desc: 'مواقعنا تحمّل أسرع بنسبة 90% من المواقع العادية.' },
  { icon: <Shield size={24} color="#34D399" />, title: 'حماية وأمان', desc: 'تشفير SSL كامل، حماية DDOS، نسخ احتياطي يومي.' },
  { icon: <Server size={24} color="#60A5FA" />, title: 'يكبر مع مشروعك', desc: 'نزيدو ميزات في أي وقت بلا ما نهدّو اللي بنيناه.' }
];

const sectors = [
  { emoji: '🏢', title: 'الشركات', desc: 'مواقع رسمية وأنظمة داخلية', highlight: '🚀 صورة أقوى' },
  { emoji: '🛒', title: 'التجار', desc: 'متاجر إلكترونية ونظام طلبات', highlight: '💰 بيع أسهل' },
  { emoji: '🚀', title: 'ستارتاب', desc: 'حلول تقنية ذكية ومدروسة', highlight: '💡 من الفكرة للإطلاق' }
];

import SEO from '../components/SEO';

const ServicesPage = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <SEO title="خدماتنا" description="مواقع إلكترونية، متاجر، وتطبيقات ويب سريعة وذكية لمشروعك" />
      {isMobile ? <MobileServicesPage /> : <DesktopServicesPage />}
    </>
  );
};

/* ══════════════════════════════════════
   MOBILE SERVICES PAGE
   ══════════════════════════════════════ */
const MobileServicesPage = () => (
  <PageTransition>
    <div style={{ padding: '1rem 1.25rem 2rem' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <span style={{ color: '#06b6d4', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '1px' }}>خدماتنا</span>
        <h1 style={{ fontSize: '1.3rem', marginBottom: '0.4rem', marginTop: '0.3rem' }}>
          فكرتك تستاهل تولّي واقع ✨
        </h1>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>
          مواقع سريعة • أنظمة ذكية • تجربة لا تُنسى
        </p>
      </div>

      {/* Features — stacked cards */}
      <StaggerContainer style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }} staggerDelay={0.1}>
        {features.map((f, i) => (
          <StaggerItem key={i}>
            <div style={{
              background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%)',
              border: '1px solid rgba(255,255,255,0.04)',
              borderRadius: '16px', padding: '1rem',
              display: 'flex', gap: '0.8rem', alignItems: 'center',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 15px rgba(0,0,0,0.2)',
              position: 'relative', overflow: 'hidden'
            }}>
              {/* Inner top glow */}
              <div style={{
                position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
              }} />
              
              <div style={{
                width: '42px', height: '42px', borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.1)',
                position: 'relative', zIndex: 1
              }}>
                {/* Subtle glow behind icon */}
                <div style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  width: '30px', height: '30px', background: f.icon.props.color || '#fff',
                  filter: 'blur(15px)', opacity: 0.2, zIndex: 0
                }} />
                {React.cloneElement(f.icon, { size: 20 })}
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'white', marginBottom: '0.15rem' }}>{f.title}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Pricing — stacked cards */}
      <h2 style={{ fontSize: '1.05rem', textAlign: 'center', marginBottom: '0.75rem' }}>باقات الخدمات</h2>
      <StaggerContainer style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }} staggerDelay={0.15}>
        {plans.map((plan, i) => (
          <StaggerItem key={i}>
            <div style={{
              background: plan.highlight 
                ? 'linear-gradient(160deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)' 
                : 'linear-gradient(145deg, rgba(30, 41, 59, 0.3) 0%, rgba(15, 23, 42, 0.7) 100%)',
              border: plan.highlight ? '1px solid rgba(6, 182, 212, 0.4)' : '1px solid rgba(255,255,255,0.05)',
              borderRadius: '20px', padding: '1.1rem', position: 'relative',
              boxShadow: plan.highlight 
                ? 'inset 0 1px 1px rgba(255,255,255,0.1), 0 8px 25px rgba(6, 182, 212, 0.15)' 
                : 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 15px rgba(0,0,0,0.2)'
            }}>
              {/* Inner top glow */}
              <div style={{
                position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
                background: plan.highlight 
                  ? 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.6), transparent)' 
                  : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)'
              }} />

              {plan.highlight && (
                <div style={{
                  position: 'absolute', top: -10, right: 20,
                  background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', color: 'white',
                  padding: '0.2rem 0.8rem', borderRadius: '12px', fontWeight: 800, fontSize: '0.65rem',
                  boxShadow: '0 4px 10px rgba(6, 182, 212, 0.3)'
                }}>الأكثر طلبًا</div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', marginTop: plan.highlight ? '0.5rem' : '0' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0, color: 'white' }}>{plan.name}</h3>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: plan.highlight ? '#22d3ee' : 'rgba(255,255,255,0.6)' }}>{plan.price}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                {plan.features.map((f, j) => (
                  <span key={j} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                    fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)', 
                    borderRadius: '8px', padding: '0.3rem 0.5rem'
                  }}>
                    <Check size={12} color={plan.highlight ? '#22d3ee' : '#9ca3af'} />
                    {f}
                  </span>
                ))}
              </div>
              <Link to="/contact" className="cta-shimmer" style={{
                width: '100%', textAlign: 'center', justifyContent: 'center',
                padding: '0.6rem', fontSize: '0.8rem', borderRadius: '12px',
                background: plan.highlight ? 'linear-gradient(135deg, #8b5cf6, #06b6d4)' : 'transparent',
                border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.15)',
                textDecoration: 'none', color: 'white', fontWeight: 700
              }}>
                طلب عرض سعر
              </Link>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Sectors — 2×2 grid */}
      <h2 style={{ fontSize: '1.05rem', textAlign: 'center', marginBottom: '0.6rem' }}>خبرة مع السوق الجزائري 🇩🇿</h2>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '0.5rem'
      }}>
        {sectors.map((s, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px', padding: '0.75rem', textAlign: 'center',
            ...(i === 2 ? { gridColumn: 'span 2' } : {})
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>{s.emoji}</div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'white', marginBottom: '0.2rem' }}>{s.title}</div>
            <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.3rem' }}>{s.desc}</div>
            <div style={{ fontSize: '0.6rem', color: '#06b6d4', fontWeight: 600 }}>{s.highlight}</div>
          </div>
        ))}
      </div>
    </div>
  </PageTransition>
);

/* ══════════════════════════════════════
   DESKTOP SERVICES PAGE (unchanged)
   ══════════════════════════════════════ */
const DesktopServicesPage = () => (
  <PageTransition>
    <div className="section" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <AnimatedSection style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '2px' }}>خدماتنا</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>فكرتك تستاهل تولّي واقع رقمي يبهر ✨</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>
            نصنعلك حلول رقمية ترفع مشروعك لمستوى ثاني.<br/><strong style={{ color: 'var(--color-primary)' }}>مواقع سريعة • أنظمة ذكية • تجربة مستخدم ما تتنسّاش</strong>
          </p>
        </AnimatedSection>

        <StaggerContainer className="services-grid-system" staggerDelay={0.15}>
          {features.map((f, i) => (
            <StaggerItem key={i}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div className="glass-panel" style={{ padding: '1rem', borderRadius: '12px' }}>{React.cloneElement(f.icon, { size: 32 })}</div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{f.title}</h3>
                  <p style={{ fontSize: '0.95rem' }}>{f.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection><h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>باقات الخدمات</h2></AnimatedSection>
        <StaggerContainer className="pricing-grid-system" staggerDelay={0.12}>
          {plans.map((plan, idx) => (
            <StaggerItem key={idx}>
              <div className="glass-panel" style={{ padding: '2.5rem', border: plan.highlight ? '1px solid var(--color-primary)' : '1px solid var(--glass-border)', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                {plan.highlight && (<div style={{ position: 'absolute', top: -12, right: 20, background: 'var(--color-primary)', color: 'black', padding: '0.25rem 1rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.8rem' }}>الأكثر طلبًا</div>)}
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
                <div style={{ fontSize: '1.5rem', color: plan.highlight ? 'var(--color-primary)' : 'var(--color-text-muted)', marginBottom: '2rem' }}>{plan.price}</div>
                <ul style={{ listStyle: 'none', marginBottom: '2rem', flex: 1 }}>
                  {plan.features.map((f, i) => (<li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'center' }}><Check size={18} color={plan.highlight ? 'var(--color-primary)' : 'gray'} />{f}</li>))}
                </ul>
                <Link to="/contact" className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'}`} style={{ textAlign: 'center', justifyContent: 'center' }}>طلب عرض سعر</Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection style={{ marginTop: '8rem' }}><h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>خبرة حقيقية مع السوق الجزائري 🇩🇿</h2></AnimatedSection>
        <StaggerContainer className="sectors-grid services-grid-system" staggerDelay={0.15}>
          {[
            { emoji: '🏢', title: 'الشركات والمؤسسات', desc: 'شركتك تحتاج موقع أو نظام يسهّل عليك التسيير؟', items: ['مواقع رسمية تليق بسمعة شركتك', 'أنظمة داخلية (إدارة، موظفين، زبائن)', 'حلول ويب مفصّلة على مقاسك'], highlight: '🚀 تنظيم أحسن – صورة أقوى – وقت أقل ضائع' },
            { emoji: '🛒', title: 'المحلات والتجار', desc: 'محلّك جاهز… بصح هل هو حاضر رقميًا؟', items: ['متاجر إلكترونية احترافية', 'مواقع بيع تخلّي الزبون يعاود يجي', 'أنظمة طلبات وتسيير ذكية'], highlight: 'بيع أسهل • ثقة أكبر • توسّع خارج منطقتك' },
            { emoji: '🚀', title: 'ستارتاب / مشاريع ناشئة', desc: 'عندك فكرة؟ نحن نحوّلوها لـ Web App حقيقي يخدم.', items: ['حلول تقنية ذكية ومدروسة', 'أنظمة قابلة للتطوير والتوسع', 'جلسة استشارة مجانية — بلا التزام'], highlight: 'نرافقك من الفكرة → التصميم → التطوير → الإطلاق' }
          ].map((s, i) => (
            <StaggerItem key={i}>
              <div className="glass-panel sector-card"><div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.emoji} {s.title}</h3>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem' }}>{s.items.map((item, j) => <li key={j}>✔️ {item}</li>)}</ul>
                <p style={{ marginTop: '1.5rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>{s.highlight}</p>
              </div></div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  </PageTransition>
);

export default ServicesPage;
