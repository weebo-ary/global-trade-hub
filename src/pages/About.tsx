import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import DemoLockOverlay from "@/components/layout/DemoLockOverlay";
import { DEMO_CONFIG } from "@/config/demo";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Building2, 
  Calendar,
  MapPin,
  Shield,
  CheckCircle,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateCompanyProfilePDF } from "@/lib/pdf";

const timeline = [
  { year: "2015", title: "Company Founded", description: "Started operations in Mumbai with a vision for global trade" },
  { year: "2017", title: "First Export", description: "Completed first major export to UAE markets" },
  { year: "2018", title: "ISO Certified", description: "Achieved ISO 22000 certification for food safety" },
  { year: "2019", title: "European Expansion", description: "Entered European markets with premium products" },
  { year: "2021", title: "100+ Products", description: "Expanded portfolio to over 100 export products" },
  { year: "2023", title: "45+ Countries", description: "Now exporting to 45+ countries worldwide" },
];

const values = [
  { icon: Shield, title: "Integrity", description: "Honest and transparent business practices" },
  { icon: Target, title: "Excellence", description: "Commitment to highest quality standards" },
  { icon: Heart, title: "Customer First", description: "Your success is our priority" },
  { icon: Users, title: "Partnership", description: "Building lasting relationships" },
];

const leadership = [
  { name: "Rajesh Kumar", role: "Managing Director", exp: "25+ years in exports" },
  { name: "Priya Sharma", role: "Operations Head", exp: "15+ years experience" },
  { name: "Amit Patel", role: "Quality Director", exp: "20+ years in food industry" },
  { name: "Sarah Ahmed", role: "International Sales", exp: "12+ years in trade" },
];

const offices = [
  { city: "Mumbai", country: "India", type: "Headquarters" },
  { city: "Dubai", country: "UAE", type: "Regional Office" },
  { city: "London", country: "UK", type: "European Office" },
];

const About = () => {
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
            About Us
          </span>
          <h1 className="heading-1 mb-6">
            Building Trust Through{" "}
            <span className="text-accent">Quality Exports</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Since 2015, HKR Global Trade has been at the forefront of Indian agricultural
            exports, connecting premium Indian products with global markets.
          </p>
        </motion.div>
      </div>
    </section>,

    // Section 2: Mission & Vision
    <section key="mission" className="section-padding bg-white">
      <div className="container-custom px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h2 className="heading-3 text-primary mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted export partner for international businesses seeking
              premium Indian agricultural products, delivering exceptional quality,
              compliance, and customer service at competitive prices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h2 className="heading-3 text-primary mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become a global leader in agricultural exports from India, recognized
              for our commitment to quality, sustainability, and innovation in the
              international trade ecosystem.
            </p>
          </motion.div>
        </div>
      </div>
    </section>,

    // Section 3: Core Values
    <section key="values" className="section-padding bg-secondary/30">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-primary mb-4">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every decision we make
          </p>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>,

    // Section 4: Leadership Team
    <section key="leadership" className="section-padding bg-white">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-primary mb-4">Leadership Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals driving our global success
          </p>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-6">
          {leadership.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover-lift"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-primary">{person.name}</h3>
              <p className="text-accent text-sm font-medium">{person.role}</p>
              <p className="text-xs text-muted-foreground mt-2">{person.exp}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>,

    // Section 5: Company Timeline
    <section key="timeline" className="section-padding bg-primary text-white">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">Our Journey</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            From humble beginnings to global success
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 rounded-xl p-4 text-center"
            >
              <Calendar className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-accent">{item.year}</div>
              <h4 className="font-medium text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-white/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>,

    // Section 6: Global Offices
    <section key="offices" className="section-padding bg-secondary/30">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-primary mb-4">Global Offices</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strategically located to serve you better
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover-lift"
            >
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <span className="text-xs text-gold font-medium uppercase">{office.type}</span>
              <h3 className="text-xl font-semibold text-primary">{office.city}</h3>
              <p className="text-muted-foreground">{office.country}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>,

    // Section 7: Awards
    <section key="awards" className="section-padding bg-white">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-primary mb-4">Awards & Recognition</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {["Top Exporter Award 2022", "Quality Excellence Award", "Best SME Exporter"].map((award, index) => (
            <motion.div
              key={award}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover-lift border-2 border-gold/20"
            >
              <Award className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-semibold text-primary">{award}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>,

    // Section 8: Compliance
    <section key="compliance" className="section-padding bg-secondary/30">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-primary mb-4">Compliance & Certifications</h2>
        </motion.div>
        <div className="grid md:grid-cols-5 gap-4">
          {["FSSAI", "APEDA", "ISO 22000", "HACCP", "BRC"].map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <CheckCircle className="w-8 h-8 text-accent mx-auto mb-2" />
              <span className="font-semibold text-primary">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>,

    // Section 9: Download CTA
    <section key="download" className="section-padding bg-gradient-to-r from-primary to-navy-dark text-white">
      <div className="container-custom px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 mb-4">Download Our Company Profile</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Get the complete overview of our company, certifications, and capabilities
          </p>
          <Button onClick={generateCompanyProfilePDF} size="lg" className="bg-accent hover:bg-green-dark">
            <Download className="w-5 h-5 mr-2" />
            Download PDF
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
      {!DEMO_CONFIG.unlockAllSections && <DemoLockOverlay pageName="About Us" />}
    </Layout>
  );
};

export default About;
