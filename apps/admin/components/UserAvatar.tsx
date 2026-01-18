interface UserAvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

export default function UserAvatar({ name, size = "md" }: UserAvatarProps) {
  // 이름의 첫 글자 추출
  const initial = name.charAt(0).toUpperCase();

  const sizeClasses = {
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg",
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gray-200 font-medium text-gray-700 ${sizeClasses[size]}`}
    >
      {initial}
    </div>
  );
}
