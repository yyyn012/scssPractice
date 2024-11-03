import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollTo;

// 화면 이동 시 최상단이 아닌 이전페이지의 스크롤위치와 동일한 위치로 이동되는 것을 막기 위한 함수
