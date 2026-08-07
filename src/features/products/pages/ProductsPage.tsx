import ProductListContainer from "../containers/ProductListContainer";
import { Header } from "@/shared/components/molecules/Header";
export default function ProductsPage() {
  return (
    <div>
      <Header title=" ENVANTER" desc="Stok Listesi " />

      <ProductListContainer />
    </div>
  );
}
