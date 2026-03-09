import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, MapPin, Phone } from "lucide-react";
import { SEOHead } from "../../components/SEOHead";

export interface SuburbPageProps {
  suburb: string;
  slug: string;
  postcode: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  localKnowledge: string;
  whyChooseUs: string[];
  whatWeClean: string[];
  closingCta: string;
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

export function SuburbPageTemplate({
  suburb,
  slug,
  postcode,
  metaTitle,
  metaDescription,
  intro,
  localKnowledge,
  whyChooseUs,
  whatWeClean,
  closingCta,
}: SuburbPageProps) {
  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={`/suburbs/${slug}`}
        ogImage="/assets/generated/hero-vacate-cleaning-gold-coast.dim_1200x600.jpg"
      />

      {/* ── HERO ── */}
      <section className="gradient-hero text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-white/70 text-sm flex-wrap">
              <li>
                <Link
                  to="/"
                  data-ocid="suburb.link"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&rsaquo;</li>
              <li>
                <span className="text-white/70">Suburbs</span>
              </li>
              <li aria-hidden="true">&rsaquo;</li>
              <li aria-current="page" className="text-white font-medium">
                {suburb}
              </li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-white/70" aria-hidden="true" />
                <Badge className="bg-white/20 text-white border-white/30 text-xs">
                  {postcode} · Gold Coast, QLD
                </Badge>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
                Vacate Cleaning {suburb}
              </h1>
              <p className="text-white/85 text-lg md:text-xl mb-6 leading-relaxed">
                {intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                  data-ocid="suburb.primary_button"
                >
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="suburb.secondary_button"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all text-sm"
                >
                  <WhatsAppIcon /> WhatsApp 0488 841 883
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content Column */}
            <main className="lg:col-span-2">
              {/* What We Clean */}
              <div className="mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                  What We Clean in Your {suburb} Home
                </h2>
                <p className="text-muted-foreground mb-5">
                  We cover every room and every surface on the REIQ inspection
                  checklist. Here's what's included in every vacate clean:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {whatWeClean.map((item, i) => (
                    <li
                      key={item}
                      data-ocid={`suburb.item.${i + 1}`}
                      className="flex items-start gap-2.5 p-3 bg-secondary/30 rounded-lg"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                  Why {suburb} Renters Choose Tru Vacate Cleaning
                </h2>
                <ul className="space-y-3 mt-5">
                  {whyChooseUs.map((point, i) => (
                    <li
                      key={point}
                      data-ocid={`suburb.row.${i + 1}`}
                      className="flex items-start gap-3 p-4 border border-border rounded-xl hover:border-primary/30 hover:bg-secondary/20 transition-colors"
                    >
                      <CheckCircle2
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-foreground leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Local Knowledge */}
              <div className="mb-10 p-6 bg-secondary/30 rounded-2xl border border-border">
                <h2 className="font-display font-bold text-xl text-foreground mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                  About {suburb}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {localKnowledge}
                </p>
              </div>

              {/* Closing CTA */}
              <div className="bg-primary rounded-2xl p-6 text-white">
                <h2 className="font-display font-bold text-xl mb-3">
                  Ready to Book Your {suburb} Vacate Clean?
                </h2>
                <p className="text-white/85 mb-5 leading-relaxed">
                  {closingCta}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="bg-white text-primary hover:bg-white/90 font-semibold"
                    data-ocid="suburb.submit_button"
                  >
                    <Link to="/contact">Book Now — Free Quote</Link>
                  </Button>
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="suburb.secondary_button"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold border border-white/50 hover:border-white hover:bg-white/10 transition-all"
                  >
                    <WhatsAppIcon /> WhatsApp Us Now
                  </a>
                </div>
              </div>
            </main>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Quick CTA card */}
              <div className="rounded-xl border border-border p-5 bg-primary text-white">
                <h3 className="font-display font-bold text-lg mb-2">
                  Free Quote in Minutes
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Fixed price, no hidden fees. We reply within 1 hour.
                </p>
                <Button
                  asChild
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold mb-3"
                  data-ocid="suburb.primary_button"
                >
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="suburb.secondary_button"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md text-sm font-semibold border border-white/50 hover:border-white hover:bg-white/10 transition-all"
                >
                  <WhatsAppIcon /> WhatsApp Us
                </a>
              </div>

              {/* Guarantees */}
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
                    <CheckCircle2
                      className="w-4 h-4 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-foreground">{g}</span>
                  </div>
                ))}
              </div>

              {/* Call us */}
              <div className="rounded-xl border border-border p-5">
                <h3 className="font-display font-semibold text-base mb-2">
                  Prefer to Talk?
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Give us a ring and we'll sort out a quote over the phone in
                  two minutes flat.
                </p>
                <a
                  href="tel:0488841883"
                  data-ocid="suburb.link"
                  className="flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  0488 841 883
                </a>
              </div>

              {/* Back link */}
              <Link
                to="/"
                data-ocid="suburb.link"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Back to homepage
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
