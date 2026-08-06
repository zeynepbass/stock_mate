
import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";

import {
  useAuthStore,
} from "@/features/auth/store/auth.store";

export default function ProtectedRoute() {
  const location = useLocation();

  const accessToken = useAuthStore(
    (state) => state.accessToken
  );

  const isHydrated = useAuthStore(
    (state) => state.isHydrated
  );

  if (!isHydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-slate-500">
          Loading...
        </p>
      </div>
    );
  }

  if (!accessToken) {
    return (
      <Navigate
        to="/401"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  return <Outlet />;
}
