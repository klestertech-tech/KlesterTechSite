import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <Card className="hover-elevate transition-all" data-testid={`card-benefit-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl" data-testid="text-benefit-title">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground" data-testid="text-benefit-description">{description}</p>
      </CardContent>
    </Card>
  );
}
