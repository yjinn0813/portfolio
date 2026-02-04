// header

import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header/Header.scss';

import PersonIcon from '@mui/icons-material/Person';
import ConstructionIcon from '@mui/icons-material/Construction';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';

const Header = forwardRef((props, ref) => {
  return (
    <header ref={ref} className="header">
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
            <div className="nav-txt">Skill</div>
          </Link>
        </div>
        <div className="nav-btn">
          <Link to="/education" className="nav-link">
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
});

export default Header;
