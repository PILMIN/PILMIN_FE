"use client";

// 임시 데이터
const userData = {
  name: "홍길동",
  email: "hong@example.com",
  provider: "Google",
  joinDate: "2024.01.15",
  debatesCount: 24,
  commentsCount: 87,
};

export default function ProfilePage() {
  const handleLogout = () => {
    // 로그아웃 로직
    console.log("로그아웃");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* 페이지 제목 */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">프로필</h1>

        {/* 프로필 카드 */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          {/* 프로필 정보 */}
          <div className="flex items-start gap-6 mb-6">
            {/* 프로필 아이콘 */}
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            <div className="flex-1">
              {/* 이름 */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {userData.name}
              </h2>

              {/* 이메일 */}
              <div className="flex items-center gap-2 text-gray-600 mb-3">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">{userData.email}</span>
              </div>

              {/* 로그인 방식 */}
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full select-none">
                {userData.provider} 로그인
              </span>
            </div>
          </div>

          {/* 구분선 */}
          <div className="border-t border-gray-200 pt-6">
            {/* 가입일 */}
            <div className="flex items-center gap-2 text-gray-600">
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
              <span className="text-sm">가입일: {userData.joinDate}</span>
            </div>
          </div>
        </div>

        {/* 활동 통계 카드 */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">활동 통계</h3>

          <div className="grid grid-cols-2 gap-4">
            {/* 참여한 토론 */}
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <svg
                className="w-8 h-8 text-blue-600 mx-auto mb-3"
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
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {userData.debatesCount}
              </div>
              <div className="text-sm text-gray-600">참여한 토론</div>
            </div>

            {/* 작성한 댓글 */}
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <svg
                className="w-8 h-8 text-blue-600 mx-auto mb-3"
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
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {userData.commentsCount}
              </div>
              <div className="text-sm text-gray-600">작성한 댓글</div>
            </div>
          </div>
        </div>

        {/* 계정 관리 카드 */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6">계정 관리</h3>

          <div className="space-y-3">
            {/* 내가 참여한 토론 보기 */}
            <button
              type="button"
              className="w-full text-left px-5 py-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <span className="text-gray-900 font-medium">
                내가 참여한 토론 보기
              </span>
            </button>

            {/* 내가 쓴 댓글 보기 */}
            <button
              type="button"
              className="w-full text-left px-5 py-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <span className="text-gray-900 font-medium">
                내가 쓴 댓글 보기
              </span>
            </button>

            {/* 로그아웃 */}
            <button
              type="button"
              onClick={handleLogout}
              className="w-full text-left px-5 py-4 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors"
            >
              <span className="text-red-600 font-medium">로그아웃</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
