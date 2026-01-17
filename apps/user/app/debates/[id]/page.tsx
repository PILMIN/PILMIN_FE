"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// 임시 데이터
const debateDetailData = {
  id: 1,
  category: "직장",
  status: "진행중" as const,
  title: "원격 근무는 생산성을 높인다",
  content:
    "코로나19 이후 많은 기업들이 원격 근무를 도입했습니다. 원격 근무가 실제로 생산성을 높이는지, 아니면 오히려 떨어뜨리는지에 대한 의견이 분분합니다. 여러분의 생각은 어떠신가요?",
  date: "2024-01-15",
  agreePercent: 68,
  disagreePercent: 32,
  participants: 1234,
  comments: 89,
  commentList: [
    {
      id: 1,
      author: "김철수",
      position: "찬성" as const,
      time: "2시간 전",
      content:
        "원격 근무를 하면서 출퇴근 시간이 줄어들고 시간을 절약하게 되었습니다. 집중력도 더 높아진 것 같아요.",
    },
    {
      id: 2,
      author: "이영희",
      position: "반대" as const,
      time: "3시간 전",
      content:
        "저는 오히려 재택근무를 하면서 업무와 개인 생활의 경계가 모호해져서 스트레스를 더 많이받습니다. 사무실에서 일하는 게 더 나은 것 같아요.",
    },
    {
      id: 3,
      author: "박민수",
      position: "반대" as const,
      time: "5시간 전",
      content:
        "팀 협업이 필요한 업무 할 때는 대면 의사가 필요한 경우가 많습니다. 온라인으로는 소통에 한계가 있습니다.",
    },
    {
      id: 4,
      author: "정수만",
      position: "찬성" as const,
      time: "7일 전",
      content:
        "원격 근무로 여러 삶의 균형을 맞출 수 있게 되었습니다. 생산성도 오히려 높아졌습니다!",
    },
  ],
};

type CommentFilter = "전체" | "찬성" | "반대";

export default function DebateDetailPage() {
  const router = useRouter();
  const [commentFilter, setCommentFilter] = useState<CommentFilter>("전체");

  const filteredComments =
    commentFilter === "전체"
      ? debateDetailData.commentList
      : debateDetailData.commentList.filter(
          (c) => c.position === commentFilter,
        );

  const agreeCommentsCount = debateDetailData.commentList.filter(
    (c) => c.position === "찬성",
  ).length;
  const disagreeCommentsCount = debateDetailData.commentList.filter(
    (c) => c.position === "반대",
  ).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* 뒤로가기 버튼 */}
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">목록으로</span>
        </button>

        {/* 메인 카드 */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          {/* 카테고리 & 상태 */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-gray-700 font-medium">
              {debateDetailData.category}
            </span>
            {debateDetailData.status === "진행중" && (
              <span className="inline-flex items-center gap-1 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                진행중
              </span>
            )}
          </div>

          {/* 공유 & 북마크 버튼 */}
          <div className="flex gap-2 mb-4">
            <button
              type="button"
              className="ml-auto p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="공유"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
            <button
              type="button"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="북마크"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>

          {/* 제목 */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {debateDetailData.title}
          </h1>

          {/* 메타 정보 */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {debateDetailData.date}
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              {debateDetailData.participants.toLocaleString()}명 참여
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
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
              {debateDetailData.comments}개 댓글
            </span>
          </div>

          {/* 토론 내용 */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-700 leading-relaxed">
              {debateDetailData.content}
            </p>
          </div>

          {/* 투표 결과 */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
                <span className="text-sm font-semibold text-gray-900">
                  찬성 {debateDetailData.agreePercent}%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">
                  반대 {debateDetailData.disagreePercent}%
                </span>
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
              </div>
            </div>

            {/* 프로그레스 바 */}
            <div className="w-full h-3 rounded-full overflow-hidden flex mb-4">
              <div
                className="bg-blue-500 h-full"
                style={{ width: `${debateDetailData.agreePercent}%` }}
              ></div>
              <div
                className="bg-red-500 h-full"
                style={{ width: `${debateDetailData.disagreePercent}%` }}
              ></div>
            </div>

            <p className="text-center text-sm text-gray-600">
              {debateDetailData.participants.toLocaleString()}명이 참여했습니다
            </p>
          </div>

          {/* 투표 버튼 */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-4 bg-blue-50 text-blue-600 rounded-xl font-semibold hover:bg-blue-100 transition-colors border border-blue-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              찬성
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-4 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition-colors border border-red-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                />
              </svg>
              반대
            </button>
          </div>
        </div>

        {/* 댓글 섹션 */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            댓글 {debateDetailData.comments}개
          </h2>

          {/* 댓글 입력 */}
          <div className="bg-white rounded-xl p-6 mb-6">
            <textarea
              placeholder="댓글을 작성하려면 먼저 투표해주세요"
              className="w-full h-24 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>

          {/* 댓글 필터 탭 */}
          <div className="flex gap-2 mb-6 border-b border-gray-200">
            <button
              type="button"
              onClick={() => setCommentFilter("전체")}
              className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                commentFilter === "전체"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              전체 ({debateDetailData.commentList.length})
            </button>
            <button
              type="button"
              onClick={() => setCommentFilter("찬성")}
              className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                commentFilter === "찬성"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              찬성 ({agreeCommentsCount})
            </button>
            <button
              type="button"
              onClick={() => setCommentFilter("반대")}
              className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                commentFilter === "반대"
                  ? "border-red-500 text-red-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              반대 ({disagreeCommentsCount})
            </button>
          </div>

          {/* 댓글 리스트 */}
          <div className="space-y-4">
            {filteredComments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  {/* 프로필 아이콘 */}
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-medium">
                      {comment.author[0]}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-gray-900">
                        {comment.author}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 ${
                          comment.position === "찬성"
                            ? "bg-blue-500"
                            : "bg-red-500"
                        } text-white text-xs font-medium px-2.5 py-0.5 rounded-full`}
                      >
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        {comment.position}
                      </span>
                      <span className="text-sm text-gray-500">
                        {comment.time}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {comment.content}
                    </p>
                  </div>

                  {/* 더보기 메뉴 */}
                  <button
                    type="button"
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                    aria-label="더보기"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
