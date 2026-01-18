import ActionButton from "./ActionButton";
import StatusBadge from "./StatusBadge";

export interface Request {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  status: "대기중" | "승인" | "반려";
}

interface RequestCardProps {
  request: Request;
  onApprove?: (id: number) => void;
  onReject?: (id: number) => void;
  onView?: (id: number) => void;
}

export default function RequestCard({
  request,
  onApprove,
  onReject,
  onView,
}: RequestCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-gray-900">{request.title}</h3>
        <StatusBadge status={request.status} />
      </div>

      {/* Description */}
      <p className="mb-4 text-sm text-gray-600">{request.description}</p>

      {/* Meta Info */}
      <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
        <span>작성자: {request.author}</span>
        <span>•</span>
        <span>{request.date}</span>
      </div>

      {/* Actions */}
      {request.status === "대기중" && (
        <div className="flex items-center gap-2">
          <ActionButton
            type="approve"
            onClick={() => onApprove?.(request.id)}
          />
          <ActionButton type="reject" onClick={() => onReject?.(request.id)} />
          <ActionButton type="view" onClick={() => onView?.(request.id)} />
        </div>
      )}

      {request.status === "승인" && (
        <div className="flex items-center gap-2">
          <ActionButton type="view" onClick={() => onView?.(request.id)} />
        </div>
      )}

      {request.status === "반려" && (
        <div className="flex items-center gap-2">
          <ActionButton type="view" onClick={() => onView?.(request.id)} />
        </div>
      )}
    </div>
  );
}
