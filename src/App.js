import React, { useMemo, useState } from "react";
import "./App.css";

const characters = [
  {
    id: "student",
    theme: "theme-student",
    visual: "campus",
    emoji: "🎓",
    name: "대학생",
    title: "꿈 많은 캠퍼스 라이프",
    desc: "돈은 부족하지만 성장 가능성이 높습니다.",
    money: 35,
    health: 75,
    mental: 65,
    relation: 70,
    growth: 50,
  },
  {
    id: "office",
    theme: "theme-office",
    visual: "office",
    emoji: "💼",
    name: "직장인",
    title: "안정적인 회사 생활",
    desc: "안정적인 월급이 장점이지만 스트레스 관리가 중요합니다.",
    money: 70,
    health: 55,
    mental: 45,
    relation: 50,
    growth: 55,
  },
  {
    id: "developer",
    theme: "theme-developer",
    visual: "code",
    emoji: "💻",
    name: "개발자",
    title: "끝없는 디버깅의 삶",
    desc: "높은 성장성과 수입을 가졌지만 번아웃 위험이 있습니다.",
    money: 75,
    health: 45,
    mental: 40,
    relation: 40,
    growth: 85,
  },
  {
    id: "designer",
    theme: "theme-designer",
    visual: "design",
    emoji: "🎨",
    name: "디자이너",
    title: "감각적인 크리에이티브",
    desc: "창의적인 작업을 하지만 마감 스트레스가 있습니다.",
    money: 55,
    health: 60,
    mental: 55,
    relation: 70,
    growth: 75,
  },
  {
    id: "creator",
    theme: "theme-creator",
    visual: "studio",
    emoji: "🎬",
    name: "크리에이터",
    title: "자유로운 콘텐츠 라이프",
    desc: "행복도는 높지만 수입 변동이 큽니다.",
    money: 45,
    health: 60,
    mental: 70,
    relation: 75,
    growth: 65,
  },
  {
    id: "startup",
    theme: "theme-startup",
    visual: "business",
    emoji: "🚀",
    name: "창업가",
    title: "성공과 실패의 경계",
    desc: "높은 리스크와 높은 성장 가능성을 가진 삶입니다.",
    money: 50,
    health: 45,
    mental: 50,
    relation: 55,
    growth: 90,
  },
  {
    id: "chef",
    theme: "theme-chef",
    visual: "kitchen",
    emoji: "👨‍🍳",
    name: "셰프",
    title: "뜨거운 주방의 하루",
    desc: "체력 소모가 크지만 만족감이 높은 직업입니다.",
    money: 60,
    health: 50,
    mental: 55,
    relation: 65,
    growth: 60,
  },
  {
    id: "doctor",
    theme: "theme-doctor",
    visual: "medical",
    emoji: "🩺",
    name: "의사",
    title: "누군가를 살리는 삶",
    desc: "수입은 높지만 정신적 피로도가 큽니다.",
    money: 90,
    health: 45,
    mental: 35,
    relation: 40,
    growth: 80,
  },
  {
    id: "teacher",
    theme: "theme-teacher",
    visual: "classroom",
    emoji: "📚",
    name: "교사",
    title: "학생들과 함께 성장",
    desc: "보람은 크지만 체력과 멘탈 관리가 필요합니다.",
    money: 55,
    health: 60,
    mental: 50,
    relation: 80,
    growth: 65,
  },
  {
    id: "musician",
    theme: "theme-musician",
    visual: "stage",
    emoji: "🎵",
    name: "뮤지션",
    title: "감성적인 예술가",
    desc: "감정 기복이 크지만 행복도가 높은 삶입니다.",
    money: 40,
    health: 65,
    mental: 70,
    relation: 75,
    growth: 60,
  },
  {
    id: "athlete",
    theme: "theme-athlete",
    visual: "sports",
    emoji: "⚽",
    name: "운동선수",
    title: "한계를 뛰어넘는 도전",
    desc: "건강은 높지만 부상 위험이 존재합니다.",
    money: 65,
    health: 90,
    mental: 60,
    relation: 50,
    growth: 70,
  },
  {
    id: "traveler",
    theme: "theme-traveler",
    visual: "travel",
    emoji: "✈️",
    name: "여행가",
    title: "세계를 떠도는 삶",
    desc: "자유롭고 행복하지만 재정 관리가 어렵습니다.",
    money: 35,
    health: 70,
    mental: 85,
    relation: 65,
    growth: 75,
  },
];

