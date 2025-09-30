import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Zap, Users, Headphones } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content: "54/8, TVR Complex, 1st Floor, Old Bus Stand Road, Perundurai, Erode, Tamil Nadu – 638052",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 819 000 2299\n+91 868 100 2299\n+91 868 200 2299",
    },
    {
      icon: Mail,
      title: "Email",
      content: "boopathy@klestertech.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Saturday: 9:00 AM - 6:00 PM\nSunday: Closed\n24/7 Emergency Support Available",
    },
  ];

  const reasons = [
    {
      icon: Zap,
      title: "Fast Response",
      description: "Quick quotes within 24 hours",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated team of solar engineers and project managers",
    },
    {
      icon: Headphones,
      title: "Ongoing Service",
      description: "Long-term maintenance and performance monitoring",
    },
  ];

  return (
    <div>
      <Hero
        title="Get In Touch"
        subtitle="Ready to start your solar journey? Contact our experts for a free consultation and customized quote"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6" data-testid="text-form-title">Request a Quote</h2>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6" data-testid="text-contact-info-title">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} data-testid={`card-contact-${index}`}>
                        <CardContent className="p-4 flex items-start gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium mb-1">{info.title}</p>
                            <p className="text-sm text-muted-foreground whitespace-pre-line" data-testid={`text-contact-${index}`}>
                              {info.content}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4" data-testid="text-why-choose-title">
              Why Choose Us?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card 
                  key={index} 
                  className="hover-elevate transition-all animate-in fade-in slide-in-from-bottom-4" 
                  style={{ animationDelay: `${index * 100}ms`, animationDuration: '600ms' }}
                  data-testid={`card-reason-${index}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2" data-testid={`text-reason-title-${index}`}>{reason.title}</h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-reason-description-${index}`}>{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
