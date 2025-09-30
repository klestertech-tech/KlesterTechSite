import Hero from "../Hero";
import heroImage from "@assets/generated_images/Solar_panels_rooftop_installation_b63b6b05.png";

export default function HeroExample() {
  return (
    <Hero
      title="Powering Your Future with Clean Energy"
      subtitle="Leading provider of innovative solar energy solutions in Tamil Nadu"
      backgroundImage={heroImage}
      showButtons={true}
    />
  );
}
