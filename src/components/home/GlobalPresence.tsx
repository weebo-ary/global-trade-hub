import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const regions = [
  {
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain"],
    color: "bg-accent",
  },
  {
    name: "Europe",
    countries: ["UK", "Germany", "France", "Netherlands", "Belgium"],
    color: "bg-primary",
  },
  {
    name: "Asia Pacific",
    countries: ["Singapore", "Malaysia", "Thailand", "Vietnam", "Japan"],
    color: "bg-gold",
  },
  {
    name: "Americas",
    countries: ["USA", "Canada", "Mexico"],
    color: "bg-navy-light",
  },
];

const GlobalPresence = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Global Footprint
          </span>
          <h2 className="heading-2 text-primary mb-4">
            Exporting to <span className="text-accent">45+ Countries</span> Worldwide
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our products reach every corner of the globe, building lasting partnerships with businesses worldwide
          </p>
        </motion.div>

        {/* World Map Visualization */}
        <div className="relative mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[2/1] rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center relative overflow-hidden"
          >
            {/* Simplified world map representation */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full opacity-30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="500"
                cy="250"
                rx="450"
                ry="220"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary"
              />
              <ellipse
                cx="500"
                cy="250"
                rx="350"
                ry="170"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary"
              />
              <ellipse
                cx="500"
                cy="250"
                rx="250"
                ry="120"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary"
              />
            </svg>

            {/* Animated dots representing locations */}
            {[
              { x: "20%", y: "35%" },
              { x: "25%", y: "45%" },
              { x: "45%", y: "30%" },
              { x: "48%", y: "42%" },
              { x: "52%", y: "38%" },
              { x: "60%", y: "45%" },
              { x: "65%", y: "35%" },
              { x: "70%", y: "50%" },
              { x: "75%", y: "40%" },
              { x: "80%", y: "55%" },
            ].map((pos, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="absolute w-3 h-3 bg-accent rounded-full animate-pulse"
                style={{ left: pos.x, top: pos.y }}
              >
                <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75" />
              </motion.div>
            ))}

            {/* India marker - larger */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute w-6 h-6 bg-gold rounded-full"
              style={{ left: "62%", top: "48%" }}
            >
              <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-50" />
              <MapPin className="absolute -top-4 left-1/2 -translate-x-1/2 w-5 h-5 text-gold" />
            </motion.div>
          </motion.div>
        </div>

        {/* Region Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${region.color}`} />
                <h3 className="font-semibold text-primary">{region.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {region.countries.map((country) => (
                  <span
                    key={country}
                    className="px-2 py-1 bg-secondary rounded-md text-xs text-muted-foreground"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
