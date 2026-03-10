import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, MessageCircle, MapPin, Phone, Mail, Loader, CheckCircle, Sparkles } from 'lucide-react';
import { PageTransition, AnimatedSection, FadeIn } from '../components/AnimatedSection';
import useIsMobile from '../hooks/useIsMobile';

const WEB3FORMS_ACCESS_KEY = 'ac9c514d-d0d1-4746-90db-01538d0d2af5';

import SEO from '../components/SEO';

const ContactPage = () => {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({ name: '', phone: '', type: 'website', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `طلب جديد من ${formData.name} - ${formData.type}`,
          from_name: 'Digital Creation Website',
          name: formData.name, phone: formData.phone,
          service_type: formData.type,
          message: formData.message || 'لم يتم إضافة رسالة'
        })
      });
      const result = await response.json();
      if (result.success) { setStatus('success'); setFormData({ name: '', phone: '', type: 'website', message: '' }); }
      else setStatus('error');
    } catch (err) { console.error(err); setStatus('error'); }
  };

  const mobileInput = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.12)',
    padding: '0.7rem', borderRadius: '10px',
    color: 'white', fontFamily: 'inherit',
    fontSize: '14px', width: '100%', boxSizing: 'border-box'
  };

  if (isMobile) {
    return (
      <PageTransition>
        <div style={{ padding: '1rem 1.25rem 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <h1 style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>📩 خلّينا نحكيو</h1>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
              نرد عليك في أقل من 5 دقائق ⚡
            </p>
          </div>

          {/* WhatsApp CTA */}
          <a href="https://wa.me/213770784404" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            background: '#25D366', color: 'white', fontWeight: 700,
            padding: '0.7rem', borderRadius: '12px', textDecoration: 'none',
            fontSize: '0.88rem', marginBottom: '0.5rem'
          }}>
            <MessageCircle size={18} /> راسلنا على واتساب
          </a>

          {/* Call Us CTA */}
          <a href="tel:+213770784404" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)', color: 'white', fontWeight: 700,
            padding: '0.7rem', borderRadius: '12px', textDecoration: 'none',
            fontSize: '0.88rem', marginBottom: '0.75rem'
          }}>
            <Phone size={18} /> اتصل بنا الآن
          </a>

          {/* Contact info chips */}
          <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { icon: <Phone size={12} />, text: '0770784404' },
              { icon: <MapPin size={12} />, text: 'باتنة' },
              { icon: <Mail size={12} />, text: 'contact@digitalcreation.dz' }
            ].map((c, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '0.25rem',
                fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)',
                background: 'rgba(255,255,255,0.04)', borderRadius: '8px',
                padding: '0.25rem 0.5rem'
              }}>
                {React.cloneElement(c.icon, { color: '#8b5cf6' })}
                {c.text}
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px', padding: '1rem'
          }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <CheckCircle size={40} color="#34D399" style={{ marginBottom: '0.75rem' }} />
                <h2 style={{ fontSize: '1.1rem', color: '#34D399', marginBottom: '0.5rem' }}>وصلنا طلبك! ✅</h2>
                <p style={{ fontSize: '0.78rem', marginBottom: '1rem' }}>فريقنا رايح يتواصل معاك قريبًا.</p>
                <button onClick={() => setStatus('idle')} className="btn btn-primary" style={{ fontSize: '0.82rem' }}>إرسال طلب آخر</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.2rem', display: 'block' }}>الاسم *</label>
                  <input type="text" required name="name" value={formData.name} onChange={handleChange} style={mobileInput} placeholder="اسمك أو شركتك" />
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.2rem', display: 'block' }}>الهاتف *</label>
                  <input type="tel" required name="phone" value={formData.phone} onChange={handleChange} style={{...mobileInput, textAlign: 'right'}} placeholder="05 XX XX XX XX" />
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.2rem', display: 'block' }}>نوع الخدمة</label>
                  <select name="type" value={formData.type} onChange={handleChange} style={{...mobileInput, background: 'rgba(17,24,39,0.8)'}}>
                    <option value="consultation">استشارة مجانية</option>
                    <option value="website">موقع إلكتروني</option>
                    <option value="store">متجر إلكتروني</option>
                    <option value="system">نظام خاص</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.2rem', display: 'block' }}>فكرتك</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={3} style={{...mobileInput, resize: 'none'}} placeholder="وصفلنا مشروعك..." />
                </div>
                {status === 'error' && (
                  <div style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', padding: '0.5rem', borderRadius: '8px', color: '#f87171', fontSize: '0.72rem', textAlign: 'center' }}>
                    حدث خطأ. يرجى المحاولة مرة أخرى.
                  </div>
                )}
                <button type="submit" className="btn btn-primary" disabled={status === 'submitting'} style={{ width: '100%', padding: '0.65rem', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                  {status === 'submitting' ? 'جاري الإرسال...' : 'إرسال الطلب'}
                </button>
              </form>
            )}
          </div>
        </div>
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </PageTransition>
    );
  }

  /* ── DESKTOP (unchanged) ── */
  return (
    <PageTransition>
      <div className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>📩 خلّينا نحكيو</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              قولنا وش تحتاج ونحن نعطيك <strong style={{ color: 'var(--color-primary)' }}>استشارة مجانية + اقتراح تقني مناسب</strong><br/>نرد عليك في أقل من 5 دقائق ⚡
            </p>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            <FadeIn direction="right">
              <div>
                <h2 style={{ marginBottom: '2rem' }}>طرق التواصل</h2>
                <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', background: 'rgba(52, 211, 153, 0.1)', border: '2px solid #34D399' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <MessageCircle size={32} color="#34D399" />
                    <div><div style={{ fontSize: '0.9rem', color: '#9CA3AF' }}>الطريقة الأسرع</div><div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#34D399' }}>واتساب</div></div>
                  </div>
                  <a href="https://wa.me/213770784404" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', background: '#25D366', justifyContent: 'center' }}>
                    <MessageCircle size={20} style={{ marginLeft: '0.5rem' }} /> راسلنا على واتساب
                  </a>
                </div>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  <ContactItem icon={<Phone />} title="الهاتف" desc="0770784404 / 0652494159" />
                  <ContactItem icon={<Mail />} title="البريد" desc="contact@digitalcreation.dz" />
                  <ContactItem icon={<MapPin />} title="المقر" desc="باتنة، الجزائر" />
                </div>
                <div className="glass-panel" style={{ marginTop: '2rem', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>⏰ ساعات العمل</h3>
                  <p style={{ fontSize: '0.95rem' }}>الأحد - الخميس: 9:00 - 17:00</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', marginTop: '0.5rem' }}>نرد على الرسائل حتى خارج أوقات العمل!</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="glass-panel" style={{ padding: '3rem' }}>
                {status === 'success' ? (
                  <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <CheckCircle size={64} color="#34D399" style={{ marginBottom: '1.5rem' }} />
                    <h2 style={{ color: '#34D399', marginBottom: '1rem' }}>وصلنا طلبك! ✅</h2>
                    <p style={{ marginBottom: '2rem' }}>فريقنا رايح يتواصل معاك قريبًا.</p>
                    <button onClick={() => setStatus('idle')} className="btn btn-primary">إرسال طلب آخر</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                    <Input label="الاسم الكامل *" name="name" value={formData.name} onChange={handleChange} required />
                    <Input label="رقم الهاتف *" name="phone" value={formData.phone} onChange={handleChange} required type="tel" />
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>نوع الخدمة</label>
                      <select name="type" value={formData.type} onChange={handleChange} style={desktopInput}>
                        <option value="consultation">استشارة مجانية</option>
                        <option value="website">موقع إلكتروني</option>
                        <option value="store">متجر إلكتروني</option>
                        <option value="system">نظام خاص (System)</option>
                      </select>
                    </div>
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>قولنا على فكرتك</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows="4" style={desktopInput} placeholder="وصفلنا مشروعك باختصار..." />
                    </div>
                    {status === 'error' && (
                      <div style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>حدث خطأ. يرجى المحاولة مرة أخرى.</div>
                    )}
                    <button type="submit" className="btn btn-primary" disabled={status === 'submitting'} style={{ marginTop: '1rem', width: '100%' }}>
                      {status === 'submitting' ? 'جاري الإرسال...' : (<>إرسال الطلب <Send size={18} style={{ marginRight: '0.5rem' }} /></>)}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    </PageTransition>
  );
};

// Wrapper handling SEO injection cleanly
const ContactWrapper = () => {
  return (
    <>
      <SEO title="تواصل معنا" description="قولنا فكرتك ونعطيك استشارة تقنية مجانية في أقل من 5 دقائق" />
      <ContactPage />
    </>
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
    <input {...props} style={desktopInput} />
  </div>
);

const desktopInput = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid var(--glass-border)',
  padding: '1rem', borderRadius: '0.5rem',
  color: 'white', fontFamily: 'inherit', width: '100%'
};

export default ContactWrapper;
