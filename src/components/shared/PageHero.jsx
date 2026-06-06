import React from "react";

export default function PageHero({ title, description, image, imageAlt = "" }) {
  return (
    <section className="relative bg-primary overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover opacity-55"
            loading="eager"
            fetchpriority="high"
            decoding="sync"
            width="1920"
            height="600"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/60" />
        </div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}