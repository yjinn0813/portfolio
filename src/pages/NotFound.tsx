/* 404 페이지 예외처리 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/NotFound.scss';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/about");
  };

  return (
    <div className="notfound">
      <div className="notfound-content">
        <h2 className="notfound-code">404</h2>
        <p className="notfound-title">Oops, Something’s missing!</p>
        <p className="notfound-desc">
          The page you’re looking for doesn’t exist.
        </p>

        <button className="notfound-btn" onClick={handleHome}>
          Go Home
        </button>
      </div>
    </div>
  )
}

export default NotFound
