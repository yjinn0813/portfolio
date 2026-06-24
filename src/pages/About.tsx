// about, intro

import React, { useEffect, useRef } from 'react';
import Typing from '../components/About/Typing';
import NextBtn from '../components/common/NextBtn';
import '../styles/pages/About.scss';

const About: React.FC = () => {
  const descriptRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!descriptRef.current) return;
    
    const philosophyEl = descriptRef.current.querySelector('.philosophy') as HTMLElement | null;

    if (philosophyEl) {
      const observer = new IntersectionObserver(
        (entries, observerInstance) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              philosophyEl.classList.add('show');
              observerInstance.unobserve(philosophyEl); // once 효과
            }
          });
        },
        {
          threshold: 0.2, // 20% 보이면 실행
        }
      );

      observer.observe(philosophyEl);

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="intro-inner">
      <div className="intro">
        <Typing />
      </div>
      <div className="descript" ref={descriptRef}>
        <div className='dc-info'>
          <div className="paragraph">
            직장보다 직업을 갖기 위해 배우기 시작한 코딩에 흥미를 느끼며, 개발자의 길을 선택했습니다.
            <br/>
            다양한 프로젝트를 경험하며, 문제를 해결하고 서비스를 만들어가는 과정에 매력을 느꼈습니다.
            <br/>
            배움을 즐기는 성향으로, 새로운 기술과 어려운 문제도 ‘성장의 기회’로 받아들입니다.
          </div>

          <div className="paragraph">
            팀워크가 좋은 결과물을 만든다고 믿기에, 적극적인 소통을 중요하게 생각합니다. 
            <br/>
            실무에서는 일정이 촉박한 상황에서도 서비스 안정화를 최우선으로 삼았으며, 장애 발생 시 동료와 함께 원인을 분석하고 해결 방향을 기록하며 대응했습니다.
            <br/>
            또한 협업과 유지보수를 고려하여 구현 의도와 맥락을 코드에 기록하고, 작업 내용을 체계적으로 정리하며 우선순위를 관리합니다.
          </div>

          <div className="paragraph">
            저는 늘 인간의 삶에 이로운 서비스를 만드는 것에 스스로의 능력이 쓰일 수 있기를 바랍니다.
            <br />
            앞으로도 단순히 주어진 기능을 구현하는 것에 그치지 않고, 사용자와 팀 모두에게 긍정적인 영향을 주는 개발자가 되고 싶습니다.
          </div>
        </div>
        
        <>
          <div className='terminal philosophy'>
            <div className="terminal-header">
              <div className="dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="terminal-title">Work Philosophy</div>
            </div>
            <div className="terminal-body">
              <p>Work Philosophy</p>
              <ul>
                <li>💡 “코드를 쓰는” 사람이 아니라, “문제를 해결하는” 사람</li>
                <li>🔍 로직의 실행 원리와 흐름을 항상 궁금해하는 사람</li> 
                <li>📈 매일 꾸준히, 회사와 함께 성장하는 사람</li> 
                <li>✨ 유저에게 편리한 UX를 제공하여 회사의 매출에 기여하는 사람</li>
              </ul>
            </div>
          </div>
        </>
      </div>
      <NextBtn to="/skill" text="Check my stacks 👀" />
    </div>
  );
}

export default About;