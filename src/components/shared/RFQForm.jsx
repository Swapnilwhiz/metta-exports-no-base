import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const PRODUCT_OPTIONS = [
  "Textiles, Handicrafts & Home Decor",
  "Spices",
  "Natural Products (Honey, Dry Fruits, A2 Ghee)",
  "Cocoa Beans & Cocoa Powder",
  "India Domestic B2B Sourcing",
  "Other",
];

export default function RFQForm() {
  const [form, setForm] = useState({
    name: "", company: "", country: "", email: "", whatsapp: "",
    product: "", quantity: "", destination: "", packaging: "", message: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry. We will review your requirement and respond within one business day.");
    setForm({
      name: "", company: "", country: "", email: "", whatsapp: "",
      product: "", quantity: "", destination: "", packaging: "", message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
          <Input id="name" required value={form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Your full name" className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className="text-sm font-medium">Company Name</Label>
          <Input id="company" value={form.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="Your company" className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
          <Input id="email" type="email" required value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="business@example.com" className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="whatsapp" className="text-sm font-medium">WhatsApp Number</Label>
          <Input id="whatsapp" value={form.whatsapp} onChange={(e) => handleChange("whatsapp", e.target.value)} placeholder="+971 XX XXX XXXX" className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country" className="text-sm font-medium">Your Country *</Label>
          <Input id="country" required value={form.country} onChange={(e) => handleChange("country", e.target.value)} placeholder="e.g. UAE, UK, USA" className="h-11" />
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium">Product Required *</Label>
          <Select value={form.product} onValueChange={(v) => handleChange("product", v)} required>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Select product category" />
            </SelectTrigger>
            <SelectContent>
              {PRODUCT_OPTIONS.map((opt) => (
                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="quantity" className="text-sm font-medium">Estimated Quantity</Label>
          <Input id="quantity" value={form.quantity} onChange={(e) => handleChange("quantity", e.target.value)} placeholder="e.g. 500 kg, 1 container" className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="destination" className="text-sm font-medium">Destination Country / City</Label>
          <Input id="destination" value={form.destination} onChange={(e) => handleChange("destination", e.target.value)} placeholder="e.g. Dubai, London, New York" className="h-11" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="packaging" className="text-sm font-medium">Packaging Preference</Label>
        <Input id="packaging" value={form.packaging} onChange={(e) => handleChange("packaging", e.target.value)} placeholder="e.g. Bulk, retail-ready, private label" className="h-11" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">Additional Details</Label>
        <Textarea id="message" value={form.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Tell us more about your requirement — specific products, quality standards, delivery timelines, or any other details." rows={4} />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto bg-accent text-white px-10 py-3.5 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors"
      >
        Submit Requirement
      </button>
      <p className="text-xs text-muted-foreground">
        We typically respond within one business day. Your information is kept confidential.
      </p>
    </form>
  );
}