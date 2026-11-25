import { createMetadata } from "@/lib/metadata";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch for collaborations, roles, or project inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="py-6">
      <ContactSection />
    </div>
  );
}
