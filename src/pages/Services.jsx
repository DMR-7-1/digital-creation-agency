import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Shield, Zap, Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const plans = [
    {
      name: 'Start',
      price: 'تواصل معنا',
      features: ['واجهة تعريفية (Landing Page)', 'استضافة + اسم نطاق (Domain)', 'تصميم عصري متجاوب', 'تهيئة لمحركات البحث (SEO)']
    },
    {
      name: 'Pro',
      price: 'الأكثر طلباً',
      features: ['موقع ديناميكي متكامل', 'لوحة تحكم سهلة (CMS)', 'ثنائي اللغة (عربي/فرنسي)', 'أداء فائق السرعة', 'ربط بمنصات التواصل'],
      highlight: true
    },
    {
      name: 'Business',
      price: 'حلول الشركات',
      features: ['أنظمة مخصصة (Custom Systems)', 'قواعد بيانات ضخمة', 'ربط برمجي (API Integration)', 'دعم فني عالي الأولوية', 'أمان سيبراني متقدم']
    }
  ];

  return (
    <div className="section" style={{ paddingTop: 'calc(var(--header-height) + 4rem)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="services-header">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="services-tag"
          >
            حلولنا التقنية
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="services-title"
          >
            نبتكر أدوات <span className="text-gradient">تصنع الفارق</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="services-intro"
          >
            استثمر في تكنولوجيا تمنحك الأسبقية. من المواقع السريعة إلى الأنظمة المعقدة، نقدم لك بنية تحتية رقمية صلبة، آمنة، وقابلة للتوسع.
          </motion.p>
        </div>

        {/* Tech Grid */}
        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <FeatureCard 
            icon={<Zap size={32} color="#FBBF24" />}
            title="سرعة قياسية (High Performance)"
            desc="نستخدم أحدث تقنيات React & Vite لضمان تحميل صفحاتك في أجزاء من الثانية، مما يرفع من تصدرك في Google."
          />
          <FeatureCard 
            icon={<Shield size={32} color="#34D399" />}
            title="أمان وحماية بيانات"
            desc="بروتوكولات حماية متقدمة، تشفير SSL، ونسخ احتياطي تلقائي لضمان استمرارية عملك دون قلق."
          />
          <FeatureCard 
            icon={<Server size={32} color="#60A5FA" />}
            title="أنظمة قابلة للتوسع (Scalability)"
            desc="لا نعطيك حلاً مؤقتاً، بل نبني نظاماً ينمو معك. أضف ميزات جديدة وتوسع في أي وقت دون هدم القديم."
          />
        </motion.div>

        {/* Pricing */}
        <div style={{ marginTop: '6rem' }}>
           <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="pricing-section-title"
           >
             باقات تناسب طموحك
           </motion.h2>
           
           <motion.div 
             className="pricing-grid"
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
           >
             {plans.map((plan, idx) => (
               <motion.div 
                 key={idx} 
                 variants={itemVariants}
                 className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
               >
                 {plan.highlight && <div className="pricing-badge">خيار الخبراء</div>}
                 <h3 className="price-title">{plan.name}</h3>
                 <div className="price-tag">{plan.price}</div>
                 <ul className="features-list">
                   {plan.features.map((f, i) => (
                     <li key={i} className="feature-item">
                       <Check size={18} color={plan.highlight ? 'var(--primary)' : 'var(--text-muted)'} />
                       {f}
                     </li>
                   ))}
                 </ul>
                 <Link to="/contact" className={`btn-base ${plan.highlight ? 'btn-primary' : 'btn-glass'}`} style={{ width: '100%' }}>
                   احجز استشارتك
                 </Link>
               </motion.div>
             ))}
           </motion.div>
        </div>

        {/* Sectors */}
        <div className="sectors-wrapper">
          <motion.h2 
            className="services-title" 
            style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            خبرات ميدانية في السوق الجزائري 🇩🇿
          </motion.h2>
          
          <motion.div 
            className="sectors-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectorCard 
              icon="🏢"
              title="الشركات والمؤسسات"
              desc="التحول الرقمي ليس رفاهية، بل ضرورة. نظم إدارتك، راقب موظفيك، وسهّل عملياتك بأنظمة ERP و CRM مخصصة."
              features={['بوابات رقمية', 'أنظمة موارد بشرية', 'لوحات تحكم إدارية']}
            />
            <SectorCard 
              icon="🛒"
              title="التجارة الإلكترونية (E-com)"
              desc="ضاعف مبيعاتك بمتجر إلكتروني احترافي مصمم للجزائريين. تجربة شراء سلسة، ودعم للدفع عند الاستلام."
              features={['تصميم يرفع المبيعات', 'إدارة مخزون ذكية', 'ربط مع شركات التوصيل']}
            />
            <SectorCard 
              icon="🚀"
              title="رواد الأعمال (Startups)"
              desc="لديك فكرة SaaS أو منصة؟ نحن شريكك التقني لتطوير MVP (منتج أولي) قابل للاستثمار والمنافسة."
              features={['تطوير تطبيقات الويب', 'هندسة برمجيات', 'استشارات تقنية استراتيحية']}
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div className="feature-card" variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
    <div className="feature-icon-box">{icon}</div>
    <div className="feature-content">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </motion.div>
);

const SectorCard = ({ icon, title, desc, features }) => (
  <motion.div className="sector-card-new" variants={{ hidden: { scale: 0.95, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}>
    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{desc}</p>
    <ul style={{ listStyle: 'none' }}>
      {features.map((f, i) => (
        <li key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dim)' }}>
          <ArrowUpRight size={16} color="var(--primary)" />
          {f}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default Services;
