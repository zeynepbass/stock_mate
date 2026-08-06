import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { router } from "./router";
import AppProviders from "./providers/AppProviders";

import { useAuthStore } from "@/features/auth/store/auth.store";

export default function App() {
  const hydrate = useAuthStore(
    (state) => state.hydrate
  );

  const isHydrated = useAuthStore(
    (state) => state.isHydrated
  );

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  if (!isHydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-500">
          Uygulama yükleniyor...
        </p>
      </div>
    );
  }

  return (
    <AppProviders>
      <RouterProvider router={router} />
      <Toaster />
    </AppProviders>
  );
}