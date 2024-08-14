import React from 'react';
import './App.css'; // CSS 파일 import
import bb from './images/bb1.png'; // 예시 이미지 import

function App() {
  // handleLink 함수 정의
  const handleLink1 = () => {
    window.open('https://front-web.best-traders.com/downloads/BoundAssetInstaller.exe', '_blank', 'noopener,noreferrer');
  };

  const handleLink2 = () => {
    window.open('https://example.com/link2', '_blank', 'noopener,noreferrer'); // 여기에 두 번째 링크 추가
  };

  const handleLink3 = () => {
    window.open('https://example.com/link3', '_blank', 'noopener,noreferrer'); // 여기에 세 번째 링크 추가
  };

  return (
    <div className="App">
      <div className="image-wrapper">
        <img src={bb} alt="Banner" className="responsive" />
      </div>
      <div className="text-wrapper">
        <h1 className="title">🎉🌟Bound 8월 여름 이벤트🌟🎉</h1>
        <p className="description">
          이달의 신규 이벤트에 참여하여 다양한 혜택을 누리세요!<br />
          <br />
          <span className="highlight">👍 수수료 3$ 최저가!</span><br />
          최저 수수료 $3 적용! 증권사 최저가를 보장합니다!<br />
          <br />                
          <span className="emphasis">🎁 8월 가입 회원 30만원 지원금!</span><br />
          신규 가입하시는 모든 분께 즉시 300,000원의 증거금을 지원해 드립니다!<br />
          <br />
          <span className="highlight">💸 증권사 이전 지인 추천 이벤트 (문의)</span><br />
          
          <br />
           👇 HTS 다운로드 버튼 클릭 👇<br />
        </p>
        <div className="button-group">
          <button onClick={handleLink1} className="download-button">Windows 다운로드(PC)</button>
          <br />
          <br />
          <button onClick={handleLink2} className="download-button">안드로이드 다운로드(모바일)</button>
          <br />
          <br />
          <button onClick={handleLink3} className="download-button">아이폰 다운로드(모바일)</button>
        </div>
      </div>
    </div>
  );
}

// App 컴포넌트를 default export로 내보냄
export default App;
