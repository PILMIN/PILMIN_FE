import { LogoIcon, PlusIcon, ProfileIcon } from "../assets";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <LogoIcon className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-xl font-semibold text-gray-900">토론장</span>
          </div>

          <div className="flex items-center gap-5">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <PlusIcon className="w-3.5 h-3.5" />
              <span>주제 제안</span>
            </button>

            <button
              type="button"
              aria-label="프로필"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <ProfileIcon className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