const schedulesByJob = {
  student: [
    { name: "강의 듣기", icon: "🏫", effect: { growth: 10, mental: -3 }, text: "수업을 들으며 전공 지식을 쌓았습니다." },
    { name: "과제하기", icon: "📝", effect: { growth: 12, mental: -8, health: -3 }, text: "과제를 끝냈지만 조금 지쳤습니다." },
    { name: "동아리 활동", icon: "🎈", effect: { relation: 12, mental: 5, money: -3 }, text: "동아리에서 사람들과 친해졌습니다." },
    { name: "알바하기", icon: "💸", effect: { money: 14, health: -6, mental: -5 }, text: "아르바이트로 돈을 벌었습니다." },
    { name: "시험공부", icon: "📚", effect: { growth: 15, mental: -10, health: -4 }, text: "시험을 대비해 집중해서 공부했습니다." },
    { name: "친구와 카페", icon: "☕", effect: { relation: 10, mental: 7, money: -7 }, text: "친구와 대화하며 기분이 좋아졌습니다." },
  ],
  office: [
    { name: "업무 처리", icon: "💼", effect: { money: 10, mental: -5, health: -3 }, text: "오늘의 업무를 처리했습니다." },
    { name: "회의 참석", icon: "📊", effect: { growth: 5, mental: -6, relation: 4 }, text: "회의에서 의견을 나누었습니다." },
    { name: "야근하기", icon: "🌙", effect: { money: 8, mental: -12, health: -8 }, text: "야근으로 업무를 마쳤지만 피로가 쌓였습니다." },
    { name: "점심 네트워킹", icon: "🍱", effect: { relation: 9, mental: 3, money: -5 }, text: "동료와 식사하며 관계를 다졌습니다." },
    { name: "퇴근 후 휴식", icon: "🛋️", effect: { health: 8, mental: 10, growth: -2 }, text: "퇴근 후 충분히 쉬었습니다." },
    { name: "자격증 공부", icon: "📖", effect: { growth: 12, mental: -6 }, text: "커리어 성장을 위해 공부했습니다." },
  ],
  developer: [
    { name: "기능 개발", icon: "💻", effect: { growth: 12, money: 8, mental: -6 }, text: "새로운 기능을 구현했습니다." },
    { name: "버그 수정", icon: "🐛", effect: { growth: 8, mental: -8 }, text: "오래된 버그를 해결했습니다." },
    { name: "코드 리뷰", icon: "🔍", effect: { growth: 7, relation: 5, mental: -3 }, text: "팀원과 코드 품질을 개선했습니다." },
    { name: "기술 블로그 작성", icon: "✍️", effect: { growth: 10, relation: 4, mental: 3 }, text: "배운 내용을 정리했습니다." },
    { name: "밤샘 코딩", icon: "🌃", effect: { growth: 15, health: -12, mental: -10 }, text: "밤늦게까지 코딩했습니다." },
    { name: "산책하며 리프레시", icon: "🚶", effect: { health: 8, mental: 10 }, text: "산책하며 머리를 식혔습니다." },
  ],
  designer: [
    { name: "시안 제작", icon: "🎨", effect: { growth: 12, mental: -5 }, text: "새로운 디자인 시안을 만들었습니다." },
    { name: "레퍼런스 조사", icon: "🖼️", effect: { growth: 8, mental: 3 }, text: "좋은 디자인 사례를 참고했습니다." },
    { name: "클라이언트 피드백", icon: "💬", effect: { relation: 6, mental: -8, growth: 5 }, text: "피드백을 반영하며 개선했습니다." },
    { name: "포트폴리오 정리", icon: "📁", effect: { growth: 10, mental: 4 }, text: "작업물을 보기 좋게 정리했습니다." },
    { name: "전시회 관람", icon: "🖌️", effect: { growth: 8, mental: 8, money: -8 }, text: "전시회에서 영감을 얻었습니다." },
    { name: "마감 작업", icon: "⏰", effect: { money: 10, mental: -12, health: -5 }, text: "마감에 맞춰 작업을 끝냈습니다." },
  ],
  creator: [
    { name: "영상 촬영", icon: "🎥", effect: { growth: 10, mental: -4, money: 4 }, text: "새 콘텐츠 촬영을 진행했습니다." },
    { name: "영상 편집", icon: "✂️", effect: { growth: 12, mental: -8, health: -4 }, text: "영상 편집에 집중했습니다." },
    { name: "댓글 소통", icon: "💬", effect: { relation: 10, mental: 5 }, text: "구독자들과 소통했습니다." },
    { name: "콘텐츠 기획", icon: "🧠", effect: { growth: 9, mental: -3 }, text: "다음 콘텐츠 아이디어를 정리했습니다." },
    { name: "라이브 방송", icon: "📡", effect: { relation: 12, money: 8, mental: -7 }, text: "라이브 방송으로 팬들과 만났습니다." },
    { name: "하루 쉬기", icon: "🌿", effect: { health: 9, mental: 12, growth: -3 }, text: "번아웃을 막기 위해 쉬었습니다." },
  ],
  startup: [
    { name: "투자자 미팅", icon: "🤝", effect: { money: 12, relation: 8, mental: -8 }, text: "투자자와 사업 가능성을 논의했습니다." },
    { name: "사업계획서 작성", icon: "📄", effect: { growth: 12, mental: -7 }, text: "사업 방향을 문서로 정리했습니다." },
    { name: "고객 인터뷰", icon: "🎙️", effect: { growth: 10, relation: 6, mental: -3 }, text: "고객의 문제를 직접 들었습니다." },
    { name: "제품 개선", icon: "🛠️", effect: { growth: 14, money: -5, mental: -6 }, text: "서비스를 개선했습니다." },
    { name: "팀 회의", icon: "👥", effect: { relation: 10, growth: 5, mental: -4 }, text: "팀원들과 방향을 맞췄습니다." },
    { name: "리스크 점검", icon: "📉", effect: { mental: 5, growth: 6 }, text: "위험 요소를 미리 점검했습니다." },
  ],
  chef: [
    { name: "신메뉴 개발", icon: "🍽️", effect: { growth: 12, mental: 4, money: -5 }, text: "새로운 메뉴를 실험했습니다." },
    { name: "주방 근무", icon: "👨‍🍳", effect: { money: 10, health: -8, mental: -4 }, text: "바쁜 주방에서 일했습니다." },
    { name: "재료 손질", icon: "🥕", effect: { growth: 5, health: -3 }, text: "정성스럽게 재료를 준비했습니다." },
    { name: "손님 응대", icon: "🍷", effect: { relation: 9, mental: -3, money: 5 }, text: "손님에게 좋은 서비스를 제공했습니다." },
    { name: "요리 연구", icon: "📚", effect: { growth: 10, mental: 3 }, text: "새로운 조리법을 공부했습니다." },
    { name: "충분한 휴식", icon: "🛌", effect: { health: 12, mental: 8 }, text: "체력을 회복했습니다." },
  ],
  doctor: [
    { name: "진료하기", icon: "🩺", effect: { money: 12, relation: 5, mental: -7 }, text: "환자를 진료했습니다." },
    { name: "응급 대응", icon: "🚑", effect: { growth: 10, mental: -12, health: -5 }, text: "응급 상황에 대응했습니다." },
    { name: "논문 읽기", icon: "📑", effect: { growth: 12, mental: -4 }, text: "최신 의학 정보를 공부했습니다." },
    { name: "환자 상담", icon: "💬", effect: { relation: 10, mental: -5 }, text: "환자와 충분히 상담했습니다." },
    { name: "컨퍼런스 참석", icon: "🏥", effect: { growth: 10, relation: 6, money: -6 }, text: "의료 컨퍼런스에 참석했습니다." },
    { name: "휴식 취하기", icon: "🌙", effect: { health: 10, mental: 12 }, text: "긴장을 풀고 회복했습니다." },
  ],
  teacher: [
    { name: "수업 준비", icon: "📘", effect: { growth: 9, mental: -4 }, text: "학생들을 위한 수업을 준비했습니다." },
    { name: "수업 진행", icon: "🏫", effect: { relation: 8, growth: 6, health: -4 }, text: "학생들과 수업을 진행했습니다." },
    { name: "상담하기", icon: "💬", effect: { relation: 12, mental: -5 }, text: "학생 상담을 진행했습니다." },
    { name: "시험 채점", icon: "📝", effect: { money: 4, mental: -8, health: -3 }, text: "시험지를 채점했습니다." },
    { name: "교육 자료 제작", icon: "🧾", effect: { growth: 10, mental: -4 }, text: "수업 자료를 만들었습니다." },
    { name: "독서하기", icon: "📖", effect: { growth: 7, mental: 6 }, text: "책을 읽으며 재충전했습니다." },
  ],
  musician: [
    { name: "작곡하기", icon: "🎹", effect: { growth: 12, mental: 4 }, text: "새로운 멜로디를 만들었습니다." },
    { name: "공연하기", icon: "🎤", effect: { money: 10, relation: 10, health: -6 }, text: "무대에서 공연했습니다." },
    { name: "연습하기", icon: "🎸", effect: { growth: 14, health: -4, mental: -3 }, text: "실력을 위해 반복 연습했습니다." },
    { name: "음원 업로드", icon: "🎧", effect: { relation: 8, money: 6, mental: -4 }, text: "새 음원을 공개했습니다." },
    { name: "영감 찾기", icon: "🌌", effect: { mental: 10, growth: 5, money: -4 }, text: "새로운 영감을 얻었습니다." },
    { name: "휴식하기", icon: "🛋️", effect: { health: 9, mental: 9 }, text: "잠시 쉬며 감정을 정리했습니다." },
  ],
  athlete: [
    { name: "체력 훈련", icon: "🏋️", effect: { health: 12, growth: 8, mental: -4 }, text: "강도 높은 체력 훈련을 했습니다." },
    { name: "전술 훈련", icon: "📋", effect: { growth: 12, relation: 5, mental: -3 }, text: "팀 전술을 익혔습니다." },
    { name: "경기 출전", icon: "🏟️", effect: { money: 10, relation: 7, health: -8, mental: -5 }, text: "경기에 출전해 경험을 쌓았습니다." },
    { name: "부상 회복", icon: "🧊", effect: { health: 14, mental: 4, growth: -2 }, text: "컨디션 회복에 집중했습니다." },
    { name: "식단 관리", icon: "🥗", effect: { health: 10, mental: -2, money: -5 }, text: "경기력을 위해 식단을 관리했습니다." },
    { name: "팬 미팅", icon: "👏", effect: { relation: 12, mental: 8, money: 3 }, text: "팬들과 만나 에너지를 얻었습니다." },
  ],
  traveler: [
    { name: "도시 탐방", icon: "🗺️", effect: { growth: 8, mental: 8, money: -8 }, text: "새로운 도시를 걸으며 경험을 쌓았습니다." },
    { name: "항공권 예약", icon: "✈️", effect: { mental: 5, money: -12 }, text: "다음 여행지를 예약했습니다." },
    { name: "여행 기록 작성", icon: "📔", effect: { growth: 8, mental: 6 }, text: "여행의 순간을 기록했습니다." },
    { name: "현지인과 교류", icon: "🌍", effect: { relation: 12, growth: 7, mental: 4 }, text: "현지 사람들과 대화했습니다." },
    { name: "사진 촬영", icon: "📷", effect: { growth: 6, mental: 8, money: -3 }, text: "아름다운 장면을 사진으로 남겼습니다." },
    { name: "숙소에서 휴식", icon: "🏨", effect: { health: 10, mental: 8, money: -5 }, text: "숙소에서 체력을 회복했습니다." },
  ],
};

