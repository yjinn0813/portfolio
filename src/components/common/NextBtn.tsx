import { Link } from 'react-router-dom';
import { CSSProperties, useEffect } from 'react';
import '../../styles/components/NextBtn.scss';

interface NextBtnProps {
  to: string;
  text: string;
}

export default function NextBtn({ to, text }: NextBtnProps) {
  useEffect(() => {
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

    if (styleSheet) {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
  }, []);

  return (
    <div className="move-btn">
      <Link to={to} style={styles.moveLink} className="move-link">
        {text}
        <span style={styles.arrowContainer}>
          <span
            className="moving-arrow"
            style={{ ...styles.arrow, ...styles.firstArrow }}
          />
          <span
            className="moving-arrow"
            style={{ ...styles.arrow, ...styles.secondArrow }}
          />
        </span>
      </Link>
    </div>
  );
}

// 스타일 타입 지정
const styles: Record<string, CSSProperties> = {
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
  moveLink: {},
};
