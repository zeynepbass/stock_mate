import { NotFound } from "@/shared/components/molecules/NotFound";

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <NotFound
        title="403"
        description="       Erişim engellendi"
        linkText="      Bu sayfaya erişim izniniz yok."
        buttonText="Giriş yap"
        route="/giris-yap"
      />
    </div>
  );
}
