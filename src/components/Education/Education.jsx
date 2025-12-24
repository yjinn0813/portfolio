// 교육이수내역

import React from 'react';
import NextBtn from '../NextBtn';
import '../../styles/Education/Education.scss';

export default function Education() {
  return (
    <div className="edu-inner">
      <div className="edu-title">Experience</div>
      <div className="edu-content">
        <div className="edu-item">
          <div className="edu-time">2024.09 ~</div>
          <div className="attribute">
            Junior Frontend Developer
            <br />
            (growing as a Full-Stack Developer)
          </div>
          <ul className='edu-info hlw'>
            <li>2024.09~12, 할로와 테이블오더 & OMS</li>
            <li>
              2025.01~, 푸딘코 테이블오더
              <ul className='sub-list'>
                <li>socket.io를 이용한 데이터 실시간 공유</li>
                <li>2025.05.26 - 테이블오더 1차 런칭</li>
                <li>2025.07.11 - 테이블오더 2차 런칭 (선/후불 기능)</li>
                {/* <li>2025.10 - 테이블오더 3차 런칭 (로그인/회원가입)</li> */}
              </ul>
            </li>
            <li>2025.10~, 푸딘코 리액트 웹앱</li>
          </ul>
        </div>

        <div className="edu-item">
          <div className="edu-time">2024.07.01 ~ 2024.08.16</div>
          <div className="attribute">
            서울시 뉴딜 일자리 x 이젠아카데미 강남
            <br />
            모던 웹 풀스택 개발자 과정 (290시간)
          </div>
          <ul className="edu-info">
            <li>HTML, CSS, JavaScript, React, SASS 등 개발언어 복습</li>
            <li>TypeScript 심화 학습</li>
            <li>GSAP, Swiper 등 실무에서 많이 쓰이는 라이브러리 학습</li>
            <li>2개의 개인 프로젝트 진행</li>
          </ul>
          <div className="edu-link">
            <button className="opensite">
              <a
                href="https://github.com/hjinn0813/newdeal"
                aria-label="github"
                alt="github"
                target="_blank"
                rel="noopener noreferrer"
                className="edu-btn"
              >
                Check Repo
              </a>
            </button>
          </div>
        </div>
        <div className="edu-item">
          <div className="edu-time">2023.12.27 ~ 2024.05.27</div>
          <div className="attribute">
            서울 청년취업사관학교 x 코딩온
            <br />
            UI/UX 반응형 웹 디자인부터 시작하는 프론트엔드 입문 (354시간)
          </div>
          <ul className="edu-info">
            <li>UI/UX 입문 및 사용자 중심 서비스 기획</li>
            <li>Figma로 반응형 웹 디자인 실습</li>
            <li>개발 환경 설정 (Git, GitHub, VS code)</li>
            <li>
              HTML, CSS, JavaScript, jQuery, Bootstrap 입문 및 퍼블리싱 실습
            </li>
            <li>React, Redux, SASS, TypeScript 입문 및 실습</li>
            <li>3번의 팀 프로젝트 진행</li>
          </ul>
          <div className="edu-link">
            <button className="opensite">
              <a
                href="https://github.com/hjinn0813/SeSAC-GD-3rd"
                aria-label="github"
                alt="github"
                target="_blank"
                rel="noopener noreferrer"
                className="edu-btn"
              >
                Check Repo
              </a>
            </button>
          </div>
        </div>
        <div className="edu-item">
          <div className="edu-time">2023.11.08 ~ 2023.12.13</div>
          <div className="attribute">패스트캠퍼스 - 웹 개발 입문 (30시간)</div>
          <ul className="edu-info">
            <li>개발 환경 설정 (Git, GitHub, VS code)</li>
            <li>HTML, CSS, JavaScript 기초 입문 및 실습</li>
            <li>Netlify를 이용해 웹사이트 배포하기</li>
            <li>간단한 마크다운 문법 이해하기</li>
          </ul>
          <div className="edu-link">
            <button className="opensite">
              <a
                href="https://github.com/hjinn0813/mbti_test"
                aria-label="github"
                alt="github"
                target="_blank"
                rel="noopener noreferrer"
                className="edu-btn"
              >
                실습과제
              </a>
            </button>
            <button className="opensite">
              <a
                href="https://github.com/hjinn0813/namecard"
                aria-label="github"
                alt="github"
                target="_blank"
                rel="noopener noreferrer"
                className="edu-btn"
              >
                최종과제
              </a>
            </button>
          </div>
        </div>
        <div className="edu-item">
          <div className="edu-time">2023.08.30 ~ 2023.10.04</div>
          <div className="attribute">
            패스트캠퍼스 - 포토샵 5주 완성 (30시간)
          </div>
          <ul className="edu-info">
            <li>포토샵 설치, 기본적인 사용법 숙지</li>
            <li>포토샵 기초 툴 사용하기</li>
            <li>포토샵 도구, 메뉴바, 패널 기능 실습</li>
          </ul>
        </div>
      </div>
      <NextBtn to="/project" text="Check Projects 💻" />
    </div>
  );
}
