import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle, Loader } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', type: 'consultation', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Replace with your Web3Forms access key
  const WEB3FORMS_ACCESS_KEY = 'ac9c514d-d0d1-4746-90db-01538d0d2af5';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

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
          email: formData.email,
          phone: formData.phone,
          service_type: formData.type,
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
    } catch (err) {
      setError('حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="section" style={{ paddingBottom: '8rem' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <div className="glass-panel" style={{ padding: '4rem 3rem' }}>
            <CheckCircle size={64} color="#4ADE80" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#4ADE80' }}>تم إرسال طلبك بنجاح!</h2>
            <p style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
              شكرًا لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.
            </p>
            <button 
              onClick={() => setIsSuccess(false)} 
              className="btn btn-primary"
            >
              إرسال طلب آخر
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section" style={{ paddingBottom: '8rem' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>ابدأ مشروعك اليوم</h2>
        <p style={{ marginBottom: '3rem' }}>
           استفد من <strong>الاستشارة المجانية</strong> وعرض الشركات. تواصل معنا الآن.
        </p>

        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'right' }}>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>الاسم الكامل *</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid var(--glass-border)', 
                    padding: '1rem', 
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontFamily: 'inherit'
                  }}
                  placeholder="اسمك أو اسم شركتك"
                />
              </div>

              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>البريد الإلكتروني *</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid var(--glass-border)', 
                    padding: '1rem', 
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontFamily: 'inherit'
                  }}
                  placeholder="example@email.com"
                />
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>رقم الهاتف (واتساب)</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid var(--glass-border)', 
                    padding: '1rem', 
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontFamily: 'inherit',
                    textAlign: 'right'
                  }}
                  placeholder="05 XX XX XX XX"
                />
              </div>

              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>نوع الخدمة المطلوبة</label>
                <select 
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  style={{ 
                    background: 'rgba(17, 24, 39, 0.8)',
                    border: '1px solid var(--glass-border)', 
                    padding: '1rem', 
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontFamily: 'inherit'
                  }}
                >
                  <option value="consultation">استشارة مجانية</option>
                  <option value="website">تصميم موقع</option>
                  <option value="store">متجر إلكتروني</option>
                  <option value="system">نظام شركة خاص</option>
                  <option value="mobile">تطبيق موبايل</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>رسالتك (اختياري)</label>
              <textarea 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid var(--glass-border)', 
                  padding: '1rem', 
                  borderRadius: '0.5rem',
                  color: 'white',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
                placeholder="أخبرنا المزيد عن مشروعك..."
              />
            </div>

            {error && (
              <div style={{ 
                background: 'rgba(239, 68, 68, 0.2)', 
                border: '1px solid rgba(239, 68, 68, 0.5)',
                padding: '1rem',
                borderRadius: '0.5rem',
                color: '#f87171'
              }}>
                {error}
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={isSubmitting}
              style={{ marginTop: '1rem', width: '100%', opacity: isSubmitting ? 0.7 : 1 }}
            >
              {isSubmitting ? (
                <>
                  <Loader size={18} style={{ marginLeft: '0.5rem', animation: 'spin 1s linear infinite' }} />
                  جاري الإرسال...
                </>
              ) : (
                <>
                  <Send size={18} style={{ marginLeft: '0.5rem' }} />
                  إرسال الطلب
                </>
              )}
            </button>
          </form>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>أو تواصل مباشرة عبر واتساب</span>
            <br />
            <a href="https://wa.me/213770784404" target="_blank" rel="noopener noreferrer" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: '#4ADE80', 
              marginTop: '0.5rem', 
              textDecoration: 'none', 
              fontWeight: '700' 
            }}>
              <MessageCircle size={20} />
              +213 77 07 84 40
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
