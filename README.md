# 🌿 Life Balance Planner

<div align="center">

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![AWS Amplify](https://img.shields.io/badge/AWS_Amplify-Deployed-FF9900?style=for-the-badge&logo=awsamplify&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

**생성형 AI를 활용해 구현한 React 기반 인터랙티브 라이프 시뮬레이션 웹 시스템**

[🌐 배포 사이트 바로가기](#) · [📹 Amplify 시연 영상](#) · [🐛 버그 제보](../../issues)

</div>

---

## 📌 프로젝트 소개

**Life Balance Planner**는 사용자가 직업을 선택한 뒤, 매일 행동을 골라 삶의 균형을 직접 관리하는 라이프 시뮬레이션 서비스입니다.

단순 정적 페이지가 아닌, 실시간 상태 변화 · 랜덤 이벤트 · 목표 달성 시스템이 맞물리는 **인터랙티브 웹 경험**을 목표로 개발했습니다.

---

## ✨ 주요 기능

### 1️⃣ 직업 선택 시스템
12가지 직업 중 하나를 골라 나만의 캐릭터로 시작합니다.

| | | | |
|---|---|---|---|
| 👨‍🎓 대학생 | 💼 직장인 | 💻 개발자 | 🎨 디자이너 |
| 📱 크리에이터 | 🚀 창업가 | 👨‍🍳 셰프 | 🩺 의사 |
| 👩‍🏫 교사 | 🎵 뮤지션 | ⚽ 운동선수 | ✈️ 여행가 |

---

### 2️⃣ 상태 기반 라이프 시뮬레이션

행동을 선택할 때마다 5가지 스탯이 실시간으로 변동됩니다.

| 스탯 | 설명 |
|------|------|
| 💰 돈 | 경제적 여유 |
| 🍎 건강 | 체력 및 신체 컨디션 |
| 🌷 멘탈 | 정신적 안정감 |
| 🤍 관계 | 인간관계 및 네트워크 |
| 🌱 성장 | 자기계발 및 커리어 역량 |

---

### 3️⃣ 행동 선택 시스템

직업마다 고유한 행동 메뉴가 제공됩니다. 행동 선택 시 상승·하락 스탯이 미리 표시됩니다.

```
💻 개발자 예시
├── 기능 개발   → 성장 +12 / 멘탈 -6
├── 버그 수정   → 성장 +8  / 건강 -5
├── 코드 리뷰   → 관계 +10 / 시간 -3
└── 밤샘 코딩   → 성장 +20 / 건강 -15 / 멘탈 -10
```

---

### 4️⃣ 랜덤 이벤트 시스템

행동 후 일정 확률로 직업별 특수 이벤트가 발생합니다.

| 직업 | 이벤트 예시 |
|------|------------|
| 💻 개발자 | 운영 서버 장애 발생! |
| 👨‍🎓 대학생 | 장학금 선발 통보 |
| 🚀 창업가 | VC로부터 투자 제안 |
| ⚽ 운동선수 | 결승전 역전 승리! |

---

### 5️⃣ 인생 목표 시스템

직업별 목표가 설정되어 있으며, 조건 달성 시 자동으로 활성화됩니다.

> 예시: 시니어 개발자 성장 · 팬덤 형성 · 투자 유치 성공 · 대표곡 완성

---

### 6️⃣ 다이어리 시스템

매일의 행동과 이벤트가 자동으로 기록됩니다.

```
Day 5 · 💻 새로운 기능을 구현했습니다.
        성장 +12 / 돈 +8 / 멘탈 -6

Day 6 · ⚡ 이벤트: 운영 서버 장애 발생!
        건강 -5 / 멘탈 -12
```

---

### 🎨 직업별 테마 UI

직업에 따라 분위기가 다른 UI가 적용됩니다.

| 직업 | 디자인 컨셉 |
|------|------------|
| 💻 개발자 | 코드 에디터 스타일 |
| ⚽ 운동선수 | 경기장 필드 감성 |
| 👨‍🍳 셰프 | 주방 & 레시피북 스타일 |
| ✈️ 여행가 | 여행 포스터 스타일 |
| 🎵 뮤지션 | 공연 무대 스타일 |

---

## ⚙️ 기술 스택

| 분야 | 기술 |
|------|------|
| Frontend | React 18 |
| 상태 관리 | useState, useMemo |
| 스타일링 | CSS |
| 형상 관리 | Git / GitHub |
| CI/CD | GitHub Actions |
| 배포 | AWS Amplify |

---

## 📂 프로젝트 구조

```
life-balance-planner/
├── public/
├── src/
│   ├── App.js          # 메인 컴포넌트
│   ├── App.css         # 전체 스타일
│   └── index.js
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions CI/CD
├── package.json
└── README.md
```

---

## 🚀 로컬 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm start
# → http://localhost:3000

# 프로덕션 빌드
npm run build
```

---

## ☁️ AWS Amplify 배포

본 프로젝트는 **AWS Amplify**를 통해 자동 배포됩니다.  
GitHub 레포지토리와 연결되어 `main` 브랜치에 Push하면 자동으로 빌드 & 배포됩니다.

### 배포 URL

```
여기에 AWS Amplify URL 입력
```

---

## 🔄 GitHub Actions CI/CD 파이프라인

```
GitHub Push (main)
      ↓
GitHub Actions 트리거
      ↓
npm install → npm run build
      ↓
AWS Amplify 자동 배포
      ↓
✅ 배포 완료
```

**Workflow 파일:** `.github/workflows/deploy.yml`

**사용 Secrets:**

| Secret | 용도 |
|--------|------|
| `AWS_ACCESS_KEY_ID` | AWS 인증 |
| `AWS_SECRET_ACCESS_KEY` | AWS 인증 |
| `AWS_SESSION_TOKEN` | AWS Academy 세션 |

---

## 📹 AWS Amplify 시연 영상

> 아래 링크에서 AWS Amplify를 활용한 배포 과정을 확인할 수 있습니다.

```
여기에 YouTube 영상 링크 입력
```

---

## 🔥 트러블슈팅

<details>
<summary><b>1. React StrictMode 중복 실행 문제</b></summary>

**증상:** Day가 2씩 증가하고 다이어리가 중복 생성됨  
**원인:** StrictMode가 개발 환경에서 상태 업데이트를 두 번 실행  
**해결:** 상태 업데이트 구조 수정 + StrictMode 제거

</details>

<details>
<summary><b>2. 상태값 음수 문제</b></summary>

**증상:** 능력치가 0 아래로 감소  
**해결:**

```js
Math.max(0, value)  // 최솟값 0으로 제한
```

</details>

<details>
<summary><b>3. 랜덤 이벤트 수치 불일치 문제</b></summary>

**증상:** 화면에 표시된 수치와 실제 적용 수치가 다름  
**해결:** 행동 효과와 이벤트 효과를 분리 계산하도록 로직 수정

</details>

---

## 🤖 생성형 AI 활용 내역

본 프로젝트는 생성형 AI의 도움을 받아 개발되었습니다.

- React 컴포넌트 구조 설계
- 상태 관리 로직 구현
- 랜덤 이벤트 시스템 구현
- 직업별 데이터 구조 설계
- CSS UI 디자인 개선
- GitHub Actions `deploy.yml` 작성
- README.md 작성 보조

---

## 📚 배운 점

- React 상태 관리 구조 (`useState`, `useMemo`)
- 조건부 렌더링 및 배열 기반 UI 구성
- 랜덤 이벤트 로직 설계
- GitHub Actions를 활용한 CI/CD 자동화
- AWS Amplify 정적 웹 호스팅 및 배포

---

## 🔮 향후 개선 계획

- [ ] LocalStorage 저장 기능
- [ ] 업적 시스템 고도화
- [ ] 인트로 애니메이션 추가
- [ ] 다크 모드 지원
- [ ] 멀티 엔딩 시스템
- [ ] 캐릭터 이미지 추가

---

<div align="center">

Made with ❤️ using React & AWS Amplify

</div>