"use client";

import { useEffect, useState } from "react";
import { LogoIcon, PlusIcon, ProfileIcon } from "../icons";

interface HeaderProps {
  showTopicButton?: boolean;
}

export default function Header({ showTopicButton = true }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2 cursor-pointer">
            <LogoIcon className="w-5 h-5 text-blue-500" />
            <span className="text-lg font-semibold text-gray-900">토론장</span>
          </div>

          <div className="flex items-center gap-5">
            {showTopicButton && (
              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <PlusIcon className="w-3.5 h-3.5" />
                <span>주제 제안</span>
              </button>
            )}

            <button
              type="button"
              aria-label="프로필"
              className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <ProfileIcon className="w-4.5 h-4.5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
