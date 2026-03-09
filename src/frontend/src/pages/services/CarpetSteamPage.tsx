import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SEOHead } from "../../components/SEOHead";

export function CarpetSteamPage() {
  return (
    <>
      <SEOHead
        title="Carpet Steam Cleaning Gold Coast | Deep Clean & Stain Removal | Tru Vacate Cleaning"
        description="Professional carpet steam cleaning Gold Coast. Remove stains, odours and allergens. Perfect for bond cleans and move-outs. Book online or WhatsApp 0488841883."
        canonical="/services/carpet-steam-cleaning"
        ogImage="/assets/generated/service-carpet-steam-cleaning.dim_800x500.jpg"
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
              &rsaquo; Carpet Steam Cleaning
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Carpet Steam Cleaning Gold Coast
            </h1>
            <p className="text-white/85 text-xl mb-6">
              Deep clean your carpets and remove stains, odours, and allergens.
              Essential for your bond clean. Professional hot-water extraction
              results.
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
                src="/assets/generated/service-carpet-steam-cleaning.dim_800x500.jpg"
                alt="Professional carpet steam cleaning Gold Coast – Tru Vacate Cleaning"
                className="w-full rounded-2xl mb-8 object-cover h-72"
              />

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                Why Your Carpets Need Professional Steam Cleaning
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Carpets collect an enormous amount of dirt, dust, allergens, pet
                hair, and bacteria over time — even when they look clean on the
                surface. Regular vacuuming removes the surface layer, but it
                doesn't reach deep into the carpet fibres where most of the
                grime hides. Professional carpet steam cleaning uses hot-water
                extraction technology to flush out deep-seated dirt, stains,
                odours, and allergens that vacuuming simply can't touch.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you're moving out of a rental property, property managers
                almost always require carpets to be professionally steam
                cleaned. Many real estate agents in Queensland require a receipt
                from a professional carpet cleaner as part of the exit process.
                Tru Vacate Cleaning Gold Coast provides a professional cleaning
                receipt with every carpet steam clean.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4 mt-8">
                How Our Carpet Steam Cleaning Works
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our carpet steam cleaning process uses industrial hot-water
                extraction equipment — far more powerful than anything you can
                hire from a supermarket or hardware store. Here's how we do it:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  {
                    step: "1",
                    title: "Pre-inspection",
                    desc: "We inspect the carpets and note any existing stains, damage, or high-traffic areas that need extra attention.",
                  },
                  {
                    step: "2",
                    title: "Pre-treatment",
                    desc: "We apply a professional pre-treatment solution to loosen stubborn stains and break down deep-set grime before the main clean.",
                  },
                  {
                    step: "3",
                    title: "Hot-water extraction",
                    desc: "Our industrial machine injects hot water and cleaning solution deep into the carpet fibres, then extracts it along with all the dissolved dirt and debris.",
                  },
                  {
                    step: "4",
                    title: "Stain treatment",
                    desc: "Any remaining stains are treated individually with targeted spot-cleaning solutions.",
                  },
                  {
                    step: "5",
                    title: "Drying",
                    desc: "We use powerful extraction to remove as much moisture as possible, significantly reducing drying time.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-3 p-4 bg-secondary/30 rounded-lg"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <strong className="text-foreground text-sm">
                        {item.title}:
                      </strong>
                      <span className="text-muted-foreground text-sm ml-1">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4 mt-8">
                What We Remove
              </h2>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  "Food and drink stains",
                  "Pet stains and odours",
                  "Dust mites and allergens",
                  "Mould and mildew spores",
                  "Bacteria and germs",
                  "Deep-set dirt and grime",
                  "Cigarette smoke odours",
                  "General wear and traffic marks",
                ].map((item) => (
                  <div key={item} className="flex gap-2 items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4 mt-8">
                Carpet Steam Cleaning Prices — Gold Coast
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We charge per room, making it easy to budget. Our prices start
                at $40 per room for standard areas, with discounts when you
                combine carpet cleaning with a full vacate or bond clean. We
                recommend booking carpet steam cleaning at the same time as your
                vacate clean for the best value. Contact us for a free quote
                tailored to your property.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We carry full professional indemnity and public liability
                insurance. We're experienced with all carpet types including
                wool, nylon, polyester, and blended fibres. We won't damage your
                carpets — we'll make them look and smell fresh again.
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
          Why Professional?
        </h3>
        {[
          "Commercial-grade equipment",
          "Deep hot-water extraction",
          "Removes allergens & odours",
          "Property manager receipt",
          "All carpet types covered",
          "Combine with vacate clean",
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
