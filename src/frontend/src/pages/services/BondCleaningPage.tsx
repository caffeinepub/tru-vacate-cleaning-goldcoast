import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SEOHead } from "../../components/SEOHead";

export function BondCleaningPage() {
  return (
    <>
      <SEOHead
        title="Bond Cleaning Gold Coast | REIQ Standard | 100% Bond Back | Tru Vacate Cleaning"
        description="Expert bond cleaning Gold Coast to real estate agent standards. 100% bond back guarantee. Fully insured, eco-friendly products. Get a free quote today."
        canonical="/services/bond-cleaning"
        ogImage="/assets/generated/service-bond-cleaning-bathroom.dim_800x500.jpg"
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
              &rsaquo; Bond Cleaning
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Bond Cleaning Gold Coast
            </h1>
            <p className="text-white/85 text-xl mb-6">
              We clean to REIQ real estate agent standards. Our bond clean
              guarantees your property passes inspection — or we re-clean for
              free.
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
            <div className="lg:col-span-2">
              <img
                src="/assets/generated/service-bond-cleaning-bathroom.dim_800x500.jpg"
                alt="Bond cleaning bathroom service Gold Coast – Tru Vacate Cleaning"
                className="w-full rounded-2xl mb-8 object-cover h-72"
              />

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                What Is Bond Cleaning?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bond cleaning — also known as end of lease cleaning or vacate
                cleaning — is the thorough deep clean you carry out when you
                move out of a rental property. In Queensland, your landlord has
                the legal right to use your bond (security deposit) to pay for
                professional cleaning if the property isn't left in the same
                condition as when you moved in. A professional bond clean
                protects your money and gives you the best chance of getting
                every dollar of your bond back.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Tru Vacate Cleaning Gold Coast, we use the REIQ (Real Estate
                Institute of Queensland) standard cleaning checklist on every
                job. This is the exact same checklist your property manager uses
                when they inspect the property. We know what passes and what
                doesn't — and we won't leave until everything ticks the box.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4 mt-8">
                Our Bond Cleaning Checklist
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our comprehensive bond clean covers everything a property
                manager expects to see at final inspection. Here's what we
                include on every job:
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Kitchen: oven (inside and out), stovetop, rangehood, splashback, sink, taps, benchtops, cupboards inside and out",
                  "Bathrooms: tiles scrubbed, grout cleaned, shower screens polished, taps and fixtures shined, toilet sanitised",
                  "Bedrooms: vacuumed, mopped, wardrobes inside and out, skirting boards, light switches, fans",
                  "Living areas: dusted, vacuumed, mopped, windows cleaned, blinds wiped",
                  "Walls: spot cleaned for marks and scuffs throughout",
                  "Floors: vacuumed and mopped in every room",
                  "Laundry: tub, taps, behind machine area, lint filter",
                  "Garage and outdoor areas: swept, cobwebs removed",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-2 items-start p-3 bg-secondary/30 rounded-lg"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4 mt-8">
                Bond Cleaning on the Gold Coast — What to Expect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you book with Tru Vacate Cleaning, you get a fixed-price
                quote before we start. No hidden fees, no surprise charges on
                the day. Our team arrives on time, works methodically through
                the REIQ checklist, and won't leave until every area meets
                inspection standard.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We bring all our own professional cleaning equipment and
                commercial-grade, eco-friendly products. You don't need to
                provide a thing. Our products remove grease, mould, soap scum,
                and grime without harsh chemicals that could damage surfaces or
                affect indoor air quality.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                After we finish, we walk through the property with you to make
                sure you're completely happy. If your property manager later
                raises any issue during the final inspection, you simply let us
                know and we'll come back and re-clean that area at no extra
                cost. That's our 100% bond back guarantee — no questions asked.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4 mt-8">
                Gold Coast Suburbs We Cover
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We provide bond cleaning across the entire Gold Coast region
                including Surfers Paradise, Southport, Broadbeach, Robina,
                Varsity Lakes, Mudgeeraba, Coomera, Hope Island, Runaway Bay,
                Labrador, Nerang, Burleigh Heads, Palm Beach, Coolangatta, and
                Tweed Heads. Call or WhatsApp us to check if we cover your
                suburb.
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
          "REIQ Standard Checklist",
          "Fully Insured Team",
          "Police Checked Cleaners",
          "Eco-Friendly Products",
          "Fixed-Price Quotes",
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
