import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import DemoLockOverlay from "@/components/layout/DemoLockOverlay";
import { DEMO_CONFIG } from "@/config/demo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, TrendingUp, Users, ArrowRight } from "lucide-react";

const regions = [
  {
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Jordan"],
    products: "Fresh produce, Rice, Spices",
    growth: "+25%",
  },
  {
    name: "Europe",
    countries: ["UK", "Germany", "France", "Netherlands", "Belgium", "Italy"],
    products: "Rice, Superfoods, Organic products",
    growth: "+18%",
  },
  {
    name: "Asia Pacific",
    countries: ["Singapore", "Malaysia", "Thailand", "Vietnam", "Japan", "South Korea"],
    products: "Spices, Rice, Canned foods",
    growth: "+22%",
  },
  {
    name: "Americas",
    countries: ["USA", "Canada", "Mexico"],
    products: "Makhana, Organic products, Spices",
    growth: "+30%",
  },
];

const stats = [
  { value: "45+", label: "Countries" },
  { value: "500+", label: "Clients" },
  { value: "$50M+", label: "Annual Trade" },
  { value: "200+", label: "Products" },
];

const Markets = () => {
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
            Global Reach
          </span>
          <h1 className="heading-1 mb-6">
            Connecting India to <span className="text-accent">45+ Countries</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Our extensive global network enables seamless trade across continents,
            bringing premium Indian products to markets worldwide.
          </p>
        </motion.div>
      </div>
    </section>,

    // Section 2: Stats
    <section key="stats" className="py-8 bg-white border-b">
      <div className="container-custom px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>,

    // Section 3: Regional Markets
    <section key="regions" className="section-padding bg-white">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-primary mb-4">Our Key Markets</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strong presence across major trading regions
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold text-primary">{region.name}</h3>
                </div>
                <div className="flex items-center gap-1 text-accent font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  {region.growth}
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Countries:</p>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <span key={country} className="px-2 py-1 bg-secondary rounded text-xs">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Key Products:</p>
                <p className="text-primary font-medium">{region.products}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>,

    // Section 4: Trade Partners
    <section key="partners" className="section-padding bg-secondary/30">
      <div className="container-custom px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="heading-2 text-primary mb-4">500+ Trade Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            From retail chains to wholesale distributors, we work with businesses of all sizes
          </p>
        </motion.div>
      </div>
    </section>,

    // Section 5: CTA
    <section key="cta" className="section-padding bg-primary text-white">
      <div className="container-custom px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 mb-4">Want to Import from India?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Connect with us to explore trade opportunities
          </p>
          <Button size="lg" className="bg-accent hover:bg-green-dark" asChild>
            <Link to="/contact">
              Start Trading
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
      {!DEMO_CONFIG.unlockAllSections && <DemoLockOverlay pageName="Global Markets" />}
    </Layout>
  );
};

export default Markets;
