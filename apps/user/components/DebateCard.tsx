import Link from "next/link";

interface DebateCardProps {
  id: number;
  category: string;
  status: "진행중" | "종료됨";
  title: string;
  agreePercent: number;
  disagreePercent: number;
  participants: number;
  comments: number;
}

export default function DebateCard({
  id,
  category,
  status,
  title,
  agreePercent,
  disagreePercent,
  participants,
  comments,
}: DebateCardProps) {
  return (
    <Link
      href={`/debates/${id}`}
      className="block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
    >
      {/* 카테고리 & 상태 */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm text-gray-700 font-medium">{category}</span>
        {status === "진행중" && (
          <span className="inline-flex items-center gap-1 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full select-none">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            진행중
          </span>
        )}
      </div>

      {/* 제목 */}
      <h3 className="text-lg font-bold text-gray-900 mb-6 min-h-[56px]">
        {title}
      </h3>

      {/* 찬반 비율 */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-blue-500 select-none">
            찬성 {agreePercent}%
          </span>
          <span className="text-sm font-semibold text-red-500 select-none">
            반대 {disagreePercent}%
          </span>
        </div>

        {/* 프로그레스 바 */}
        <div className="w-full h-2 rounded-full overflow-hidden flex">
          <div
            className="bg-blue-500 h-full"
            style={{ width: `${agreePercent}%` }}
          ></div>
          <div
            className="bg-red-500 h-full"
            style={{ width: `${disagreePercent}%` }}
          ></div>
        </div>
      </div>

      {/* 참여자 & 댓글 수 */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
        <span className="flex items-center gap-1.5">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>참여자</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          {participants.toLocaleString()}명 참여
        </span>
        <span className="flex items-center gap-1.5">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>댓글</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          {comments.toLocaleString()}개 댓글
        </span>
      </div>
    </Link>
  );
}
