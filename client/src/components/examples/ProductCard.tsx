import ProductCard from "../ProductCard";
import { Grid3x3 } from "lucide-react";

export default function ProductCardExample() {
  return (
    <ProductCard
      icon={Grid3x3}
      title="On-Grid Solar Power Systems"
      description="Grid-connected systems for maximum cost savings and efficiency"
    />
  );
}
