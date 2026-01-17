"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function ProposePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 제안 로직은 나중에 구현
    console.log({ title, description });
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* 뒤로가기 버튼 */}
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
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

        {/* 제목 & 설명 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            주제 제안하기
          </h1>
          <p className="text-gray-600">
            토론하고 싶은 주제를 제안해주세요. 관리자 검토 후 승인되면 토론방이
            개설됩니다.
          </p>
        </div>

        {/* 폼 */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-2xl shadow-sm p-8">
            {/* 주제 제목 */}
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-gray-900 mb-3"
              >
                주제 제목
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="예: 원격 근무는 생산성을 높인다"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* 상세 설명 */}
            <div className="mb-2">
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-gray-900 mb-3"
              >
                상세 설명
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="주제에 대한 배경이나 설명을 자세히 작성해주세요"
                className="w-full h-64 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                minLength={50}
              />
            </div>

            {/* 글자 수 안내 */}
            <p className="text-sm text-gray-500 mb-6">
              최소 50자 이상 작성해주세요
            </p>

            {/* 버튼 */}
            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors select-none"
              >
                <Image
                  src="/send.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                제안하기
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-8 py-3.5 bg-white text-gray-700 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors select-none"
              >
                취소
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
