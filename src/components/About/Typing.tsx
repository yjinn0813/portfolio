// 타이핑 애니메이션 컴포넌트

import React, { useState, useEffect } from 'react';
import '../../styles/About/Typing.scss';

const Typing: React.FC = () => {
  const content =
    '안녕하세요! \n주니어 프론트엔드 개발자, \n조유진입니다. :) ';

  const [isAdding, setIsAdding] = useState(true);
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const typingInterval = setInterval(() => {
      if (isAdding) {
        if (index < content.length) {
          setDisplayText(content.slice(0, index + 1));
          setIndex(prev => prev + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 1500);
          setIsAdding(false);
        }
      } else {
        if (index > 0) {
          setDisplayText(content.slice(0, index - 1));
          setIndex(prev => prev - 1);
        } else {
          setIsAdding(true);
          setIndex(0);
        }
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [index, isAdding, isPaused, content]);

  return <div className="greeting">{displayText}</div>;
};

export default Typing;
