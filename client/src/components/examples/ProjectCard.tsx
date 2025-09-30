import ProjectCard from "../ProjectCard";

export default function ProjectCardExample() {
  return (
    <ProjectCard
      title="5.4 kW Residential Solar System"
      capacity="5.4 kW"
      investment="₹3.5L"
      savings="85%"
      isFeatured={true}
    />
  );
}
