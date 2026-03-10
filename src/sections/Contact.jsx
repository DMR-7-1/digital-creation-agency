import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle, Loader } from 'lucide-react';
import { AnimatedSection, FadeIn } from '../components/AnimatedSection';
import useIsMobile from '../hooks/useIsMobile';

const Contact = () => {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', type: 'consultation', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const WEB3FORMS_ACCESS_KEY = 'ac9c514d-d0d1-4746-90db-01538d0d2af5';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `طلب جديد من ${formData.name} - ${formData.type}`,
          from_name: 'Digital Creation Website',
          name: formData.name, email: formData.email,
          phone: formData.phone, service_type: formData.type,
          message: formData.message || 'لم يتم إضافة رسالة'
        })
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '', email: '', type: 'consultation', message: '' });
      } else {
        setError('حدث خطأ. يرجى المحاولة مرة أخرى.');
      }
    } catch {
      setError('حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    background: 'var(--glass-bg)',
    border: '1px solid var(--glass-border)',
    padding: isMobile ? '0.7rem' : '1rem',
    borderRadius: isMobile ? '10px' : '0.5rem',
    color: 'var(--color-text-main)',
    fontFamily: 'inherit',
    fontSize: isMobile ? '14px' : 'inherit',
    width: '100%',
    boxSizing: 'border-box'
  };

  const labelStyle = {
    fontSize: isMobile ? '0.75rem' : '0.9rem',
    fontWeight: 600,
    marginBottom: '0.3rem',
    display: 'block',
    color: 'var(--color-text-main)'
  };

  if (isSuccess) {
    return (
      <section id="contact" style={{ padding: isMobile ? '2rem 1.25rem' : '4rem 0 8rem' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <div className={isMobile ? '' : 'glass-panel'} style={{ padding: isMobile ? '2rem 1rem' : '4rem 3rem', ...(isMobile ? { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' } : {}) }}>
            <CheckCircle size={isMobile ? 40 : 64} color="#4ADE80" style={{ marginBottom: '1rem' }} />
            <h2 style={{ fontSize: isMobile ? '1.15rem' : '2rem', marginBottom: '0.5rem', color: '#4ADE80' }}>وصلنا طلبك! ✅</h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, fontSize: isMobile ? '0.82rem' : '1rem', color: 'var(--color-text-main)' }}>
              فريقنا رايح يتواصل معاك في أقرب وقت. شكرًا على ثقتك فينا!
            </p>
            <button onClick={() => setIsSuccess(false)} className="btn btn-primary" style={{ fontSize: isMobile ? '0.85rem' : '1rem' }}>
              إرسال طلب آخر
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (isMobile) {
    return (
      <section style={{ padding: '1.25rem 1.25rem 2rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.3rem', color: 'var(--color-text-main)' }}>جاهز تبدا؟ 💬</h2>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>
            الاستشارة مجانية — بلا التزام
          </p>
        </div>

        {/* Form */}
        <div style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '1rem'
        }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div>
              <label style={labelStyle}>الاسم *</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={inputStyle} placeholder="اسمك أو شركتك" />
            </div>
            <div>
              <label style={labelStyle}>البريد *</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={inputStyle} placeholder="email@example.com" />
            </div>
            <div>
              <label style={labelStyle}>واتساب</label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{...inputStyle, textAlign: 'right'}} placeholder="05 XX XX XX XX" />
            </div>
            <div>
              <label style={labelStyle}>نوع الخدمة</label>
              <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} style={{...inputStyle, background: 'var(--color-bg)'}}>
                <option value="consultation">استشارة مجانية</option>
                <option value="website">تصميم موقع</option>
                <option value="store">متجر إلكتروني</option>
                <option value="system">نظام شركة</option>
                <option value="mobile">تطبيق موبايل</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>فكرتك (اختياري)</label>
              <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={3} style={{...inputStyle, resize: 'none'}} placeholder="وصفلنا مشروعك..." />
            </div>

            {error && (
              <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '0.6rem', borderRadius: '8px', color: '#f87171', fontSize: '0.75rem' }}>
                {error}
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ width: '100%', padding: '0.7rem', fontSize: '0.88rem', marginTop: '0.25rem', opacity: isSubmitting ? 0.7 : 1 }}>
              {isSubmitting ? (
                <><Loader size={16} style={{ marginLeft: '0.4rem', animation: 'spin 1s linear infinite' }} /> جاري الإرسال...</>
              ) : (
                <><Send size={16} style={{ marginLeft: '0.4rem' }} /> إرسال الطلب</>
              )}
            </button>
          </form>

          {/* WhatsApp quick link */}
          <div style={{ marginTop: '0.75rem', textAlign: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--glass-border)' }}>
            <a href="https://wa.me/213770784404" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
              color: '#4ADE80', textDecoration: 'none', fontWeight: 700, fontSize: '0.78rem'
            }}>
              <MessageCircle size={16} /> تواصل عبر واتساب
            </a>
          </div>
        </div>

        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </section>
    );
  }

  /* ── DESKTOP (unchanged) ── */
  return (
    <section id="contact" className="section" style={{ paddingBottom: '8rem' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <AnimatedSection>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>جاهز تبدا؟ خلّينا نحكيو 💬</h2>
          <p style={{ marginBottom: '3rem', color: 'var(--color-text-muted)' }}>قولنا وش تحتاج ونحن نتكفّلوا بالباقي. <strong>الاستشارة مجانية</strong> — بلا التزام.</p>
        </AnimatedSection>

        <FadeIn delay={0.2}>
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'right' }}>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <label style={labelStyle}>الاسم الكامل *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={inputStyle} placeholder="اسمك أو اسم شركتك" />
                </div>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <label style={labelStyle}>البريد الإلكتروني *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={inputStyle} placeholder="example@email.com" />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <label style={labelStyle}>رقم الهاتف (واتساب)</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{...inputStyle, textAlign: 'right'}} placeholder="05 XX XX XX XX" />
                </div>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <label style={labelStyle}>نوع الخدمة المطلوبة</label>
                  <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} style={{...inputStyle, background: 'var(--color-bg)'}}>
                    <option value="consultation">استشارة مجانية</option>
                    <option value="website">تصميم موقع</option>
                    <option value="store">متجر إلكتروني</option>
                    <option value="system">نظام شركة خاص</option>
                    <option value="mobile">تطبيق موبايل</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <label style={labelStyle}>قولنا على فكرتك (اختياري)</label>
                <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} style={{...inputStyle, resize: 'vertical'}} placeholder="وصفلنا مشروعك باختصار..." />
              </div>

              {error && (
                <div style={{ background: 'rgba(239, 68, 68, 0.2)', border: '1px solid rgba(239, 68, 68, 0.5)', padding: '1rem', borderRadius: '0.5rem', color: '#f87171' }}>
                  {error}
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ marginTop: '1rem', width: '100%', opacity: isSubmitting ? 0.7 : 1 }}>
                {isSubmitting ? (
                  <><Loader size={18} style={{ marginLeft: '0.5rem', animation: 'spin 1s linear infinite' }} /> جاري الإرسال...</>
                ) : (
                  <><Send size={18} style={{ marginLeft: '0.5rem' }} /> إرسال الطلب</>
                )}
              </button>
            </form>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>أو تواصل مباشرة عبر واتساب</span><br />
              <a href="https://wa.me/213770784404" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#4ADE80', marginTop: '0.5rem', textDecoration: 'none', fontWeight: '700' }}>
                <MessageCircle size={20} /> +213 77 07 84 40
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
};

export default Contact;
