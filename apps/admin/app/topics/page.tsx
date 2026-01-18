import Sidebar from "../../components/Sidebar";

interface Topic {
  id: number;
  title: string;
  category: string;
  status: "진행중" | "마감";
  participants: number;
  isLocked?: boolean;
}

interface TopicRowProps {
  topic: Topic;
}

function TopicRow({ topic }: TopicRowProps) {
  return (
    <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50">
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-900">{topic.title}</span>
          {topic.isLocked && (
            <svg
              className="h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          )}
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-gray-600">{topic.category}</span>
      </td>
      <td className="px-6 py-4">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
            topic.status === "진행중"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {topic.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm font-medium text-gray-900">
          {topic.participants.toLocaleString()}
        </span>
      </td>
      <td className="px-6 py-4">
        <button
          type="button"
          className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 5a2 2 0 100-4 2 2 0 000 4zM12 14a2 2 0 100-4 2 2 0 000 4zM12 23a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default function TopicsPage() {
  const topics: Topic[] = [
    {
      id: 1,
      title: "원격 근무는 생산성을 높인다",
      category: "직장",
      status: "진행중",
      participants: 1234,
    },
    {
      id: 2,
      title: "AI가 5년 내에 개발자를 대체할 것이다",
      category: "기술",
      status: "진행중",
      participants: 2847,
    },
    {
      id: 3,
      title: "대학 등록금은 무상으로 제공되어야 한다",
      category: "교육",
      status: "마감",
      participants: 3421,
      isLocked: true,
    },
    {
      id: 4,
      title: "주 4일 근무제가 도입되어야 한다",
      category: "직장",
      status: "진행중",
      participants: 4532,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="ml-72 flex-1 p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">주제 관리</h1>
            <p className="mt-2 text-gray-600">
              토론 주제를 생성하고 관리하세요
            </p>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            새 주제 등록
          </button>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  제목
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  카테고리
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  상태
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  참여자
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  작업
                </th>
              </tr>
            </thead>
            <tbody>
              {topics.map((topic) => (
                <TopicRow key={topic.id} topic={topic} />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
