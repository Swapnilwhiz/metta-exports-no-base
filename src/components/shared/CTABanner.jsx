import React from "react";
import { Link } from "react-router-dom";

export default function CTABanner({
  title = "Ready to Source from India?",
  description = "Tell us what you need. We'll connect you with the right suppliers and handle the sourcing process from inquiry to shipment.",
  buttonText = "Send Your Requirement",
  buttonLink = "/contact",
}) {
  return (
    <section className="bg-primary py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-3xl lg:text-4xl font-semibold text-white leading-tight">
          {title}
        </h2>
        <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={buttonLink}
            className="inline-block bg-accent text-white px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors"
          >
            {buttonText}
          </Link>
          <a
            href="https://wa.me/message"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/30 text-white px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}