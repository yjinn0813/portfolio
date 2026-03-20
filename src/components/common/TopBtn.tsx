/* 최상단 자동스크롤 버튼 */
import React, { useState, useEffect } from 'react';
import '../../styles/components/TopBtn.scss';

const TopBtn: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(false);

  // 스크롤시 등장 타이밍 제어
  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight / 2;
      setIsShow(window.scrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 푸터 감지
  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <button className={`top-btn 
        ${isShow ? "show" : ""}
        ${isFooterVisible ? "footer-visible" : ""}
      `} 
      onClick={handleTop}
    >↑</button>
  )
}

export default TopBtn;
