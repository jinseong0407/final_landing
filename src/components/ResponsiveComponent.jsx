import React from 'react';
import { useMediaQuery } from 'react-responsive';

function ResponsiveComponent() {
  // 미디어 쿼리를 정의하여 각 디바이스 유형에 따른 조건을 설정합니다.
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // 모바일 화면일 때 적용할 스타일


  // 조건에 따라 다른 콘텐츠를 렌더링하고, 모바일 화면일 경우에만 추가 스타일을 적용합니다.
  return (
    <div>
      {isDesktop && <p>데스크탑 화면입니다.</p>}
      {isTablet && <p>태블릿 화면입니다.</p>}
      {isMobile && <p>모바일 화면입니다.</p>}
    </div>
  );
}

export default ResponsiveComponent;
