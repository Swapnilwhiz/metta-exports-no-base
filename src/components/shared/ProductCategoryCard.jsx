import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProductCategoryCard({ title, description, image, link, alt }) {
  return (
    <Link to={link} className="group block">
      <div className="relative overflow-hidden bg-card border border-border hover:border-accent/30 transition-all duration-300">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}