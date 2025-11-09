// pages/Booking.tsx
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";

const Booking = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-10"> 
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
