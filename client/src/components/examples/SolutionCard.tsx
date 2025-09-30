import SolutionCard from "../SolutionCard";
import { Home } from "lucide-react";

export default function SolutionCardExample() {
  return (
    <SolutionCard
      icon={Home}
      title="Residential Solar"
      description="Affordable rooftop solar systems for homeowners"
      benefits={["Up to 90% bill reduction", "25-year warranty", "Property value increase", "Tax benefits"]}
    />
  );
}
