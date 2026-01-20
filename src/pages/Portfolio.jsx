import React from "react";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "متجر إلكتروني للأزياء",
      category: "E-Commerce",
      description: "منصة بيع متكاملة مع نظام إدارة المخزون ودفع آمن",
      tech: ["React", "Node.js", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
    },
    {
      title: "نظام إدارة مطاعم",
      category: "Web App",
      description: "تطبيق ويب لإدارة الطلبات والموظفين والمخزون",
      tech: ["Vue.js", "Firebase", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    },
    {
      title: "موقع شركة عقارية",
      category: "Website",
      description: "موقع تعريفي احترافي مع نظام عرض العقارات",
      tech: ["Next.js", "Supabase", "Maps API"],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    },
    {
      title: "منصة تعليمية",
      category: "Platform",
      description: "منصة تعليم عن بعد مع نظام الدروس والاختبارات",
      tech: ["React", "Express", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    },
    {
      title: "تطبيق حجز مواعيد",
      category: "Booking System",
      description: "نظام حجز مواعيد للعيادات والصالونات",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop",
    },
    {
      title: "لوحة تحكم تحليلات",
      category: "Dashboard",
      description: "لوحة تحكم لتحليل البيانات وإنشاء التقارير",
      tech: ["React", "D3.js", "Python"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>أعمالنا</h1>
            <p
              style={{
                fontSize: "1.2rem",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              مشاريع ناجحة ساعدنا عملاءنا على تحقيقها
            </p>
          </div>

          <div className="portfolio-grid-system">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    height: "220px",
                    background: `linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3)), url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "rgba(17, 24, 39, 0.9)",
                      padding: "0.5rem 1rem",
                      borderRadius: "20px",
                      fontSize: "0.85rem",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                <div style={{ padding: "2rem" }}>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                    {project.title}
                  </h3>

                  <p
                    style={{
                      marginBottom: "1.5rem",
                      lineHeight: "1.7",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {project.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          padding: "0.4rem 0.9rem",
                          background: "rgba(139, 92, 246, 0.15)",
                          borderRadius: "6px",
                          fontSize: "0.85rem",
                          border: "1px solid rgba(139, 92, 246, 0.3)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
