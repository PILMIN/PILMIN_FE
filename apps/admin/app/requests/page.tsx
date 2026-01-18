"use client";

import RequestCard, { type Request } from "../../components/RequestCard";
import Sidebar from "../../components/Sidebar";

export default function RequestsPage() {
  const requests: Request[] = [
    {
      id: 1,
      title: "메타버스는 미래의 인터넷이다",
      description:
        "메타버스 기술이 발전하면서 미래 인터넷의 주요 플랫폼이 될 것이라는 의견이 많습니다.",
      author: "김철수",
      date: "2024-01-20",
      status: "대기중",
    },
    {
      id: 2,
      title: "전기차 의무화가 필요하다",
      description:
        "환경 보호를 위해 일정 기한 내에 전기차를 의무화해야 한다는 주장입니다.",
      author: "이영희",
      date: "2024-01-19",
      status: "대기중",
    },
    {
      id: 3,
      title: "4일 근무제 도입이 시급하다",
      description:
        "업무 효율성과 삶의 질 향상을 위해 주 4일 근무제가 필요합니다.",
      author: "박민수",
      date: "2024-01-18",
      status: "승인",
    },
    {
      id: 4,
      title: "학교에서 코딩 교육을 필수로 해야 한다",
      description:
        "미래 사회를 위해 초등학교부터 코딩 교육이 필수 과목이 되어야 합니다.",
      author: "정승민",
      date: "2024-01-17",
      status: "반려",
    },
  ];

  const handleApprove = (id: number) => {
    console.log("Approve request:", id);
  };

  const handleReject = (id: number) => {
    console.log("Reject request:", id);
  };

  const handleView = (id: number) => {
    console.log("View request:", id);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="ml-72 flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">주제 요청 관리</h1>
          <p className="mt-2 text-gray-600">
            사용자가 제안한 주제를 검토하고 승인하세요
          </p>
        </div>

        {/* Request Cards */}
        <div className="space-y-6">
          {requests.map((request) => (
            <RequestCard
              key={request.id}
              request={request}
              onApprove={handleApprove}
              onReject={handleReject}
              onView={handleView}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
