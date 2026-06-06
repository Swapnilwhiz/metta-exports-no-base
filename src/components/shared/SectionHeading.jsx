import React from "react";

export default function SectionHeading({ subtitle, title, description, light = false, center = true }) {
  return (
    <div className={`${center ? "text-center" : ""} max-w-3xl ${center ? "mx-auto" : ""} mb-12 lg:mb-16`}>
      {subtitle && (
        <p className={`font-inter text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
          light ? "text-accent" : "text-accent"
        }`}>
          {subtitle}
        </p>
      )}
      <h2 className={`font-playfair text-3xl lg:text-4xl font-semibold leading-tight ${
        light ? "text-white" : "text-foreground"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base lg:text-lg leading-relaxed ${
          light ? "text-white/70" : "text-muted-foreground"
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}