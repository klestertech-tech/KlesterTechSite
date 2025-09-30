import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProductCard({ icon: Icon, title, description }: ProductCardProps) {
  return (
    <Card className="hover-elevate transition-all" data-testid={`card-product-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <CardTitle className="text-xl" data-testid="text-product-title">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground" data-testid="text-product-description">{description}</p>
      </CardContent>
    </Card>
  );
}
