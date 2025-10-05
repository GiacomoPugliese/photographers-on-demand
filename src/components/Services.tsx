// Services.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChurchIcon, GraduationCap, Users2 } from "lucide-react";
import headshotImage from "@/assets/headshot-service.png";
import graduationImage from "@/assets/graduation-service.png";
import eventImage from "@/assets/event-service.png";

export const Services = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      title: "Chapel Headshots",
      description: "Professional headshots for LinkedIn, social media, and professional profiles.",
      icon: ChurchIcon,
      image: headshotImage,
      features: ["Professional studio setup", "Multiple outfit changes", "High-resolution photos", "Quick turnaround"],
      external: true
    },
    {
      title: "Graduation Photos",
      description: "Capture your special graduation moment with professional photography that you'll treasure forever.",
      icon: GraduationCap,
      image: graduationImage,
      features: ["Campus locations", "Family group shots", "Individual portraits", "Same-day delivery"],
      external: false
    },
    {
      title: "Event Photography",
      description: "Complete event coverage for clubs, Greek life, parties, and campus organizations.",
      icon: Users2,
      image: eventImage,
      features: ["Full event coverage", "Candid & posed shots", "Group photography", "Digital gallery delivery"],
      external: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Our Photography Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional photography services tailored for the university community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 photo-shadow hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative overflow-hidden rounded-t-lg flex justify-center bg-gray-50">
                <div className="w-[80%] aspect-[3/4] overflow-hidden rounded-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col flex-grow justify-between h-full">
                <CardHeader className="pb-1">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-2">{service.description}</p>
                </CardHeader>

                <CardContent className="pt-0 mt-auto">
                  <ul className="space-y-1 mb-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {service.external ? (
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-accent group-hover:text-white transition-colors"
                      asChild
                    >
                      <a
                        href="https://booking.appointy.com/en-US/enterpriseentertainm/bookings/calendar?sr=1111351"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Now
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-accent group-hover:text-white transition-colors"
                      onClick={scrollToBooking}
                    >
                      Book Now
                    </Button>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
