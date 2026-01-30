import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Replace with your Web3Forms access key
const WEB3FORMS_ACCESS_KEY = 'ac9c514d-d0d1-4746-90db-01538d0d2af5';

const StartProject = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', type: 'website', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

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
          subject: `طلب مشروع جديد من ${formData.name} - ${formData.type}`,
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
    <div className="section" style={{ paddingTop: 'calc(var(--header-height) + 4rem)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', transition: 'color 0.2s' }}>
            <ArrowRight size={20} />
            عودة للرئيسية
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', textAlign: 'center' }}
          >
            🚀 ابدأ مشروعك الآن
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ textAlign: 'center', opacity: 0.8, maxWidth: '500px', margin: '0 auto 3rem', color: 'var(--text-muted)' }}
          >
            أملأ النموذج أدناه وسنقوم بدراسة طلبك والرد عليك بعرض مفصل في أقل من 24 ساعة.
          </motion.p>
        </div>

        <div className="glass-panel" style={{ padding: '3rem', maxWidth: '700px', margin: '0 auto' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <CheckCircle size={64} color="#34D399" style={{ marginBottom: '1.5rem', marginInline: 'auto' }} />
              <h2 style={{ color: '#34D399', marginBottom: '1rem' }}>تم استلام طلبك بنجاح!</h2>
              <p style={{ marginBottom: '2rem' }}>سيقوم فريقنا بمراجعة مشروعك والتواصل معك قريباً.</p>
              <button onClick={() => setStatus('idle')} className="btn btn-primary">إرسال طلب آخر</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>الاسم الكامل *</label>
                  <input 
                    type="text" 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                  <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>رقم الهاتف *</label>
                  <input 
                    type="tel" 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ 
                      background: 'rgba(255,255,255,0.05)', 
                      border: '1px solid var(--glass-border)', 
                      padding: '1rem', 
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontFamily: 'inherit',
                      direction: 'ltr',
                      textAlign: 'right'
                    }}
                    placeholder="05 XX XX XX XX"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>نوع المشروع</label>
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    style={{ 
                      background: 'rgba(255,255,255,0.05)', 
                      border: '1px solid var(--glass-border)', 
                      padding: '1rem', 
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontFamily: 'inherit'
                    }}
                  >
                    <option value="website" style={{ background: '#1e293b' }}>موقع إلكتروني تعريفي</option>
                    <option value="ecommerce" style={{ background: '#1e293b' }}>متجر إلكتروني</option>
                    <option value="webapp" style={{ background: '#1e293b' }}>نظام / تطبيق ويب</option>
                    <option value="design" style={{ background: '#1e293b' }}>تصميم هوية بصرية</option>
                    <option value="consultation" style={{ background: '#1e293b' }}>استشارة تقنية</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>تفاصيل المشروع</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid var(--glass-border)', 
                    padding: '1rem', 
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                  placeholder="أخبرنا المزيد عن فكرتك..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="btn btn-primary"
                style={{ marginTop: '1rem', justifyContent: 'center', padding: '1rem' }}
              >
                {status === 'submitting' ? 'جاري الإرسال...' : 'إرسال الطلب'}
                <Send size={20} style={{ marginRight: '10px' }} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartProject;
