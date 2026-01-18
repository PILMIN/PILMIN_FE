interface UserStatusBadgeProps {
  status: "활성" | "차단됨";
}

export default function UserStatusBadge({ status }: UserStatusBadgeProps) {
  const config = {
    활성: {
      className: "bg-green-100 text-green-700",
      label: "활성",
    },
    차단됨: {
      className: "bg-red-100 text-red-700",
      label: "차단됨",
    },
  };

  const { className, label } = config[status];

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${className}`}
    >
      {label}
    </span>
  );
}
