import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTABanner from "../components/shared/CTABanner";
import useSEO from "../hooks/useSEO";

const PRODUCTS = [
  "Block-printed fabrics and textiles",
  "Handwoven cotton and silk materials",
  "Embroidered cushion covers and table linens",
  "Brass and copper home decor items",
  "Carved wooden furniture and accessories",
  "Handmade pottery and ceramics",
  "Leather goods and bags",
  "Jute and natural fibre products",
  "Artisan rugs and carpets",
  "Decorative wall hangings and tapestries",
];

const BUYERS = [
  "Interior designers and decor retailers",
  "Hospitality and hotel procurement teams",
  "E-commerce sellers and online marketplaces",
  "Specialty stores and boutiques",
  "Corporate gifting companies",
  "Distributors and wholesale buyers",
];

const PROCESS = [
  { title: "Requirement Review", desc: "Share product specifications, design references, quantities, and quality expectations." },
  { title: "Supplier Matching", desc: "We connect you with artisan clusters and manufacturers suited to your product type and order size." },
  { title: "Sampling", desc: "Receive product samples for quality approval before committing to production orders." },
  { title: "Production Coordination", desc: "We monitor production progress, conduct quality checks, and coordinate packaging." },
  { title: "Export & Shipment", desc: "Complete export documentation, packaging as per buyer specs, and shipment coordination." },
];

export default function TextilesHandicrafts() {
  useSEO(
    "Indian Textiles, Handicrafts & Home Decor Export | Metta Exports",
    "Source Indian handloom fabrics, textiles, handicrafts and home decor for B2B import. Metta Exports connects global buyers with verified Indian artisans and manufacturers."
  );

  return (
    <>
      <PageHero
        title="Indian Textiles, Handicrafts & Home Decor Sourcing"
        description="Source handwoven textiles, artisan handicrafts, and traditional home decor directly from India's craft clusters and production centres."
        image="https://media.base44.com/images/public/69f7322a9745be578a491797/019f047dd_generated_129e9f2e.png"
      />

      {/* SEO Content Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
              Indian Textiles, Handicrafts & Home Decor — B2B Export
            </h2>
            <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
              Metta Exports connects international B2B buyers with verified Indian artisans and manufacturers of handloom textiles, handicrafts, and home decor. We source from craft clusters across Rajasthan, Gujarat, Uttar Pradesh, and West Bengal.
            </p>

            <h2 className="font-playfair text-2xl lg:text-3xl font-semibold text-foreground mt-14">
              What We Source
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "Handloom fabrics — Cotton, silk, wool blends",
                "Block-printed and embroidered textiles",
                "Decorative handicrafts and artifacts",
                "Home decor — Cushion covers, table linen, wall art",
                "Leather goods and accessories",
                "Jute and sustainable products",
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
                Get a Textiles Sourcing Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeading subtitle="Products" title="What We Can Source" center={false} />
              <ul className="space-y-3">
                {PRODUCTS.map((p) => (
                  <li key={p} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span className="text-base text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading subtitle="Suitable Buyers" title="Who This Category Is For" center={false} />
              <ul className="space-y-3">
                {BUYERS.map((b) => (
                  <li key={b} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span className="text-base text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <img
                  src="https://media.base44.com/images/public/69f7322a9745be578a491797/21385693d_generated_f04f2ed9.png"
                  alt="Indian textile production facility with handwoven fabrics"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Sourcing Process"
            title="How We Source Textiles and Handicrafts"
            description="A step-by-step process from your initial inquiry to delivered goods."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS.map((s, i) => (
              <div key={s.title}>
                <span className="font-playfair text-3xl font-bold text-accent/20">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-inter text-sm font-semibold text-foreground mt-2">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-playfair text-2xl font-semibold text-foreground">Packaging & Quality Checks</h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Products are packed according to buyer specifications. For textiles, this includes folding, polybag wrapping, carton packing, and labelling. Handicrafts and decor items receive protective packaging to minimise transit damage. Quality inspections are conducted before dispatch — including visual checks, measurement verification, and defect sorting.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Custom packaging, private labelling, and branded packaging can be arranged on request, subject to minimum order quantities.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Looking for Indian Textiles or Home Decor?"
        description="Tell us what you need — product type, design references, quantity, and destination. We'll handle the rest."
      />
    </>
  );
}