import Hero from "@/components/Hero";
import ImpactCard from "@/components/ImpactCard";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Leaf, Zap, Users2, MapPin, Phone, Mail } from "lucide-react";

export default function About() {
  const missions = [
    "Promote solar energy to reduce carbon emissions",
    "Provide accessible and affordable clean energy solutions",
    "Enhance energy independence and sustainability",
    "Educate communities about solar power benefits",
  ];

  const impacts = [
    {
      icon: DollarSign,
      title: "Economic Benefits",
      description: "Lower electricity expenses, strong return on investment, and asset value appreciation",
    },
    {
      icon: Leaf,
      title: "Environmental Benefits",
      description: "Major reduction in carbon emissions, cleaner air, and climate change mitigation",
    },
    {
      icon: Zap,
      title: "Operational Benefits",
      description: "Reliable power supply, minimal downtime, and extended system lifespan",
    },
    {
      icon: Users2,
      title: "Social Benefits",
      description: "Local job creation, renewable energy awareness, and alignment with corporate social responsibility",
    },
  ];

  return (
    <div>
      <Hero
        title="About Klester Tech"
        subtitle="Committed to delivering innovative renewable energy solutions that combine efficiency, reliability, and long-term value."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8" data-testid="text-story-title">
            Our Story
          </h2>
          <div className="prose max-w-none text-muted-foreground">
            <p className="text-lg mb-6">
              Founded with the vision to empower communities and businesses with clean energy, Klester Tech has grown to become a leading provider of solar energy solutions in Tamil Nadu. We provide end-to-end services covering every stage of a solar project — from initial feasibility studies to engineering design, procurement, installation, and long-term maintenance.
            </p>
            <p className="text-lg mb-6">
              Our portfolio includes a diverse range of projects across residential, commercial, and industrial sectors. With over 3600+ kW of solar capacity installed and 200+ satisfied clients, we have proven our expertise in delivering reliable and efficient solar solutions.
            </p>
            <p className="text-lg">
              We work exclusively with Tier-1 components and maintain the highest standards of quality in all our installations. Our commitment to excellence and customer satisfaction has made us a trusted name in the solar energy industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4" data-testid="text-mission-title">
              Our Mission & Goals
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {missions.map((mission, index) => (
              <Card key={index} className="hover-elevate transition-all" data-testid={`card-mission-${index}`}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg" data-testid={`text-mission-${index}`}>{mission}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4" data-testid="text-impact-title">
              Our Impact
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {impacts.map((impact, index) => (
              <ImpactCard key={index} {...impact} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4" data-testid="text-details-title">
              Company Details
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Office Address</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-office-address">
                      54/8, TVR Complex, 1st Floor, Old Bus Stand Road, Perundurai, Erode, Tamil Nadu – 638052
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-phone-numbers">
                      +91 819 000 2299<br />
                      +91 868 100 2299<br />
                      +91 868 200 2299
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-email">
                      boopathy@klestertech.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Our Commitment</h3>
                <p className="text-muted-foreground">
                  At Klester Tech, we are committed to driving the clean energy transition by providing innovative, reliable, and cost-effective solar solutions. We believe in building long-term relationships with our clients and supporting them throughout their solar journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
