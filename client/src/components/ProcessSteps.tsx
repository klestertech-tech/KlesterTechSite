import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ProcessStepsProps {
  steps: Step[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <Card key={step.number} className="relative hover-elevate transition-all" data-testid={`card-step-${step.number}`}>
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl font-mono">
                {step.number}
              </div>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold" data-testid={`text-step-title-${step.number}`}>{step.title}</h3>
              <p className="text-sm text-muted-foreground" data-testid={`text-step-description-${step.number}`}>{step.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
