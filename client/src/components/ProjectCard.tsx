import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  capacity: string;
  investment: string;
  savings: string;
  isFeatured?: boolean;
}

export default function ProjectCard({ 
  title, 
  capacity, 
  investment, 
  savings, 
  isFeatured = false 
}: ProjectCardProps) {
  return (
    <Card className={`overflow-hidden hover-elevate transition-all ${isFeatured ? 'col-span-full' : ''}`} data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative h-64 bg-gradient-to-br from-primary/20 to-chart-2/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4" data-testid="text-project-title">{title}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge className="bg-primary text-primary-foreground" data-testid="badge-capacity">
                Capacity: {capacity}
              </Badge>
              <Badge variant="secondary" data-testid="badge-investment">
                Investment: {investment}
              </Badge>
              <Badge className="bg-chart-1 text-white" data-testid="badge-savings">
                Savings: {savings}
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground">
          {isFeatured 
            ? "Complete on-grid solar installation designed using SketchUp" 
            : "Professional solar installation project"}
        </p>
      </CardContent>
    </Card>
  );
}
