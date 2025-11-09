// Hero.tsx

import { Button } from "@/components/ui/button";
import { Camera, Users, CalendarCheck } from "lucide-react";
import heroImage from "@/assets/hero-photography.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional photographer capturing university event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Photographers
            <span className="block text-accent">On Demand</span>
          </h1>

          <p className="text-base md:text-xl mb-8 text-white/110 max-w-2xl mx-auto leading-relaxed">
            Professional photography services for clubs, Greek life, and campus organizations.
            Book your photographer today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 items-center">
            <Button
              size="xl"
              variant="hero"
              className="w-1/2 sm:w-56 justify-center shrink-0"
              onClick={() => {
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Services
            </Button>

            <Button
              size="xl"
              variant="professional"
              asChild
              className="w-1/2 sm:w-56 justify-center shrink-0 transition-colors duration-300 hover:bg-gray-300 hover:text-black"
            >
              <a
                href="https://www.instagram.com/enterprise.entertainment/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Our Work
              </a>
            </Button>
          </div>

          {/* Stats - Visible only on desktop */}
          <div className="hidden md:grid grid-cols-2 max-w-xl mx-auto">

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-bold">200+</div>
              <div className="text-white/100">Happy Customers</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                <CalendarCheck className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-bold">24hr</div>
              <div className="text-white/100">Booking Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
