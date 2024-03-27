import React from 'react';
import './App.css'; // CSS 파일 import
// 이미지 import
import bann1 from './images/bann1.jpg';
import bann2 from './images/bann2.jpg';
import bann3 from './images/bann3.jpg';
import low01 from './images/realbanner1.jpg';
import fixedImage from './images/realbanner2.jpg';

function App() {
  return (
    <div className="App">
      {/* 반응형 이미지1 */}
      <img src={bann2} alt="Responsive" className="responsive" />

      {/* 반응형 이미지2 */}
      <img src={bann1} alt="Responsive" className="responsive" />

      {/* 반응형 이미지3 */}
      <img src={bann3} alt="Responsive" className="responsive" />

      {/* 최하단 이미지 */}
      <img src={low01} alt="responsive_bot" className="responsive_bot" />

      {/* 고정된 이미지와 링크를 포함하는 컨테이너 */}
      <div className="fixed">
        <img src={fixedImage} alt="Fixed" className="fixed" />
        {/* 링크를 추가할 위치. 위치와 크기는 CSS로 조정해야 함 */}
        <a href="https://open.kakao.com/o/s9MoeGhg" className="fixed-link" aria-label="Visit Example.com"></a>
      </div>
    </div>
  );
}

export default App;