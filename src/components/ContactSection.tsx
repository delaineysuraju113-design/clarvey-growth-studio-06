import { Mail, Send, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Text & Info */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Let's Connect
            </h2>
            <p className="text-gray-800 leading-relaxed mb-10 max-w-md">
              Whether you're looking for a marketing strategist, want to collaborate on a project, or just want to connect — I'd love to hear from you.
            </p>

            <div className="space-y-4">
              {/* Email Box */}
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card shadow-sm w-full max-w-md">
                <div className="w-10 h-10 rounded-md bg-background border border-border flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-1">
                    Email Me
                  </p>
                  <a
                    href="mailto:delaineysuraju113@gmail.com"
                    className="text-base font-bold text-foreground hover:text-accent transition-colors"
                  >
                    delaineysuraju113@gmail.com
                  </a>
                </div>
              </div>

              {/* Added LinkedIn Box */}
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card shadow-sm w-full max-w-md">
                <div className="w-10 h-10 rounded-md bg-background border border-border flex items-center justify-center shrink-0">
                  <Linkedin size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-1">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/delaineysuraju"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-foreground hover:text-accent transition-colors"
                  >
                    linkedin.com/in/delaineysuraju
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-[#2B4A37] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
