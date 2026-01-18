"use client";

import SettingInput from "../../components/SettingInput";
import SettingSection from "../../components/SettingSection";
import SettingTextarea from "../../components/SettingTextarea";
import SettingToggle from "../../components/SettingToggle";
import Sidebar from "../../components/Sidebar";

export default function SettingsPage() {
  const handleSave = () => {
    console.log("Settings saved");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="ml-72 flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">설정</h1>
          <p className="mt-2 text-gray-600">플랫폼 전체 설정을 관리합니다</p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* 기본 설정 */}
          <SettingSection
            title="기본 설정"
            description="사이트 기본 정보를 관리합니다"
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          >
            <SettingInput
              label="사이트 이름"
              defaultValue="토론장"
              placeholder="사이트 이름을 입력하세요"
            />
            <SettingTextarea
              label="사이트 설명"
              defaultValue="실시간 토론 커뮤니티 플랫폼"
              placeholder="사이트 설명을 입력하세요"
              maxLength={400}
            />
          </SettingSection>

          {/* 회원 설정 */}
          <SettingSection
            title="회원 설정"
            description="회원가입 및 인증 관련 설정"
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
          >
            <SettingToggle
              label="신규 회원가입 허용"
              description="새로운 사용자의 가입을 허용합니다"
              defaultChecked={true}
            />
            <SettingToggle
              label="이메일 인증 필수"
              description="회원가입 시 이메일 인증을 요구합니다"
              defaultChecked={true}
            />
            <SettingToggle
              label="비회원 조회 허용"
              description="로그인 없이 토론 목록을 볼 수 있습니다"
              defaultChecked={true}
            />
          </SettingSection>

          {/* 알림 설정 */}
          <SettingSection
            title="알림 설정"
            description="푸시 알림 및 이메일 알림 실정"
            iconColor="bg-yellow-50"
            icon={
              <svg
                className="h-5 w-5 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            }
          >
            <SettingToggle
              label="알림 활성화"
              description="전체 알림 기능을 활성화합니다"
              defaultChecked={true}
            />
            <SettingToggle
              label="새 토론 알림"
              description="새로운 토론이 등록되면 알림을 보냅니다"
              defaultChecked={true}
            />
            <SettingToggle
              label="댓글 알림"
              description="내 댓글에 답글이 달리면 알림을 보냅니다"
              defaultChecked={true}
            />
          </SettingSection>

          {/* 토론 설정 */}
          <SettingSection
            title="토론 설정"
            description="토론 및 댓글 관련 설정"
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            }
          >
            <SettingInput
              label="자동 마감 기간 (일)"
              description="설정된 기간 후 토론이 자동으로 마감됩니다"
              type="number"
              defaultValue={30}
            />
            <SettingToggle
              label="토론 후 댓글 작성"
              description="토론을 해야만 댓글을 작성할 수 있습니다"
              defaultChecked={true}
            />
            <SettingToggle
              label="비속어 필터"
              description="댓글에서 비속어를 자동으로 필터링합니다"
              defaultChecked={true}
            />
            <div className="grid grid-cols-2 gap-4">
              <SettingInput
                label="최소 댓글 길이"
                type="number"
                defaultValue={10}
                min={0}
              />
              <SettingInput
                label="최대 댓글 길이"
                type="number"
                defaultValue={500}
                min={0}
              />
            </div>
          </SettingSection>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            설정 저장
          </button>
        </div>
      </main>
    </div>
  );
}
