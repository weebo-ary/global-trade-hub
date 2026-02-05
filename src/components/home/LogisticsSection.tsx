import { motion } from "framer-motion";
import { Truck, Thermometer, Package, Globe, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Thermometer,
    title: "Cold Chain Network",
    description: "Temperature-controlled storage and transport for perishable goods",
  },
  {
    icon: Package,
    title: "Custom Packaging",
    description: "Private label and custom packaging solutions for your brand",
  },
  {
    icon: Truck,
    title: "Multi-Modal Transport",
    description: "Air, sea, and land freight options for optimal delivery",
  },
  {
    icon: Globe,
    title: "Global Shipping",
    description: "Reliable shipping to 45+ countries worldwide",
  },
  {
    icon: Clock,
    title: "Just-in-Time Delivery",
    description: "Precise scheduling to meet your inventory needs",
  },
  {
    icon: Shield,
    title: "Insured Shipments",
    description: "Full insurance coverage for complete peace of mind",
  },
];

const LogisticsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Logistics & Packaging
            </span>
            <h2 className="heading-2 text-primary mb-6">
              World-Class <span className="text-accent">Supply Chain</span> Solutions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our integrated logistics network ensures your products reach their
              destination in perfect condition, on time, every time. From
              temperature-controlled storage to custom packaging, we handle
              every aspect of the supply chain.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <Truck className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Fleet Ready</h4>
                  <p className="text-sm text-muted-foreground">
                    100+ refrigerated trucks
                  </p>
                </div>
                <div className="glass-card rounded-2xl p-6 hover-lift bg-primary text-white">
                  <Globe className="w-10 h-10 text-accent mb-4" />
                  <h4 className="font-semibold mb-2">Ports Connected</h4>
                  <p className="text-sm text-white/70">
                    Mumbai, Chennai, JNPT
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="glass-card rounded-2xl p-6 hover-lift bg-accent text-white">
                  <Thermometer className="w-10 h-10 text-white mb-4" />
                  <h4 className="font-semibold mb-2">Cold Storage</h4>
                  <p className="text-sm text-white/70">
                    50,000 MT capacity
                  </p>
                </div>
                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <Package className="w-10 h-10 text-gold mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Packaging</h4>
                  <p className="text-sm text-muted-foreground">
                    Custom solutions available
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 -top-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-4 -left-4 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;
