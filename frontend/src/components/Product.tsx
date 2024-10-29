import { ProductImages } from "./ProductImages";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Badge } from "./ui/badge";

export type ProductType = {
  id: number;
  categories: string[];
  title: string;
  price: string;
  description: string;
  images: string[];
  stars: number;
};

type ProductProps = {
  product: ProductType;
};

export function Product({ product }: ProductProps) {
  const handleClick = () => {
    toast(`${product?.title} has been added to cart!`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <ProductImages images={product.images} />
      <div className="flex flex-col gap-3 justify-start items-start">
        <h2 className="text-2xl md:text-3xl font-bold">{product.title}</h2>
        <hr />
        <span className="flex gap-2">
          {product.categories?.map((category) => (
            <Badge>{category}</Badge>
          ))}
        </span>
        <p className="text-sm md:text-base text-start text-black/80">
          {product.description}
        </p>
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) =>
            index < product.stars ? (
              <MdOutlineStar key={index} className="text-yellow-400 text-xl" />
            ) : (
              <MdOutlineStarBorder
                key={index}
                className="text-yellow-400 text-xl"
              />
            )
          )}
        </div>
        <span className="flex gap-4 items-center">
          <p className="text-xl font-semibold">{product.price}</p>
          <Button onClick={handleClick}>Add to Cart</Button>
        </span>
      </div>
    </div>
  );
}
