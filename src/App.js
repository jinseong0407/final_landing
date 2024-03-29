import React, { useState, useEffect } from 'react';
import './App.css'; // CSS 파일 import

// 데스크탑 이미지 import
import bann1 from './images/pic3.png';
import bann2 from './images/pic1.png';
import bann3 from './images/pic2.png';
import exam1 from './images/exam1.png';
import exam3 from './images/exam3.png';
import fixedImage from './images/realbanner2.jpg';

// 모바일 이미지 import (실제 파일 경로를 사용하세요)
import bann1Mobile from './images/mo1.jpg';
import bann2Mobile from './images/mo3.jpg';
import bann3Mobile from './images/mo5.jpg';
import exam1Mobile from './images/mo2.jpg';
import exam3Mobile from './images/mo4.jpg';
import fixedImageMobile from './images/moba1.jpg';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <div className="image-wrapper"><img src={isMobile ? bann1Mobile : bann1} alt="Banner 1" className="responsive" /></div>
      <div className="image-wrapper"><img src={isMobile ? exam1Mobile : exam1} alt="Example 1" className="responsive" /></div>
      <div className="image-wrapper"><img src={isMobile ? bann2Mobile : bann2} alt="Banner 2" className="responsive" /></div>

      <div className="relative-container">
        <div className="image-wrapper"><img src={isMobile ? exam3Mobile : exam3} alt="Example 3" className="responsive" /></div>
        <a href="https://open.kakao.com/o/gTC25oac" target="_blank" rel="noopener noreferrer" className="relative-link" aria-label="Link to Example 3"></a>
      </div>

      <div className="image-wrapper"><img src={isMobile ? bann3Mobile : bann3} alt="Banner 3" className="responsive" /></div>

      <div className="fixed-container">
        <div className="image-wrapper"><img src={isMobile ? fixedImageMobile : fixedImage} alt="Fixed Banner" className="fixed" /></div>
        <a href="https://open.kakao.com/o/gTC25oac" target="_blank" rel="noopener noreferrer" className="fixed-link" aria-label="Link to Kakao Open Chat"></a>
      </div>
      
      <div className="footer-padding"></div>
     
    </div>
  );
}

export default App;