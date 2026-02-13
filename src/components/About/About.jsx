// about, intro

import React, { useEffect, useRef } from 'react';
import Typing from './Typing';
import NextBtn from '../common/NextBtn';
import '../../styles/About/About.scss';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const descriptRef = useRef(null);

  useEffect(() => {
    const philosophyEl = descriptRef.current.querySelector('.philosophy');

    if (philosophyEl) {
      gsap.fromTo(
        philosophyEl,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: philosophyEl,
            start: 'top 100%',
            end: 'bottom 0%',
            toggleActions: 'play none none none',
            scrub: 2,
          },
        }
      );
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
            직장보다 직업을 가져야한다고 생각하여 배우기 시작한 코딩에 흥미가
            생겼고, <br />
            다양한 프로젝트를 경험하며 개발자를 꿈꾸게 되었습니다.
          </div>

          <div className="paragraph">
            배움을 즐기는 성향으로, 어려운 문제도 '배움의 기회'로 생각하며 즐겁게 해결합니다.
            <br />
            개인과 팀이 함께 성장할 수 있도록 팀 단합을 돕는 역할을 선호합니다.
            <br />
            좋은 결과물은 팀워크에서 나온다고 믿기에 팀원들과 적극적으로 소통하며 협업했습니다.
          </div>

          <div className="paragraph">
            업무를 진행할 때는 작업 상황을 체계적으로 정리하여 우선순위를 관리합니다.  
            <br />
            코드 작성 시 구현 의도와 맥락을 주석으로 기록하여, 
            <br />
            다른 팀원이나 미래의 제가 코드를 쉽게 이해할 수 있도록 관리합니다.  
            <br />
            이러한 과정을 통해 계획적 문제 해결, 협업 능력, 유지보수 관점에서의 책임감을 배웠습니다.
          </div>

          <div className="paragraph">
            프론트엔드 개발자로서 단순히 기능을 구현하는 것에 그치지 않고,
            <br />
            사용자에게 더 편리한 화면 구성과 흐름은 무엇일지 지속적으로 고민합니다. 
            <br />
            실무에서는 일정이 촉박한 상황에서도 서비스 안정화를 목표로 삼고,
            <br />
            문제 상황이 발생하면 동료와 함께 원인을 분석하고 해결 방향을 기록하며 즉시 대응했습니다.
          </div>
          
          <div className="paragraph">
            저는 늘 인간의 삶에 이로운 서비스를 만드는 것에 스스로의 능력이 쓰일 수 있기를 바랐습니다.
            <br />
            앞으로도 단순히 주어진 기능을 구현하는 것에 그치지 않고, 
            <br />
            사용자와 팀 모두에게 긍정적인 영향을 주는 개발자가 되고 싶습니다.
          </div>
        </div>
        
        <div className='philosophy'>
          <h2 className='title'>Work Philosophy</h2>
          <ul>
            <li>💡 “코드를 쓰는” 사람이 아니라, “문제를 해결하는” 사람</li>
            <li>🔍 로직의 실행 원리와 흐름을 항상 궁금해하는 사람</li> 
            <li>📈 매일 꾸준히, 회사와 함께 성장하는 사람</li> 
            <li>✨ 유저에게 편리한 UX를 제공하여 회사의 매출에 기여하는 사람</li>
          </ul>
        </div>
      </div>
      <NextBtn to="/skill" text="Check my stacks 👀" />
    </div>
  );
}
