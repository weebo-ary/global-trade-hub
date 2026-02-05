import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Layout from "@/components/layout/Layout";
import DemoLockOverlay from "@/components/layout/DemoLockOverlay";
import { DEMO_CONFIG } from "@/config/demo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Handshake,
  TrendingUp,
  Package,
  Headphones,
  Award,
  Users,
  Globe,
  CheckCircle,
  Send,
} from "lucide-react";

const distributorSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  country: z.string().min(2, "Country is required"),
  experience: z.string().min(1, "Please select experience level"),
  regions: z.string().min(2, "Please specify regions of interest"),
  currentBusiness: z.string().optional(),
  message: z.string().optional(),
});

type DistributorFormData = z.infer<typeof distributorSchema>;

const benefits = [
  {
    icon: TrendingUp,
    title: "Exclusive Margins",
    description: "Competitive pricing with attractive profit margins for distributors",
  },
  {
    icon: Package,
    title: "Wide Product Range",
    description: "Access to 200+ premium export products across categories",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "24/7 support with dedicated account managers",
  },
  {
    icon: Award,
    title: "Marketing Support",
    description: "Co-branded marketing materials and promotional support",
  },
  {
    icon: Globe,
    title: "Territory Rights",
    description: "Exclusive distribution rights in your territory",
  },
  {
    icon: Users,
    title: "Training Programs",
    description: "Comprehensive product and sales training",
  },
];

const requirements = [
  "Established business entity with valid trade license",
  "Minimum 3 years experience in food distribution",
  "Strong distribution network in target region",
  "Adequate cold storage and logistics infrastructure",
  "Financial capability for initial stock purchase",
  "Commitment to HKR quality standards",
];

const Distributor = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<DistributorFormData>({
    resolver: zodResolver(distributorSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      country: "",
      experience: "",
      regions: "",
      currentBusiness: "",
      message: "",
    },
  });

  const onSubmit = (data: DistributorFormData) => {
    console.log("Distributor application submitted:", data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 5000);
  };

  const sections = [
    // Section 1: Hero
    <section key="hero" className="section-padding bg-gradient-to-br from-primary to-navy-dark text-white">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-4 block">
            Partner With Us
          </span>
          <h1 className="heading-1 mb-6">
            Become a <span className="text-gold">Distributor</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Join our global network of distributors and bring premium Indian
            products to your market. We're looking for committed partners to grow together.
          </p>
        </motion.div>
      </div>
    </section>,

    // Section 2: Benefits
    <section key="benefits" className="section-padding bg-white">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-primary mb-4">Partnership Benefits</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Why partner with HKR Global Trade?
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-semibold text-primary mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>,

    // Section 3: Requirements
    <section key="requirements" className="section-padding bg-secondary/30">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-primary mb-6">Requirements</h2>
            <p className="text-muted-foreground mb-6">
              To become an authorized HKR distributor, you should meet the following criteria:
            </p>
            <ul className="space-y-3">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gold/10 to-accent/10 rounded-2xl p-8 text-center"
          >
            <Handshake className="w-20 h-20 text-gold mx-auto mb-4" />
            <h3 className="heading-3 text-primary mb-4">50+ Active Distributors</h3>
            <p className="text-muted-foreground">
              Join our growing network of successful partners across 30+ countries
            </p>
          </motion.div>
        </div>
      </div>
    </section>,

    // Section 4: Application Form
    <section key="form" className="section-padding bg-white">
      <div className="container-custom px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="heading-2 text-primary mb-4">Apply Now</h2>
            <p className="text-muted-foreground">
              Fill out the form below and our partnership team will contact you
            </p>
          </motion.div>

          <div className="glass-card rounded-2xl p-8">
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Application Submitted!
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Thank you for your interest. Our partnership team will review your
                  application and contact you within 48 hours.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="email@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone *</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 234 567 8900" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your country" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experience *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Years in distribution" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-3">1-3 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="5-10">5-10 years</SelectItem>
                              <SelectItem value="10+">10+ years</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="regions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Regions of Interest *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Dubai, Abu Dhabi, Sharjah" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="currentBusiness"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Business Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your current business..."
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any other details you'd like to share..."
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>,

    // Section 5: Success Stories
    <section key="success" className="section-padding bg-primary text-white">
      <div className="container-custom px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 mb-8">Our Partners Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Ahmed Trading, UAE", quote: "Partnering with HKR doubled our product range overnight." },
              { name: "EuroFoods, Germany", quote: "Excellent product quality and reliable supply chain." },
              { name: "Asia Distributors, Singapore", quote: "Their support team is exceptional. True partners." },
            ].map((testimonial, index) => (
              <div key={testimonial.name} className="bg-white/10 rounded-xl p-6">
                <p className="text-white/80 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-gold font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
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
      {!DEMO_CONFIG.unlockAllSections && <DemoLockOverlay pageName="Become a Distributor" />}
    </Layout>
  );
};

export default Distributor;
