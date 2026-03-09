import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SEOHead } from "../../components/SEOHead";

export function EndOfLeasePage() {
  return (
    <>
      <SEOHead
        title="End of Lease Cleaning Gold Coast | Affordable & Thorough | Tru Vacate Cleaning"
        description="End of lease cleaning Gold Coast with guaranteed results. We clean kitchens, bathrooms, carpets, windows and more. Same-day available. Free quote – 0488841883."
        canonical="/services/end-of-lease-cleaning"
        ogImage="/assets/generated/service-end-of-lease-cleaning.dim_800x500.jpg"
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
              &rsaquo; End of Lease Cleaning
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
              End of Lease Cleaning Gold Coast
            </h1>
            <p className="text-white/85 text-xl mb-6">
              Affordable and thorough end of lease cleaning that meets real
              estate agent standards. Same-day bookings available.
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
                src="/assets/generated/service-end-of-lease-cleaning.dim_800x500.jpg"
                alt="End of lease cleaning service Gold Coast – Tru Vacate Cleaning"
                className="w-full rounded-2xl mb-8 object-cover h-72"
              />

              <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                What Is End of Lease Cleaning?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                End of lease cleaning is exactly what it sounds like — a
                complete, professional clean of your rental property at the end
                of your lease. When your tenancy ends, your property manager
                conducts a thorough exit inspection. They compare the condition
                of the property to the entry condition report you signed when
                you first moved in. If the property isn't clean enough, they're
                allowed to use your bond to pay for cleaning. That's money out
                of your pocket.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A professional end of lease clean from Tru Vacate Cleaning Gold
                Coast eliminates that risk. We know exactly what property
                managers check, and we make sure every single area is spotless
                before the inspection. Our team works quickly, thoroughly, and
                professionally — so you can focus on your move without the
                stress of cleaning.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4 mt-8">
                End of Lease Cleaning Checklist
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every end of lease clean we carry out follows the REIQ standard
                checklist. Here's a summary of what we cover:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {[
                  "Kitchen deep clean including oven, stovetop, microwave",
                  "Bathroom and ensuite scrubbed and sanitised",
                  "Toilet cleaned and disinfected",
                  "All floors vacuumed and mopped",
                  "Windows cleaned inside (outside on request)",
                  "Blinds dusted and wiped",
                  "Wardrobes and cupboards cleaned inside and out",
                  "Skirting boards, door frames, light switches",
                  "Ceiling fans and air conditioning filters",
                  "Walls spot cleaned for marks",
                  "Laundry — tub, surfaces, behind machine",
                  "Outdoor areas swept and tidied",
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
                The Stress-Free Way to End a Tenancy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Moving house is one of the most stressful life events you can go
                through. You're juggling removalists, utility connections,
                address changes, and a dozen other things — the last thing you
                want to do is spend your final weekend scrubbing an oven. That's
                where we come in.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you book with Tru Vacate Cleaning Gold Coast, we handle
                everything. Our team arrives on time with all the equipment and
                products needed to get the job done. We work systematically
                through every room, following the REIQ checklist step by step.
                By the time we're finished, your property will look better than
                it did when you moved in.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We also back every end of lease clean with our 100% bond back
                guarantee. If your property manager raises any issue with our
                clean, we return and re-clean that area for free. It's that
                simple. We're committed to making sure you get every dollar of
                your bond back.
              </p>

              <h2 className="font-display font-bold text-2xl text-foreground mb-4 mt-8">
                How Much Does End of Lease Cleaning Cost in Gold Coast?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                End of lease cleaning prices vary depending on the size of your
                property. As a guide: 1-bedroom unit $250–$350, 2-bedroom unit
                $300–$420, 3-bedroom house $420–$600, 4-bedroom house $550–$800.
                These prices include most standard areas. Carpet steam cleaning
                is usually priced separately. Contact us for a free,
                personalised quote based on your exact property.
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
          Pricing Guide
        </h3>
        {[
          "1-Bed Unit: from $250",
          "2-Bed Unit: from $300",
          "3-Bed House: from $420",
          "4-Bed House: from $550",
        ].map((g) => (
          <div
            key={g}
            className="flex gap-2 items-center py-1.5 border-b border-border last:border-0"
          >
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">{g}</span>
          </div>
        ))}
        <p className="text-xs text-muted-foreground mt-3">
          Contact us for a free personalised quote.
        </p>
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
