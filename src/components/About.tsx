// About.tsx

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Camera,
      title: "Professional Photographers",
      description:
        "Access to skilled photographers with experience in university events and professional shoots.",
    },
    {
      icon: Calendar,
      title: "Easy Booking Process",
      description:
        "Simple online booking form - submit your request and get matched with the perfect photographer.",
    },
    {
      icon: Users,
      title: "Campus Focused",
      description:
        "Specialized in university events, Greek life, clubs, and student organization photography.",
    },
  ];

  const process = [
    "Submit your booking request with event details",
    "We match you with the perfect photographer",
    "Receive confirmation within 24 hours",
    "Professional photography on your event day",
    "Get your high-quality photos delivered digitally",
  ];

  const goToBooking = () => {
    navigate("/booking");
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quality Photography,
              <span className="text-accent block">Made Simple</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We connect talented photographers and campus organizations.
              Our platform makes it easy to book professional photography for any event,
              from 1-on-1 headshot sessions to large-scale campus celebrations.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - How It Works */}
          <div>
            <Card className="photo-shadow border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  How It Works
                </h3>

                <div className="space-y-4">
                  {process.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-foreground">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-accent/10 rounded-lg text-center">
                  <h4 className="font-semibold text-lg mb-2">
                    Ready to get started?
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Join hundreds of satisfied campus organizations
                  </p>
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={goToBooking}
                  >
                    Book Your Photographer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
