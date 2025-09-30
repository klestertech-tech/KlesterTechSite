import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

export default function SolutionCard({ icon: Icon, title, description, benefits }: SolutionCardProps) {
  return (
    <Card className="hover-elevate transition-all" data-testid={`card-solution-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl" data-testid="text-solution-title">{title}</CardTitle>
        <p className="text-muted-foreground" data-testid="text-solution-description">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm font-medium">Key Benefits:</p>
          <div className="flex flex-wrap gap-2">
            {benefits.map((benefit, index) => (
              <Badge key={index} variant="secondary" data-testid={`badge-benefit-${index}`}>
                {benefit}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
