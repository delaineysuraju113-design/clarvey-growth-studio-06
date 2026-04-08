import { Globe, MessageSquare, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Social Media Strategy & Content",
    desc: "Targeted content plans and consistent posting strategies that build community and attract new customers.",
  },
  {
    icon: Globe,
    title: "Website Optimization & Development",
    desc: "Clean, modern websites designed to convert visitors into customers and establish digital credibility.",
  },
  {
    icon: Users,
    title: "Local Customer Acquisition",
    desc: "Data-driven strategies to reach new customers in your area and turn foot traffic into repeat business.",
  },
  {
    icon: Sparkles,
    title: "Brand Positioning & Messaging",
    desc: "Clarify your brand's story and communicate your value in a way that resonates with your ideal audience.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">Services</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
          What I Can Do For Your Business
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <service.icon size={24} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
