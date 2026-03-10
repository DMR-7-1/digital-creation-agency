import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <>
      <style>{`
        .whatsapp-fab {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          color: white;
          text-decoration: none;
        }
        .whatsapp-fab::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.3);
          animation: whatsapp-pulse 2s ease-in-out infinite;
          z-index: -1;
        }
        @keyframes whatsapp-pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.25); opacity: 0; }
        }
        .whatsapp-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%);
          background: rgba(17, 24, 39, 0.95);
          color: white;
          padding: 0.6rem 1rem;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .whatsapp-fab {
            width: 50px;
            height: 50px;
            bottom: calc(85px + 1.5rem); /* Clears the new 85px glass shelf */
            right: 1.25rem;
          }
          .whatsapp-tooltip {
            display: none;
          }
        }
      `}</style>

      <motion.a
        href="https://wa.me/213770784404"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle size={28} fill="white" />
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              className="whatsapp-tooltip"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              راسلنا على واتساب 💬
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
    </>
  );
};

export default WhatsAppButton;
