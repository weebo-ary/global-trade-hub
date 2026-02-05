import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, FileCheck } from "lucide-react";

const certifications = [
  {
    name: "FSSAI",
    description: "Food Safety & Standards Authority of India",
    icon: Shield,
  },
  {
    name: "APEDA",
    description: "Agricultural & Processed Food Products Export Development Authority",
    icon: Award,
  },
  {
    name: "ISO 22000",
    description: "Food Safety Management System",
    icon: CheckCircle,
  },
  {
    name: "HACCP",
    description: "Hazard Analysis Critical Control Points",
    icon: FileCheck,
  },
  {
    name: "BRC",
    description: "British Retail Consortium Certified",
    icon: Shield,
  },
];

const TrustSection = () => {
  return (
    <section className="py-8 bg-primary/5 border-y border-primary/10">
      <div className="container-custom px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-muted-foreground uppercase tracking-wider"
          >
            Certified & Compliant:
          </motion.p>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 group cursor-pointer"
              title={cert.description}
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <cert.icon className="w-5 h-5 text-gold" />
              </div>
              <span className="font-semibold text-primary hidden sm:block">{cert.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
