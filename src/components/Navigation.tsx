// Navigation.tsx

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const goHome = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setIsMenuOpen(false);
  };

  const goToBooking = () => {
    navigate("/booking");
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={goHome}
            className="flex items-center gap-2 text-left focus:outline-none hover:text-accent transition-colors"
          >
            <Camera className="w-8 h-8 text-accent" />
            <span className="text-xl font-bold">Photographers on Demand</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={goToBooking}
              className="text-foreground hover:text-accent transition-colors"
            >
              Event Booking
            </button>
            <Button variant="hero" asChild>
              <a
                href="https://booking.appointy.com/en-US/enterpriseentertainm/bookings/calendar?sr=1111351"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chapel Headshots
              </a>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col gap-6 items-center text-center">
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground text-lg hover:text-accent transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground text-lg hover:text-accent transition-colors"
              >
                About
              </button>
              <button
                onClick={goToBooking}
                className="text-foreground text-lg hover:text-accent transition-colors"
              >
                Event Booking
              </button>
              <Button variant="hero" asChild className="w-full max-w-xs">
                <a
                  href="https://booking.appointy.com/en-US/enterpriseentertainm/bookings/calendar?sr=1111351"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chapel Headshots
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
