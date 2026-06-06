import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Export Process", path: "/export-process-compliance" },
  { label: "Domestic Sourcing", path: "/india-domestic-sourcing" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src="https://media.base44.com/images/public/69f7322a9745be578a491797/2db6ccc0c_Image5-4-26at852AM.png"
              alt="Metta Exports logo"
              className="h-12 lg:h-14 w-auto"
            />
            <div className="hidden sm:block leading-tight">
              <span className="block text-white font-playfair text-xl font-semibold tracking-wider">METTA EXPORTS</span>
              <span className="block text-white/60 font-inter text-[10px] font-medium tracking-[0.2em] uppercase">Goodwill That Moves The World</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent text-white px-5 py-2.5 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors"
            >
              Send RFQ
            </Link>
          </nav>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? "text-accent bg-white/5"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block mx-4 mt-3 bg-accent text-white px-5 py-3 text-sm font-semibold tracking-wide text-center hover:bg-accent/90 transition-colors"
            >
              Send RFQ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}