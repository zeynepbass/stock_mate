import {
    QueryClient,
    QueryClientProvider,
  } from "@tanstack/react-query";
  
  import { useState } from "react";
  
  import AuthProvider from "@/features/auth/providers/AuthProvider";
  
  interface AppProvidersProps {
    children: React.ReactNode;
  }
  
  export default function AppProviders({
    children,
  }: AppProvidersProps) {
    const [queryClient] = useState(
      () =>
        new QueryClient({
          defaultOptions: {
            queries: {
              staleTime: 30_000,
            },
          },
        })
    );
  
    return (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    );
  }