import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:hello@clarvey.com?subject=Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Let's Connect
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're looking for a marketing strategist, want to collaborate on a project, or just want to connect — I'd love to hear from you.
            </p>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <Mail size={18} className="text-primary" />
              <span>hello@clarvey.com</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              Send Message <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
