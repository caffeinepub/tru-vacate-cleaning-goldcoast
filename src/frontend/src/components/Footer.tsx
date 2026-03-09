import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Sparkles } from "lucide-react";

const suburbs = [
  "Surfers Paradise",
  "Southport",
  "Broadbeach",
  "Robina",
  "Varsity Lakes",
  "Mudgeeraba",
  "Coomera",
  "Hope Island",
  "Runaway Bay",
  "Labrador",
  "Nerang",
  "Burleigh Heads",
  "Palm Beach",
  "Coolangatta",
  "Tweed Heads",
];

const services = [
  { label: "Vacate Cleaning", href: "/services/vacate-cleaning" },
  { label: "Bond Cleaning", href: "/services/bond-cleaning" },
  { label: "End of Lease Cleaning", href: "/services/end-of-lease-cleaning" },
  { label: "Carpet Steam Cleaning", href: "/services/carpet-steam-cleaning" },
  { label: "Oven & Kitchen Cleaning", href: "/services/oven-kitchen-cleaning" },
  { label: "Window Cleaning", href: "/services/window-cleaning" },
  { label: "Bathroom Cleaning", href: "/services/bathroom-cleaning" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-teal flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-lg leading-none">
                  Tru Vacate
                </div>
                <div className="font-display font-semibold text-xs text-primary leading-none mt-0.5">
                  Cleaning Gold Coast
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              Gold Coast's most trusted vacate and bond cleaning service. We
              help you get your full bond back — guaranteed.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Gold Coast, QLD, Australia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:0488841883"
                  className="hover:text-white transition-colors"
                >
                  0488 841 883
                </a>
              </div>
            </div>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-md text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Contact & Free Quote
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  All Services
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-white/50">ABN: Available on request</p>
            </div>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4">
              Areas We Serve
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {suburbs.map((suburb) => (
                <span
                  key={suburb}
                  className="text-xs bg-white/10 text-white/70 rounded px-2 py-0.5"
                >
                  {suburb}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {year} Tru Vacate Cleaning Gold Coast. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
