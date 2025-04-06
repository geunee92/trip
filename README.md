# ✈️ 숙박 웹 어플리케이션

Vite + TypeScript + Emotion을 기반으로 만든 **숙박 웹 애플리케이션**입니다.  
React Query와 Jotai를 활용한 상태 관리, Firebase 기반의 백엔드로  
**빠르고 유연한 사용자 경험**을 제공합니다.

## 📦 주요 기술 스택

| 영역       | 기술                       |
| ---------- | -------------------------- |
| 프론트엔드 | Vite, React, TypeScript    |
| 스타일링   | Emotion (css-in-js)        |
| 상태 관리  | React Query, Jotai         |
| 백엔드     | Firebase (Auth, Firestore) |
| 기타 도구  | ESLint, Prettier           |

## 🧩 주요 기능

- 숙박 리스트
- 숙박 상세페이지(이미지 캐러셀, 객실 리스트, Map, 추천 상품)
- 카카오톡 공유하기
- 호텔 찜하기
- 호텔 예약하기

## 🛠️ 설치 및 실행 방법

```bash
# 1. Yarn Berry (Zero-Install) 환경이므로 별도의 의존성 설치가 필요 없습니다.
# `.yarn/cache`와 `.pnp.cjs` 등이 이미 포함되어 있어 바로 실행 가능합니다.

# 2. Firebase 설정 추가
# 프로젝트 루트에 .env 파일을 생성하고 다음을 입력
# (.env.example 파일 참고)
VITE_APP_API_KEY=your_api_key
VITE_APP_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_APP_PROJECT_ID=your_project_id
VITE_APP_STORAGE_BUCKET=your_project.appspot.com
VITE_APP_MESSAGING_SENDER_ID=your_messaging_id
VITE_APP_APP_ID=your_app_id

# 3. 개발 서버 실행
yarn dev
```
