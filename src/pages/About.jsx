import React from "react";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTABanner from "../components/shared/CTABanner";
import useSEO from "../hooks/useSEO";

const APPROACH_ITEMS = [
  { title: "Supplier Verification", desc: "We work with suppliers we have visited, tested, or built working relationships with over time. No blind sourcing." },
  { title: "Clear Communication", desc: "Buyers get direct updates on pricing, timelines, quality, and documentation. No ambiguity in the process." },
  { title: "Compliance Support", desc: "We assist with FSSAI-related documentation, HS code identification, certificates of origin, and export paperwork as applicable." },
  { title: "Realistic Timelines", desc: "We set expectations based on actual supplier capacity and logistics. No overpromising on delivery dates." },
];

const WHY_INDIA = [
  "One of the world's largest producers of textiles, spices, and agricultural products",
  "Competitive manufacturing and production costs with skilled labour",
  "Established trade corridors with UAE, UK, Europe, USA, and South Asia",
  "Wide range of export-ready products across food, textiles, and handicraft sectors",
  "Growing compliance infrastructure with FSSAI, BIS, and export quality standards",
];

export default function About() {
  useSEO(
    "About Metta Exports | Registered Indian Export Sourcing Company",
    "Learn about Metta Exports — a Mumbai-based registered Indian exporter and IEC holder helping global B2B buyers source quality products directly from verified Indian suppliers."
  );

  return (
    <>
      <PageHero
        title="About Metta Exports"
        description="An import-export and sourcing company connecting B2B buyers with India's supplier ecosystem."
        image="https://media.base44.com/images/public/69f7322a9745be578a491797/6649891df_generated_image.png"
        imageAlt="International trade partnership handshake between Indian and Middle Eastern business professionals representing Metta Exports global sourcing relationships"
      />

      {/* Who We Are */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading subtitle="Who We Are" title="A Trade and Sourcing Company Built for B2B Buyers" center={false} />
            <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
              <p>
                Metta Exports is an import-export and sourcing company with a UAE business presence and a supply network rooted in India. We work with B2B buyers — importers, distributors, retailers, hotels, food processors, and corporate procurement teams — who need a reliable sourcing partner in India.
              </p>
              <p>
                Our work spans five core categories: textiles and handicrafts, spices, natural products, cocoa, and domestic India-to-India sourcing. For each category, we handle supplier identification, pricing, samples, quality coordination, and export documentation support.
              </p>
              <p>
                We are not a marketplace or a digital platform. We operate as a hands-on sourcing partner that works directly with manufacturers, producers, and artisan clusters across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Role */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading subtitle="Our Role" title="What We Do for Buyers" />
            <div className="space-y-5 text-base text-muted-foreground leading-relaxed text-left">
              <p>
                International buyers often face challenges when sourcing from India — identifying trustworthy suppliers, navigating documentation requirements, ensuring product quality, and coordinating logistics across time zones and languages.
              </p>
              <p>
                Metta Exports sits between the buyer and the supplier ecosystem. We do the groundwork — visiting production facilities, vetting suppliers, collecting samples, negotiating pricing, and coordinating shipments. The buyer deals with one company and one point of contact instead of managing multiple vendors.
              </p>
              <p>
                For domestic Indian buyers, we provide similar sourcing support — connecting businesses with suppliers in other states, industries, or product categories they may not have direct access to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Approach"
            title="How We Work"
            description="Our process is built on practical steps, not marketing promises. Here is what buyers can expect."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {APPROACH_ITEMS.map((item) => (
              <div key={item.title} className="border border-border p-6">
                <h3 className="font-inter text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why India */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionHeading subtitle="Why India" title="India as a Sourcing Origin" center={false} />
              <ul className="space-y-4">
                {WHY_INDIA.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading subtitle="Trade Philosophy" title="Goodwill That Moves the World" center={false} />
              <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
                <p>
                  The name Metta comes from a word meaning goodwill and genuine care. It reflects how we approach trade — with respect for the buyer's time, honest communication about what is possible, and a focus on building long-term supply relationships rather than one-time transactions.
                </p>
                <p>
                  We believe trade works best when both sides — the buyer and the supplier — are treated fairly. That means accurate pricing, realistic timelines, and no hidden costs or intermediaries inflating the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to Know More?"
        description="Reach out to discuss your sourcing needs. We are happy to explain our process and how we can help."
        buttonText="Get in Touch"
      />
    </>
  );
}