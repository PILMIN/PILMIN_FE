interface StatusBadgeProps {
  status: "대기중" | "승인" | "반려";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    대기중: "bg-gray-100 text-gray-700",
    승인: "bg-green-100 text-green-700",
    반려: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-flex rounded-md px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
