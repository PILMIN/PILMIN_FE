"use client";

import { useState } from "react";

interface SettingTextareaProps {
  label: string;
  description?: string;
  defaultValue?: string;
  placeholder?: string;
  maxLength?: number;
  rows?: number;
  onChange?: (value: string) => void;
}

export default function SettingTextarea({
  label,
  description,
  defaultValue = "",
  placeholder,
  maxLength,
  rows = 4,
  onChange,
}: SettingTextareaProps) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        <textarea
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={rows}
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </label>
    </div>
  );
}
