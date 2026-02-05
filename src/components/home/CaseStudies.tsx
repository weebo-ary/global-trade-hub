import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const caseStudies = [
  {
    title: "Fresh Vegetables to UAE",
    client: "Al Madina Trading, Dubai",
    product: "Premium Onions & Green Chillies",
    quantity: "500 MT",
    result: "Weekly shipments established with 99% quality rating",
    testimonial: "HKR has been our most reliable supplier. Their quality consistency is unmatched.",
  },
  {
    title: "Basmati Rice to Europe",
    client: "European Foods GmbH, Germany",
    product: "1121 Basmati Rice",
    quantity: "1,200 MT/year",
    result: "Private label partnership with custom packaging",
    testimonial: "Excellent product quality and professional documentation. A true partner.",
  },
  {
    title: "Makhana to USA",
    client: "HealthySnacks Inc., California",
    product: "Premium Fox Nuts (Makhana)",
    quantity: "50 MT",
    result: "First successful organic makhana export to US market",
    testimonial: "HKR helped us navigate complex FDA requirements seamlessly.",
  },
];

const CaseStudies = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Success Stories
          </span>
          <h2 className="heading-2 text-primary mb-4">
            Trusted by Businesses <span className="text-accent">Worldwide</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how we've helped businesses across the globe achieve their import goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover-lift"
            >
              <div className="bg-gradient-to-r from-primary to-navy-light p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">{study.title}</h3>
                <p className="text-white/70 text-sm">{study.client}</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase mb-1">
                      Product
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {study.product}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase mb-1">
                      Quantity
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {study.quantity}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground uppercase mb-1">
                    Result
                  </p>
                  <p className="text-sm text-accent font-medium">{study.result}</p>
                </div>
                <div className="border-t pt-4">
                  <Quote className="w-6 h-6 text-gold mb-2" />
                  <p className="text-sm text-muted-foreground italic">
                    "{study.testimonial}"
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
