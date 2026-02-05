// 다음 페이지 이동 버튼

import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/common/NextBtn.scss';

export default function NextBtn({ to, text }) {
  return (
    <div className="move-btn" style={styles.moveBtn}>
      <Link to={to} style={styles.moveLink} className="move-link">
        {text}
        <span style={styles.arrowContainer}>
          <span
            className="moving-arrow"
            style={{ ...styles.arrow, ...styles.firstArrow }}
          ></span>
          <span
            className="moving-arrow"
            style={{ ...styles.arrow, ...styles.secondArrow }}
          ></span>
        </span>
      </Link>
    </div>
  );
}

// arrow style
const styles = {
  arrowContainer: {
    display: 'flex',
    marginLeft: '16px',
  },
  arrow: {
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
    borderLeft: '15px solid gray',
    marginLeft: '-5px',
    animation: 'move 1s ease-in-out infinite',
  },
  firstArrow: {
    animationDelay: '0.2s',
  },
  secondArrow: {
    animationDelay: '0.7s',
  },
};

// @keyframes
const styleSheet = document.styleSheets[0];

const keyframes = `
  @keyframes move {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(10px);
      opacity: 0;
    }
  }
`;

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
