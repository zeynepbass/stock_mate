import { useNavigate } from "react-router-dom";

interface NotFoundProps {
  title?: string;
  description?: string;
  linkText?:string;
  buttonText?:string;
  route?:string;
}

export function NotFound({
  title,
  description,
  linkText,
  buttonText,
  route,
}: NotFoundProps) {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <p className="text-sm font-medium text-slate-400">{title}</p>

      <h1 className="mt-2 text-3xl font-semibold text-slate-900">
        {description}
      </h1>
      <p className="mt-2 text-sm text-slate-500">{linkText}</p>
      <div className="mt-5">
        <button
          type="button"
          onClick={() => navigate(`${route}`)}
          className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
