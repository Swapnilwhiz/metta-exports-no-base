import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTABanner from "../components/shared/CTABanner";
import useSEO from "../hooks/useSEO";

const SPICES = [
  { name: "Turmeric", desc: "Whole fingers and powder. High curcumin content varieties available from Erode, Sangli, and other key regions." },
  { name: "Red Chilli", desc: "Guntur, Byadgi, and Kashmiri varieties in whole, crushed, and powder forms." },
  { name: "Cumin Seeds", desc: "Gujarat and Rajasthan origin. Cleaned, graded, and sorted." },
  { name: "Coriander Seeds", desc: "Whole and ground. Various grades available for food manufacturing and retail." },
  { name: "Black Pepper", desc: "Kerala and Karnataka origin. Malabar and Tellicherry grades." },
  { name: "Cardamom", desc: "Green cardamom from Kerala and Tamil Nadu. Bold and extra-bold sizes." },
  { name: "Cloves", desc: "Indian and imported origin available. Graded by size and oil content." },
  { name: "Spice Blends", desc: "Custom blends for specific cuisines — Middle Eastern, South Asian, and European formulations." },
];

const BUYER_CASES = [
  "Food manufacturers requiring bulk spice ingredients",
  "Restaurants and hotel chains buying branded or unbranded spices",
  "Distributors supplying ethnic food stores",
  "Retailers looking for private-label spice products",
  "Food processors needing specific spice grades and specifications",
];

const PACKAGING = [
  "Bulk bags (25 kg, 50 kg) for industrial and wholesale buyers",
  "Retail-ready pouches and jars with custom branding",
  "Vacuum-sealed packaging for extended shelf life",
  "Food-grade inner packaging with protective outer cartons",
  "Private labelling and custom packaging design on request",
];

export default function SpicesExport() {
  useSEO(
    "Indian Spices Export | B2B Bulk Spices Supplier | Metta Exports",
    "Source premium Indian spices in bulk — turmeric, cumin, coriander, cardamom, pepper, and chilli. Verified B2B supplier for UAE, UK and European importers."
  );

  return (
    <>
      <PageHero
        title="Indian Spices Export — Bulk B2B Supplier"
        description="Metta Exports supplies premium Indian spices to international B2B buyers in bulk quantities. All spices are sourced directly from verified Indian farmers and processing units."
        image="https://media.base44.com/images/public/69f7322a9745be578a491797/b6990cc82_generated_173f0f81.png"
      />

      {/* SEO H1 + intro */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
              Indian Spices Export — Bulk B2B Supplier
            </h2>
            <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
              Metta Exports supplies premium Indian spices to international B2B buyers in bulk quantities. All spices are sourced directly from verified Indian farmers and processing units, meeting international quality and food safety standards.
            </p>

            <h2 className="font-playfair text-2xl lg:text-3xl font-semibold text-foreground mt-14">
              Spices We Export
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "Turmeric (Haldi) — Erode and Nizamabad varieties",
                "Cumin (Jeera) — Rajasthan and Gujarat origin",
                "Coriander (Dhaniya) — Whole and powder form",
                "Cardamom (Elaichi) — Green cardamom from Kerala",
                "Black Pepper — Malabar coast origin",
                "Red Chilli — Guntur and Byadagi varieties",
                "Fenugreek (Methi) — Rajasthan origin",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-playfair text-2xl lg:text-3xl font-semibold text-foreground mt-14">
              Quality & Compliance
            </h2>
            <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
              All exported spices meet FSSAI, APEDA, and international food safety standards. We provide phytosanitary certificates, quality inspection reports, and full export documentation.
            </p>

            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-block bg-accent text-white px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors"
              >
                Get a Bulk Spices Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Spices We Source" title="Available Spice Products" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPICES.map((s) => (
              <div key={s.name} className="bg-card border border-border p-6">
                <h3 className="font-playfair text-lg font-semibold text-foreground">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeading subtitle="Buyer Use Cases" title="Who Buys Indian Spices Through Us" center={false} />
              <ul className="space-y-4">
                {BUYER_CASES.map((b) => (
                  <li key={b} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span className="text-base text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading subtitle="Packaging Options" title="How Spices Are Packed" center={false} />
              <ul className="space-y-4">
                {PACKAGING.map((p) => (
                  <li key={p} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span className="text-base text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-playfair text-2xl font-semibold text-foreground">Compliance & Documentation</h2>
            <div className="mt-4 space-y-3 text-base text-muted-foreground leading-relaxed">
              <p>
                Indian spice exports require proper documentation depending on the destination country. We assist buyers with:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  <span>FSSAI-related documentation where applicable</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  <span>HS code identification for customs clearance</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  <span>Lab testing and quality certificates where required by the buyer or destination country</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  <span>Certificate of origin, phytosanitary certificate, and other export documents</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground italic">
                Final documentation requirements depend on the product, quantity, destination country, and applicable regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Indian Spices in Bulk?"
        description="Share your spice requirements — product, quantity, quality grade, and destination. We'll provide pricing and supply options."
      />
    </>
  );
}