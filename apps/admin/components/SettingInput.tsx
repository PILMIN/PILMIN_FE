"use client";

import { useState } from "react";

interface SettingInputProps {
  label: string;
  description?: string;
  type?: "text" | "number";
  defaultValue?: string | number;
  placeholder?: string;
  min?: number;
  max?: number;
  onChange?: (value: string) => void;
}

export default function SettingInput({
  label,
  description,
  type = "text",
  defaultValue = "",
  placeholder,
  min,
  max,
  onChange,
}: SettingInputProps) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div>
      <label className="block">
        <div className="font-medium text-gray-900">{label}</div>
        {description && (
          <div className="mt-1 text-sm text-gray-500">{description}</div>
        )}
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          min={min}
          max={max}
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </label>
    </div>
  );
}
