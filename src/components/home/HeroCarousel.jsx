import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    image: "https://media.base44.com/images/public/69f7322a9745be578a491797/513657043_generated_image.png",
    alt: "Cargo container ship sailing at golden hour representing Metta Exports international B2B trade between India and UAE",
    subtitle: "Import Export & Sourcing Company",
    title: "Connecting India to the World Through Reliable Trade",
    description: "We help B2B buyers in the UAE, UK, Europe, USA, and South Asia source quality products from India's verified supplier ecosystem.",
    primaryCta: { label: "Send Your Requirement", link: "/contact" },
    secondaryCta: { label: "Explore Products", link: "/products" },
  },
  {
    image: "https://media.base44.com/images/public/69f7322a9745be578a491797/978c37ad2_generated_image.png",
    alt: "Premium Indian export products including turmeric spices block-printed textiles cashews cardamom and honey arranged on dark slate",
    subtitle: "Textiles · Spices · Natural Products · Cocoa",
    title: "India's Finest Products, Sourced Directly for Your Business",
    description: "From handwoven textiles and aromatic spices to raw honey and cocoa — five core export categories, one trusted sourcing partner.",
    primaryCta: { label: "View Product Categories", link: "/products" },
    secondaryCta: { label: "About Our Process", link: "/export-process-compliance" },
  },
  {
    image: "https://media.base44.com/images/public/69f7322a9745be578a491797/a167539e3_generated_image.png",
    alt: "Indian manufacturing warehouse with quality control inspection of export-ready goods demonstrating Metta Exports supply chain reliability",
    subtitle: "Compliance-First · Quality-Verified · End-to-End",
    title: "From Supplier Vetting to Shipment — We Handle the Details",
    description: "Quality inspections, export documentation, HS code support, and logistics coordination. No blind sourcing, no hidden intermediaries.",
    primaryCta: { label: "Get a Quote", link: "/contact" },
    secondaryCta: { label: "How It Works", link: "/export-process-compliance" },
  },
];

const INTERVAL = 6000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index, dir) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length, -1);
  }, [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative bg-primary overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Hero banner carousel showcasing Metta Exports services"
      aria-roledescription="carousel"
    >
      {/* Background images — all preloaded, only active one visible */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <img
            src={s.image}
            alt={s.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
            fetchpriority={i === 0 ? "high" : "auto"}
            decoding={i === 0 ? "sync" : "async"}
            width="1920"
            height="900"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-40 min-h-[520px] lg:min-h-[600px] flex items-center">
        <div
          className="max-w-2xl transition-all duration-700 ease-out"
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${current + 1} of ${SLIDES.length}`}
        >
          <p className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 transition-all duration-500 delay-100">
            {slide.subtitle}
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-white leading-tight transition-all duration-500 delay-200">
            {slide.title}
          </h1>
          <p className="mt-6 text-base lg:text-lg text-white/70 leading-relaxed max-w-xl transition-all duration-500 delay-300">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-500 delay-&lsqb;400ms&rsqb;">
            <Link
              to={slide.primaryCta.link}
              className="inline-flex items-center justify-center bg-accent text-white px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors"
            >
              {slide.primaryCta.label}
            </Link>
            <Link
              to={slide.secondaryCta.link}
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors gap-2"
            >
              {slide.secondaryCta.label} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide indicators with progress bar */}
      <div className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className="group relative"
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
            aria-current={i === current ? "true" : "false"}
          >
            <div className="w-12 h-1 bg-white/20 overflow-hidden">
              <div
                className={`h-full bg-accent transition-all ${
                  i === current
                    ? "animate-hero-progress"
                    : i < current
                    ? "w-full bg-white/40"
                    : "w-0"
                }`}
                style={
                  i === current && !isPaused
                    ? { animation: `hero-progress ${INTERVAL}ms linear forwards` }
                    : i === current && isPaused
                    ? { width: "50%" }
                    : {}
                }
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}