import { Camera, Mail, Phone, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Camera className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold">Photographers on Demand</span>
            </div>
            <p className="text-primary-foreground/80">
              Professional photography services for campus organizations, Greek life, and student clubs.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Chapel Headshots</li>
              <li>Graduation Photos</li>
              <li>Event Photography</li>
              <li>Group Sessions</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>book@photographersondemand.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <Instagram className="w-6 h-6 text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer" />
              <Facebook className="w-6 h-6 text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer" />
            </div>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Photographers on Demand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};