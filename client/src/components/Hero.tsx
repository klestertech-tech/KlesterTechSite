import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  showButtons?: boolean;
  logo?: string;
}

export default function Hero({ title, subtitle, backgroundImage, showButtons = false, logo }: HeroProps) {
  return (
    <div className="relative isolate overflow-hidden">
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 to-chart-2/90" />
        </>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-chart-2/10" />
      )}

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {logo ? (
            <div className="flex justify-center mb-10">
              <img src={logo} alt="Klester Tech" className="h-32 md:h-40 lg:h-48" />
            </div>
          ) : (
            <>
              <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${backgroundImage ? 'text-white' : 'text-foreground'}`} data-testid="text-hero-title">
                {title}
              </h1>
              <p className={`mt-6 text-lg leading-8 ${backgroundImage ? 'text-white/90' : 'text-muted-foreground'}`} data-testid="text-hero-subtitle">
                {subtitle}
              </p>
            </>
          )}
          {showButtons && (
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <Link href="/contact">
                <Button size="lg" data-testid="button-hero-quote">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" 
                  data-testid="button-hero-learn"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
