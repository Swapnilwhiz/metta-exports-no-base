import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTABanner from "../components/shared/CTABanner";
import useSEO from "../hooks/useSEO";

const PRODUCTS = [
  { name: "Raw Honey", desc: "Unprocessed honey sourced from India's major beekeeping regions. Multi-floral, Sidr, and forest honey varieties available depending on season and availability." },
  { name: "Dry Fruits", desc: "Almonds, cashews, raisins, walnuts, pistachios, and dried figs. Indian origin and imported varieties available for re-export." },
  { name: "A2 Cow Ghee", desc: "Traditional slow-cooked ghee made from A2 cow milk. Sourced from dairy farms following Bilona or similar traditional methods." },
  { name: "Wellness Food Products", desc: "Moringa powder, amla products, turmeric-based health supplements, and other traditional Indian food products with growing international demand." },
];

const BUYER_NEEDS = [
  "Consistent supply with agreed quality parameters",
  "Proper food-grade packaging for transit and shelf stability",
  "Lab testing certificates and quality documentation where required",
  "Private labelling and retail-ready packaging options",
  "Competitive pricing for bulk and trial orders",
  "FSSAI and export compliance documentation support",
];

export default function NaturalProducts() {
  useSEO(
    "Natural Products from India | B2B Export Sourcing | Metta Exports",
    "Export-quality natural and organic products sourced directly from India. Metta Exports supplies international B2B buyers with certified natural goods at competitive prices."
  );

  return (
    <>
      <PageHero
        title="Natural Products Sourcing from India"
        description="Raw honey, dry fruits, A2 cow ghee, and wellness food products — sourced from India's agricultural regions for B2B buyers."
        image="https://media.base44.com/images/public/69f7322a9745be578a491797/d15c42bea_generated_54693ffa.png"
      />

      {/* SEO Content Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
              Natural Products from India — B2B Export Sourcing
            </h2>
            <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
              Metta Exports supplies certified natural and organic products from India to international B2B buyers. Our range includes herbs, botanicals, essential oils, and health-focused agri products from verified suppliers.
            </p>

            <h2 className="font-playfair text-2xl lg:text-3xl font-semibold text-foreground mt-14">
              Natural Products We Export
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "Dried herbs and botanicals",
                "Essential oils and extracts",
                "Organic pulses and grains",
                "Natural sweeteners",
                "Herbal powders and blends",
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
                Enquire About Natural Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Products" title="What We Source" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
          <div className="max-w-3xl">
            <SectionHeading subtitle="What Buyers Need" title="Typical Buyer Requirements" center={false} />
            <ul className="space-y-4">
              {BUYER_NEEDS.map((n) => (
                <li key={n} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  <span className="text-base text-muted-foreground">{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-playfair text-2xl font-semibold text-foreground">Compliance Notes</h2>
            <div className="mt-4 space-y-3 text-base text-muted-foreground leading-relaxed">
              <p>
                Natural food products require specific documentation depending on the product and destination. We assist with FSSAI-related documentation, lab testing coordination, HS code identification, and relevant export certificates.
              </p>
              <p className="text-sm italic">
                Regulatory requirements vary by product type, destination country, and applicable laws. We help navigate these requirements but recommend buyers verify import regulations in their own jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Interested in Natural Products from India?"
        description="Tell us what you need — product type, quality parameters, quantity, and destination. We'll provide pricing and sourcing options."
      />
    </>
  );
}