import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import RFQForm from "../components/shared/RFQForm";
import useSEO from "../hooks/useSEO";

export default function Contact() {
  useSEO(
    "Contact Metta Exports | B2B Sourcing Enquiries & Quotes",
    "Get in touch with Metta Exports for B2B sourcing enquiries, product quotes, and supplier information. We serve importers in UAE, UK, Europe and beyond."
  );

  return (
    <>
      <PageHero
        title="Send Your Requirement"
        description="Tell us what you need. Whether you have a specific product in mind or need sourcing guidance, we'll review your inquiry and respond within one business day."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-playfair text-2xl font-semibold text-foreground mb-2">Request for Quotation</h2>
              <p className="text-sm text-muted-foreground mb-8">
                Fill in the details below and we will get back to you with pricing, product options, and next steps.
              </p>
              <RFQForm />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-inter text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                  Contact Details
                </h3>
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">info@mettaexports.ae</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Office</p>
                      <p className="text-sm text-muted-foreground">Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">WhatsApp</p>
                      <a
                        href="https://wa.me/message"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:underline"
                      >
                        Send a WhatsApp message
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-inter text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                  Quick WhatsApp
                </h3>
                <a
                  href="https://wa.me/message"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-[#25D366] text-white px-6 py-3.5 text-sm font-semibold tracking-wide text-center hover:bg-[#20BD5A] transition-colors"
                >
                  Chat on WhatsApp
                </a>
                <p className="mt-3 text-xs text-muted-foreground">
                  Preferred for quick inquiries and follow-ups.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-inter text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                  Location
                </h3>
                <div className="aspect-[4/3] bg-muted border border-border flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Map placeholder — Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}