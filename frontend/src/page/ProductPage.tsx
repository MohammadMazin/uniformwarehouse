import { apiUrl } from "@/utils/constants";
import { BreadcrumbView } from "@/components/Breadcrumb";
import { SkeletonCard } from "@/components/Loading";
import { Product, ProductType } from "@/components/Product";
import axios from "axios";
import { useEffect, useState } from "react";

export function ProductPage() {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = async () => {
    try {
      const response = await axios.get<ProductType>(`${apiUrl}api/products`);
      setProduct(response.data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) return <SkeletonCard />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col bg-white shadow p-4 rounded-xl my-8 gap-4 items-start justify-center max-w-[1050px] mx-auto">
      <BreadcrumbView />
      {product ? <Product product={product} /> : <p>Product not Found</p>}
    </div>
  );
}
