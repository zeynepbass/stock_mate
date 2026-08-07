


import { NotFound } from "@/shared/components/molecules/NotFound";
export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">


      <NotFound
      title="404"
      description="Bu sayfa Bulunamadı"
      linkText="Böyle bir sayfa bulunamadı."
              buttonText="Ürünlere git"
        route="/urunler"
    />



    </div>
  );
}
