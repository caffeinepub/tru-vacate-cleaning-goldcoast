import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SEOHead } from "../../components/SEOHead";

export function WindowCleaningPage() {
  return (
    <>
      <SEOHead
        title="Window Cleaning Gold Coast | Streak-Free Results | Tru Vacate Cleaning"
        description="Professional window cleaning Gold Coast for rentals and homes. Streak-free finish inside and out. Part of our vacate cleaning package. Book today."
        canonical="/services/window-cleaning"
        ogImage="/assets/generated/service-window-cleaning.dim_800x500.jpg"
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
              &rsaquo; Window Cleaning
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Window Cleaning Gold Coast
            </h1>
            <p className="text-white/85 text-xl mb-6">
              Crystal-clear, streak-free windows every time. Perfect for end of
              lease inspections and regular home maintenance across the Gold
              Coast.
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
                src="/assets/generated/service-window-cleaning.dim_800x500.jpg"
                alt="Window cleaning service Gold Coast – Tru Vacate Cleaning"
                className="w-full rounded-2xl mb-8 object-cover h-72"
              />

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                Why Windows Matter for Your Bond
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Windows are one of the most visible parts of any property. At a
                final inspection, streaky, dirty, or grimy windows immediately
                catch a property manager's eye and can lead to deductions from
                your bond. Dirty window tracks and sills are another common
                issue. Clean, streak-free windows tell your property manager
                that you've taken good care of their property — and that makes a
                huge difference to the outcome of your inspection.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                On the Gold Coast, windows cop a lot. The coastal air brings
                salt, humidity, and grime. Sun exposure causes water marks to
                bake on. Regular rains leave streak patterns. DIY window
                cleaning often makes things worse — leaving streaks, smears, and
                lint from old cloths and newspaper. Our professional window
                cleaning team uses professional squeegees, specialist glass
                cleaning solutions, and the right technique to leave every
                window crystal clear.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4 mt-8">
                What Our Window Cleaning Service Covers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {[
                  "All interior windows cleaned",
                  "Exterior windows (where safely accessible)",
                  "Window frames and sills wiped",
                  "Window tracks vacuumed and wiped out",
                  "Sliding door glass panels cleaned",
                  "Glass balustrades and panels",
                  "Screen doors cleaned (where applicable)",
                  "Flyscreen wiped and cleaned",
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
                Professional Tools and Techniques
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our window cleaning team uses professional-grade squeegees,
                microfibre cloths, and specialist glass cleaning solutions that
                leave no streaks, no smears, and no lint behind. We clean
                methodically from top to bottom so that any drips are caught and
                cleaned as we work. Every window gets two passes — a cleaning
                pass and a final squeegee pass — to guarantee a streak-free
                result.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We don't just clean the glass. We also wipe down window frames,
                sills, and tracks — the areas that often get overlooked but that
                property managers definitely notice. A clean window with a dirty
                track still fails the inspection. We make sure everything
                passes.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4 mt-8">
                Window Cleaning as Part of Your Vacate Package
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Window cleaning is included as standard in our full vacate
                cleaning and bond cleaning packages. If you only need a
                standalone window clean — for regular maintenance, before a
                special event, or for an owner-occupier — we offer that as a
                separate service too. We service all Gold Coast suburbs and can
                usually fit around your schedule with same-day or next-day
                availability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Gold Coast properties with ocean views especially benefit from
                regular professional window cleaning. Sea spray and salt air
                leave deposits on glass that build up over time and become
                harder to remove. We handle it all — and we leave your view
                crystal clear.
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
          "Interior windows",
          "Exterior windows",
          "Frames & sills",
          "Window tracks",
          "Sliding doors",
          "Streak-free guarantee",
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
