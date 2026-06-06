import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Shield, Package, Users } from "lucide-react";
import useSEO from "../hooks/useSEO";
import SectionHeading from "../components/shared/SectionHeading";
import ProductCategoryCard from "../components/shared/ProductCategoryCard";
import CTABanner from "../components/shared/CTABanner";
import HeroCarousel from "../components/home/HeroCarousel";

const TRUST_ITEMS = [
  { icon: Globe, label: "India Sourcing Network", desc: "Direct access to verified suppliers across India's key production regions" },
  { icon: Shield, label: "Compliance-First Process", desc: "Documentation, quality checks, and regulatory support built into every order" },
  { icon: Package, label: "B2B Supply Support", desc: "From sample procurement to full container shipments, managed end to end" },
  { icon: Users, label: "UAE Business Presence", desc: "Registered in UAE with understanding of Gulf, European, and South Asian trade requirements" },
];

const CATEGORIES = [
  { title: "Textiles, Handicrafts & Home Decor", desc: "Handwoven textiles, block prints, brass decor, and artisan home furnishings sourced from India's craft clusters.", image: "https://media.base44.com/images/public/69f7322a9745be578a491797/019f047dd_generated_129e9f2e.png", link: "/textiles-handicrafts-home-decor", alt: "Indian textiles and handicrafts for export" },
  { title: "Spices", desc: "Turmeric, red chilli, cumin, cardamom, black pepper, and custom spice blends in bulk and retail-ready packaging.", image: "https://media.base44.com/images/public/69f7322a9745be578a491797/b6990cc82_generated_173f0f81.png", link: "/spices-export", alt: "Indian spices for export" },
  { title: "Natural Products", desc: "Raw honey, dry fruits, A2 cow ghee, and wellness food products from India's agricultural regions.", image: "https://media.base44.com/images/public/69f7322a9745be578a491797/d15c42bea_generated_54693ffa.png", link: "/natural-products", alt: "Natural products from India including honey and dry fruits" },
  { title: "Cocoa Beans & Cocoa Powder", desc: "Cocoa beans, cocoa powder, and cocoa-based ingredients for food manufacturers and processors.", image: "https://media.base44.com/images/public/69f7322a9745be578a491797/8a3cbeba8_generated_60099947.png", link: "/cocoa-beans-powder", alt: "Cocoa beans and cocoa powder sourcing" },
  { title: "India Domestic B2B Sourcing", desc: "Supplier discovery, price comparison, and procurement coordination for businesses operating within India.", image: "https://media.base44.com/images/public/69f7322a9745be578a491797/cc4c3e326_generated_8a7531a1.png", link: "/india-domestic-sourcing", alt: "India domestic B2B sourcing services" },
];

const PROCESS_STEPS = [
  { step: "01", title: "Share Your Requirement", desc: "Tell us what you need — product type, quantity, quality standards, and destination." },
  { step: "02", title: "Supplier Identification", desc: "We identify and vet suitable suppliers from our network across India's production regions." },
  { step: "03", title: "Samples & Pricing", desc: "Receive product samples and competitive pricing. Review and confirm before we proceed." },
  { step: "04", title: "Production & Quality Checks", desc: "We coordinate production, conduct quality inspections, and prepare export documentation." },
  { step: "05", title: "Shipment & Delivery", desc: "Goods are shipped per agreed Incoterms — EXW, FOB, CIF, or door-to-door where feasible." },
];

const WHY_ITEMS = [
  "Direct relationships with manufacturers and producers across India",
  "Product sourcing across multiple categories under one point of contact",
  "Support with export documentation, compliance, and HS code identification",
  "Flexible order sizes — from trial orders to full container loads",
  "Transparent pricing with no hidden intermediaries",
  "Post-shipment support and ongoing supply continuity",
];

export default function Home() {
  useSEO(
    "Metta Exports | B2B Indian Supplier Sourcing for UAE, UK & Europe",
    "Metta Exports connects international B2B buyers with verified Indian suppliers. Premium sourcing for UAE, UK & European importers — spices, cocoa, textiles, agri products & more."
  );

  return (
    <>
      {/* Hero Carousel — 3 rotating banners */}
      <HeroCarousel />

      {/* Trust Strip */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-inter text-sm font-semibold text-foreground">{item.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Source */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What We Source"
            title="Products We Export from India"
            description="Five core categories covering India's strongest export sectors. Each category backed by our network of verified producers and manufacturers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CATEGORIES.map((cat) => (
              <ProductCategoryCard key={cat.title} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Buyers Work With Us */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                subtitle="Why Metta Exports"
                title="Why Buyers Work With Us"
                center={false}
              />
              <ul className="space-y-4">
                {WHY_ITEMS.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://media.base44.com/images/public/69f7322a9745be578a491797/21385693d_generated_f04f2ed9.png"
                alt="Indian textile production and quality sourcing"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Export Process Snapshot */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="How It Works"
            title="Export Process Snapshot"
            description="A practical overview of how we move from your initial inquiry to delivered goods."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} className="relative">
                <span className="font-playfair text-4xl font-bold text-accent/20">{s.step}</span>
                <h3 className="font-inter text-sm font-semibold text-foreground mt-2">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/export-process-compliance"
              className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:underline"
            >
              View full export process and compliance details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
              Premium B2B Export Sourcing from India
            </h2>
            <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
              Metta Exports is a Mumbai-based registered Indian exporter connecting international B2B buyers with verified Indian suppliers. We specialise in sourcing spices, cocoa, natural products, textiles, and handicrafts for importers in UAE, United Kingdom, and Europe.
            </p>

            <h2 className="font-playfair text-2xl lg:text-3xl font-semibold text-foreground mt-14">
              Why Source from India with Metta Exports?
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "Direct access to verified Indian manufacturers and farmers",
                "End-to-end export documentation and compliance support",
                "Quality inspection before every shipment",
                "Competitive pricing with reliable delivery timelines",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-playfair text-2xl lg:text-3xl font-semibold text-foreground mt-14">
              Our Product Categories
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "Indian Spices — Turmeric, Cumin, Cardamom, Pepper, Chilli",
                "Cocoa Beans & Powder — Premium Indian cocoa for B2B buyers",
                "Natural Products — Certified organic and natural goods",
                "Textiles & Handicrafts — Handloom fabrics and home decor",
                "Agro-Processed Products — Rice, pulses, dry fruits",
                "India Domestic Sourcing — Access our supplier network",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-playfair text-2xl lg:text-3xl font-semibold text-foreground mt-14">
              Who We Serve
            </h2>
            <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
              We serve B2B importers, wholesale distributors, and procurement teams across UAE, United Kingdom, Germany, France, Netherlands, and Southeast Asia looking for reliable, quality-verified Indian suppliers.
            </p>

            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-block bg-accent text-white px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors"
              >
                Request a Sourcing Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}