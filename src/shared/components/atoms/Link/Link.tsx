import { Link } from "react-router-dom";

interface AppLinkProps {
  desc: string;
  route: string;
  className?: string;
}

export function Lınk({
  desc,
  route,
  className = "",
}: AppLinkProps) {
  return (
    <div className="mb-6">
    <Link
      to={route}
      className={`text-sm font-medium text-slate-500 hover:text-slate-900 ${className}`}
    >
      {desc}
    </Link>
    </div>
  );
}