const goalsByJob = {
  student: [
    { id: "gpa", label: "학점 관리 성공", key: "growth", value: 85 },
    { id: "friend", label: "좋은 대학 친구 만들기", key: "relation", value: 85 },
    { id: "mental", label: "시험기간 멘탈 유지", key: "mental", value: 80 },
    { id: "money", label: "알바로 생활비 확보", key: "money", value: 75 },
    { id: "health", label: "밤샘 없이 건강 유지", key: "health", value: 80 },
    { id: "future", label: "진로 준비 시작", key: "growth", value: 90 },
  ],

  office: [
    { id: "promotion", label: "승진 후보 되기", key: "growth", value: 85 },
    { id: "salary", label: "자산 안정화", key: "money", value: 85 },
    { id: "burnout", label: "번아웃 없이 버티기", key: "mental", value: 75 },
    { id: "network", label: "회사 내 신뢰 쌓기", key: "relation", value: 80 },
    { id: "health", label: "퇴근 후 건강 관리", key: "health", value: 75 },
    { id: "career", label: "커리어 역량 강화", key: "growth", value: 90 },
  ],

  developer: [
    { id: "senior", label: "시니어 개발자 성장", key: "growth", value: 90 },
    { id: "money", label: "고수익 개발자 되기", key: "money", value: 90 },
    { id: "health", label: "거북목 없이 살아남기", key: "health", value: 75 },
    { id: "team", label: "팀 코드 리뷰 신뢰 얻기", key: "relation", value: 75 },
    { id: "mental", label: "장애 대응 멘탈 유지", key: "mental", value: 75 },
    { id: "portfolio", label: "대표 프로젝트 완성", key: "growth", value: 95 },
  ],

  designer: [
    { id: "portfolio", label: "포트폴리오 완성", key: "growth", value: 88 },
    { id: "client", label: "클라이언트 신뢰 확보", key: "relation", value: 85 },
    { id: "creative", label: "창작 번아웃 방지", key: "mental", value: 80 },
    { id: "income", label: "디자인 수익 안정화", key: "money", value: 75 },
    { id: "health", label: "마감 중 건강 유지", key: "health", value: 75 },
    { id: "brand", label: "나만의 디자인 스타일 구축", key: "growth", value: 92 },
  ],

  creator: [
    { id: "fans", label: "팬덤 형성", key: "relation", value: 90 },
    { id: "brand", label: "개인 브랜드 성장", key: "growth", value: 85 },
    { id: "income", label: "콘텐츠 수익 안정화", key: "money", value: 80 },
    { id: "mental", label: "악플에도 멘탈 유지", key: "mental", value: 80 },
    { id: "health", label: "촬영 일정 속 건강 유지", key: "health", value: 75 },
    { id: "viral", label: "대표 콘텐츠 만들기", key: "growth", value: 92 },
  ],

  startup: [
    { id: "funding", label: "투자 유치 성공", key: "money", value: 90 },
    { id: "product", label: "제품 시장 적합성 확보", key: "growth", value: 92 },
    { id: "team", label: "강한 팀워크 만들기", key: "relation", value: 85 },
    { id: "mental", label: "대표 멘탈 유지", key: "mental", value: 75 },
    { id: "health", label: "무리한 일정 속 건강 유지", key: "health", value: 70 },
    { id: "scale", label: "사업 확장 기반 만들기", key: "growth", value: 95 },
  ],

  chef: [
    { id: "signature", label: "시그니처 메뉴 완성", key: "growth", value: 85 },
    { id: "regular", label: "단골 손님 확보", key: "relation", value: 85 },
    { id: "stamina", label: "주방 체력 유지", key: "health", value: 80 },
    { id: "income", label: "매장 수익 안정화", key: "money", value: 80 },
    { id: "mental", label: "바쁜 주방에서 멘탈 유지", key: "mental", value: 75 },
    { id: "reputation", label: "맛집 평판 얻기", key: "relation", value: 90 },
  ],

  doctor: [
    { id: "expert", label: "전문성 강화", key: "growth", value: 90 },
    { id: "trust", label: "환자 신뢰 확보", key: "relation", value: 85 },
    { id: "recover", label: "의료진 번아웃 방지", key: "mental", value: 75 },
    { id: "income", label: "안정적 수입 유지", key: "money", value: 90 },
    { id: "health", label: "긴 근무 속 건강 유지", key: "health", value: 75 },
    { id: "research", label: "의학 지식 꾸준히 성장", key: "growth", value: 95 },
  ],

  teacher: [
    { id: "class", label: "좋은 수업 만들기", key: "growth", value: 85 },
    { id: "students", label: "학생과 신뢰 쌓기", key: "relation", value: 90 },
    { id: "mind", label: "교직 스트레스 관리", key: "mental", value: 78 },
    { id: "health", label: "수업 체력 유지", key: "health", value: 75 },
    { id: "money", label: "안정적인 생활 유지", key: "money", value: 75 },
    { id: "mentor", label: "좋은 멘토 되기", key: "relation", value: 95 },
  ],

  musician: [
    { id: "album", label: "대표곡 만들기", key: "growth", value: 88 },
    { id: "stage", label: "공연 팬 확보", key: "relation", value: 85 },
    { id: "artist", label: "예술적 만족 유지", key: "mental", value: 85 },
    { id: "income", label: "음악 수익 안정화", key: "money", value: 75 },
    { id: "health", label: "공연 체력 유지", key: "health", value: 75 },
    { id: "fandom", label: "팬들과 꾸준히 소통", key: "relation", value: 90 },
  ],

  athlete: [
    { id: "fitness", label: "최고 컨디션 달성", key: "health", value: 95 },
    { id: "starter", label: "주전 선수 되기", key: "growth", value: 88 },
    { id: "fans", label: "팬과 팀 신뢰 확보", key: "relation", value: 80 },
    { id: "income", label: "선수 수입 안정화", key: "money", value: 80 },
    { id: "mental", label: "경기 압박감 극복", key: "mental", value: 80 },
    { id: "legend", label: "팀의 핵심 선수 되기", key: "growth", value: 95 },
  ],

  traveler: [
    { id: "world", label: "다양한 도시 경험", key: "growth", value: 85 },
    { id: "freedom", label: "자유로운 멘탈 유지", key: "mental", value: 90 },
    { id: "network", label: "세계 친구 만들기", key: "relation", value: 85 },
    { id: "money", label: "여행 자금 관리", key: "money", value: 75 },
    { id: "health", label: "여행 중 건강 유지", key: "health", value: 80 },
    { id: "record", label: "여행 기록 완성", key: "growth", value: 90 },
  ],
};

