import ImpactCard from "../ImpactCard";
import { DollarSign } from "lucide-react";

export default function ImpactCardExample() {
  return (
    <ImpactCard
      icon={DollarSign}
      title="Economic Benefits"
      description="Lower electricity expenses, strong return on investment, and asset value appreciation"
    />
  );
}
