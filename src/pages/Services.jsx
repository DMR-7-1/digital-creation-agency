import React from 'react';
import { Globe, ShoppingBag, Terminal, Database, Check, Server, Shield, Zap } from 'lucide-react';

const ServicesPage = () => {
  const plans = [
    {
      name: 'Start',
      price: 'تواصل معنا',
      features: ['موقع تعريفي (Landing Page)', 'دومين استضافة مجانية', 'تصميم متجاوب', 'SEO أساسي']
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
      features: ['نظام مخصص (Custom System)', 'قاعدة بيانات متقدمة', 'API Integration', 'دعم فني 24/7', 'حماية عالية']
    }
  ];

  return (
    <div className="section" style={{ paddingTop: '8rem' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '2px' }}>خدماتنا</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>
            حوّل فكرتك إلى واقع رقمي مُبهر ✨
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>
            نصمم لك حلولاً رقمية تنقل عملك إلى المستوى التالي.<br/>
            <strong style={{ color: 'var(--color-primary)' }}>مواقع سريعة • أنظمة ذكية • تجربة مستخدم استثنائية</strong>
          </p>
        </div>

        {/* Technical Capabilities Grid */}
        <div className="services-grid-system">
          <FeatureCard 
            icon={<Zap size={32} color="#FBBF24" />}
            title="أداء عالي (High Performance)"
            desc="مواقعنا تحميلها أسرع بنسبة 90% من المواقع التقليدية بفضل تقنيات Single Page Application."
          />
          <FeatureCard 
            icon={<Shield size={32} color="#34D399" />}
            title="حماية وأمان"
            desc="تشفير SSL، حماية من هجمات DDoS، ونسخ احتياطي يومي لبياناتك."
          />
          <FeatureCard 
            icon={<Server size={32} color="#60A5FA" />}
            title="قابلة للتطوير (Scalable)"
            desc="نظامك ينمو مع نمو شركتك. نستطيع إضافة ميزات جديدة في أي وقت بدون إعادة بناء النظام."
          />
        </div>

        {/* Pricing/Packages */}
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>باقات الخدمات</h2>
        <div className="pricing-grid-system">
          {plans.map((plan, idx) => (
            <div key={idx} className="glass-panel" style={{ 
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
                  RECOMMENDED
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
              <a href="/contact" className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'}`} style={{ textAlign: 'center', justifyContent: 'center' }}>
                طلب عرض سعر
              </a>
            </div>
          ))}
        </div>

        {/* Sector-Specific Sections (from Ad Campaign) */}
        <div style={{ marginTop: '8rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>
            خبرة في العمل مع السوق الجزائري 🇩🇿
          </h2>
          
          <div className="sectors-grid services-grid-system">
            {/* Companies */}
            <div className="glass-panel sector-card">
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏢 الشركات والمؤسسات</h3>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                  هل شركتك تحتاج موقع أو نظام يسهّل التسيير؟
                </p>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
                  <li>✔️ مواقع رسمية احترافية</li>
                  <li>✔️ أنظمة داخلية (إدارة، موظفين، زبائن)</li>
                  <li>✔️ حلول Web حسب الطلب</li>
                </ul>
                <p style={{ marginTop: '1.5rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                  🚀 تنظيم أفضل – صورة أقوى – وقت أقل ضائع
                </p>
              </div>
            </div>

            {/* Stores */}
            <div className="glass-panel sector-card">
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛒 المحلات والتجار</h3>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                  محلك جاهز… لكن هل هو حاضر رقميًا؟
                </p>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
                  <li>✔️ متاجر إلكترونية</li>
                  <li>✔️ مواقع بيع احترافية</li>
                  <li>✔️ أنظمة طلبات وتسيير</li>
                </ul>
                <p style={{ marginTop: '1.5rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                  بيع أسهل • ثقة أكبر • توسّع خارج منطقتك
                </p>
              </div>
            </div>

            {/* Startups */}
            <div className="glass-panel sector-card">
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀 ستارتاب / مشاريع ناشئة</h3>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                  عندك فكرة؟ نحن نحوّلها إلى Web App حقيقي.
                </p>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
                  <li>💡 حلول تقنية ذكية</li>
                  <li>⚙️ أنظمة قابلة للتطوير</li>
                  <li>🎁 جلسة استشارة مجانية</li>
                </ul>
                <p style={{ marginTop: '1.5rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                  نرافقك من الفكرة → التصميم → التطوير → الإطلاق
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
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
