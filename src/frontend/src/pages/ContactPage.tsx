import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { ServiceType } from "../backend";
import { SEOHead } from "../components/SEOHead";
import { useActor } from "../hooks/useActor";

const serviceOptions = [
  {
    value: "vacateCleaning",
    label: "Vacate Cleaning",
    enum: ServiceType.vacateCleaning,
  },
  {
    value: "bondCleaning",
    label: "Bond Cleaning",
    enum: ServiceType.bondCleaning,
  },
  {
    value: "endOfLease",
    label: "End of Lease Cleaning",
    enum: ServiceType.vacateCleaning,
  },
  {
    value: "carpetCleaning",
    label: "Carpet Steam Cleaning",
    enum: ServiceType.carpetCleaning,
  },
  {
    value: "ovenKitchen",
    label: "Oven & Kitchen Cleaning",
    enum: ServiceType.vacateCleaning,
  },
  {
    value: "windowCleaning",
    label: "Window Cleaning",
    enum: ServiceType.vacateCleaning,
  },
  {
    value: "bathroomCleaning",
    label: "Bathroom Cleaning",
    enum: ServiceType.bondCleaning,
  },
];

export function ContactPage() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const selectedService = serviceOptions.find(
        (s) => s.value === form.service,
      );
      const serviceEnum = selectedService?.enum ?? ServiceType.vacateCleaning;

      // Save to backend
      if (actor) {
        await actor.submitEnquiry(
          form.name,
          form.email,
          form.phone,
          serviceEnum,
          form.date,
          form.message,
        );
      }

      // Build mailto link — destination encoded, not in plain HTML
      const dest = atob("aHVtcHR5ZHVtcHR5Ym9uZGNsZWFuaW5nQGdtYWlsLmNvbQ==");
      const subjectLine = `New Enquiry from ${form.name} — ${selectedService?.label ?? "Cleaning Service"}`;
      const bodyText = [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Service: ${selectedService?.label ?? form.service}`,
        `Preferred Date: ${form.date || "Not specified"}`,
        `Message: ${form.message}`,
      ].join("\n");

      const mailtoHref = `mailto:${dest}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyText)}`;
      window.location.href = mailtoHref;

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg(
        "Something went wrong. Please try WhatsApp or call us directly on 0488 841 883.",
      );
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Tru Vacate Cleaning Gold Coast | Get a Free Quote"
        description="Get in touch with Tru Vacate Cleaning Gold Coast. Call, WhatsApp or fill in our form for a free quote. We respond within 1 hour during business hours."
        canonical="/contact"
      />

      {/* Hero */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Get a Free Quote
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            We respond within 1 hour during business hours. Same-day bookings
            available across the Gold Coast.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display font-bold text-2xl text-foreground mb-2">
                Send Us an Enquiry
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Fill in the form below and your email app will open
                automatically so you can send the message directly to us.
              </p>

              {status === "success" ? (
                <div
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center justify-center p-10 bg-green-50 rounded-xl border border-green-200 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    Thanks! Enquiry Received.
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We've received your enquiry. We'll be in touch within 1 hour
                    during business hours.
                    <br />
                    <br />
                    In the meantime, you can also reach us on WhatsApp for a
                    faster response.
                  </p>
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-white"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <WhatsAppIcon /> Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        data-ocid="contact.name_input"
                        required
                        placeholder="e.g. Sarah Johnson"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        data-ocid="contact.phone_input"
                        required
                        type="tel"
                        placeholder="e.g. 0488 841 883"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium mb-1.5 block"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      data-ocid="contact.email_input"
                      required
                      type="email"
                      placeholder="e.g. sarah@example.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      autoComplete="email"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium mb-1.5 block">
                        Service Required{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        required
                        value={form.service}
                        onValueChange={(val) => handleChange("service", val)}
                      >
                        <SelectTrigger data-ocid="contact.service_select">
                          <SelectValue placeholder="Select a service..." />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((s) => (
                            <SelectItem key={s.value} value={s.value}>
                              {s.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label
                        htmlFor="date"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        Preferred Date
                      </Label>
                      <Input
                        id="date"
                        data-ocid="contact.date_input"
                        type="date"
                        value={form.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium mb-1.5 block"
                    >
                      Message / Property Details{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      data-ocid="contact.message_textarea"
                      required
                      rows={5}
                      placeholder="Tell us about your property — number of bedrooms, bathrooms, any special requirements..."
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                    />
                  </div>

                  {status === "error" && (
                    <div
                      data-ocid="contact.error_state"
                      className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <Button
                    type="submit"
                    data-ocid="contact.form_submit_button"
                    disabled={status === "loading"}
                    size="lg"
                    className="w-full font-semibold"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        <span data-ocid="contact.loading_state">
                          Sending...
                        </span>
                      </>
                    ) : (
                      "Send Enquiry & Open Email"
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, your email app will open so you can
                    send your enquiry directly.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp CTA */}
              <div className="rounded-xl overflow-hidden border border-border">
                <div className="p-5" style={{ backgroundColor: "#25D366" }}>
                  <h3 className="font-display font-bold text-white text-lg mb-1">
                    Chat on WhatsApp
                  </h3>
                  <p className="text-white/90 text-sm">
                    Get an instant response. We're online 7 days a week.
                  </p>
                </div>
                <div className="p-5 bg-white">
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <WhatsAppIcon /> WhatsApp 0488 841 883
                  </a>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Tap the button to open WhatsApp and chat with us now.
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="rounded-xl border border-border p-5 bg-card space-y-4">
                <h3 className="font-display font-semibold text-base text-card-foreground">
                  Contact Details
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Phone:</strong>{" "}
                    <a
                      href="tel:0488841883"
                      className="text-primary hover:underline"
                    >
                      0488 841 883
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Area:</strong> Gold
                    Coast & Surrounds, QLD
                  </p>
                  <p>
                    <strong className="text-foreground">Hours:</strong> Mon–Sun,
                    7am–7pm
                  </p>
                  <p>
                    <strong className="text-foreground">Response Time:</strong>{" "}
                    Within 1 hour
                  </p>
                </div>
              </div>

              {/* What happens next */}
              <div className="rounded-xl border border-border p-5 bg-secondary/30 space-y-3">
                <h3 className="font-display font-semibold text-sm text-foreground">
                  What Happens Next?
                </h3>
                {[
                  "We review your enquiry and contact you within 1 hour",
                  "We give you a fixed price — no hidden fees",
                  "You confirm the booking for a date that suits you",
                  "Our team arrives, cleans to REIQ standard, you get your bond back",
                ].map((step, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: numbered steps
                  <div key={i} className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
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
