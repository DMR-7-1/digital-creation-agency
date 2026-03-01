import React from 'react';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';
import logoFull from '../assets/logo_full.png';
import { PageTransition, AnimatedSection, FadeIn, AnimatedCounter, StaggerContainer, StaggerItem } from '../components/AnimatedSection';

const About = () => {
  return (
    <PageTransition>
      <div className="page-wrapper" style={{ paddingTop: '120px' }}>
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="container">
            <AnimatedSection style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
              <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>من نحن</h1>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                <strong style={{ color: 'var(--color-primary)' }}>Digital Creation</strong> — فريق جزائري شغوف بالتقنية، 
                رسالتنا بسيطة: نخلّيو مشروعك يبان بأحسن صورة على الإنترنت.
              </p>
            </AnimatedSection>

            {/* Full Logo Showcase */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
              gap: '4rem', 
              alignItems: 'center',
              marginBottom: '6rem'
            }}>
              <FadeIn direction="right">
                <div className="glass-panel" style={{ 
                  padding: '4rem 3rem', 
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15))',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  minHeight: '450px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '350px',
                    height: '350px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    zIndex: 0
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <img 
                      src={logoFull} 
                      alt="Digital Creation - نحوّل رؤيتك لواقع" 
                      style={{ 
                        maxWidth: '100%', 
                        height: 'auto',
                        margin: '0 auto',
                        filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.4))'
                      }} 
                    />
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <div style={{ maxWidth: '600px' }}>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>فريق جزائري يفهم السوق ويتقن التقنية</h2>
                  <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    ما نقدّمو مش مجرد مواقع وأنظمة — نحن نبنيلك أداة تخدم مشروعك كل يوم. 
                    نسمعو ليك مليح، نفهمو وش تحتاج، ونعطيك حل مفصّل على مقاسك. 
                    معانا، مشروعك في أيدي أمينة.
                  </p>

                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      'فريق جزائري شغوف بالتقنية', 
                      'نستخدمو أحدث التقنيات العالمية', 
                      'نعرفو السوق المحلي مليح', 
                      'معاك حتى بعد التسليم'
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <CheckCircle size={20} color="var(--color-primary)" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Values */}
            <StaggerContainer 
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '4rem' }}
              staggerDelay={0.12}
            >
              {[
                { icon: <Target size={32} />, title: 'رؤيتنا', desc: 'نكونو الخيار الأول للشركات الجزائرية اللي حابة تتميّز رقميًا' },
                { icon: <Users size={32} />, title: 'فريقنا', desc: 'خبراء جزائريين يجمعو بين الشغف بالتقنية وفهم السوق المحلي' },
                { icon: <Zap size={32} />, title: 'نهجنا', desc: 'حلول مبتكرة مصمّمة خصيصًا لاحتياجاتك — مش قوالب جاهزة' }
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
                    <div style={{ color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                      {item.icon}
                    </div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
