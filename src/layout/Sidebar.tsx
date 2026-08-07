
import { NavLink } from "react-router-dom";
import {navigation} from "../shared/mock/navigation"

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white">

      <div className="flex h-16 items-center border-b border-slate-200 px-6">
        <span className="text-lg font-bold text-slate-900">
          StokMate
        </span>
      </div>

      <nav className="flex-1 space-y-1 p-4">

        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              [
                "block rounded-lg px-3 py-2.5 text-sm font-medium transition",
                isActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
              ].join(" ")
            }
          >
            {item.label}
          </NavLink>
        ))}

      </nav>

    </aside>
  );
}

