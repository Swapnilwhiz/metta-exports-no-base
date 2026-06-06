import React from "react";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import ProductCategoryCard from "../components/shared/ProductCategoryCard";
import CTABanner from "../components/shared/CTABanner";
import useSEO from "../hooks/useSEO";

const CATEGORIES = [
  { title: "Textiles, Handicrafts & Home Decor", desc: "Handwoven textiles, block prints, brass decor, artisan furniture, and home furnishings from India's craft clusters.", image: "https://media.base44.com/images/public/69f7322a9745be578a491797/019f047dd_generated_129e9f2e.png", link: "/textiles-handicrafts-home-decor", alt: "Indian textiles and handicrafts for export" },
  { title: "Spices", desc: "Turmeric, red chilli, cumin, coriander, black pepper, cardamom, cloves, and custom spice blends in bulk and retail formats.", image: "https://media.base44.com/images/public/69f7322a9745be578a491797/b6990cc82_generated_173f0f81.png", link: "/spices-export", alt: "Indian spices for export" },
  { title: "Natural Products", desc: "Raw honey, dry fruits, A2 cow ghee, and wellness food products sourced from India's agricultural regions.", image: "https://media.base44.com/images/public/69f7322a9745be578a491797/d15c42bea_generated_54693ffa.png", link: "/natural-products", alt: "Natural products from India" },
  { title: "Cocoa Beans & Cocoa Powder", desc: "Cocoa beans, cocoa powder, and cocoa-based ingredients for food manufacturers and processors worldwide.", image: "https://media.base44.com/images/public/69f7322a9745be578a491797/8a3cbeba8_generated_60099947.png", link: "/cocoa-beans-powder", alt: "Cocoa beans and cocoa powder sourcing" },
  { title: "India Domestic B2B Sourcing", desc: "Supplier discovery, price comparison, and procurement coordination for businesses operating within India.", image: "https://media.base44.com/images/public/69f7322a9745be578a491797/cc4c3e326_generated_8a7531a1.png", link: "/india-domestic-sourcing", alt: "India domestic B2B sourcing services" },
];

const BUYER_TYPES = [
  "Importers and trading companies",
  "Distributors and wholesalers",
  "Hotels, restaurants, and hospitality groups",
  "Retail chains and specialty stores",
  "Food processors and manufacturers",
  "Corporate buyers and procurement teams",
  "Interior designers and decor businesses",
  "E-commerce sellers sourcing from India",
];

export default function Products() {
  useSEO(
    "Indian Export Products | B2B Sourcing Catalogue | Metta Exports",
    "Browse Metta Exports' full B2B product catalogue — spices, cocoa beans, natural products, textiles, handicrafts and agro-processed goods sourced directly from India."
  );

  return (
    <>
      <PageHero
        title="Products We Source and Export from India"
        description="Five core product categories covering India's strongest export sectors. From textiles to spices to natural food products — sourced directly from verified producers."
        image="https://media.base44.com/images/public/69f7322a9745be578a491797/f3958871f_generated_image.png"
        imageAlt="Curated collection of Indian export products including spices turmeric textiles brass decor cocoa beans honey and dry fruits representing Metta Exports product categories"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Product Categories"
            title="What We Can Source for You"
            description="Each category is supported by our network of manufacturers, producers, and artisan clusters across India. Click any category to learn more."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CATEGORIES.map((cat) => (
              <ProductCategoryCard key={cat.title} {...cat} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Who We Work With"
            title="Buyer Types We Serve"
            description="Our sourcing services are designed for businesses that need a reliable procurement channel from India."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {BUYER_TYPES.map((type) => (
              <div key={type} className="bg-card border border-border p-5">
                <p className="text-sm font-medium text-foreground">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Product Not Listed Here?"
        description="We source across India's supply chain. If you have a specific product requirement, send us the details and we will check availability."
      />
    </>
  );
}