// Footer.tsx

import { Camera, Mail, MapPin, Instagram, Globe, MapIcon } from "lucide-react";

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
                <a
                  href="mailto:info@campusenterprises.org"
                  className="hover:text-accent transition-colors"
                >
                  info@campusenterprises.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <a

                  className="hover:text-accent transition-colors"
                >
                  323 East Chapel Hill Street PO Box 907
                </a>
              </div>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/enterprise.entertainment/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-6 h-6 cursor-pointer" />
              </a>

              <a
                href="https://www.campus-enterprises.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label="Visit our website"
              >
                <Globe className="w-6 h-6 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Photographers on Demand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
