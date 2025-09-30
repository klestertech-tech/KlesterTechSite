import Hero from "@/components/Hero";
import SolutionCard from "@/components/SolutionCard";
import ProcessSteps from "@/components/ProcessSteps";
import { Home, Building2, Factory, Tractor, Search, Pencil, Package, Wrench, Settings } from "lucide-react";
import residentialImage from "@assets/stock_images/residential_solar_pa_43c6b093.jpg";
import industrialImage from "@assets/stock_images/industrial_factory_w_29acde53.jpg";

export default function Solutions() {
  const solutions = [
    {
      icon: Home,
      title: "Residential Solar",
      description: "Affordable rooftop solar systems for homeowners",
      benefits: ["Up to 90% bill reduction", "25-year warranty", "Property value increase", "Tax benefits"],
    },
    {
      icon: Building2,
      title: "Commercial Solar",
      description: "Solar solutions for offices, schools, malls, and institutions",
      benefits: ["Operational cost savings", "Corporate sustainability", "Tax benefits", "Brand reputation"],
    },
    {
      icon: Factory,
      title: "Industrial Solar",
      description: "Large-scale projects for factories and mills",
      benefits: ["Massive cost reductions", "Stable pricing", "Custom engineering", "Scalable designs"],
    },
    {
      icon: Tractor,
      title: "Solar Farming",
      description: "End-to-end solutions for landowners",
      benefits: ["Long-term returns", "Project management", "Maintenance included", "Land lease opportunities"],
    },
  ];

  const steps = [
    { number: 1, title: "Feasibility Study", description: "Site assessment and energy analysis", icon: Search },
    { number: 2, title: "Engineering Design", description: "Custom system design and optimization", icon: Pencil },
    { number: 3, title: "Procurement", description: "Tier-1 components and equipment sourcing", icon: Package },
    { number: 4, title: "Installation", description: "Professional installation by certified technicians", icon: Wrench },
    { number: 5, title: "Maintenance", description: "Ongoing support and performance monitoring", icon: Settings },
  ];

  return (
    <div>
      <Hero
        title="Tailored Solar Solutions"
        subtitle="We deliver customized solutions that meet the diverse needs of residential, commercial, and industrial customers"
        backgroundImage={industrialImage}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 150}ms`, animationDuration: '700ms' }}
              >
                <SolutionCard {...solution} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4" data-testid="text-process-title">
              Our Solution Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven 5-step approach to delivering successful solar projects
            </p>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ProcessSteps steps={steps} />
          </div>
        </div>
      </section>
    </div>
  );
}
