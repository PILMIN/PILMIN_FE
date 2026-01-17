"use client";

import { useState } from "react";

type FilterType = "전체" | "진행중" | "인기";

interface FilterTabsProps {
	onFilterChange?: (filter: FilterType) => void;
}

export default function FilterTabs({ onFilterChange }: FilterTabsProps) {
	const [activeFilter, setActiveFilter] = useState<FilterType>("전체");

	const filters: FilterType[] = ["전체", "진행중", "인기"];

	const handleFilterClick = (filter: FilterType) => {
		setActiveFilter(filter);
		onFilterChange?.(filter);
	};

	return (
		<div className="flex gap-3 justify-center">
			{filters.map((filter) => (
				<button
					key={filter}
					type="button"
					onClick={() => handleFilterClick(filter)}
					className={`px-8 py-2.5 rounded-full font-medium transition-all border select-none ${
						activeFilter === filter
							? "bg-white text-gray-900 shadow-sm border-gray-200"
							: "bg-transparent text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-200"
					}`}
				>
					{filter}
				</button>
			))}
		</div>
	);
}
