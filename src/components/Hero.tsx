import { Button } from "@/components/ui/button";
import { Camera, Users, CalendarCheck } from "lucide-react";
import heroImage from "@/assets/hero-photography.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Photographers
            <span className="block text-accent">On Demand</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Professional photography services for clubs, Greek life, and campus organizations. 
            Book your photographer today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="xl" variant="hero" className="group">
              <Camera className="w-5 h-5 group-hover:rotate-6 transition-transform" />
              Book Your Session
            </Button>
            <Button size="xl" variant="professional">
              View Our Work
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                <Camera className="w-8 h-8 text-accent" />
              </div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-white/80">Professional Photographers</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="text-2xl font-bold">200+</div>
              <div className="text-white/80">Events Captured</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                <CalendarCheck className="w-8 h-8 text-accent" />
              </div>
              <div className="text-2xl font-bold">24hr</div>
              <div className="text-white/80">Booking Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};