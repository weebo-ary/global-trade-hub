import { motion } from "framer-motion";
import { ArrowRight, Globe, Award, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cellipse cx='500' cy='250' rx='400' ry='200' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3Cellipse cx='500' cy='250' rx='300' ry='150' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3Cellipse cx='500' cy='250' rx='200' ry='100' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3Ccircle cx='200' cy='150' r='5' fill='%2322c55e'/%3E%3Ccircle cx='300' cy='350' r='5' fill='%2322c55e'/%3E%3Ccircle cx='700' cy='120' r='5' fill='%2322c55e'/%3E%3Ccircle cx='800' cy='300' r='5' fill='%2322c55e'/%3E%3Ccircle cx='150' cy='250' r='5' fill='%2322c55e'/%3E%3Ccircle cx='850' cy='200' r='5' fill='%2322c55e'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
      </div>

      <div className="container-custom relative z-10 px-4">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Trusted Exporter Since 2015
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-1 text-primary-foreground mb-6 text-shadow-lg"
          >
            Premium Indian Exports to{" "}
            <span className="text-accent">45+ Countries</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed"
          >
            Your trusted partner for fresh produce, FMCG products, superfoods, and
            premium canned goods. Government-certified exporter with world-class
            quality standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-green-dark text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link to="/contact">
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-6"
              asChild
            >
              <Link to="/products">Explore Products</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: Globe, label: "Countries", value: "45+" },
              { icon: Award, label: "Products", value: "200+" },
              { icon: ShieldCheck, label: "Certifications", value: "5+" },
              { icon: TrendingUp, label: "Clients", value: "500+" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card-dark rounded-xl p-4 text-center"
              >
                <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-primary-foreground/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-40 w-48 h-48 bg-gold/20 rounded-full blur-3xl animate-float delay-500" />
    </section>
  );
};

export default HeroSection;
