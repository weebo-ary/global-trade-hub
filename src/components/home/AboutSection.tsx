import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Building2, Users, Package, MapPin, Clock, Award } from "lucide-react";

const stats = [
  { icon: Clock, label: "Years of Excellence", value: 9, suffix: "+" },
  { icon: MapPin, label: "Countries Served", value: 45, suffix: "+" },
  { icon: Package, label: "Products Portfolio", value: 200, suffix: "+" },
  { icon: Users, label: "Happy Clients", value: 500, suffix: "+" },
  { icon: Building2, label: "Processing Units", value: 5, suffix: "" },
  { icon: Award, label: "Certifications", value: 5, suffix: "+" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const stepValue = end / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += stepValue;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count}
      {suffix}
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              About HKR Global Trade
            </span>
            <h2 className="heading-2 text-primary mb-6">
              Your Trusted Partner in{" "}
              <span className="text-accent">Global Export</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Since 2015, HKR Global Trade has been at the forefront of Indian
              agricultural exports, delivering premium quality products to
              businesses across 45+ countries. Our commitment to excellence,
              compliance, and customer satisfaction has made us a preferred
              partner for international buyers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With state-of-the-art infrastructure, cold chain facilities, and a
              dedicated team of export professionals, we ensure that every
              shipment meets the highest international standards while
              maintaining competitive pricing and timely delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-50" />
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-4xl">H</span>
                </div>
                <h3 className="text-2xl font-bold text-primary">HKR Global Trade</h3>
                <p className="text-muted-foreground">Excellence in Export</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
