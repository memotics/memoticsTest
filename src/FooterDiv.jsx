import React from 'react';


const FooterDive = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
        
      <div className="footer-left">
        <p>©2024 Memotics</p>
      </div>
    
        <div className="go-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </div>
    
    </footer>
  );
};

export default FooterDive;