import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, MessageCircle, MapPin, Phone, Mail, Loader, CheckCircle, Sparkles } from 'lucide-react';
import { PageTransition, AnimatedSection, FadeIn } from '../components/AnimatedSection';

const WEB3FORMS_ACCESS_KEY = 'ac9c514d-d0d1-4746-90db-01538d0d2af5';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', type: 'website', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `طلب جديد من ${formData.name} - ${formData.type}`,
          from_name: 'Digital Creation Website',
          name: formData.name,
          phone: formData.phone,
          service_type: formData.type,
          message: formData.message || 'لم يتم إضافة رسالة'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', type: 'website', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <PageTransition>
      <div className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>📩 خلّينا نحكيو</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              قولنا وش تحتاج ونحن نعطيك <strong style={{ color: 'var(--color-primary)' }}>استشارة مجانية + اقتراح تقني مناسب</strong>
              <br/>نرد عليك في أقل من 5 دقائق ⚡
            </p>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            
            {/* Info Side */}
            <FadeIn direction="right">
              <div>
                <h2 style={{ marginBottom: '2rem' }}>طرق التواصل</h2>
                
                {/* WhatsApp - Primary */}
                <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', background: 'rgba(52, 211, 153, 0.1)', border: '2px solid #34D399' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <MessageCircle size={32} color="#34D399" />
                    <div>
                      <div style={{ fontSize: '0.9rem', color: '#9CA3AF' }}>الطريقة الأسرع</div>
                      <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#34D399' }}>واتساب</div>
                    </div>
                  </div>
                  <a href="https://wa.me/213770784404" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', background: '#25D366', justifyContent: 'center' }}>
                    <MessageCircle size={20} style={{ marginLeft: '0.5rem' }} />
                    راسلنا على واتساب
                  </a>
                </div>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  <ContactItem icon={<Phone />} title="الهاتف" desc="0770784404 / 0652494159" />
                  <ContactItem icon={<Mail />} title="البريد الإلكتروني" desc="contact@digitalcreation.dz" />
                  <ContactItem icon={<MapPin />} title="المقر" desc="باتنة، الجزائر" />
                </div>
                
                <div className="glass-panel" style={{ marginTop: '2rem', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>⏰ ساعات العمل</h3>
                  <p style={{ fontSize: '0.95rem' }}>الأحد - الخميس: 9:00 - 17:00</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', marginTop: '0.5rem' }}>نرد على الرسائل حتى خارج أوقات العمل!</p>
                </div>
              </div>
            </FadeIn>

            {/* Form Side */}
            <FadeIn direction="left" delay={0.15}>
              <div className="contact-form-container glass-panel" style={{ padding: '3rem' }}>
                {/* Mobile CTA */}
                <div className="contact-mobile-cta" style={{ display: 'none', textAlign: 'center', padding: '2rem 0' }}>
                   <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>جاهز تبدا مشروعك؟</h3>
                   <Link to="/start-project" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1.1rem', padding: '1rem' }}>
                     <Sparkles size={20} style={{ marginLeft: '10px' }} />
                     املأ استمارة المشروع
                   </Link>
                </div>

                {/* Desktop Form Content */}
                <div className="contact-desktop-content">
                {status === 'success' ? (
                  <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <CheckCircle size={64} color="#34D399" style={{ marginBottom: '1.5rem' }} />
                    <h2 style={{ color: '#34D399', marginBottom: '1rem' }}>وصلنا طلبك! ✅</h2>
                    <p style={{ marginBottom: '2rem' }}>فريقنا رايح يتواصل معاك قريبًا.</p>
                    <button onClick={() => setStatus('idle')} className="btn btn-primary">
                      إرسال طلب آخر
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                    <Input label="الاسم الكامل *" name="name" value={formData.name} onChange={handleChange} required />
                    <Input label="رقم الهاتف *" name="phone" value={formData.phone} onChange={handleChange} required type="tel" />
                    
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>نوع الخدمة</label>
                      <select name="type" value={formData.type} onChange={handleChange} style={inputStyle}>
                         <option value="consultation">استشارة مجانية</option>
                         <option value="website">موقع إلكتروني</option>
                         <option value="store">متجر إلكتروني</option>
                         <option value="system">نظام خاص (System)</option>
                      </select>
                    </div>

                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>قولنا على فكرتك</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows="4" style={inputStyle} placeholder="وصفلنا مشروعك باختصار..." />
                    </div>

                    {status === 'error' && (
                      <div style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                        حدث خطأ. يرجى المحاولة مرة أخرى.
                      </div>
                    )}

                    <button type="submit" className="btn btn-primary" disabled={status === 'submitting'} style={{ marginTop: '1rem', width: '100%' }}>
                      {status === 'submitting' ? (
                        <>
                          <Loader size={18} style={{ marginRight: '0.5rem', animation: 'spin 1s linear infinite' }} />
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          إرسال الطلب
                          <Send size={18} style={{ marginRight: '0.5rem' }} />
                        </>
                      )}
                    </button>
                  </form>
                )}
                </div>
              </div>
            </FadeIn>
 
          </div>
        </div>

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </PageTransition>
  );
};

const ContactItem = ({ icon, title, desc }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <div style={{ background: 'var(--glass-border)', padding: '0.8rem', borderRadius: '50%' }}>{icon}</div>
    <div>
       <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{title}</div>
       <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{desc}</div>
    </div>
  </div>
);

const Input = ({ label, ...props }) => (
  <div style={{ display: 'grid', gap: '0.5rem' }}>
    <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>{label}</label>
    <input {...props} style={inputStyle} />
  </div>
);

const inputStyle = {
  background: 'rgba(255,255,255,0.05)', 
  border: '1px solid var(--glass-border)', 
  padding: '1rem', 
  borderRadius: '0.5rem',
  color: 'white',
  fontFamily: 'inherit',
  width: '100%'
};

export default ContactPage;
