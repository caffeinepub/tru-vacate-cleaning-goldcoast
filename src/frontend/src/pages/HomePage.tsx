import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Leaf,
  MapPin,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import { useState } from "react";
import { SEOHead } from "../components/SEOHead";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Vacate Cleaning Gold Coast",
  description:
    "Professional vacate cleaning, bond cleaning and end of lease cleaning on the Gold Coast.",
  telephone: "0488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gold Coast",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  url: "https://truvacatecleaninggoldcoast.com.au",
  priceRange: "$$",
  areaServed: "Gold Coast",
  image:
    "https://truvacatecleaninggoldcoast.com.au/assets/generated/hero-vacate-cleaning-gold-coast.dim_1200x600.jpg",
};

const services = [
  {
    title: "Vacate Cleaning",
    desc: "Complete top-to-bottom clean when you move out. We cover every room, every surface — guaranteed.",
    href: "/services/vacate-cleaning",
    img: "/assets/generated/hero-vacate-cleaning-gold-coast.dim_1200x600.jpg",
    alt: "Professional vacate cleaning team at a Gold Coast apartment – Tru Vacate Cleaning Gold Coast",
  },
  {
    title: "Bond Cleaning",
    desc: "We clean to REIQ standards so your property manager ticks every box. Bond back or we re-clean free.",
    href: "/services/bond-cleaning",
    img: "/assets/generated/service-bond-cleaning-bathroom.dim_800x500.jpg",
    alt: "Bond cleaning bathroom service Gold Coast – Tru Vacate Cleaning",
  },
  {
    title: "End of Lease Cleaning",
    desc: "Moving out? We handle the heavy cleaning so you can focus on the move itself.",
    href: "/services/end-of-lease-cleaning",
    img: "/assets/generated/service-end-of-lease-cleaning.dim_800x500.jpg",
    alt: "End of lease cleaning service Gold Coast – Tru Vacate Cleaning",
  },
  {
    title: "Carpet Steam Cleaning",
    desc: "Hot-water extraction removes stains, odours, and allergens deep from your carpet fibres.",
    href: "/services/carpet-steam-cleaning",
    img: "/assets/generated/service-carpet-steam-cleaning.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning Gold Coast – Tru Vacate Cleaning",
  },
  {
    title: "Oven & Kitchen Cleaning",
    desc: "We remove years of baked-on grease so your kitchen looks showroom clean.",
    href: "/services/oven-kitchen-cleaning",
    img: "/assets/generated/service-oven-kitchen-cleaning.dim_800x500.jpg",
    alt: "Oven and kitchen deep clean service Gold Coast – Tru Vacate Cleaning",
  },
  {
    title: "Window Cleaning",
    desc: "Crystal-clear, streak-free windows inside and out — every time.",
    href: "/services/window-cleaning",
    img: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    alt: "Window cleaning service Gold Coast – Tru Vacate Cleaning",
  },
  {
    title: "Bathroom Cleaning",
    desc: "We scrub, sanitise, and shine every surface so bathrooms sparkle like new.",
    href: "/services/bathroom-cleaning",
    img: "/assets/generated/service-bond-cleaning-bathroom.dim_800x500.jpg",
    alt: "Bond cleaning bathroom service Gold Coast – Tru Vacate Cleaning",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Southport",
    text: "Got my full bond back! The team was so thorough — they cleaned places I didn't even think to check. Super professional and arrived right on time. I'll definitely use Tru Vacate Cleaning again.",
    stars: 5,
  },
  {
    name: "James K.",
    location: "Surfers Paradise",
    text: "Best vacate cleaners on the Gold Coast. I've used three different companies over the years and none came close to the level of detail these guys put in. My property manager was genuinely impressed.",
    stars: 5,
  },
  {
    name: "Priya T.",
    location: "Robina",
    text: "Super professional and affordable. Booked on a Friday for a Saturday clean and they made it happen. The kitchen and bathrooms were absolutely spotless. 100% recommend!",
    stars: 5,
  },
];

