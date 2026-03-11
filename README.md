# Upgrade web portfolio by React

개인의 기술 스택과 작업 내역 정리를 위해 기획 및 제작한 포트폴리오 사이트입니다. 
<br>코딩 공부 초기에 순수 JS로 만들었던 웹 포트폴리오를 React로 리뉴얼 했습니다.🙂

<br/>

## 💻 배포주소

https://hjinn0813.vercel.app/

https://github.com/hjinn0813/portfolio

<br/>

## 👨‍🏫 프로젝트 소개

### 1차 개발 (Initial Release)
- **기간**: 2024.08.06 ~ 08.10
- **내용**
  - React 기반 개인 포트폴리오 사이트 개발
  - SCSS, MUI를 활용한 UI 구성
  - GSAP ScrollTrigger를 활용한 인터랙션 구현
  - Vercel 배포
- [**작업일지 확인하기**](https://hjinn0813.tistory.com/101)

### 2차 개선 (Migration & Enhancement)
- **기간**: 2026.02.05 ~ 03.11
- **내용**
  - 전체 페이지 UI/UX 리뉴얼
  - 컴포넌트 구조 분리 및 디렉토리 구조 개선
  - JavaScript → TypeScript 마이그레이션
  - CRA → Vite 마이그레이션
  - GitHub Actions 기반 CI 환경 구축

<br/>

## 🛠 사용 기술
### Frontend
| 기술 | 사용 목적 |
|------|----------|
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) | 컴포넌트 기반 SPA 구조 설계 |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | 기존 코드베이스 및 점진적 TS 마이그레이션 |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white) | 타입 안정성 확보 및 유지보수성 개선 |
| ![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=Sass&logoColor=white) | 컴포넌트 단위 스타일 관리 |
| ![MUI](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=MUI&logoColor=white) | 일관된 UI 컴포넌트 사용 |
| ![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white) | 프로젝트 이미지 슬라이드 UI |

### Tooling
| 기술       | 사용 목적                              |
| -------- | ---------------------------------- |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) | 브랜치 전략 기반 버전 관리 (`main / develop`) |
| ![Github](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | 원격 저장소 관리 및 배포 소스 관리 |
| ![VScode](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white) | React + TypeScript 개발 환경 |
| ![eslint](https://img.shields.io/badge/eslint-4B32C3?style=flat-square&logo=eslint&logoColor=white) | 코드 품질 및 규칙 일관성 유지 |
| ![GitHub Actions](https://img.shields.io/badge/Github_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white) | TypeScript 검사 및 ESLint 자동 실행 CI 환경 구축 |

### Deployment
| 플랫폼 | 사용 목적 |
| ------ | ----------------------------- |
| ![vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) | 애플리케이션 자동 빌드 및 배포|

<br/>

## 💻 주요 기능

- Header 호버 언더라인 이벤트 및 페이지 라우팅 구현
- 'About' 페이지에 타이핑 애니메이션 및 Intersection Observer 적용
- 'Experience' 페이지 상세 내용 토글 기능 구현
- 'Project' 페이지 프리뷰 클릭 시 모달 오픈 및 Swiper 기반 Image Carousel 적용
- 모든 페이지에 반응형 미디어쿼리, scroll-to-top 버튼 적용

<br/>

## 📁 프로젝트 구조
```bash
📦portfolio
 ┣ 📂public
 ┃ ┣ 📂favicon
 ┃ ┃ ┣ 📜apple-touch-icon.png
 ┃ ┃ ┣ 📜favicon-32x32.png
 ┃ ┃ ┗ 📜favicon.ico
 ┃ ┣ 📂fonts
 ┃ ┃ ┗ 📜PretendardVariable.woff2
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂badges
 ┃ ┃ ┃ ┣ 📂Backend
 ┃ ┃ ┃ ┣ 📂Develop
 ┃ ┃ ┃ ┣ 📂Frontend
 ┃ ┃ ┃ ┣ 📂Library
 ┃ ┃ ┃ ┣ 📂Others
 ┃ ┃ ┣ 📂contact
 ┃ ┃ ┣ 📂projects
 ┃ ┃ ┃ ┣ 📂personal
 ┃ ┃ ┃ ┣ 📂team
 ┃ ┃ ┃ ┗ 📂work
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂About
 ┃ ┃ ┃ ┣ 📜About.tsx
 ┃ ┃ ┃ ┗ 📜Typing.tsx
 ┃ ┃ ┣ 📂Contact
 ┃ ┃ ┃ ┣ 📜Contact.tsx
 ┃ ┃ ┃ ┗ 📜ContactCard.tsx
 ┃ ┃ ┣ 📂Experience
 ┃ ┃ ┃ ┣ 📜Experience.json
 ┃ ┃ ┃ ┣ 📜Experience.tsx
 ┃ ┃ ┃ ┗ 📜ExperienceCard.tsx
 ┃ ┃ ┣ 📂Project
 ┃ ┃ ┃ ┣ 📜Project.tsx
 ┃ ┃ ┃ ┣ 📜ProjectCard.tsx
 ┃ ┃ ┃ ┣ 📜ProjectPreview.tsx
 ┃ ┃ ┃ ┗ 📜Projects.json
 ┃ ┃ ┣ 📂Skill
 ┃ ┃ ┃ ┣ 📜Backend.json
 ┃ ┃ ┃ ┣ 📜Develop.json
 ┃ ┃ ┃ ┣ 📜Frontend.json
 ┃ ┃ ┃ ┣ 📜Library.json
 ┃ ┃ ┃ ┣ 📜Others.json
 ┃ ┃ ┃ ┣ 📜Skill.tsx
 ┃ ┃ ┃ ┗ 📜SkillArea.tsx
 ┃ ┃ ┗ 📂common
 ┃ ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┣ 📜NextBtn.tsx
 ┃ ┃ ┃ ┗ 📜TopBtn.tsx
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂About
 ┃ ┃ ┃ ┣ 📜About.scss
 ┃ ┃ ┃ ┗ 📜Typing.scss
 ┃ ┃ ┣ 📂Contact
 ┃ ┃ ┃ ┗ 📜Contact.scss
 ┃ ┃ ┣ 📂Education
 ┃ ┃ ┃ ┗ 📜Education.scss
 ┃ ┃ ┣ 📂Project
 ┃ ┃ ┃ ┗ 📜Project.scss
 ┃ ┃ ┣ 📂Skill
 ┃ ┃ ┃ ┗ 📜Skill.scss
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📜Footer.scss
 ┃ ┃ ┃ ┣ 📜Header.scss
 ┃ ┃ ┃ ┣ 📜NextBtn.scss
 ┃ ┃ ┃ ┗ 📜TopBtn.scss
 ┃ ┃ ┗ 📜root.scss
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜experience.ts
 ┃ ┃ ┣ 📜projects.ts
 ┃ ┃ ┗ 📜skills.ts
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜global.d.ts
 ┃ ┗ 📜main.tsx
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜tsconfig.json
 ┗ 📜vite.config.ts
```
