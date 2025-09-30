import StatsSection from "../StatsSection";

export default function StatsSectionExample() {
  const stats = [
    { value: "3600+", label: "kW Installed" },
    { value: "200+", label: "Happy Clients" },
    { value: "8+", label: "Years Experience" },
    { value: "24/7", label: "Support" },
  ];

  return <StatsSection stats={stats} />;
}
