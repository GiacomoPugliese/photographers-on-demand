import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, GraduationCap, Users2 } from "lucide-react";
import headshotImage from "@/assets/headshot-service.jpg";
import graduationImage from "@/assets/graduation-service.jpg";
import eventImage from "@/assets/event-service.jpg";

export const Services = () => {
  const services = [
    {
      title: "Chapel Headshots",
      description: "Professional headshots for LinkedIn, social media, and professional profiles. Perfect for students and professionals.",
      icon: Camera,
      image: headshotImage,
      features: ["Professional studio setup", "Multiple outfit changes", "High-resolution photos", "Quick turnaround"]
    },
    {
      title: "Graduation Photos",
      description: "Capture your special graduation moment with professional photography that you'll treasure forever.",
      icon: GraduationCap,
      image: graduationImage,
      features: ["Campus locations", "Family group shots", "Individual portraits", "Same-day delivery"]
    },
    {
      title: "Event Photography",
      description: "Complete event coverage for clubs, Greek life, parties, and campus organizations.",
      icon: Users2,
      image: eventImage,
      features: ["Full event coverage", "Candid & posed shots", "Group photography", "Digital gallery delivery"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Photography Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional photography services tailored for the university community
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-0 photo-shadow hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};