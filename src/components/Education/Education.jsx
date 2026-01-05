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
            <li>
              2024.09~12, 할로와 테이블오더 & OMS
              <ul className='sub-list'>
                <li>기술스택: PHP, HTML, CSS, JavaScript, JQuery, Figma</li>
                <li>기존 레포 코드 분석 및 오류 수정</li>
                <li>OMS 리뉴얼 관련 목업 제작(Figma) 및 React로 연습 구현</li>
              </ul>
            </li>
            <li>
              2024.09~, 펫벨업 자사몰 (외주)
              <ul className='sub-list'>
                <li>기술스택: PHP, HTML, CSS, JavaScript, Figma, Filezilla</li>
                <li>Figma 목업 제작 및 퍼블리싱 진행</li>
                <li>Filezilla를 통한 서버 배포 경험, SSH 접속 학습</li>
                <li>프로젝트 장기 참여로 유지보수 및 소규모 기능 개선 경험</li>
                <li>간단한 PHP 로직 작성 경험으로, 풀스택 감각 보유</li>
              </ul>
            </li>
            <li>
              2025.01~, 푸딘코 테이블오더
              <ul className='sub-list'>
                <li>기술스택: PHP, CSS, JavaScript, JQuery, Socket.io</li>
                <li>2025.05.26 - 테이블오더 1차 런칭</li>
                <li>2025.07.11 - 테이블오더 2차 런칭 (선/후불 기능)</li>
                {/* <li>3차 런칭 준비중: POS 추가, 로그인/회원가입/포인트 사용 기능 개발</li> */}
                <li>Socket.io를 이용한 데이터 실시간 공유 적용</li>
                <li>간단한 PHP 로직 직접 작성, DB 쿼리 작성 및 확인 경험</li>
                <li>팀과 협업하며 서비스 운영 경험 강화</li>
              </ul>
            </li>
            <li>
              2025.10~, 푸딘코 리액트 웹앱
              <ul className='sub-list'>
                <li>기술스택: React, TypeScript, Vite, Zustand, React Query (TanStack Query), Axios, Tailwind</li>
                <li>레포 구조 및 기술 스택 초기 기획 주도</li>
                <li>Zustand를 활용한 로그인 상태 관리 및 API 호출 최적화</li>
                <li>React Query (TanStack Query), Axios 활용 데이터 패칭 및 오류 처리</li>
                <li>AWS Apache 서버 배포 및 htaccess 라우팅 문제 해결</li>
              </ul>
            </li>
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
