import React from "react";
import { ExternalLink } from "lucide-react";
import { PageTransition, AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import useIsMobile from '../hooks/useIsMobile';

const projects = [
  { title: "متجر إلكتروني للأزياء", category: "E-Commerce", description: "منصة بيع متكاملة مع نظام إدارة المخزون ودفع آمن", tech: ["React", "Node.js", "Stripe"], image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop" },
  { title: "نظام إدارة مطاعم", category: "Web App", description: "تطبيق ويب لإدارة الطلبات والموظفين والمخزون", tech: ["Vue.js", "Firebase", "Tailwind"], image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop" },
  { title: "موقع شركة عقارية", category: "Website", description: "موقع تعريفي احترافي مع نظام عرض العقارات", tech: ["Next.js", "Supabase", "Maps API"], image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" },
  { title: "منصة تعليمية", category: "Platform", description: "منصة تعليم عن بعد مع نظام الدروس والاختبارات", tech: ["React", "Express", "MongoDB"], image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop" },
  { title: "تطبيق حجز مواعيد", category: "Booking", description: "نظام حجز مواعيد للعيادات والصالونات", tech: ["React Native", "Node.js", "PostgreSQL"], image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop" },
  { title: "لوحة تحكم تحليلات", category: "Dashboard", description: "لوحة تحكم لتحليل البيانات وإنشاء التقارير", tech: ["React", "D3.js", "Python"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" },
];

import SEO from '../components/SEO';

const Portfolio = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <SEO title="أعمالنا" description="مشاريع حقيقية وحلول رقمية طورناها لعملائنا بكل احترافية" />
      {isMobile ? <MobilePortfolio /> : <DesktopPortfolio />}
    </>
  );
};

/* ══════════════════════════════════════
   MOBILE PORTFOLIO — Vertical card list
   ══════════════════════════════════════ */
const MobilePortfolio = () => {
  const iconMap = {
    'React': 'react/react-original', 'Node.js': 'nodejs/nodejs-original',
    'Vue.js': 'vuejs/vuejs-original', 'Next.js': 'nextjs/nextjs-original',
    'Python': 'python/python-original', 'Express': 'express/express-original',
    'MongoDB': 'mongodb/mongodb-original', 'PostgreSQL': 'postgresql/postgresql-original',
    'Firebase': 'firebase/firebase-plain', 'Tailwind': 'tailwindcss/tailwindcss-original',
    'D3.js': 'd3js/d3js-original', 'React Native': 'react/react-original',
    'Stripe': 'stripe/stripe-original', 'Supabase': 'supabase/supabase-original',
    'Maps API': 'google/google-original'
  };

  return (
  <PageTransition>
    <div style={{ padding: '6rem 1.25rem 6rem' }}>
      {/* Header */}
      <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', background: 'linear-gradient(to left, var(--color-primary), var(--color-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'var(--color-text-main)' }}>أعمالنا</h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
          مشاريع حقيقية حوّلنا فيها أفكار لمنتجات رقمية
        </p>
      </AnimatedSection>

      {/* Project cards — compact list */}
      <StaggerContainer style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} staggerDelay={0.15}>
        {projects.map((p, i) => (
          <StaggerItem key={i}>
            <div style={{
              display: 'flex', flexDirection: 'column',
              background: 'var(--card-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--glass-shadow)',
            }}>
              {/* Large Thumbnail for Mobile */}
              <div style={{
                width: '100%', height: '140px',
                background: `linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.4) 100%), url(${p.image})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                position: 'relative'
              }}>
                 <span style={{
                    position: 'absolute', top: '10px', right: '10px',
                    fontSize: '0.65rem', fontWeight: 700,
                    background: 'var(--color-surface)', color: 'var(--color-text-main)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.3rem 0.6rem', borderRadius: '8px',
                    border: '1px solid var(--glass-border)'
                  }}>{p.category}</span>
              </div>
              {/* Info */}
              <div style={{ padding: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.4rem 0', color: 'var(--color-text-main)' }}>{p.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: '0 0 0.8rem', lineHeight: 1.5 }}>{p.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  {p.tech.map((t, j) => {
                    const iconPath = iconMap[t];
                    if (iconPath) {
                      return (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px' }} title={t}>
                          <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconPath}.svg`} alt={t}
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            onError={(e) => { e.target.style.display='none'; e.target.parentNode.innerText = t; }} />
                        </div>
                      );
                    }
                    return <span key={j} style={{ fontSize: '0.65rem', color: 'rgba(139,92,246,0.9)', fontWeight: 600 }}>{t}</span>;
                  })}
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </PageTransition>
  );
};

/* ══════════════════════════════════════
   DESKTOP PORTFOLIO (unchanged)
   ══════════════════════════════════════ */
const DesktopPortfolio = () => {
  const iconMap = {
    'React': 'react/react-original', 'Node.js': 'nodejs/nodejs-original',
    'Vue.js': 'vuejs/vuejs-original', 'Next.js': 'nextjs/nextjs-original',
    'Python': 'python/python-original', 'Express': 'express/express-original',
    'MongoDB': 'mongodb/mongodb-original', 'PostgreSQL': 'postgresql/postgresql-original',
    'Firebase': 'firebase/firebase-plain', 'Tailwind': 'tailwindcss/tailwindcss-original',
    'D3.js': 'd3js/d3js-original', 'React Native': 'react/react-original',
    'Stripe': 'stripe/stripe-original', 'Supabase': 'supabase/supabase-original',
    'Maps API': 'google/google-original'
  };

  return (
    <PageTransition>
      <div className="page-wrapper" style={{ paddingTop: "120px", minHeight: "100vh", position: 'relative' }}>
        {/* Abstract background mesh */}
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 60%)', filter: 'blur(100px)', zIndex: -1, opacity: 0.1 }} />

        <section className="section">
          <div className="container">
            <AnimatedSection style={{ textAlign: "center", marginBottom: "6rem" }}>
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '20px', marginBottom: '1.5rem', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: '800' }}>أعمالنا</span>
              </div>
              <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem", color: 'var(--color-text-main)' }}>مشاريع تصنع الفارق</h1>
              <p style={{ fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto", color: 'var(--color-text-muted)' }}>
                مشاريع حقيقية ساعدنا أصحابها يحوّلو أفكارهم لواقع رقمي ينافس محلياً وعالمياً.
              </p>
            </AnimatedSection>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
              {projects.map((project, index) => {
                const isEven = index % 2 === 0;
                return (
                  <AnimatedSection key={index} direction={isEven ? "right" : "left"} delay={0.1}>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: isEven ? 'row' : 'row-reverse',
                      alignItems: 'center',
                      position: 'relative',
                      gap: '0' // Overlapping handled by negative margins
                    }}>
                      
                      {/* Image Container */}
                      <div style={{
                        flex: '0 0 60%',
                        height: '450px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        zIndex: 1
                      }}>
                        <div style={{ width: '100%', height: '100%', background: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center", transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)' }}
                             onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                             onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                        />
                        <div style={{ position: "absolute", top: "1.5rem", [isEven ? "right" : "left"]: "1.5rem", background: "rgba(10,10,10,0.6)", color: 'var(--color-text-main)', padding: "0.5rem 1.25rem", borderRadius: "20px", fontSize: "0.85rem", backdropFilter: "blur(12px)", border: '1px solid var(--glass-border)', fontWeight: 600 }}>
                          {project.category}
                        </div>
                      </div>

                      {/* Content Card (Overlapping) */}
                      <div className="glass-panel" style={{
                        flex: '0 0 45%',
                        padding: '3rem',
                        background: 'var(--glass-bg)',
                        backdropFilter: 'blur(24px)',
                        borderRadius: '24px',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                        position: 'relative',
                        zIndex: 2,
                        marginLeft: isEven ? '-5%' : '0',
                        marginRight: isEven ? '0' : '-5%',
                        transform: 'translateY(20px)'
                      }}>
                        <h3 style={{ fontSize: "2rem", marginBottom: "1.25rem", color: 'var(--color-text-main)', fontWeight: 800 }}>{project.title}</h3>
                        <p style={{ marginBottom: "2rem", lineHeight: "1.8", color: "var(--color-text-muted)", fontSize: '1.1rem' }}>{project.description}</p>
                        
                        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: '2rem' }}>
                          {project.tech.map((tech, i) => {
                            const iconPath = iconMap[tech];
                            if (iconPath) {
                              return (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.03)', padding: '0.4rem 0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }} title={tech}>
                                  <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconPath}.svg`} alt={tech} style={{ width: '18px', height: '18px', objectFit: 'contain' }} onError={(e) => { e.target.style.display='none'; }} />
                                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{tech}</span>
                                </div>
                              );
                            }
                            return <span key={i} style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{tech}</span>;
                          })}
                        </div>
                        
                        {/* Fake "View Project" CTA for aesthetics */}
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 700, cursor: 'pointer', transition: 'gap 0.3s ease' }}
                             onMouseEnter={(e) => { e.currentTarget.style.gap = '1rem'; }}
                             onMouseLeave={(e) => { e.currentTarget.style.gap = '0.5rem'; }}>
                          اكتشف المشروع <ExternalLink size={18} />
                        </div>
                      </div>

                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Portfolio;
