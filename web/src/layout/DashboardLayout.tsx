
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50">

      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">

        <Header />

        <main className="min-w-0 flex-1">
          <Outlet />
        </main>

      </div>

    </div>
  );
}
