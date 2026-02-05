import { motion } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  Truck,
  Timer,
  Package,
  HeadphonesIcon,
} from "lucide-react";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Government Certified",
    description:
      "FSSAI, APEDA, ISO 22000, HACCP, and BRC certified for complete compliance and trust.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Established trade relationships in 45+ countries across Middle East, Europe, and Asia.",
  },
  {
    icon: Package,
    title: "Custom Packaging",
    description:
      "Private label and custom packaging solutions tailored to your brand requirements.",
  },
  {
    icon: Truck,
    title: "Cold Chain Logistics",
    description:
      "End-to-end cold chain infrastructure ensuring product freshness and quality.",
  },
  {
    icon: Timer,
    title: "Timely Delivery",
    description:
      "Reliable shipping schedules with real-time tracking and documentation support.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "24/7 customer support with dedicated account managers for seamless communication.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="heading-2 text-primary mb-4">
            The HKR Global Trade <span className="text-accent">Advantage</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover why leading businesses worldwide trust us for their export needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover-lift group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
