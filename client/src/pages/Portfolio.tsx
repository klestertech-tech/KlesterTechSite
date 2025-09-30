import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import StatsSection from "@/components/StatsSection";

export default function Portfolio() {
  const featuredProjects = [
    {
      title: "5.4 kW Residential Solar System",
      capacity: "5.4 kW",
      investment: "₹3.5L",
      savings: "85%",
      isFeatured: true,
    },
    {
      title: "600 kW Spinning Mill Project",
      capacity: "600 kW",
      investment: "₹3.2Cr",
      savings: "70%",
      isFeatured: true,
    },
  ];

  const additionalProjects = [
    { title: "Commercial Office", capacity: "25 kW", investment: "₹15L", savings: "75%" },
    { title: "Educational Institution", capacity: "50 kW", investment: "₹30L", savings: "80%" },
    { title: "Residential Community", capacity: "100 kW", investment: "₹60L", savings: "82%" },
    { title: "Manufacturing Unit", capacity: "365 kW", investment: "₹2Cr", savings: "72%" },
    { title: "Solar Farm", capacity: "1 MW", investment: "₹5Cr", savings: "68%" },
    { title: "Hospital Complex", capacity: "75 kW", investment: "₹45L", savings: "78%" },
  ];

  const impactStats = [
    { value: "3600+", label: "kW Total Installed" },
    { value: "150+", label: "Projects Completed" },
    { value: "₹5Cr+", label: "Total Investment" },
    { value: "6000+", label: "Tons CO₂ Saved" },
  ];

  return (
    <div>
      <Hero
        title="Our Project Portfolio"
        subtitle="Showcasing our successful solar installations across residential, commercial, and industrial sectors"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4" data-testid="text-featured-title">
              Featured Projects
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4" data-testid="text-gallery-title">
              Project Gallery
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {additionalProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4" data-testid="text-impact-stats-title">
              Impact Statistics
            </h2>
            <p className="text-lg text-muted-foreground">
              Measuring our contribution to clean energy
            </p>
          </div>
          <StatsSection stats={impactStats} />
        </div>
      </section>
    </div>
  );
}