const trustSignals = [
  {
    icon: Shield,
    title: "100% Bond Back Guarantee",
    desc: "If your property manager isn't happy, we come back and re-clean for free.",
  },
  {
    icon: CheckCircle2,
    title: "Fully Insured & Police Checked",
    desc: "Every cleaner on our team is fully insured and police checked for your peace of mind.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "We use RSPCA-approved, eco-friendly products — safe for kids, pets, and the environment.",
  },
  {
    icon: Clock,
    title: "Same-Day & Weekend Bookings",
    desc: "We fit around your schedule. Same-day bookings and weekend availability, no extra charge.",
  },
  {
    icon: MapPin,
    title: "All Gold Coast Suburbs",
    desc: "We serve every suburb from Coolangatta to Coomera and everywhere in between.",
  },
  {
    icon: CalendarCheck,
    title: "No Lock-In Contracts",
    desc: "Book once or book every week — no lock-in contracts, no hidden fees.",
  },
];

const faqs = [
  {
    q: "What is bond cleaning and why is it required?",
    a: `Bond cleaning (also called vacate cleaning or end of lease cleaning) is a deep clean of your rental property when you move out. Your landlord or property manager requires it to make sure the place is as clean as it was when you first moved in. If it's not clean enough, they can take money from your bond (security deposit) to pay for cleaning. A good bond clean helps you get ALL your money back. In Queensland, your property manager uses a detailed checklist to inspect every area. We follow that same checklist so nothing gets missed.`,
  },
  {
    q: "Why is bond cleaning important?",
    a: `Bond cleaning is important because it protects your money. In Queensland, bonds are often worth 4 weeks of rent. That's a lot of cash! A thorough bond clean shows your landlord you've looked after their property and gives you the best chance of getting every dollar back. It also keeps your rental history clean so future landlords will be happy to rent to you. Don't risk losing hundreds or even thousands of dollars — a professional bond clean is worth every cent.`,
  },
  {
    q: "How much does a bond clean cost?",
    a: `Bond cleaning on the Gold Coast typically costs between $250 and $800 depending on the size of your home. A 1-bedroom unit usually costs around $250–$350. A 3-bedroom house can cost $450–$650. Add carpet steam cleaning and it goes up a bit more. Tru Vacate Cleaning offers free, no-obligation quotes — just contact us and we'll give you an exact price based on your property. No surprises, no hidden fees.`,
  },
  {
    q: "What is a full bond clean?",
    a: `A full bond clean covers every part of your home from top to bottom. That includes: cleaning all rooms (bedrooms, living areas, bathrooms, kitchen), wiping all surfaces, cleaning inside ovens and microwaves, washing windows, vacuuming and mopping all floors, cleaning light switches, skirting boards, fans, air con filters, and more. It's basically making the whole house look brand new. Our team works through a comprehensive REIQ-standard checklist to make sure every area passes the final property inspection.`,
  },
  {
    q: "Which are the top-rated bond cleaning companies near me?",
    a: `Here are five top-rated bond cleaning companies in Queensland:\n\n1. **Electrodry** (electrodry.com.au) — One of Australia's largest carpet and bond cleaning networks. Operating for over 30 years, known for reliable, high-quality results. They offer bond cleaning, carpet cleaning, and upholstery services.\n\n2. **Jim's Cleaning** (jimscleaning.com.au) — Part of the famous Jim's Group franchise. Fully insured cleaners, satisfaction guarantee, and easy online booking. Large team so availability is usually good at short notice.\n\n3. **Fantastic Cleaners** (fantasticcleaners.com.au) — Popular across Australia for bond and end-of-lease cleaning. Vetted professionals, transparent pricing, and thorough cleaning checklists.\n\n4. **OzClean** (ozclean.com.au) — Queensland cleaning specialists for bond cleaning, carpet cleaning, and pest control. Strong customer reviews and a bond back guarantee.\n\n5. **Tru Bond Cleaning Brisbane** (trubondcleaningbrisbane.com) — Trusted Queensland bond cleaning specialists dedicated to helping tenants get their full bond refunded. Careful attention to every detail in every room.`,
  },
  {
    q: "Which cleaning products are best for bond cleaning?",
    a: "The best products for bond cleaning include: White King Bleach (for grout and mould), Exit Mould spray, Ajax cream cleanser, Selleys Shower Power, Windex Glass Cleaner, and a good microfibre mop and cloths. For eco-friendly options, Method All-Purpose Cleaner and Seventh Generation work well. Most professional cleaners bring their own commercial-grade products that work even better than supermarket brands. Our team at Tru Vacate Cleaning uses professional products not available in regular shops \u2014 this is one big reason our results are so much better.",
  },
  {
    q: "How much does professional bond cleaning typically cost?",
    a: `Professional bond cleaning in Queensland generally costs:\n• Studio/1-bed: $200–$320\n• 2-bed unit: $280–$420\n• 3-bed house: $420–$650\n• 4-bed house: $550–$850\n\nThese prices often include most rooms and standard inclusions. Carpet steam cleaning is usually charged separately at $30–$80 per room. Always ask for a written quote so there are no surprises. Tru Vacate Cleaning provides all-inclusive quotes upfront so you know exactly what you're paying before we start.`,
  },
  {
    q: "What products are best for bond cleaning carpets?",
    a: `For DIY carpet cleaning: Bissell Woolite Heavy Traffic Carpet Foam (available at Woolworths), 1001 Carpet Fresh (available on Amazon AU), and Resolve Carpet Cleaner (available at Woolworths) all work well for surface stains. For deep cleaning, you need a steam cleaner with hot water extraction — hire one from Kennards Hire (kennards.com.au) or Bunnings (bunnings.com.au). But honestly, hiring a professional carpet cleaner gives far better results and often costs less than you'd expect. Our steam cleaning team uses commercial-grade equipment that gets deeper into carpet fibres than any hire machine.`,
  },
  {
    q: "How do I choose a reliable bond cleaner?",
    a: `Look for these things when choosing a bond cleaner:\n✓ They offer a bond back guarantee\n✓ They are fully insured\n✓ They have real reviews on Google\n✓ They give a written quote upfront\n✓ They follow the REIQ (Real Estate Institute of Queensland) cleaning checklist\n✓ They have experience with property managers in your area\n\nAvoid cleaners who don't give written quotes or refuse to offer a re-clean guarantee. Tru Vacate Cleaning ticks every one of these boxes — and we're happy to show you our insurance certificate before we start.`,
  },
  {
    q: "Can I book a bond cleaning company online with a satisfaction guarantee?",
    a: `Yes! Tru Vacate Cleaning Gold Coast makes booking easy. Fill in our quick contact form or send us a WhatsApp message and we'll get back to you fast. We offer a 100% satisfaction guarantee — if your property manager isn't happy with any area, we come back and re-clean it for free. No fuss, no drama. We've helped hundreds of Gold Coast renters get their bond back in full, and we're ready to do the same for you.`,
  },
  {
    q: "How much is a cleaner per hour on the Gold Coast?",
    a: `On the Gold Coast, most professional cleaners charge between $45 and $75 per hour. For a standard hourly clean (regular home cleaning), expect to pay around $50–$65 per hour. Bond and vacate cleaning is usually quoted as a fixed price for the whole job rather than hourly, which makes budgeting easier. A fixed-price quote means no nasty surprises on the day — you know exactly what you're paying upfront.`,
  },
  {
    q: "How much is an end of lease clean? How much to pay a cleaner for 3 hours? What is the 20-minute rule in cleaning?",
    a: `**End of lease clean in Australia:** Prices range from $200 for a small unit to $900+ for a large house. Queensland is on the lower end compared to Sydney and Melbourne.\n\n**3 hours of cleaning:** At $50–$65 per hour, 3 hours of standard cleaning costs roughly $150–$195. Bond cleaning is usually a fixed price, not charged hourly.\n\n**The 20-minute rule:** The 20-minute rule means spending just 20 focused minutes on one area at a time rather than rushing through the whole house at once. Professional cleaners break the job into zones and tackle each one completely before moving on. This leads to a much more thorough clean — and it's exactly how our team at Tru Vacate Cleaning works every single day.`,
  },
];

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

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Vacate Cleaning Gold Coast | 100% Bond Back Guarantee | Tru Vacate Cleaning"
        description="Gold Coast's most trusted vacate cleaning service. 100% bond back guarantee, fully insured, eco-friendly products. Call or WhatsApp 0488841883 for a free quote."
        canonical="/"
        schemaJson={schemaData}
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden gradient-hero text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url("/assets/generated/hero-vacate-cleaning-gold-coast.dim_1200x600.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 gradient-hero opacity-80"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-sm">
              ⭐ Gold Coast's #1 Vacate Cleaners
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
              Gold Coast's Most Trusted{" "}
              <span className="text-gradient-teal">Vacate Cleaning</span>{" "}
              Service
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
              We make your rental spotless so you get your bond back.{" "}
              <strong className="text-white">Fast. Guaranteed.</strong> Serving
              all Gold Coast suburbs with fully insured, REIQ-standard cleans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                data-ocid="hero.primary_button"
                className="bg-white text-primary hover:bg-white/90 font-semibold text-base px-8"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md text-base font-semibold text-white border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all"
              >
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400" /> Bond Back
                Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400" /> Fully
                Insured
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400" /> Same-Day
                Available
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400" /> Eco-Friendly
                Products
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/generated/hero-vacate-cleaning-gold-coast.dim_1200x600.jpg"
            alt="Professional vacate cleaning team at a Gold Coast apartment – Tru Vacate Cleaning Gold Coast"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div
            className="absolute inset-0 gradient-hero opacity-40"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              Why Gold Coast Renters Choose Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We've helped hundreds of tenants get their full bond back. Here's
              what makes us different.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustSignals.map((signal) => (
              <div
                key={signal.title}
                className="flex gap-4 p-5 rounded-xl bg-secondary/50 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <signal.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base text-foreground mb-1">
                    {signal.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{signal.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section
        className="bg-background py-16"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="services-heading"
              className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3"
            >
              Our Cleaning Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We tackle every part of your rental property — from carpets to
              ceilings, kitchens to bathrooms.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <article
                key={service.href}
                data-ocid={`service.item.${i + 1}`}
                className="bg-card rounded-xl overflow-hidden border border-border card-hover group"
              >
                <div className="relative overflow-hidden h-44">
                  <img
                    src={service.img}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-base text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {service.desc}
                  </p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
              How It Works
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Getting your bond back has never been easier. Three simple steps
              and we do all the hard work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Get a Free Quote",
                desc: "Fill in our quick form or send us a WhatsApp message. We'll reply with a fixed price within 1 hour — no hidden fees, no surprises.",
              },
              {
                step: "02",
                title: "Book Your Clean",
                desc: "Pick a date and time that suits you. We offer same-day bookings and weekend appointments. Our team arrives on time, every time.",
              },
              {
                step: "03",
                title: "Get Your Bond Back",
                desc: "We clean to REIQ standards. Your property manager inspects and you get your full bond refunded. If there's any issue, we come back free of charge.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 text-2xl font-display font-bold">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <Link to="/contact">Book Your Clean Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Real reviews from real Gold Coast renters.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star
                        // biome-ignore lint/suspicious/noArrayIndexKey: static star count
                        key={j}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.location}, Gold Coast
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS SERVED ── */}
      <section className="bg-secondary/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl text-foreground text-center mb-6">
            Vacate Cleaning Across All Gold Coast Suburbs
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {suburbs.map((suburb) => (
              <span
                key={suburb}
                className="px-3 py-1.5 bg-white rounded-full text-sm text-foreground border border-border shadow-xs"
              >
                {suburb}
              </span>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">
            Not on the list? Call us — we likely service your area too.{" "}
            <a
              href="tel:0488841883"
              className="text-primary font-medium hover:underline"
            >
              0488 841 883
            </a>
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="bg-white py-16 md:py-24"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="faq-heading"
              className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about vacate cleaning and bond cleans
              on the Gold Coast.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                data-ocid={`faq.item.${i + 1}`}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-secondary/30 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-display font-semibold text-sm md:text-base text-foreground leading-snug">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    {faq.a.split("\n\n").map((para) => (
                      <p
                        key={para.slice(0, 30)}
                        className="text-sm text-muted-foreground leading-relaxed mb-3 last:mb-0 whitespace-pre-line"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Ready to Get Your Bond Back?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Book your vacate clean today. We respond within 1 hour during
            business hours and offer same-day bookings across the Gold Coast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
            >
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-2" /> Get a Free Quote
              </Link>
            </Button>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md text-base font-semibold text-white border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all"
            >
              <WhatsAppIcon /> WhatsApp 0488 841 883
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
