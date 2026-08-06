interface StatusBadgeProps {
  status: number;
}

const statusMap: Record<
  number,
  {
    label: string;
    className: string;
  }
> = {
  1: {
    label: "Aktif",
    className: "bg-green-100 text-green-700",
  },
  2: {
    label: "Pasif",
    className: "bg-slate-100 text-slate-600",
  },
  3: {
    label: "Durduruldu",
    className: "bg-red-100 text-red-700",
  },
};

export function StatusBadge({
  status,
}: StatusBadgeProps) {
  const current = statusMap[status];

  if (!current) {
    return (
      <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
        -
      </span>
    );
  }

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${current.className}`}
    >
      {current.label}
    </span>
  );
}