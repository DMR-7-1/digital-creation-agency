import React, { useEffect } from 'react';

const SEO = ({ title, description }) => {
  useEffect(() => {
    // Update Title
    const finalTitle = title ? `${title} | Digital Creation Agency` : 'Digital Creation Agency 🇩🇿 | وكالة تصميم مواقع';
    document.title = finalTitle;

    // Update or Insert Description Meta Tag
    let metaDescription = document.querySelector('meta[name="description"]');
    const finalDescription = description || 'وكالة إبداع رقمي جزائرية وتصميم مواقع ومتاجر إلكترونية احترافية';
    
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDescription);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = finalDescription;
      document.head.appendChild(metaDescription);
    }
  }, [title, description]);

  return null;
};

export default SEO;
