import RoleBadge from "../../components/RoleBadge";
import Sidebar from "../../components/Sidebar";
import UserAvatar from "../../components/UserAvatar";
import UserStatusBadge from "../../components/UserStatusBadge";

interface Member {
  id: number;
  name: string;
  email: string;
  role: "관리자" | "사용자" | "호스트";
  status: "활성" | "차단됨";
  participations: number;
  comments: number;
}

interface MemberRowProps {
  member: Member;
}

function MemberRow({ member }: MemberRowProps) {
  return (
    <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <UserAvatar name={member.name} />
          <div>
            <div className="font-medium text-gray-900">{member.name}</div>
            <div className="text-sm text-gray-500">{member.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <RoleBadge role={member.role} />
      </td>
      <td className="px-6 py-4">
        <UserStatusBadge status={member.status} />
      </td>
      <td className="px-6 py-4">
        <span className="text-sm font-medium text-gray-900">
          {member.participations}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm font-medium text-gray-900">
          {member.comments}
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

export default function MembersPage() {
  const members: Member[] = [
    {
      id: 1,
      name: "김철수",
      email: "kim@example.com",
      role: "관리자",
      status: "활성",
      participations: 15,
      comments: 43,
    },
    {
      id: 2,
      name: "이영희",
      email: "lee@example.com",
      role: "사용자",
      status: "활성",
      participations: 8,
      comments: 27,
    },
    {
      id: 3,
      name: "박민수",
      email: "park@example.com",
      role: "사용자",
      status: "활성",
      participations: 23,
      comments: 89,
    },
    {
      id: 4,
      name: "정수민",
      email: "jung@example.com",
      role: "호스트",
      status: "활성",
      participations: 12,
      comments: 56,
    },
    {
      id: 5,
      name: "최영호",
      email: "choi@example.com",
      role: "사용자",
      status: "차단됨",
      participations: 3,
      comments: 5,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="ml-72 flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">회원 관리</h1>
          <p className="mt-2 text-gray-600">
            사용자 권한을 관리하고 차단할 수 있습니다
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  사용자
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  권한
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  상태
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  참여
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  댓글
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  작업
                </th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <MemberRow key={member.id} member={member} />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
