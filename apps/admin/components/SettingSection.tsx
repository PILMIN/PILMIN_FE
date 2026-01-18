interface SettingSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  children: React.ReactNode;
}

export default function SettingSection({
  title,
  description,
  icon,
  iconColor,
  children,
}: SettingSectionProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-start gap-3">
        <div className={`rounded-lg ${iconColor} p-2`}>{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