const eventsByJob = {
  student: [
    { title: "갑작스러운 조별과제", icon: "😵", effect: { growth: 6, mental: -8, relation: 4 }, text: "조별과제가 생겨 일정이 복잡해졌습니다." },
    { title: "장학금 소식", icon: "🏅", effect: { money: 12, mental: 8 }, text: "장학금 기회가 생겼습니다." },
  ],
  office: [
    { title: "긴급 회의", icon: "📞", effect: { mental: -8, growth: 5 }, text: "갑작스러운 회의가 잡혔습니다." },
    { title: "성과 인정", icon: "👏", effect: { mental: 8, relation: 5, money: 5 }, text: "업무 성과를 인정받았습니다." },
  ],
  developer: [
    { title: "운영 서버 장애", icon: "🔥", effect: { mental: -12, growth: 8, health: -4 }, text: "장애 대응으로 긴장감이 높아졌습니다." },
    { title: "버그 해결 성공", icon: "✅", effect: { mental: 10, growth: 8 }, text: "며칠간 잡지 못한 버그를 해결했습니다." },
  ],
  designer: [
    { title: "디자인 시안 반려", icon: "💬", effect: { mental: -9, growth: 5 }, text: "시안이 반려되어 다시 수정해야 합니다." },
    { title: "디자인 칭찬", icon: "✨", effect: { mental: 10, relation: 6 }, text: "작업물이 좋은 반응을 얻었습니다." },
  ],
  creator: [
    { title: "영상 조회수 급상승", icon: "🚀", effect: { money: 10, relation: 10, mental: 7 }, text: "업로드한 영상 반응이 좋습니다." },
    { title: "악성 댓글", icon: "💢", effect: { mental: -10, relation: -4 }, text: "악성 댓글 때문에 마음이 흔들렸습니다." },
  ],
  startup: [
    { title: "투자 제안", icon: "💰", effect: { money: 15, relation: 8, mental: 5 }, text: "투자 제안을 받았습니다." },
    { title: "고객 이탈", icon: "📉", effect: { money: -10, mental: -10, growth: 5 }, text: "고객 이탈 원인을 분석해야 합니다." },
  ],
  chef: [
    { title: "손님 극찬", icon: "⭐", effect: { relation: 10, mental: 8, money: 5 }, text: "손님이 요리를 극찬했습니다." },
    { title: "주방 사고", icon: "⚠️", effect: { health: -10, mental: -6 }, text: "작은 주방 사고가 발생했습니다." },
  ],
  doctor: [
    { title: "응급 환자 발생", icon: "🚑", effect: { mental: -12, growth: 8, health: -4 }, text: "응급 대응으로 긴장감이 높아졌습니다." },
    { title: "환자 감사 인사", icon: "💌", effect: { mental: 10, relation: 8 }, text: "환자로부터 감사 인사를 받았습니다." },
  ],
  teacher: [
    { title: "학생의 성장", icon: "🌱", effect: { mental: 10, relation: 8 }, text: "학생이 눈에 띄게 성장했습니다." },
    { title: "학부모 민원", icon: "📞", effect: { mental: -10, relation: -5 }, text: "학부모 민원으로 스트레스를 받았습니다." },
  ],
  musician: [
    { title: "공연 섭외", icon: "🎤", effect: { money: 10, relation: 8, mental: 6 }, text: "공연 섭외가 들어왔습니다." },
    { title: "슬럼프", icon: "🌧️", effect: { mental: -12, growth: -4 }, text: "창작 슬럼프가 찾아왔습니다." },
  ],
  athlete: [
    { title: "경기 승리", icon: "🏆", effect: { relation: 10, mental: 10, money: 6 }, text: "경기에서 승리했습니다." },
    { title: "가벼운 부상", icon: "🩹", effect: { health: -12, mental: -5 }, text: "훈련 중 가벼운 부상이 생겼습니다." },
  ],
  traveler: [
    { title: "숨은 명소 발견", icon: "🏝️", effect: { mental: 10, growth: 8 }, text: "예상치 못한 멋진 장소를 발견했습니다." },
    { title: "항공편 지연", icon: "⏳", effect: { mental: -8, money: -5 }, text: "항공편이 지연되어 일정이 꼬였습니다." },
  ],
};

