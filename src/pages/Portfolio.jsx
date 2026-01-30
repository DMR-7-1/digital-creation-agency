import React, { useState } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      title: "متجر إلكتروني للأزياء",
      category: "E-Commerce",
      description: "منصة بيع متكاملة مع نظام إدارة المخزون ودفع إلكتروني آمن.",
      tech: ["React", "Node.js", "Stripe"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
    },
    {
      title: "نظام إدارة مطاعم",
      category: "Web App",
      description: "تطبيق ويب لإدارة الطلبات، الموظفين، والمخزون في الوقت الفعلي.",
      tech: ["Vue.js", "Firebase", "Realtime DB"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    },
    {
      title: "موقع شركة عقارية",
      category: "Website",
      description: "موقع تعريفي احترافي مع نظام فلترة وعرض للعقارات.",
      tech: ["Next.js", "Supabase", "Maps API"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    },
    {
      title: "منصة تعليمية (LMS)",
      category: "Platform",
      description: "منصة تعليم عن بعد وتدريب مع نظام الدروس والاختبارات.",
      tech: ["React", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    },
    {
      title: "تطبيق حجوزات طبية",
      category: "Booking System",
      description: "نظام حجز مواعيد للعيادات الطبية مع تنبيهات SMS.",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop",
    },
    {
      title: "لوحة تحكم (Analytics)",
      category: "Dashboard",
      description: "لوحة تحكم ذكية لتحليل البيانات وإنشاء تقارير مفصلة للمدراء.",
      tech: ["React", "D3.js", "Python"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="section" style={{ paddingTop: 'calc(var(--header-height) + 4rem)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gradient"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1rem" }}
          >
            أعمالنا ومشاريعنا
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", color: "var(--text-muted)" }}
          >
            نفتخر بشراكتنا مع أكثر من 40 عميل لتحقيق نجاحات رقمية حقيقية.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="portfolio-grid-system">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              style={{ padding: 0, overflow: "hidden", cursor: "pointer" }}
            >
              {/* Image Area */}
              <div
                style={{
                  height: "240px",
                  background: `linear-gradient(to top, rgba(2,6,23,0.8), transparent), url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  transition: "transform 0.5s ease"
                }}
                className="project-image"
              >
                <div style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "rgba(6, 182, 212, 0.9)", // Primary
                  color: "#000",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "100px",
                  fontSize: "0.75rem",
                  fontWeight: "700"
                }}>
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem 2rem 2rem" }}>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}>
                  {project.title}
                </h3>
                <p style={{ marginBottom: "1.5rem", lineHeight: "1.6", fontSize: "0.95rem", color: "var(--text-muted)" }}>
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {project.tech.map((tech, i) => (
                     <span
                      key={i}
                      style={{
                        fontSize: "0.75rem",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "20px",
                        color: "var(--text-dim)"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
