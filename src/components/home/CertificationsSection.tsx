import { motion } from "framer-motion";
import { Shield, Award, CheckCircle2, BadgeCheck } from "lucide-react";

const certifications = [
  {
    name: "FSSAI",
    fullName: "Food Safety & Standards Authority of India",
    description: "Ensures all food products meet the highest safety standards for consumption and export.",
    icon: Shield,
    number: "10019031001234",
  },
  {
    name: "APEDA",
    fullName: "Agricultural & Processed Food Export",
    description: "Registered exporter of agricultural and processed food products from India.",
    icon: Award,
    number: "APEDA/EXP/2015/1234",
  },
  {
    name: "ISO 22000",
    fullName: "Food Safety Management",
    description: "International standard for food safety management systems.",
    icon: CheckCircle2,
    number: "ISO 22000:2018",
  },
  {
    name: "HACCP",
    fullName: "Hazard Analysis & Critical Control",
    description: "Systematic approach to food safety and prevention of hazards.",
    icon: BadgeCheck,
    number: "HACCP Certified",
  },
];

const CertificationsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-4 block">
            Trust & Compliance
          </span>
          <h2 className="heading-2 text-primary mb-4">
            <span className="text-gold">Certified</span> for Excellence
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our comprehensive certifications ensure the highest quality standards for all export products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-6 h-full border-2 border-transparent hover:border-gold/30 transition-all hover-lift">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6">
                  <cert.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cert.fullName}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <span className="text-xs text-gold font-mono">{cert.number}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/10">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">
              100% Government Registered & Compliant Exporter
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
