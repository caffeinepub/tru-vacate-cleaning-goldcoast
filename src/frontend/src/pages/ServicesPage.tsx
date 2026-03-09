import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SEOHead } from "../components/SEOHead";

const services = [
  {
    title: "Vacate Cleaning",
    desc: "Complete top-to-bottom clean when you move out. We cover every room, every surface — kitchens, bathrooms, floors, windows, and more. Guaranteed to meet your property manager's checklist.",
    href: "/services/vacate-cleaning",
    img: "/assets/generated/hero-vacate-cleaning-gold-coast.dim_1200x600.jpg",
    alt: "Professional vacate cleaning team at a Gold Coast apartment – Tru Vacate Cleaning Gold Coast",
    badge: "Most Popular",
  },
  {
    title: "Bond Cleaning",
    desc: "We clean to REIQ (Real Estate Institute of Queensland) standards. Our bond clean checklist covers every area your property manager will inspect. Bond back or we re-clean free.",
    href: "/services/bond-cleaning",
    img: "/assets/generated/service-bond-cleaning-bathroom.dim_800x500.jpg",
    alt: "Bond cleaning bathroom service Gold Coast – Tru Vacate Cleaning",
    badge: "Guaranteed",
  },
  {
    title: "End of Lease Cleaning",
    desc: "Moving out? We handle the heavy cleaning so you can focus on the move itself. Our end of lease clean makes sure you leave the property in perfect condition.",
    href: "/services/end-of-lease-cleaning",
    img: "/assets/generated/service-end-of-lease-cleaning.dim_800x500.jpg",
    alt: "End of lease cleaning service Gold Coast – Tru Vacate Cleaning",
    badge: null,
  },
  {
    title: "Carpet Steam Cleaning",
    desc: "Hot-water extraction removes stains, odours, dust mites, and allergens deep from your carpet fibres. We use commercial-grade steam cleaning equipment for results you can see and smell.",
    href: "/services/carpet-steam-cleaning",
    img: "/assets/generated/service-carpet-steam-cleaning.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning Gold Coast – Tru Vacate Cleaning",
    badge: null,
  },
  {
    title: "Oven & Kitchen Cleaning",
    desc: "We remove years of baked-on grease, burnt-on food, and grime from your oven, stovetop, rangehood, and kitchen surfaces. Your kitchen will look showroom clean.",
    href: "/services/oven-kitchen-cleaning",
    img: "/assets/generated/service-oven-kitchen-cleaning.dim_800x500.jpg",
    alt: "Oven and kitchen deep clean service Gold Coast – Tru Vacate Cleaning",
    badge: null,
  },
  {
    title: "Window Cleaning",
    desc: "Crystal-clear, streak-free windows inside and out — every time. We use professional window cleaning tools and eco-safe solutions to leave your glass sparkling.",
    href: "/services/window-cleaning",
    img: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    alt: "Window cleaning service Gold Coast – Tru Vacate Cleaning",
    badge: null,
  },
  {
    title: "Bathroom & Toilet Cleaning",
    desc: "We scrub, sanitise, and shine every surface — tiles, grout, fixtures, mirrors, and floors. Bathrooms are one of the most inspected areas in any bond clean. We make sure yours passes.",
    href: "/services/bathroom-cleaning",
    img: "/assets/generated/service-bond-cleaning-bathroom.dim_800x500.jpg",
    alt: "Bond cleaning bathroom service Gold Coast – Tru Vacate Cleaning",
    badge: null,
  },
];

export function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Cleaning Services Gold Coast | Vacate, Bond & End of Lease | Tru Vacate Cleaning"
        description="Full range of professional cleaning services in Gold Coast. Vacate cleaning, bond cleaning, carpet steam cleaning, oven cleaning, window cleaning and more. Free quotes."
        canonical="/services"
      />

      {/* Hero */}
      <section className="gradient-hero text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Our Cleaning Services
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-8">
            From vacate cleans to carpet steam cleaning — we handle it all.
            Every service comes with our 100% bond back guarantee.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold"
          >
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <article
                key={service.href}
                data-ocid={`service.item.${i + 1}`}
                className="bg-card rounded-2xl overflow-hidden border border-border card-hover group"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={service.img}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {service.badge && (
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="font-display font-bold text-lg text-card-foreground mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex gap-3">
                    <Button asChild size="sm" className="flex-1">
                      <Link to={service.href}>
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/contact">Quote</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/80 mb-8">
            Send us a WhatsApp message or fill in our contact form. We'll
            recommend the right service for your situation and give you a free,
            no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-base font-semibold border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all"
            >
              <WhatsAppIcon /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
