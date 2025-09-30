import ProcessSteps from "../ProcessSteps";
import { Search, Pencil, Package, Wrench, Settings } from "lucide-react";

export default function ProcessStepsExample() {
  const steps = [
    { number: 1, title: "Feasibility Study", description: "Site assessment and energy analysis", icon: Search },
    { number: 2, title: "Engineering Design", description: "Custom system design and optimization", icon: Pencil },
    { number: 3, title: "Procurement", description: "Tier-1 components sourcing", icon: Package },
    { number: 4, title: "Installation", description: "Professional installation", icon: Wrench },
    { number: 5, title: "Maintenance", description: "Ongoing support", icon: Settings },
  ];

  return <ProcessSteps steps={steps} />;
}
