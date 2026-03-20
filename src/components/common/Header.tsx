/* header */

import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/Header.scss';

import PersonIcon from '@mui/icons-material/Person';
import ConstructionIcon from '@mui/icons-material/Construction';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';

// 내비바 데이터 객체화
const navItems = [
  { path: "/about", label: "About", icon: PersonIcon },
  { path: "/skill", label: "Stacks", icon: ConstructionIcon },
  { path: "/experience", label: "Experience", icon: SchoolIcon },
  { path: "/project", label: "Projects", icon: WorkIcon },
  { path: "/contact", label: "Contact", icon: CallIcon },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0); // 스크롤 위치 저장

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // iOS 대응: 최상단이면 무조건 등장
      if (currentScrollY <= 0) {
        setIsVisible(true);
        lastScrollY.current = 0;
        return;
      }

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
        {navItems.map(({ path, label, icon: Icon }) => (
          <div className="nav-btn" key={path}>
            <NavLink to={path} className="nav-link">
              <Icon className="nav-icon" />
              <div className="nav-txt">{label}</div>
            </NavLink>
          </div>
        ))}
      </div>
    </header>
  );
};

// React DevTools에서 forwardRef 컴포넌트 이름 설정
Header.displayName = 'Header';
export default Header;
