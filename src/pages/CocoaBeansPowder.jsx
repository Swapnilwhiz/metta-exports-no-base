import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTABanner from "../components/shared/CTABanner";
import useSEO from "../hooks/useSEO";

const PRODUCTS = [
  { name: "Cocoa Beans", desc: "Raw and fermented cocoa beans sourced from Indian growing regions. Available in various grades depending on buyer specifications." },
  { name: "Cocoa Powder", desc: "Natural and alkalized cocoa powder for food manufacturing, bakery, and confectionery applications." },
  { name: "Cocoa-Based Ingredients", desc: "Cocoa butter, cocoa nibs, and cocoa liquor for chocolate manufacturers and food processors." },
];

const BUYERS = [
  "Chocolate manufacturers and confectioners",
  "Bakery and food processing companies",
  "Beverage manufacturers",
  "Retail brands looking for private-label cocoa products",
  "Bulk ingredient traders and distributors",
];

export default function CocoaBeansPowder() {
  useSEO(
    "Indian Cocoa Beans & Cocoa Powder Export | Metta Exports",
    "Premium Indian cocoa beans and cocoa powder for B2B buyers. Metta Exports provides bulk cocoa sourcing from verified Indian growers for UAE, UK and European importers."
  );

  return (
    <>
      <PageHero
        title="Cocoa Beans and Cocoa Powder Supply"
        description="Source cocoa beans, cocoa powder, and cocoa-based ingredients from India for food manufacturing and processing."
        image="https://media.base44.com/images/public/69f7322a9745be578a491797/8a3cbeba8_generated_60099947.png"
      />

      {/* SEO Content Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
              Indian Cocoa Beans & Cocoa Powder — B2B Export
            </h2>
            <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
              Metta Exports sources premium cocoa beans and cocoa powder from verified Indian growers in Kerala and Karnataka. We supply B2B buyers in UAE, UK, and Europe with export-quality cocoa at competitive bulk pricing.
            </p>

            <h2 className="font-playfair text-2xl lg:text-3xl font-semibold text-foreground mt-14">
              Products Available
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "Raw Cocoa Beans — Sun-dried, fermented, export grade",
                "Cocoa Powder — Natural and alkalized variants",
                "Cocoa Butter — Available on request",
                "Minimum Order Quantity: As per buyer requirement",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-block bg-accent text-white px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors"
              >
                Request Cocoa Sourcing Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Products" title="Cocoa Products We Source" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="bg-card border border-border p-6">
                <h3 className="font-playfair text-lg font-semibold text-foreground">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeading subtitle="Suitable Buyers" title="Who This Is For" center={false} />
              <ul className="space-y-4">
                {BUYERS.map((b) => (
                  <li key={b} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span className="text-base text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading subtitle="Quality & Packaging" title="Quality Standards and Packaging" center={false} />
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  Cocoa products are sourced from suppliers with appropriate food safety practices. We can arrange quality testing, moisture analysis, and fat content analysis as required.
                </p>
                <p>
                  Packaging options include bulk jute or PP bags for beans, food-grade inner packaging with multi-wall paper bags or cartons for cocoa powder, and custom packaging for retail or private-label orders.
                </p>
                <p className="text-sm italic">
                  Specific quality parameters and certifications depend on supplier capability, order volume, and buyer requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Cocoa Beans or Cocoa Powder?"
        description="Share your product specifications, required grade, quantity, and destination. We'll check supply availability and provide pricing."
      />
    </>
  );
}