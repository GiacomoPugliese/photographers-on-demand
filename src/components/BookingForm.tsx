// BookingForm.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Phone, Mail, User, ArrowLeft } from "lucide-react";

export const BookingForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    startTime: "",
    endTime: "",
    shootType: "",
    eventName: "",
    location: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return value;
    const [, area, prefix, line] = match;
    if (line) return `(${area}) ${prefix}-${line}`;
    if (prefix) return `(${area}) ${prefix}`;
    if (area) return `(${area}`;
    return "";
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "phone") {
      value = formatPhoneNumber(value);
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyH8yEHnON2S43p4yQsQvSZ3-HMNp3LrMoyTaPv3NCbzs7q161M_uBACTDDcYCWaoRM/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        startTime: "",
        endTime: "",
        shootType: "",
        eventName: "",
        location: "",
        additionalInfo: "",
      });
    } catch (err) {
      setError("Failed to submit. Please try again later.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="pt-12 pb-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Back Button - aligned with form container */}
        <div className="max-w-4xl mx-auto mb-8 px-2 sm:px-0">
          <Button
            variant="outline"
            className="flex items-center"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4" />
            Back Home
          </Button>
        </div>

        {/* Title and Subtitle */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Reserve Your Event Photographer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll match you with the perfect photographer for your event.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="photo-shadow border-0">
            <CardContent className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold text-accent mb-4">Thank you!</h3>
                  <p className="text-muted-foreground">
                    Your booking request has been received. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-accent" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your first and last name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        inputMode="numeric"
                        maxLength={14}
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  {/* Event Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent" />
                        Event Date *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="startTime" className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent" />
                        Start Time *
                      </Label>
                      <Input
                        id="startTime"
                        type="time"
                        value={formData.startTime}
                        onChange={(e) => handleInputChange("startTime", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="endTime" className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent" />
                        End Time *
                      </Label>
                      <Input
                        id="endTime"
                        type="time"
                        value={formData.endTime}
                        onChange={(e) => handleInputChange("endTime", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Shoot Type and Event Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="shootType">Type of Shoot *</Label>
                      <Select onValueChange={(value) => handleInputChange("shootType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select shoot type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="graduation">Graduation</SelectItem>
                          <SelectItem value="party">Party</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eventName">Event Name or Occasion *</Label>
                      <Input
                        id="eventName"
                        value={formData.eventName}
                        onChange={(e) => handleInputChange("eventName", e.target.value)}
                        placeholder="e.g., Spring Formal, Graduation Ceremony"
                        required
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      Location *
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="e.g., Duke Chapel, Central Campus, Gardens"
                      required
                    />
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Anything else we should know?</Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                      placeholder="Special requests, number of people, specific shots needed, etc."
                      rows={4}
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      variant="hero"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                    </Button>
                    {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
                    <p className="text-sm text-muted-foreground mt-4">
                      * Required fields. We'll send you a copy of your submission and respond within 24 hours.
                    </p>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
