"use client";

export default function LoginPage() {
  const handleKakaoLogin = () => {
    // TODO: 카카오 로그인 연동
    console.log("카카오 로그인");
  };

  const handleGoogleLogin = () => {
    // TODO: 구글 로그인 연동
    console.log("구글 로그인");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        {/* 아이콘 */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>토론장 아이콘</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
        </div>  

        {/* 제목 */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
          토론장에 오신 것을 환영합니다
        </h1>

        {/* 서브 텍스트 */}
        <p className="text-center text-gray-600 mb-8">
          간편하게 로그인하고 다양한 주제로 토론해보세요
        </p>

        {/* 로그인 버튼들 */}
        <div className="space-y-3">
          {/* 카카오 로그인 */}
          <button
            type="button"
            onClick={handleKakaoLogin}
            className="w-full bg-[#FEE500] hover:bg-[#FDD835] text-gray-900 font-medium py-3.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <title>카카오 로고</title>
              <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z" />
            </svg>
            카카오로 시작하기
          </button>

          {/* 구글 로그인 */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3.5 px-4 rounded-lg transition-colors border border-gray-300 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <title>구글 로고</title>
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            구글로 시작하기
          </button>
        </div>

        {/* 개인정보처리방침 */}
        <p className="text-xs text-gray-500 text-center mt-6">
          계속 진행하면{" "}
          <a href="/terms" className="text-blue-500 hover:underline">
            이용약관
          </a>
          과{" "}
          <a href="/privacy" className="text-blue-500 hover:underline">
            개인정보처리방침
          </a>
          에 동의하는 것으로 간주합니다
        </p>
      </div>
    </div>
  );
}
