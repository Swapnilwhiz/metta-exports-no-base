import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://mettaexports.com";
const DEFAULT_DESCRIPTION = "Metta Exports is a Mumbai-based B2B export sourcing company that connects verified Indian suppliers with international buyers in the UAE, United Kingdom, and Europe. We specialize in spices, natural products, cocoa, textiles, handicrafts, and agro-processed goods. Services include supplier identification, quality inspection, export documentation, and compliance support. Registered Indian exporter and IEC holder.";

export default function useSEO(title, description) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (title) document.title = title;

    const desc = description || DEFAULT_DESCRIPTION;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    // Dynamic canonical tag
    const canonicalUrl = SITE_URL + (pathname === "/" ? "/" : pathname.replace(/\/+$/, ""));
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);

    return () => {
      document.title = "Metta Exports";
    };
  }, [title, description, pathname]);
}