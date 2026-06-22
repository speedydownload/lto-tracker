interface BreadcrumbItem { name?: string; url?: string; label?: string; href?: string; }
export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name || item.label, item: item.url || item.href })) };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function FAQPageSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function OrganizationSchema() {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: "LTO Tracker", url: "https://ltotrackeronline.ph", logo: "https://ltotrackeronline.ph/LTO-Logo.webp", description: "LTO Tracker provides real-time tracking and information about LTO services, driver's license status, vehicle registration, and plate number availability in the Philippines.", contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: "support@ltotrackeronline.ph", availableLanguage: ["English", "Filipino"] } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function WebApplicationSchema({ name, url, description }: { name: string; url: string; description: string }) {
  const schema = { "@context": "https://schema.org", "@type": "WebApplication", name, url, description, applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "PHP" }, author: { "@type": "Organization", name: "LTO Tracker" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function HowToSchema({ name, description, steps }: { name: string; description: string; steps: { name: string; text: string }[] }) {
  const schema = { "@context": "https://schema.org", "@type": "HowTo", name, description, step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text })) };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ArticleSchema({ headline, description, datePublished, dateModified, author, url, image }: { headline: string; description: string; datePublished: string; dateModified: string; author: string; url: string; image?: string }) {
  const schema = { "@context": "https://schema.org", "@type": "Article", headline, description, datePublished, dateModified, author: { "@type": "Person", name: author }, publisher: { "@type": "Organization", name: "LTO Tracker", logo: { "@type": "ImageObject", url: "https://ltotrackeronline.ph/LTO-Logo.webp" } }, url, image: image || "https://ltotrackeronline.ph/LTO-Tracker-Banner.webp", mainEntityOfPage: { "@type": "WebPage", "@id": url } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function LocalBusinessSchema({ name, address, city, phone, lat, lng }: { name: string; address: string; city: string; phone: string; lat: number; lng: number }) {
  const schema = { "@context": "https://schema.org", "@type": "GovernmentOffice", name, telephone: phone, address: { "@type": "PostalAddress", streetAddress: address, addressLocality: city, addressCountry: "PH" }, geo: { "@type": "GeoCoordinates", latitude: lat, longitude: lng }, openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
