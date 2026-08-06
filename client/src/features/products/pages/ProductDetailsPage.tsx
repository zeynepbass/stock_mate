import ProductDetailContainer from "../containers/ProductDetailContainer";
import { Header } from "@/shared/components/molecules/Header";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();

  return (
    <div >
      <Header title="ENVANTER" desc="Ürün Detay" />



      <ProductDetailContainer id={Number(id)} />
    </div>
  );
}