function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

function App() {
  const [character, setCharacter] = useState(null);
  const [stats, setStats] = useState(null);
  const [day, setDay] = useState(1);
  const [diary, setDiary] = useState([]);
  const [lastEvent, setLastEvent] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const startLife = (item) => {
    setCharacter(item);
    setStats({
      money: item.money,
      health: item.health,
      mental: item.mental,
      relation: item.relation,
      growth: item.growth,
    });
    setDay(1);
    setDiary([`${item.name} 라이프를 시작했습니다.`]);
    setLastEvent(null);
    setSelectedGoal(null);
  };

const applyEffect = (base, effect) => {
  const next = { ...base };

  Object.entries(effect).forEach(([key, value]) => {
    const currentValue = Math.max(0, Number(next[key] ?? 0));
    next[key] = clamp(currentValue + value);
  });

  return next;
};

  const chooseSchedule = (schedule) => {
  if (ending) return;

  setDay((prevDay) => {
    const currentDay = prevDay;

    setStats((prevStats) => {
      let nextStats = applyEffect(prevStats, schedule.effect);

      const scheduleChangeText = makeChangeText(
        prevStats,
        nextStats
      );

      let event = null;
      let eventChangeText = "";

      const jobEvents = eventsByJob[character.id];

      if (Math.random() < 0.45) {
        event =
          jobEvents[
            Math.floor(Math.random() * jobEvents.length)
          ];

        const beforeEventStats = nextStats;

        nextStats = applyEffect(
          nextStats,
          event.effect
        );

        eventChangeText = makeChangeText(
          beforeEventStats,
          nextStats
        );
      }

      setDiary((prevDiary) => {
        const logs = [];

        logs.push(
          `Day ${currentDay} · ${schedule.icon} ${schedule.text} (${scheduleChangeText})`
        );

        if (event) {
          logs.unshift(
            `오늘의 사건 · ${event.icon} ${event.title}: ${event.text} (${eventChangeText})`
          );
        }

        return [...logs, ...prevDiary];
      });

      setLastEvent(event);

      return nextStats;
    });

    return prevDay + 1;
  });
};

  const reset = () => {
    setCharacter(null);
    setStats(null);
    setDay(1);
    setDiary([]);
    setLastEvent(null);
    setSelectedGoal(null);
  };

  const lifeScore = useMemo(() => {
    if (!stats) return 0;

    return Math.round(
      stats.money * 0.18 +
        stats.health * 0.22 +
        stats.mental * 0.22 +
        stats.relation * 0.18 +
        stats.growth * 0.2
    );
  }, [stats]);

  const mood = useMemo(() => {
    if (!stats) return "시작 전";
    if (stats.health <= 15) return "체력 방전";
    if (stats.mental <= 15) return "멘탈 붕괴";
    if (stats.money <= 10) return "텅장 위기";
    if (lifeScore >= 85) return "좋은 흐름";
    if (lifeScore >= 65) return "무난한 상태";
    if (lifeScore >= 45) return "관리 필요";
    return "위태로운 상태";
  }, [stats, lifeScore]);

  const currentGoals = character ? goalsByJob[character.id] : [];

  const achievedGoals = useMemo(() => {
    if (!stats || !character) return [];
    return goalsByJob[character.id].filter((goal) => stats[goal.key] >= goal.value);
  }, [stats, character]);

  const ending = useMemo(() => {
    if (!stats) return null;
    if (stats.health <= 0) return "건강을 잃어 잠시 쉬어가게 되었습니다.";
    if (stats.mental <= 0) return "마음이 지쳐 모든 일정을 멈췄습니다.";
    if (stats.money <= 0) return "잔고가 바닥나 긴축 생활을 시작했습니다.";
    if (day > 30) return "30일 동안의 인생 실험을 완료했습니다.";
    return null;
  }, [stats, day]);

  return (
    <div className={`app ${character ? character.theme : ""}`}>
      <header className="top">
        <div>
          <p className="mini">Life Balance Planner</p>
          <h1>오늘의 나, 내일의 나</h1>
          <p className="intro">
            직업별 일상 선택에 따라 돈, 건강, 멘탈, 관계, 성장이 달라지는
            라이프 시뮬레이션 웹앱입니다.
          </p>
        </div>

        <div className="today-card">
          <span>오늘의 상태</span>
          <strong>{character ? mood : "준비 중"}</strong>
          <p>{character ? `Day ${day}` : "직업을 선택하세요"}</p>
        </div>
      </header>

      {!character ? (
        <main className="select-page">
          <section className="section-heading">
            <h2>직업 선택</h2>
            <p>직업마다 일정, 사건, 목표, 달성 조건이 다릅니다.</p>
          </section>

          <div className="character-grid">
            {characters.map((item) => (
              <button
                key={item.id}
                className="character-card"
                onClick={() => startLife(item)}
              >
                <div className="character-emoji">{item.emoji}</div>
                <h3>{item.name}</h3>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>

                <div className="mini-stats">
                  <span>돈 {item.money}</span>
                  <span>건강 {item.health}</span>
                  <span>성장 {item.growth}</span>
                </div>
              </button>
            ))}
          </div>
        </main>
      ) : (
        <main className="life-layout">
          <section className={`profile panel visual-${character.visual}`}>
            <div className="visual-banner">
              <div className="visual-overlay">
                <div className="profile-emoji">{character.emoji}</div>
              </div>
            </div>

            <h2>{character.name} 라이프</h2>
            <p>{character.title}</p>

            <div className="score-box">
              <span>Life Score</span>
              <strong>{lifeScore}</strong>
            </div>

            <button className="reset" onClick={reset}>
              처음부터 다시하기
            </button>
          </section>

          <section className="stats panel">
            <h2>내 상태</h2>
            <Stat label="돈" value={stats.money} icon="💰" />
            <Stat label="건강" value={stats.health} icon="🍎" />
            <Stat label="멘탈" value={stats.mental} icon="🌷" />
            <Stat label="관계" value={stats.relation} icon="🤍" />
            <Stat label="성장" value={stats.growth} icon="🌱" />
          </section>

          <section className="schedule panel">
            <h2>오늘 뭐할까?</h2>

            <div className="schedule-grid">
              {schedulesByJob[character.id].map((item) => (
                <button key={item.name} onClick={() => chooseSchedule(item)} disabled={!!ending}>
                  <span>{item.icon}</span>
                  <strong>{item.name}</strong>
                  <small>{formatEffect(item.effect)}</small>
                </button>
              ))}
            </div>
          </section>

          <section className="goal panel">
            <h2>{character.name}의 인생 목표</h2>

            <div className="goal-list">
              {currentGoals.map((goal) => {
                const done = stats[goal.key] >= goal.value;

                return (
                  <button
                    key={goal.id}
                    className={done ? "goal-item done" : "goal-item"}
                    onClick={() => setSelectedGoal(goal)}
                  >
                    <span>{done ? "완료" : "진행"}</span>
                    <strong>{goal.label}</strong>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="event panel">
            <h2>{character.name}의 오늘의 사건</h2>

            {lastEvent ? (
              <div className="event-card">
                <div>{lastEvent.icon}</div>
                <h3>{lastEvent.title}</h3>
                <p>{lastEvent.text}</p>
              </div>
            ) : (
              <p className="empty">아직 특별한 사건은 없습니다.</p>
            )}

            {ending && <div className="ending">{ending}</div>}
          </section>

          <section className="diary panel">
            <h2>다이어리</h2>

            <div className="diary-list">
              {diary.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </section>

          <section className="summary panel">
            <h2>{character.name}의 달성한 것</h2>

            {achievedGoals.length === 0 ? (
              <p className="empty">아직 달성한 목표가 없습니다.</p>
            ) : (
              <div className="badge-list">
                {achievedGoals.map((goal) => (
                  <span key={goal.id}>{goal.label}</span>
                ))}
              </div>
            )}

            {selectedGoal && (
              <div className="goal-detail">
                <strong>{selectedGoal.label}</strong>
                <p>
                  현재 {labelByKey(selectedGoal.key)} 수치: {stats[selectedGoal.key]} / 목표{" "}
                  {selectedGoal.value}
                </p>
              </div>
            )}
          </section>
        </main>
      )}
    </div>
  );
}

function Stat({ label, value, icon }) {
  return (
    <div className="stat">
      <div className="stat-top">
        <span>
          {icon} {label}
        </span>
        <strong>{value}</strong>
      </div>

      <div className="stat-bar">
        <div style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

function labelByKey(key) {
  const names = {
    money: "돈",
    health: "건강",
    mental: "멘탈",
    relation: "관계",
    growth: "성장",
  };

  return names[key] || key;
}

function formatEffect(effect) {
  const plus = [];
  const minus = [];

  Object.entries(effect).forEach(([key, value]) => {
    const text = `${labelByKey(key)} ${value > 0 ? "+" : ""}${value}`;

    if (value > 0) {
      plus.push(text);
    } else {
      minus.push(text);
    }
  });

  const plusText = plus.length > 0 ? `증가: ${plus.join(", ")}` : "";
  const minusText = minus.length > 0 ? `감소: ${minus.join(", ")}` : "";

  return [plusText, minusText].filter(Boolean).join(" / ");
}

export default App;

function makeChangeText(before, after) {
  const changes = [];

  Object.keys(after).forEach((key) => {
    const diff = after[key] - before[key];

    if (diff !== 0) {
      changes.push(`${labelByKey(key)} ${diff > 0 ? "+" : ""}${diff}`);
    }
  });

  return changes.length > 0 ? changes.join(", ") : "변화 없음";
}