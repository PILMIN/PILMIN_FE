import Sidebar from "../components/Sidebar";

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  icon: React.ReactNode;
  iconColor: string;
}

function StatCard({ title, value, change, icon, iconColor }: StatCardProps) {
  const isPositive = !change.includes("-");

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-600">{title}</span>
        <div className={`rounded-lg ${iconColor} p-2`}>{icon}</div>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        <span
          className={`text-sm font-semibold ${isPositive ? "text-green-600" : "text-red-600"}`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}

interface DiscussionItemProps {
  title: string;
  views: string;
  status: "진행중" | "마감";
}

function DiscussionItem({ title, views, status }: DiscussionItemProps) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 py-4 last:border-0">
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="mt-1 text-sm text-gray-500">{views}</p>
      </div>
      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          status === "진행중"
            ? "bg-green-50 text-green-700"
            : "bg-gray-100 text-gray-600"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

interface RequestItemProps {
  title: string;
  author: string;
  time: string;
}

function RequestItem({ title, author, time }: RequestItemProps) {
  return (
    <div className="border-b border-gray-100 py-4 last:border-0">
      <h4 className="font-medium text-gray-900">{title}</h4>
      <p className="mt-1 text-sm text-gray-500">
        {author} · {time}
      </p>
    </div>
  );
}

export default function AdminHome() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="ml-72 flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">대시보드</h1>
          <p className="mt-2 text-gray-600">토론장 운영 현황을 한눈에 확인하세요</p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="전체 토론"
            value={48}
            change="+3"
            iconColor="bg-blue-50"
            icon={
              <svg
                className="h-5 w-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            }
          />
          <StatCard
            title="활성 사용자"
            value="12,345"
            change="+234"
            iconColor="bg-green-50"
            icon={
              <svg
                className="h-5 w-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
          />
          <StatCard
            title="대기중인 요청"
            value={15}
            change="+5"
            iconColor="bg-orange-50"
            icon={
              <svg
                className="h-5 w-5 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
          />
          <StatCard
            title="오늘 참여"
            value="1,234"
            change="+12%"
            iconColor="bg-purple-50"
            icon={
              <svg
                className="h-5 w-5 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            }
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Recent Discussions */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-gray-900">최근 토론</h2>
            <div>
              <DiscussionItem
                title="원격 근무는 생산성을 높인다"
                views="1,234명 참여"
                status="진행중"
              />
              <DiscussionItem
                title="AI가 개발자를 대체할 것이다"
                views="2,847명 참여"
                status="진행중"
              />
              <DiscussionItem
                title="대학 등록금 무상 제공"
                views="3,421명 참여"
                status="마감"
              />
            </div>
          </div>

          {/* Pending Requests */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-gray-900">
              대기중인 주제 요청
            </h2>
            <div>
              <RequestItem
                title="메타버스는 미래의 인터넷이다"
                author="김철수"
                time="2시간 전"
              />
              <RequestItem
                title="전기차 의무화가 필요하다"
                author="이영희"
                time="5시간 전"
              />
              <RequestItem
                title="4일 근무제 도입이 시급하다"
                author="박민수"
                time="1일 전"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
