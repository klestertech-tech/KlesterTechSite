import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ImpactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ImpactCard({ icon: Icon, title, description }: ImpactCardProps) {
  return (
    <Card className="hover-elevate transition-all" data-testid={`card-impact-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-chart-1/10">
          <Icon className="h-7 w-7 text-chart-1" />
        </div>
        <CardTitle className="text-xl" data-testid="text-impact-title">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground" data-testid="text-impact-description">{description}</p>
      </CardContent>
    </Card>
  );
}
