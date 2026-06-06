import React from "react";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTABanner from "../components/shared/CTABanner";
import useSEO from "../hooks/useSEO";

const WHO_FOR = [
  "Hotels and hospitality groups needing bulk procurement across multiple categories",
  "Retail chains looking for new product suppliers in different states",
  "Corporate buyers managing multi-location procurement",
  "Distributors expanding their product range with new supplier relationships",
  "Exporters who need Indian suppliers but lack the on-ground sourcing team",
  "Startups or new businesses entering the Indian market and needing supplier introductions",
];

const WHAT_WE_HELP = [
  { title: "Supplier Discovery", desc: "We identify and vet suppliers across India that match your product, quality, and pricing requirements." },
  { title: "Price Comparison", desc: "Receive comparative pricing from multiple suppliers so you can make informed procurement decisions." },
  { title: "Product Coordination", desc: "We manage sampling, quality checks, and product specifications between you and the supplier." },
  { title: "Bulk Order Support", desc: "For large orders, we coordinate production schedules, delivery logistics, and quality inspections." },
  { title: "Vendor Communication", desc: "We handle day-to-day communication with suppliers, reducing the language and logistics gap." },
];

export default function IndiaDomesticSourcing() {
  useSEO(
    "India Domestic Sourcing Services | Supplier Network | Metta Exports",
    "Access Metta Exports' verified domestic Indian supplier network. End-to-end sourcing support — from manufacturer identification to quality inspection and logistics."
  );

  return (
    <>
      <PageHero
        title="India-to-India B2B Sourcing Services"
        description="Helping businesses within India find the right suppliers, compare pricing, and manage procurement — without the hassle of doing it all yourself."
        image="https://media.base44.com/images/public/69f7322a9745be578a491797/cc4c3e326_generated_8a7531a1.png"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading subtitle="Overview" title="Domestic Sourcing for Indian Businesses" center={false} />
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                India's supply chain is vast but fragmented. Finding the right supplier in another state, negotiating pricing, managing quality, and coordinating logistics can be time-consuming — especially when your team is focused on running the business, not chasing vendors.
              </p>
              <p>
                Our domestic sourcing service does the legwork. We use our supplier network across India to identify, vet, and coordinate procurement for businesses that need reliable sourcing support without the overhead of building their own supply chain team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Who This Is For" title="Businesses That Benefit from This Service" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {WHO_FOR.map((item) => (
              <div key={item} className="bg-card border border-border p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What We Help With"
            title="Our Domestic Sourcing Services"
            description="Practical sourcing support across the procurement lifecycle."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {WHAT_WE_HELP.map((item) => (
              <div key={item.title} className="border border-border p-6">
                <h3 className="font-inter text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Sourcing Support Within India?"
        description="Tell us what you're looking for — product category, quality expectations, order volume, and delivery location. We'll find the right suppliers."
      />
    </>
  );
}