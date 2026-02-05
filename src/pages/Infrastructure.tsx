import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import DemoLockOverlay from "@/components/layout/DemoLockOverlay";
import { DEMO_CONFIG } from "@/config/demo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building2,
  Thermometer,
  Factory,
  FlaskConical,
  Package,
  Truck,
  ArrowRight,
} from "lucide-react";

const facilities = [
  {
    icon: Building2,
    title: "Warehousing",
    capacity: "100,000 sq ft",
    description: "Modern warehousing facilities with advanced inventory management systems",
  },
  {
    icon: Thermometer,
    title: "Cold Storage",
    capacity: "50,000 MT",
    description: "Temperature-controlled storage for perishables with 24/7 monitoring",
  },
  {
    icon: Factory,
    title: "Processing Units",
    capacity: "5 Units",
    description: "State-of-the-art processing facilities with HACCP certification",
  },
  {
    icon: FlaskConical,
    title: "Quality Labs",
    capacity: "3 Labs",
    description: "In-house testing laboratories for quality assurance",
  },
  {
    icon: Package,
    title: "Packaging Lines",
    capacity: "10 Lines",
    description: "Automated packaging lines for various product formats",
  },
  {
    icon: Truck,
    title: "Fleet",
    capacity: "100+ Vehicles",
    description: "Dedicated fleet including refrigerated trucks for transportation",
  },
];

const Infrastructure = () => {
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
            Infrastructure
          </span>
          <h1 className="heading-1 mb-6">
            World-Class <span className="text-accent">Facilities</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Our modern infrastructure ensures product quality, freshness, and
            timely delivery across the global supply chain.
          </p>
        </motion.div>
      </div>
    </section>,

    // Section 2: Facilities Grid
    <section key="facilities" className="section-padding bg-white">
      <div className="container-custom px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover-lift group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-green-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <facility.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {facility.title}
              </h3>
              <div className="text-accent font-bold text-2xl mb-3">
                {facility.capacity}
              </div>
              <p className="text-muted-foreground">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>,

    // Section 3: Certifications
    <section key="certifications" className="section-padding bg-secondary/30">
      <div className="container-custom px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-primary mb-4">Certified Facilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            All our facilities meet international standards
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["ISO 22000", "HACCP", "BRC", "FDA Compliant"].map((cert) => (
              <span key={cert} className="px-6 py-3 bg-white rounded-full shadow-sm font-medium text-primary">
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
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
          <h2 className="heading-2 mb-4">Schedule a Facility Visit</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            See our operations firsthand
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
      {!DEMO_CONFIG.unlockAllSections && <DemoLockOverlay pageName="Infrastructure" />}
    </Layout>
  );
};

export default Infrastructure;
