import React from 'react';
import { Globe, ShoppingBag, Terminal, Database, Check, Server, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition, AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection';

const ServicesPage = () => {
  const plans = [
    {
      name: 'Start',
      price: 'تواصل معنا',
      features: ['موقع تعريفي (Landing Page)', 'دومين واستضافة مجانية', 'تصميم متجاوب', 'SEO أساسي'],
    },
    {
      name: 'Pro',
      price: 'الأكثر طلبًا',
      features: ['موقع كامل (Multi-page)', 'لوحة تحكم (CMS)', 'نظام لغات (عربي/فرنسي)', 'سرعة فائقة', 'ربط مع Social Media'],
      highlight: true
    },
    {
      name: 'Business',
      price: 'للشركات',
      features: ['نظام مخصص حسب طلبك', 'قاعدة بيانات متقدمة', 'ربط مع أنظمة خارجية (API)', 'دعم فني متواصل', 'حماية عالية المستوى']
    }
  ];

  return (
    <PageTransition>
      <div className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          
          {/* Page Header */}
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '2px' }}>خدماتنا</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>
              فكرتك تستاهل تولّي واقع رقمي يبهر ✨
            </h1>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>
              نصنعلك حلول رقمية ترفع مشروعك لمستوى ثاني.<br/>
              <strong style={{ color: 'var(--color-primary)' }}>مواقع سريعة • أنظمة ذكية • تجربة مستخدم ما تتنسّاش</strong>
            </p>
          </AnimatedSection>

          {/* Technical Capabilities Grid */}
          <StaggerContainer className="services-grid-system" staggerDelay={0.15}>
            <StaggerItem>
              <FeatureCard 
                icon={<Zap size={32} color="#FBBF24" />}
                title="أداء خرافي"
                desc="مواقعنا تحمّل أسرع بنسبة 90% من المواقع العادية. الزائر يدخل وما يستنّاش."
              />
            </StaggerItem>
            <StaggerItem>
              <FeatureCard 
                icon={<Shield size={32} color="#34D399" />}
                title="حماية وأمان"
                desc="تشفير SSL كامل، حماية من الهجمات الإلكترونية، ونسخ احتياطي يومي لبياناتك."
              />
            </StaggerItem>
            <StaggerItem>
              <FeatureCard 
                icon={<Server size={32} color="#60A5FA" />}
                title="يكبر مع مشروعك"
                desc="نظامك ينمو معاك — نزيدو ميزات جديدة في أي وقت بلا ما نهدّو اللي بنيناه."
              />
            </StaggerItem>
          </StaggerContainer>

          {/* Pricing/Packages */}
          <AnimatedSection>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>باقات الخدمات</h2>
          </AnimatedSection>
          <StaggerContainer className="pricing-grid-system" staggerDelay={0.12}>
            {plans.map((plan, idx) => (
              <StaggerItem key={idx}>
                <div className="glass-panel" style={{ 
                  padding: '2.5rem', 
                  border: plan.highlight ? '1px solid var(--color-primary)' : '1px solid var(--glass-border)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  {plan.highlight && (
                    <div style={{ 
                      position: 'absolute', top: -12, right: 20, 
                      background: 'var(--color-primary)', color: 'black', 
                      padding: '0.25rem 1rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.8rem' 
                    }}>
                      الأكثر طلبًا
                    </div>
                  )}
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
                  <div style={{ fontSize: '1.5rem', color: plan.highlight ? 'var(--color-primary)' : 'var(--color-text-muted)', marginBottom: '2rem' }}>
                    {plan.price}
                  </div>
                  <ul style={{ listStyle: 'none', marginBottom: '2rem', flex: 1 }}>
                    {plan.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'center' }}>
                        <Check size={18} color={plan.highlight ? 'var(--color-primary)' : 'gray'} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'}`} style={{ textAlign: 'center', justifyContent: 'center' }}>
                    طلب عرض سعر
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Sector-Specific Sections */}
          <AnimatedSection style={{ marginTop: '8rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>
              خبرة حقيقية مع السوق الجزائري 🇩🇿
            </h2>
          </AnimatedSection>
            
          <StaggerContainer className="sectors-grid services-grid-system" staggerDelay={0.15}>
            <StaggerItem>
              <div className="glass-panel sector-card">
                <div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏢 الشركات والمؤسسات</h3>
                  <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                    شركتك تحتاج موقع أو نظام يسهّل عليك التسيير؟
                  </p>
                  <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
                    <li>✔️ مواقع رسمية تليق بسمعة شركتك</li>
                    <li>✔️ أنظمة داخلية (إدارة، موظفين، زبائن)</li>
                    <li>✔️ حلول ويب مفصّلة على مقاسك</li>
                  </ul>
                  <p style={{ marginTop: '1.5rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                    🚀 تنظيم أحسن – صورة أقوى – وقت أقل ضائع
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="glass-panel sector-card">
                <div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛒 المحلات والتجار</h3>
                  <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                    محلّك جاهز… بصح هل هو حاضر رقميًا؟
                  </p>
                  <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
                    <li>✔️ متاجر إلكترونية احترافية</li>
                    <li>✔️ مواقع بيع تخلّي الزبون يعاود يجي</li>
                    <li>✔️ أنظمة طلبات وتسيير ذكية</li>
                  </ul>
                  <p style={{ marginTop: '1.5rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                    بيع أسهل • ثقة أكبر • توسّع خارج منطقتك
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="glass-panel sector-card">
                <div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀 ستارتاب / مشاريع ناشئة</h3>
                  <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                    عندك فكرة؟ نحن نحوّلوها لـ Web App حقيقي يخدم.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
                    <li>💡 حلول تقنية ذكية ومدروسة</li>
                    <li>⚙️ أنظمة قابلة للتطوير والتوسّع</li>
                    <li>🎁 جلسة استشارة مجانية — بلا التزام</li>
                  </ul>
                  <p style={{ marginTop: '1.5rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                    نرافقك من الفكرة → التصميم → التطوير → الإطلاق
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </div>
    </PageTransition>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
    <div className="glass-panel" style={{ padding: '1rem', borderRadius: '12px' }}>{icon}</div>
    <div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem' }}>{desc}</p>
    </div>
  </div>
);

export default ServicesPage;
