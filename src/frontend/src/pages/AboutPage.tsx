import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Award, CheckCircle2, Heart, Shield, Users } from "lucide-react";
import { SEOHead } from "../components/SEOHead";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We show up when we say we will, do what we say we'll do, and charge exactly what we quote.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We don't leave until the job meets REIQ inspection standards. No shortcuts, ever.",
  },
  {
    icon: Heart,
    title: "Care",
    desc: "We care about your home, your belongings, and your stress levels. We treat every property like it's our own.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "We're a local Gold Coast team. We support local businesses, hire locals, and give back to our community.",
  },
];

export function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Tru Vacate Cleaning Gold Coast | Local Cleaners You Can Trust"
        description="We're a local Gold Coast cleaning team dedicated to helping renters get their full bond back. Fully insured, REIQ-trained, eco-friendly products. Meet the Tru Vacate team."
        canonical="/about"
        ogImage="/assets/generated/about-team-tru-vacate-cleaning.dim_900x500.jpg"
      />

      {/* Hero */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            About Tru Vacate Cleaning Gold Coast
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            We're local Gold Coast cleaners who genuinely care about helping
            renters get their bond back. No stress, no hassle — just spotless
            results.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl text-foreground mb-6">
                We Started Because We Needed a Cleaner We Could Trust
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Like many Gold Coast renters, our founders had a bad
                  experience with a dodgy cleaning company. The cleaners didn't
                  show up, the property manager wasn't happy, and the bond got
                  held. That frustration sparked an idea:{" "}
                  <strong className="text-foreground">
                    what if there was a cleaning company that actually did what
                    it promised?
                  </strong>
                </p>
                <p>
                  That's how Tru Vacate Cleaning Gold Coast was born. We set out
                  to be the cleaning company we wished we'd been able to hire —
                  one that turns up on time, works to a thorough checklist, and
                  doesn't leave until the job is done right.
                </p>
                <p>
                  Today, we've helped hundreds of Gold Coast renters get their
                  full bond back. From Coolangatta to Coomera, from studio
                  apartments to four-bedroom family homes, we bring the same
                  dedication to every single job.
                </p>
                <p>
                  Every member of our team is fully insured and police checked.
                  We follow the Real Estate Institute of Queensland (REIQ)
                  standard cleaning checklist so your property manager can tick
                  every box. We use eco-friendly, RSPCA-approved products
                  because we care about the health of your family — and the
                  planet.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/assets/generated/about-team-tru-vacate-cleaning.dim_900x500.jpg"
                alt="Tru Vacate Cleaning Gold Coast team – professional cleaners ready to serve"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-foreground text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "We follow the REIQ cleaning checklist — the same one your property manager uses",
              "100% bond back guarantee — if they're not happy, we re-clean for free",
              "Every cleaner is fully insured and police checked",
              "We use eco-friendly, RSPCA-approved cleaning products",
              "Fixed-price quotes — what we quote is what you pay, no surprises",
              "Same-day and weekend bookings available across the Gold Coast",
              "We've completed hundreds of successful vacate cleans in QLD",
              "Local team — we live and work in Gold Coast, just like you",
            ].map((point) => (
              <div
                key={point}
                className="flex gap-3 items-start p-4 bg-white rounded-xl border border-border"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-xl border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl text-foreground mb-6">
                A Team That Cares
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every cleaner on our team goes through thorough training
                  before they work on a job. We train to the REIQ standard
                  checklist — the same checklist your property manager uses
                  during the final inspection. We don't cut corners, and we
                  don't rush.
                </p>
                <p>
                  Our team members are all police checked and carry full public
                  liability insurance. You can feel confident letting us into
                  your home knowing that your property and belongings are in
                  safe hands.
                </p>
                <p>
                  We also care deeply about the environment. We use
                  eco-friendly, RSPCA-approved products wherever possible. Our
                  products are effective on grime and grease, but gentle on your
                  family, your pets, and the Gold Coast environment.
                </p>
                <p>
                  Most importantly, we're Gold Coast people. We grew up here, we
                  love it here, and we're proud to serve our local community.
                  When you book Tru Vacate Cleaning, you're supporting a local
                  Gold Coast business — not a faceless national chain.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "500+", label: "Successful Cleans" },
                  { number: "100%", label: "Bond Back Rate" },
                  { number: "7 Days", label: "Available Per Week" },
                  { number: "1 Hour", label: "Quote Response Time" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl p-5 text-center border border-border"
                  >
                    <p className="font-display font-bold text-3xl text-primary mb-1">
                      {stat.number}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-white/80 mb-8">
            Get in touch today for a free, no-obligation quote. We'll have your
            property sparkling clean and your bond safely back in your pocket.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md text-base font-semibold border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all"
            >
              <WhatsAppIcon /> Chat on WhatsApp
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
