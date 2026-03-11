// header

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/common/Header.scss';

import PersonIcon from '@mui/icons-material/Person';
import ConstructionIcon from '@mui/icons-material/Construction';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';


const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0); // 스크롤 위치 저장

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false); // down, hide
      } else {
        setIsVisible(true); // up, show
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isVisible ? "show" : "hide"}`}>
      <div className="nav-content">
        <div className="nav-btn">
          <Link to="/about" className="nav-link">
            <PersonIcon className="nav-icon" />
            <div className="nav-txt">About</div>
          </Link>
        </div>
        <div className="nav-btn">
          <Link to="/skill" className="nav-link">
            <ConstructionIcon className="nav-icon" />
            <div className="nav-txt">Stacks</div>
          </Link>
        </div>
        <div className="nav-btn">
          <Link to="/experience" className="nav-link">
            <SchoolIcon className="nav-icon" />
            <div className="nav-txt">Experience</div>
          </Link>
        </div>
        <div className="nav-btn">
          <Link to="/project" className="nav-link">
            <WorkIcon className="nav-icon" />
            <div className="nav-txt">Projects</div>
          </Link>
        </div>
        <div className="nav-btn">
          <Link to="/contact" className="nav-link">
            <CallIcon className="nav-icon" />
            <div className="nav-txt">Contact</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

// React DevTools에서 forwardRef 컴포넌트 이름 설정
Header.displayName = 'Header';
export default Header;
