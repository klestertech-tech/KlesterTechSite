import { Link } from "wouter";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import BenefitCard from "@/components/BenefitCard";
import { Button } from "@/components/ui/button";
import { Zap, Leaf, Wrench, Sun, TrendingUp, Users } from "lucide-react";
import heroImage from "@assets/generated_images/Solar_panels_rooftop_installation_b63b6b05.png";

export default function Home() {
  const stats = [
    { value: "3600+", label: "kW Installed" },
    { value: "200+", label: "Happy Clients" },
    { value: "8+", label: "Years Experience" },
    { value: "24/7", label: "Support" },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Reduce Electricity Bills",
      description: "Significantly lower your monthly electricity expenses with clean, renewable solar energy",
    },
    {
      icon: Leaf,
      title: "Environmental Benefits",
      description: "Reduce your carbon footprint and contribute to a cleaner, healthier environment",
    },
    {
      icon: Wrench,
      title: "Low Maintenance",
      description: "Solar systems require minimal maintenance with self-cleaning panels and durable components",
    },
    {
      icon: Sun,
      title: "Renewable Energy",
      description: "Harness the abundant power of the sun - a truly renewable and sustainable energy source",
    },
    {
      icon: TrendingUp,
      title: "Increase Property Value",
      description: "Solar installations boost property values and provide energy independence",
    },
    {
      icon: Users,
      title: "Job Creation",
      description: "Support local employment and contribute to renewable energy awareness in communities",
    },
  ];

  return (
    <div>
      <Hero
        title="Powering Your Future with Clean Energy"
        subtitle="Leading provider of innovative solar energy solutions in Tamil Nadu. Transform your energy needs with sustainable, cost-effective solar power systems."
        backgroundImage={heroImage}
        showButtons={true}
      />

      <StatsSection stats={stats} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4" data-testid="text-about-title">
                About Klester Tech
              </h2>
              <p className="text-lg text-muted-foreground mb-6" data-testid="text-about-description">
                Committed to delivering innovative renewable energy solutions that combine efficiency, reliability, and long-term value.
              </p>
              <p className="text-muted-foreground mb-6">
                Founded with the vision to empower communities and businesses with clean energy, Klester Solar provides end-to-end services covering every stage of a solar project — feasibility studies, engineering design, procurement, installation, and long-term maintenance.
              </p>
              <Link href="/about">
                <Button data-testid="button-learn-more">Learn More About Us</Button>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={heroImage}
                alt="Solar installation"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4" data-testid="text-benefits-title">
              Why Choose Solar?
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the many benefits of switching to solar energy
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-chart-2">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4" data-testid="text-cta-title">
            Ready to Go Solar?
          </h2>
          <p className="text-lg text-white/90 mb-8" data-testid="text-cta-description">
            Join hundreds of satisfied customers who have made the switch to clean, renewable energy. Get your free consultation today!
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" data-testid="button-cta-contact">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
