import React from 'react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: 'كيف تختار التقنية المناسبة لمشروعك الرقمي؟',
      excerpt: 'دليل شامل لاختيار أفضل التقنيات والأدوات لبناء مشروعك الرقمي بنجاح',
      date: '2025-01-15',
      author: 'فريق Digital Creation',
      category: 'تقنية'
    },
    {
      title: 'أهمية التحول الرقمي للشركات الجزائرية',
      excerpt: 'لماذا يجب على كل شركة جزائرية الاستثمار في التحول الرقمي الآن',
      date: '2025-01-10',
      author: 'فريق Digital Creation',
      category: 'أعمال'
    },
    {
      title: 'أفضل ممارسات تصميم المتاجر الإلكترونية',
      excerpt: 'نصائح عملية لبناء متجر إلكتروني ناجح يزيد من مبيعاتك',
      date: '2025-01-05',
      author: 'فريق Digital Creation',
      category: 'تصميم'
    }
  ];

  return (
    <main style={{ minHeight: '100vh' }}>
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>المدونة</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              مقالات ونصائح حول التحول الرقمي وتطوير الأعمال
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {posts.map((post, index) => (
              <article 
                key={index}
                className="glass-panel"
                style={{ 
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ 
                  display: 'inline-block', 
                  padding: '0.4rem 1rem', 
                  background: 'rgba(139, 92, 246, 0.2)', 
                  borderRadius: '20px', 
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}>
                  {post.category}
                </div>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                  {post.title}
                </h2>

                <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  {post.excerpt}
                </p>

                <div style={{ 
                  display: 'flex', 
                  gap: '1.5rem', 
                  fontSize: '0.9rem', 
                  color: 'var(--color-text-muted)',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                </div>

                <Link 
                  to="#"
                  style={{ 
                    color: 'var(--color-primary)', 
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '600',
                    transition: 'gap 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.gap = '1rem'}
                  onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}
                >
                  اقرأ المزيد
                  <ArrowLeft size={18} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
