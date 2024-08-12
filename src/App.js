import React from 'react';
import './App.css'; // CSS 파일 import
import bb from './images/bb1.png'; // 예시 이미지 import

function App() {
  // handleDownload 함수 정의
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/BoundAssetInstaller.exe'; // 다운로드할 .exe 파일의 경로
    link.download = 'BoundAssetInstaller.exe'; // 다운로드될 파일의 이름
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <span className="highlight">👍 초특가 수수료 이벤트!</span><br />
          최저 수수료 $3 적용! 업계 최저가를 보장합니다!<br />
          <br />
          <span className="highlight">💸 수수료 페이백 프로모션!</span><br />
          매주 발생하는 수수료의 50%를 환급해드립니다!<br />
          <br />
          <span className="emphasis">🎁 신규 가입 혜택!</span><br />
          신규 가입하시는 모든 분께 즉시 300,000원의 증거금을 지원해 드립니다!<br />
          <br />

          🔥 이 모든 혜택을 누리려면 지금 바로 가입하세요!<br />
        </p>
        <button onClick={handleDownload} className="download-button">다운로드</button>
      </div>
    </div>
  );
}

// App 컴포넌트를 default export로 내보냄
export default App;
