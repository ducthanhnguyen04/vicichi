import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/features/contact/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="py-12">
      <SectionHeading
        title="Contact"
        subtitle="Have a question or want to work together? Send a message."
      />
      <Card className="max-w-xl">
        <ContactForm />
      </Card>
    </section>
  );
}
