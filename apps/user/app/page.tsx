"use client";

import DebateCard from "../components/DebateCard";
import FilterTabs from "../components/FilterTabs";

// 임시 데이터
const debateData = [
  {
    id: 1,
    category: "직장",
    status: "진행중" as const,
    title: "월급 근무는 생산성을 높인다",
    agreePercent: 68,
    disagreePercent: 32,
    participants: 1234,
    comments: 89,
  },
  {
    id: 2,
    category: "기술",
    status: "진행중" as const,
    title: "AI가 5년 내에 개발자 직업을 대체할 것이다",
    agreePercent: 42,
    disagreePercent: 58,
    participants: 2847,
    comments: 234,
  },
  {
    id: 3,
    category: "교육",
    status: "진행중" as const,
    title: "대학 등록금은 무상으로 제공되어야 한다",
    agreePercent: 55,
    disagreePercent: 45,
    participants: 3421,
    comments: 567,
  },
  {
    id: 4,
    category: "직장",
    status: "진행중" as const,
    title: "주 4일 근무제가 도입되어야 한다",
    agreePercent: 82,
    disagreePercent: 18,
    participants: 4532,
    comments: 421,
  },
  {
    id: 5,
    category: "경제",
    status: "종료됨" as const,
    title: "암호화폐는 미래의 화폐가 될 것이다",
    agreePercent: 47,
    disagreePercent: 53,
    participants: 1876,
    comments: 312,
  },
  {
    id: 6,
    category: "정치",
    status: "진행중" as const,
    title: "기본소득제는 현실적으로 실현 가능하다",
    agreePercent: 51,
    disagreePercent: 49,
    participants: 2934,
    comments: 689,
  },
];

export default function UserHome() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="bg-white pt-16 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            다양한 주제로 의견을 나눠보세요
          </h1>
          <p className="text-gray-600 text-lg">
            실시간 투표와 토론으로 여러 사람들의 생각을 확인해보세요
          </p>
        </div>
      </section>

      {/* 필터 탭 */}
      <section className="bg-white pb-8 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <FilterTabs />
        </div>
      </section>

      {/* 토론 카드 그리드 */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {debateData.map((debate) => (
              <DebateCard
                key={debate.id}
                id={debate.id}
                category={debate.category}
                status={debate.status}
                title={debate.title}
                agreePercent={debate.agreePercent}
                disagreePercent={debate.disagreePercent}
                participants={debate.participants}
                comments={debate.comments}
              />
            ))}
          </div>

          {/* 더 보기 버튼 */}
          <div className="flex justify-center mt-12">
            <button
              type="button"
              className="px-8 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              더 보기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
