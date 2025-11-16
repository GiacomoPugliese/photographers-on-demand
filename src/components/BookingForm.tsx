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
    if (field === "phone") value = formatPhoneNumber(value);
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const url = new URL(
        "https://script.google.com/macros/s/AKfycbwJLvEfLQTm1p328_tUywlGQuw8rxrcyzGlR1NVBDuaAoiXc4q5vv-1pVOS_OXMjwHfmg/exec"
      );

      Object.entries(formData).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });

      await fetch(url.toString(), { method: "GET" });

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
      console.error(err);
      setError("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="pt-12 pb-24 bg-background">
      <div className="container mx-auto px-6">

        <div className="max-w-4xl mx-auto mb-8 px-2 sm:px-0">
          <Button variant="outline" className="flex items-center" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4" />
            Back Home
          </Button>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Reserve Your Event Photographer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll match you with the perfect photographer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="photo-shadow border-0">
            <CardContent className="p-8">

              {submitted ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold text-accent mb-4">Thank you!</h3>
                  <p className="text-muted-foreground">
                    Your booking request has been received. We'll follow up within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-accent" /> Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent" /> Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        maxLength={14}
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent" /> Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent" /> Event Date *
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
                        <Clock className="w-4 h-4 text-accent" /> Start Time *
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
                        <Clock className="w-4 h-4 text-accent" /> End Time *
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
                      <Label htmlFor="eventName">Event Name *</Label>
                      <Input
                        id="eventName"
                        value={formData.eventName}
                        onChange={(e) => handleInputChange("eventName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" /> Location *
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" variant="hero" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                    </Button>

                    {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
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
