import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Grid3x3, Battery, Droplet, Power, Lightbulb, BarChart3, Cpu, Wifi, Sun, Cloud, Box, Gauge } from "lucide-react";
import productsHeroImage from "@assets/stock_images/clean_energy_solar_p_a7b90505.jpg";

export default function Products() {
  const products = [
    {
      icon: Grid3x3,
      title: "On-Grid Solar Power Systems",
      description: "Grid-connected systems for maximum cost savings and efficiency",
    },
    {
      icon: Battery,
      title: "Hybrid Solar Systems",
      description: "Solar plus battery storage for uninterrupted power supply",
    },
    {
      icon: Droplet,
      title: "Solar Water Heaters",
      description: "Eco-friendly and cost-effective water heating solutions",
    },
    {
      icon: Power,
      title: "UPS & Batteries",
      description: "Reliable backup power solutions",
    },
    {
      icon: Lightbulb,
      title: "Solar Street Lights",
      description: "Sustainable outdoor lighting for urban and rural applications",
    },
    {
      icon: BarChart3,
      title: "Solar Monitoring Systems",
      description: "Real-time performance monitoring and analytics",
    },
  ];

  const technologies = [
    { icon: Cpu, name: "High-efficiency Mono PERC Solar Modules" },
    { icon: Wifi, name: "Advanced String Inverters with real-time monitoring" },
    { icon: Sun, name: "Photovoltaic Solar Panels" },
    { icon: Grid3x3, name: "Smart Grid Integration" },
    { icon: Cloud, name: "Weather-resistant Mounting Structures" },
    { icon: Gauge, name: "Smart Energy Management Systems" },
  ];

  return (
    <div>
      <Hero
        title="Our Solar Products"
        subtitle="Comprehensive range of solar-powered products designed for homes, businesses, and industries"
        backgroundImage={productsHeroImage}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms`, animationDuration: '600ms' }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4" data-testid="text-tech-title">
              Advanced Solar Technologies
            </h2>
            <p className="text-lg text-muted-foreground">
              We use cutting-edge technology and Tier-1 components for all our installations
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-lg border bg-background p-4 hover-elevate transition-all animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 80}ms`, animationDuration: '500ms' }}
                  data-testid={`tech-${index}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-medium" data-testid={`text-tech-${index}`}>{tech.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
