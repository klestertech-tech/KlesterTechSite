import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/solutions", label: "Solutions" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2" data-testid="link-home">
          <img src="/attached_assets/logo_1759233854718.png" alt="Klester Tech" className="h-10" />
        </Link>

        <div className="hidden md:flex md:gap-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              <span
                className={`relative text-sm font-medium transition-all duration-200 hover:text-primary ${
                  location === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
                {location === item.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                )}
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link href="/contact">
            <Button data-testid="button-get-quote">Get Free Quote</Button>
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t animate-in slide-in-from-top-2 duration-200" data-testid="mobile-menu">
          <div className="space-y-1 px-6 py-4">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                <span
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-all duration-200 hover:bg-accent hover-elevate ${
                    location === item.path
                      ? "text-primary bg-accent"
                      : "text-muted-foreground"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full mt-4" data-testid="button-mobile-quote">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
