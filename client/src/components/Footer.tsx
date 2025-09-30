import { Link } from "wouter";
import { Sun, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Klester Tech</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Leading provider of innovative solar energy solutions in Tamil Nadu.
            </p>
            <p className="text-xs text-muted-foreground">GSTIN: 33CCKPB0540E1ZC</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-residential">
                    Residential Solar
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-commercial">
                    Commercial Solar
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-industrial">
                    Industrial Solar
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-farming">
                    Solar Farming
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-products">
                    Products
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-portfolio">
                    Portfolio
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground" data-testid="text-footer-address">
                  54/8, TVR Complex, 1st Floor, Old Bus Stand Road, Perundurai, Erode, Tamil Nadu – 638052
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground" data-testid="text-footer-phone">
                  +91 819 000 2299
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground" data-testid="text-footer-email">
                  boopathy@klestertech.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Klester Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
