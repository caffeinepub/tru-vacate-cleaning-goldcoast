import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SEOHead } from "../../components/SEOHead";

export function BathroomCleaningPage() {
  return (
    <>
      <SEOHead
        title="Bathroom Cleaning Gold Coast | Deep Clean & Sanitise | Tru Vacate Cleaning"
        description="Thorough bathroom and toilet cleaning Gold Coast. We sanitise, scrub and shine every surface. Essential for bond cleaning. Get a free quote – 0488841883."
        canonical="/services/bathroom-cleaning"
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
              &rsaquo; Bathroom Cleaning
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Bathroom & Toilet Cleaning Gold Coast
            </h1>
            <p className="text-white/85 text-xl mb-6">
              We scrub, sanitise, and shine every surface until bathrooms and
              toilets sparkle like new. Essential for your bond clean.
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
                The Bathroom: Your Bond's Biggest Risk Zone
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bathrooms and toilets are the areas property managers inspect
                most closely during end of lease checks. Soap scum on shower
                screens, mould in grout lines, calcium deposits on taps, hard
                water stains in toilets — these are all things that get flagged
                at inspection and can cost you hundreds of dollars from your
                bond. A quick wipe-down on moving day simply won't pass the
                test.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tru Vacate Cleaning Gold Coast dedicates serious time and
                specialist products to bathroom cleaning. We scrub every
                surface, treat grout lines for mould, polish chrome fixtures,
                and make shower screens completely clear. By the time we're
                done, your bathroom will look like it was freshly renovated.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4 mt-8">
                Our Bathroom Cleaning Process
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We approach bathroom cleaning systematically, working from the
                highest surfaces down to the floor. Here's what we cover in
                every bathroom:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {[
                  "Shower screen — scrubbed clear of soap scum",
                  "Shower tiles — scrubbed and grout treated",
                  "Shower head and fixtures polished",
                  "Bathtub — scrubbed and sanitised",
                  "Vanity sink and basin polished",
                  "Taps and chrome fixtures shined",
                  "Mirror — streak-free clean",
                  "Toilet — bowl, seat, lid, cistern, base",
                  "Floor tiles scrubbed and mopped",
                  "Exhaust fan — grille cleaned",
                  "Towel rails and hooks wiped",
                  "Walls and tiles spot cleaned",
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
                Tackling Mould, Soap Scum, and Hard Water Stains
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The three most common bathroom problems in Gold Coast rentals
                are soap scum on shower screens and tiles, mould in grout lines
                (especially in bathrooms that don't get enough airflow), and
                calcium and hard water deposits on taps, fixtures, and toilets.
                These issues require specific products and techniques — you
                can't just scrub them away with a sponge.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use a specialist shower screen cleaner to dissolve soap scum
                without scratching the glass. For mould and grout, we apply a
                targeted mould treatment that kills the mould at the root and
                brightens grout back to its original colour. For hard water and
                calcium deposits, we use a safe acid-based descaler that removes
                mineral buildup from taps and fixtures without damaging the
                chrome finish.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4 mt-8">
                Multi-Bathroom Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Got a property with an ensuite, main bathroom, and a separate
                toilet? No problem. We price per bathroom area and will quote
                for the whole property. Adding extra bathrooms to your vacate
                clean is the most cost-effective way to ensure every wet area in
                your home passes inspection. Contact us for a free, itemised
                quote for your property.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every bathroom we clean is part of our 100% bond back guarantee.
                If your property manager raises any concern about the bathroom
                during the final inspection, we return and re-clean it at no
                extra cost. We're confident in our results — and we back them
                with a guarantee you can rely on.
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
          What We Cover
        </h3>
        {[
          "Shower screens cleared",
          "Grout mould treatment",
          "Toilet fully sanitised",
          "Taps & fixtures polished",
          "Floor tiles scrubbed",
          "100% Bond Back Guarantee",
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
