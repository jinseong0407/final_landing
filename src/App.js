import React from 'react';
import './App.css'; // CSS 파일 import
// 이미지 import
import bann1 from './images/pic3.png';
import bann2 from './images/pic1.png';
import bann3 from './images/pic2.png';
import exam1 from './images/exam1.png';
import exam3 from './images/exam3.png';

import fixedImage from './images/realbanner2.jpg';

function App() {
  return (
    <div className="App">
      {/* 반응형 이미지1 */}
      <img src={bann1} alt="Responsive" className="responsive" />

      {/* 예시 이미지1 */}
      <img src={exam1} alt="Responsive" className="responsive" />

      {/* 반응형 이미지2 */}
      <img src={bann2} alt="Responsive" className="responsive" />

      {/* 예시 이미지3 + 링크 */}
      <div className="relative">
        <img src={exam3} alt="relative" className="relative" />
        <a href="https://open.kakao.com/o/gTC25oac" target="_blank" rel="noopener noreferrer" className="relative-link" aria-label="Visit Example.com"></a>
      </div>

      {/* 반응형 이미지3 */}
      <img src={bann3} alt="Responsive" className="responsive" />


      {/* 고정된 이미지와 링크를 포함하는 컨테이너 */}
      <div className="fixed">
        <img src={fixedImage} alt="Fixed" className="fixed" />
        <a href="https://open.kakao.com/o/gTC25oac" target="_blank" rel="noopener noreferrer" className="fixed-link" aria-label="Visit Example.com"></a>
      </div>
      <div className="footer-padding"></div>
    </div>
  );
}

export default App;