import { motion } from "framer-motion";
import { 
  ClipboardCheck, 
  Search, 
  Package, 
  Ship, 
  FileCheck, 
  Truck 
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Inquiry & Quote",
    description: "Submit your requirements and receive a detailed quotation within 24 hours",
  },
  {
    icon: Search,
    title: "Quality Sourcing",
    description: "We source the finest products from certified farms and processing units",
  },
  {
    icon: Package,
    title: "Processing & Packaging",
    description: "Products are processed and packaged as per international standards",
  },
  {
    icon: FileCheck,
    title: "Quality Control",
    description: "Rigorous quality checks at every stage ensure premium product quality",
  },
  {
    icon: Ship,
    title: "Shipping & Documentation",
    description: "Complete export documentation and efficient shipping logistics",
  },
  {
    icon: Truck,
    title: "Delivery & Support",
    description: "Timely delivery with post-shipment support and feedback",
  },
];

const ExportProcess = () => {
  return (
    <section className="section-padding bg-primary text-white overflow-hidden">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            How We Work
          </span>
          <h2 className="heading-2 text-white mb-4">
            Seamless <span className="text-accent">Export Process</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From inquiry to delivery, we ensure a smooth and transparent export experience
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center z-10">
                  {index + 1}
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 pt-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportProcess;
