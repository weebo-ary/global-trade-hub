import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import DemoLockOverlay from "@/components/layout/DemoLockOverlay";
import { DEMO_CONFIG } from "@/config/demo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Package,
  Shield,
  FileText,
  Truck,
  Thermometer,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Export Consultation",
    description: "Expert guidance on international trade regulations, documentation, and market entry strategies.",
    features: ["Market analysis", "Regulatory compliance", "Trade documentation"],
  },
  {
    icon: Package,
    title: "Custom Packaging",
    description: "Private label and custom packaging solutions tailored to your brand requirements.",
    features: ["Brand customization", "Eco-friendly options", "Retail-ready packaging"],
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control processes ensuring products meet international standards.",
    features: ["Lab testing", "Certification support", "Batch traceability"],
  },
  {
    icon: FileText,
    title: "Documentation Support",
    description: "Complete export documentation handling for hassle-free international shipping.",
    features: ["Phytosanitary certificates", "Origin certificates", "Customs clearance"],
  },
  {
    icon: Truck,
    title: "Logistics Management",
    description: "End-to-end logistics coordination from warehouse to destination port.",
    features: ["Freight booking", "Container loading", "Real-time tracking"],
  },
  {
    icon: Thermometer,
    title: "Cold Chain Solutions",
    description: "Temperature-controlled storage and transport for perishable goods.",
    features: ["Cold storage", "Reefer containers", "Temperature monitoring"],
  },
];

const Services = () => {
  const sections = [
    // Section 1: Hero
    <section key="hero" className="section-padding bg-gradient-to-br from-primary to-navy-dark text-white">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h1 className="heading-1 mb-6">
            Comprehensive <span className="text-accent">Export Solutions</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            From consultation to delivery, we provide end-to-end export services
            to ensure your products reach global markets seamlessly.
          </p>
        </motion.div>
      </div>
    </section>,

    // Section 2: Services Grid
    <section key="services" className="section-padding bg-white">
      <div className="container-custom px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover-lift group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>,

    // Section 3: Process
    <section key="process" className="section-padding bg-secondary/30">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-primary mb-4">How We Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A streamlined process designed for efficiency and transparency
          </p>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Inquiry", desc: "Submit your requirements" },
            { step: "2", title: "Quote", desc: "Receive detailed quotation" },
            { step: "3", title: "Process", desc: "Order processing & QC" },
            { step: "4", title: "Deliver", desc: "Timely global delivery" },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h4 className="font-semibold text-primary">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>,

    // Section 4: CTA
    <section key="cta" className="section-padding bg-primary text-white">
      <div className="container-custom px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Contact us today to discuss your export requirements
          </p>
          <Button size="lg" className="bg-accent hover:bg-green-dark" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>,
  ];

  const visibleSections = DEMO_CONFIG.unlockAllSections 
    ? sections 
    : sections.slice(0, DEMO_CONFIG.visibleSectionsInDemo);

  return (
    <Layout>
      {visibleSections}
      {!DEMO_CONFIG.unlockAllSections && <DemoLockOverlay pageName="Services" />}
    </Layout>
  );
};

export default Services;
