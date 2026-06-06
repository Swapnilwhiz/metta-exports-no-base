import React from "react";
import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Export Process", path: "/export-process-compliance" },
  { label: "Contact", path: "/contact" },
];

const PRODUCT_LINKS = [
  { label: "Textiles & Home Decor", path: "/textiles-handicrafts-home-decor" },
  { label: "Spices Export", path: "/spices-export" },
  { label: "Natural Products", path: "/natural-products" },
  { label: "Cocoa Beans & Powder", path: "/cocoa-beans-powder" },
  { label: "Domestic Sourcing", path: "/india-domestic-sourcing" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <img
              src="https://media.base44.com/images/public/user_688629b4205b0d8cbd730452/e63aecfb6_ChatGPTImageMay32026at08_56_47AM.png"
              alt="Metta Exports logo"
              className="h-14 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed text-white/60">
              Import Export &amp; Sourcing Company<br />
              UAE | India Supply Network
            </p>
            <p className="text-xs mt-4 text-accent font-medium tracking-wider">
              GOODWILL THAT MOVES THE WORLD.
            </p>
          </div>

          <div>
            <h4 className="font-inter text-xs font-semibold tracking-widest uppercase text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-xs font-semibold tracking-widest uppercase text-white mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-xs font-semibold tracking-widest uppercase text-white mb-5">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-white/60">
              <p>info@mettaexports.ae</p>
              <p>Dubai, UAE</p>
              <p>India Supply Network</p>
            </div>
            <Link
              to="/contact"
              className="inline-block mt-6 bg-accent text-white px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors"
            >
              Send Your Requirement
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8">
          <p className="text-xs text-white/40 leading-relaxed max-w-4xl">
            Product availability, pricing, documentation, and timelines depend on supplier confirmation, quantity, destination, and applicable trade regulations.
          </p>
          <p className="text-xs text-white/30 mt-4">
            © {new Date().getFullYear()} Metta Exports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}