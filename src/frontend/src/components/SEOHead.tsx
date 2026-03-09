import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schemaJson?: object;
}

const SITE_URL = "https://truvacatecleaninggoldcoast.com.au";

function applyMeta(selector: string, content: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    const attrMatch = selector.match(/\[([^\]]+)="([^"]+)"\]/);
    if (attrMatch) el.setAttribute(attrMatch[1], attrMatch[2]);
    document.head.appendChild(el);
  }
  el.content = content;
}

function applyLink(rel: string, href: string) {
  let el = document.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = "/assets/generated/hero-vacate-cleaning-gold-coast.dim_1200x600.jpg",
  ogType = "website",
  schemaJson,
}: SEOHeadProps) {
  useEffect(() => {
    const fullCanonical = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
    const fullOgImage = `${SITE_URL}${ogImage}`;

    document.title = title;
    applyMeta('meta[name="description"]', description);
    applyMeta('meta[property="og:title"]', title);
    applyMeta('meta[property="og:description"]', description);
    applyMeta('meta[property="og:image"]', fullOgImage);
    applyMeta('meta[property="og:type"]', ogType);
    applyMeta('meta[property="og:url"]', fullCanonical);
    applyMeta('meta[name="twitter:card"]', "summary_large_image");
    applyMeta('meta[name="twitter:title"]', title);
    applyMeta('meta[name="twitter:description"]', description);
    applyMeta('meta[name="twitter:image"]', fullOgImage);
    applyLink("canonical", fullCanonical);

    if (schemaJson) {
      const existingSchema = document.querySelector(
        'script[data-schema="page-schema"]',
      );
      if (existingSchema) existingSchema.remove();
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "page-schema");
      script.textContent = JSON.stringify(schemaJson);
      document.head.appendChild(script);
    }

    return () => {
      const schemaEl = document.querySelector(
        'script[data-schema="page-schema"]',
      );
      if (schemaEl && !schemaJson) schemaEl.remove();
    };
  }, [title, description, canonical, ogImage, ogType, schemaJson]);

  return null;
}
