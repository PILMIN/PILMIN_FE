interface CommentItemProps {
  author: string;
  position: "찬성" | "반대";
  time: string;
  content: string;
}

export default function CommentItem({
  author,
  position,
  time,
  content,
}: CommentItemProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-start gap-4">
        {/* 프로필 아이콘 */}
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-gray-600 font-medium">{author[0]}</span>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-gray-900">{author}</span>
            <span
              className={`inline-flex items-center gap-1 select-none ${
                position === "찬성" ? "bg-blue-500" : "bg-red-500"
              } text-white text-xs font-medium px-2.5 py-0.5 rounded-full`}
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              {position}
            </span>
            <span className="text-sm text-gray-500">{time}</span>
          </div>
          <p className="text-gray-700 leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}
