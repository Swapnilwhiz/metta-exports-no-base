import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTABanner from "../components/shared/CTABanner";
import useSEO from "../hooks/useSEO";

const PROCESS_STEPS = [
  { step: "01", title: "Buyer Inquiry", desc: "The buyer shares their product requirement, including type, quantity, quality standards, packaging, and destination." },
  { step: "02", title: "Supplier Sourcing", desc: "We identify suitable suppliers, collect pricing, and shortlist based on quality, capacity, and reliability." },
  { step: "03", title: "Sampling & Approval", desc: "Samples are sent to the buyer for evaluation. Pricing and terms are finalized after approval." },
  { step: "04", title: "Order Confirmation", desc: "Once terms are agreed, the production order is placed. Payment terms and shipment timelines are confirmed." },
  { step: "05", title: "Production & Quality Control", desc: "We monitor production progress, conduct pre-shipment inspections, and ensure goods meet agreed specifications." },
  { step: "06", title: "Documentation", desc: "All required export documents are prepared — commercial invoice, packing list, certificate of origin, and product-specific certificates." },
  { step: "07", title: "Shipment", desc: "Goods are dispatched per agreed Incoterms. Tracking information is shared with the buyer." },
  { step: "08", title: "Post-Shipment Support", desc: "We remain available for any post-delivery queries, feedback, or follow-up orders." },
];

const DOCUMENTS = [
  "Commercial Invoice",
  "Packing List",
  "Certificate of Origin",
  "Bill of Lading / Airway Bill",
  "FSSAI-related documents (for food products, where applicable)",
  "Phytosanitary Certificate (for agricultural products, where required)",
  "Lab Testing Reports (where required by buyer or destination country)",
  "HS Code classification support",
  "Insurance Certificate (if CIF terms)",
];

const INCOTERMS = [
  { term: "EXW (Ex Works)", desc: "Buyer arranges collection from the supplier's premises. Seller's responsibility ends at the factory gate." },
  { term: "FOB (Free On Board)", desc: "Seller delivers goods to the port of shipment. Buyer handles ocean freight, insurance, and destination logistics." },
  { term: "CIF (Cost, Insurance & Freight)", desc: "Seller covers cost, insurance, and freight to the destination port. Buyer handles import clearance and last-mile delivery." },
  { term: "Door-to-Door", desc: "Full delivery to the buyer's warehouse, where feasible. Pricing includes all logistics and handling charges." },
];

export default function ExportProcessCompliance() {
  useSEO(
    "India Export Process & Compliance Guide | Metta Exports",
    "Complete guide to exporting from India — documentation, customs compliance, quality checks, and shipping. Metta Exports supports B2B buyers through every step of the process."
  );

  return (
    <>
      <PageHero
        title="Export Process and Compliance Support"
        description="A practical overview of how we manage the export process — from your initial inquiry to delivered goods, including documentation and compliance support."
        image="https://media.base44.com/images/public/69f7322a9745be578a491797/64b910bff_generated_f6c1c6a8.png"
      />

      {/* SEO Content Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
              India Export Process & Compliance — Complete B2B Guide
            </h2>
            <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
              Metta Exports supports international B2B buyers through every step of the Indian export process — from supplier identification and sourcing to documentation, customs clearance, and final delivery.
            </p>

            <h2 className="font-playfair text-2xl lg:text-3xl font-semibold text-foreground mt-14">
              Our Export Process — Step by Step
            </h2>
            <ol className="mt-5 space-y-3 list-none">
              {[
                "Buyer Requirement — Share product specs and target pricing",
                "Supplier Identification — We find verified manufacturers",
                "Sampling — Product samples sent for buyer approval",
                "Quality Inspection — Pre-shipment inspection at factory",
                "Export Documentation — Invoice, packing list, certificates",
                "Customs & Shipping — We coordinate freight forwarding",
                "Delivery — Products delivered to your port or warehouse",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
                  <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>

            <h2 className="font-playfair text-2xl lg:text-3xl font-semibold text-foreground mt-14">
              Documents We Handle
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "Commercial Invoice and Packing List",
                "Bill of Lading / Airway Bill",
                "Certificate of Origin (APEDA / Chamber of Commerce)",
                "Phytosanitary Certificate",
                "FSSAI Certificate for food products",
                "Letter of Credit coordination",
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
                Start Your Sourcing Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Original detailed process grid */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Detailed Process"
            title="How We Work — Step by Step"
            description="Our process is designed to be straightforward. Here is what buyers can expect at each stage."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} className="border border-border bg-card p-6">
                <span className="font-playfair text-3xl font-bold text-accent/20">{s.step}</span>
                <h3 className="font-inter text-sm font-semibold text-foreground mt-3">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeading subtitle="Documents" title="Documents Buyers May Need" center={false} />
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Export documentation varies depending on the product, destination country, and applicable regulations. Below are documents commonly required in India's export trade:
              </p>
              <ul className="space-y-3">
                {DOCUMENTS.map((d) => (
                  <li key={d} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span className="text-sm text-muted-foreground">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading subtitle="Incoterms" title="Shipping Terms We Support" center={false} />
              <div className="space-y-5">
                {INCOTERMS.map((i) => (
                  <div key={i.term} className="border-l-2 border-accent/30 pl-5">
                    <h3 className="font-inter text-sm font-semibold text-foreground">{i.term}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent/5 border border-accent/20 p-8 max-w-3xl">
            <h2 className="font-playfair text-xl font-semibold text-foreground">Important Disclaimer</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Final documentation, compliance requirements, and regulatory obligations depend on the specific product being exported, the destination country, the quantity, the buyer's requirements, and applicable trade regulations at the time of shipment. The information on this page is a general reference and does not constitute legal or regulatory advice. Buyers should independently verify import regulations in their jurisdiction.
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Metta Exports provides documentation support as part of the sourcing process, but responsibility for final regulatory compliance rests with the buyer and the applicable regulatory authorities.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have Questions About the Export Process?"
        description="We're happy to discuss documentation, shipping options, and compliance requirements specific to your product and destination."
      />
    </>
  );
}