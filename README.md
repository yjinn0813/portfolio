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
- **기간**: 2024.08.06 ~ 2024.08.10
- **내용**
  - React 기반 개인 포트폴리오 사이트 개발
  - SCSS, MUI를 활용한 UI 구성
  - GSAP ScrollTrigger를 활용한 인터랙션 구현
  - Vercel 배포

### 2차 개선 (Migration & Enhancement)
- **기간**: 2026.02 ~ 진행 중
- **내용**
  - JavaScript → TypeScript 마이그레이션
  - 프로젝트 구조 및 컴포넌트 리팩토링
  - 헤더 고정 및 스크롤 UX 개선
  - To Top 버튼 추가
  - GSAP 스크롤 트리거 안정성 개선

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
| ![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=GreenSock&logoColor=white) | 스크롤 기반 애니메이션 구현 |
| ![Swiper](https://img.shields.io/badge/swiper-6332F6?style=flat-square&logo=swiper&logoColor=white) | 프로젝트 이미지 슬라이드 UI |

### Tooling
| 기술       | 사용 목적                              |
| -------- | ---------------------------------- |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) | 브랜치 전략 기반 버전 관리 (`main / develop`) |
| ![Github](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | 원격 저장소 관리 및 배포 소스 관리 |
| ![VScode](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white) | React + TypeScript 개발 환경 |
| ![eslint](https://img.shields.io/badge/eslint-4B32C3?style=flat-square&logo=eslint&logoColor=white) | 코드 품질 및 규칙 일관성 유지 |
| ![prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black) | 코드 스타일 자동 포맷팅 |

### Deployment
| 플랫폼 | 사용 목적 |
| ------ | ----------------------------- |
| ![vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) | React 애플리케이션 배포 및 CI 기반 자동 배포 |

<br/>

## 💻 주요 기능

- `About` 페이지 : 타이핑 애니메이션, GSAP Scroll Trigger

- Header 호버 언더라인 이벤트, MUI 아이콘, 페이지 라우팅

- `프로젝트` 페이지 : Image Carousel (swiper)

- 모든 페이지 최하단에서 다음 페이지 이동 가능

- 반응형 미디어쿼리 적용

### [**작업일지 확인하기**](https://hjinn0813.tistory.com/101)

<br/>

## 📁 프로젝트 구조

```bash
📦portfolio
 ┣ 📂public
 ┃ ┣ 📂favicon
 ┃ ┃ ┣ 📜apple-touch-icon.png
 ┃ ┃ ┣ 📜favicon-32x32.png
 ┃ ┃ ┗ 📜favicon.ico
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂badges
 ┃ ┃ ┗ 📂projects
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂About
 ┃ ┃ ┃ ┣ 📜About.tsx
 ┃ ┃ ┃ ┗ 📜Typing.tsx
 ┃ ┃ ┣ 📂Contact
 ┃ ┃ ┃ ┗ 📜Contact.tsx
 ┃ ┃ ┣ 📂Education
 ┃ ┃ ┃ ┗ 📜Education.tsx
 ┃ ┃ ┣ 📂Project
 ┃ ┃ ┃ ┣ 📜Project.tsx
 ┃ ┃ ┃ ┗ 📜Projects.json
 ┃ ┃ ┣ 📂Skill
 ┃ ┃ ┃ ┣ 📜Backend.json
 ┃ ┃ ┃ ┣ 📜Control.json
 ┃ ┃ ┃ ┣ 📜Develop.json
 ┃ ┃ ┃ ┣ 📜Frontend.json
 ┃ ┃ ┃ ┣ 📜Library.json
 ┃ ┃ ┃ ┣ 📜Others.json
 ┃ ┃ ┃ ┗ 📜Skill.tsx
 ┃ ┃ ┗ 📂common
 ┃ ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┗ 📜NextBtn.tsx
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
 ┃ ┃ ┃ ┗ 📜NextBtn.scss
 ┃ ┃ ┗ 📜root.scss
 ┃ ┣ 📜App.scss
 ┃ ┣ 📜App.tsx
 ┃ ┗ 📜index.tsx
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json
```
