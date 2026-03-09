import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SEOHead } from "../../components/SEOHead";

export function VacateCleaningPage() {
  return (
    <>
      <SEOHead
        title="Vacate Cleaning Gold Coast | 100% Bond Back Guarantee | Tru Vacate Cleaning"
        description="Professional vacate cleaning in Gold Coast. We guarantee your bond back or we re-clean for free. Fast, affordable, fully insured. Book today – call or WhatsApp 0488841883."
        canonical="/services/vacate-cleaning"
        ogImage="/assets/generated/hero-vacate-cleaning-gold-coast.dim_1200x600.jpg"
      />

      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-white/70 text-sm mb-2">
              <Link
                to="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>{" "}
              &rsaquo; Vacate Cleaning
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Vacate Cleaning Gold Coast
            </h1>
            <p className="text-white/85 text-xl mb-6">
              100% Bond Back Guarantee. We make your rental spotless so you walk
              away with every dollar of your bond.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all text-sm"
              >
                <WhatsAppIcon /> WhatsApp 0488 841 883
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-lg max-w-none">
              <img
                src="/assets/generated/hero-vacate-cleaning-gold-coast.dim_1200x600.jpg"
                alt="Professional vacate cleaning team at a Gold Coast apartment – Tru Vacate Cleaning Gold Coast"
                className="w-full rounded-2xl mb-8 object-cover h-72"
              />

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                What Is Vacate Cleaning?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vacate cleaning is a deep, thorough clean of your rental
                property when you move out. Your landlord or property manager
                inspects the property against a detailed checklist. If the clean
                doesn't pass, they can deduct money from your bond — your
                security deposit — to pay for professional cleaning. A proper
                vacate clean means you get ALL your bond back.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Tru Vacate Cleaning Gold Coast, we follow the Real Estate
                Institute of Queensland (REIQ) standard checklist on every
                single job. We know exactly what property managers look for
                because we've done hundreds of vacate cleans across the Gold
                Coast. We don't leave until every area passes inspection.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4 mt-8">
                What Does Our Vacate Clean Include?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our vacate cleaning service is a complete, top-to-bottom clean.
                Here's exactly what we cover:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {[
                  "All bedrooms thoroughly cleaned and vacuumed",
                  "Living areas dusted, vacuumed and mopped",
                  "Kitchen — oven, stovetop, rangehood, benchtops, sink",
                  "Bathrooms and toilets scrubbed and sanitised",
                  "All windows washed inside (external on request)",
                  "Skirting boards, door frames, light switches wiped",
                  "Ceiling fans and air con filters cleaned",
                  "Wardrobes and cupboards inside and out",
                  "All floors vacuumed and mopped",
                  "Laundry cleaned including tub and taps",
                  "Garage swept and tidied",
                  "Walls spot-cleaned throughout",
                ].map((item) => (
                  <div key={item} className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4 mt-8">
                Why Choose Tru Vacate Cleaning?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We've helped hundreds of Gold Coast renters get their full bond
                back. Our team is fully insured, police checked, and trained to
                REIQ standards. We use eco-friendly, RSPCA-approved products
                that are tough on grime but gentle on your home and the
                environment. We offer fixed-price quotes — what we quote is what
                you pay, no surprises.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our 100% bond back guarantee means that if your property manager
                finds any issue with our clean, we come back and re-clean that
                area for free. No fuss, no extra charge. We stand by our work
                completely.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We also offer same-day and weekend bookings to fit around your
                moving schedule. Moving out is stressful enough — we handle the
                cleaning so you can focus on everything else.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4 mt-8">
                Gold Coast Suburbs We Serve
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We provide vacate cleaning across all Gold Coast suburbs
                including Surfers Paradise, Southport, Broadbeach, Robina,
                Varsity Lakes, Mudgeeraba, Coomera, Hope Island, Runaway Bay,
                Labrador, Nerang, Burleigh Heads, Palm Beach, Coolangatta, and
                Tweed Heads. If your suburb isn't listed, call us — we likely
                cover your area.
              </p>
            </div>

            <aside className="space-y-6">
              <ServiceCTA />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCTA() {
  return (
    <>
      <div className="rounded-xl border border-border p-5 bg-primary text-white">
        <h3 className="font-display font-bold text-lg mb-2">
          Get a Free Quote
        </h3>
        <p className="text-white/80 text-sm mb-4">
          Fixed price, no hidden fees. We respond within 1 hour.
        </p>
        <Button
          asChild
          className="w-full bg-white text-primary hover:bg-white/90 font-semibold mb-3"
        >
          <Link to="/contact">Request a Quote</Link>
        </Button>
        <a
          href="https://wa.me/61488841883"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md text-sm font-semibold border border-white/50 hover:border-white hover:bg-white/10 transition-all"
        >
          <WhatsAppIcon /> WhatsApp Us
        </a>
      </div>
      <div className="rounded-xl border border-border p-5 bg-secondary/30">
        <h3 className="font-display font-semibold text-base mb-3">
          Our Guarantee
        </h3>
        {[
          "100% Bond Back Guarantee",
          "Fully Insured Team",
          "REIQ Standard Clean",
          "Eco-Friendly Products",
          "Fixed-Price Quotes",
          "Same-Day Available",
        ].map((g) => (
          <div
            key={g}
            className="flex gap-2 items-center py-1.5 border-b border-border last:border-0"
          >
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">{g}</span>
          </div>
        ))}
      </div>
    </>
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
