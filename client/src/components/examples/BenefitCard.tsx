import BenefitCard from "../BenefitCard";
import { Zap } from "lucide-react";

export default function BenefitCardExample() {
  return (
    <BenefitCard
      icon={Zap}
      title="Reduce Electricity Bills"
      description="Significantly lower your monthly electricity expenses with clean, renewable solar energy"
    />
  );
}
