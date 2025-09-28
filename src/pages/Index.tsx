import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="booking">
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
