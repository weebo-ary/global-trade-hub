import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Layout from "@/components/layout/Layout";
import DemoLockOverlay from "@/components/layout/DemoLockOverlay";
import { DEMO_CONFIG, COMPANY_INFO } from "@/config/demo";
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const faqs = [
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "MOQ varies by product. For fresh produce, we typically require a minimum of 1 container (approximately 20-25 MT). For packaged goods, we can accommodate smaller orders starting from 500 kg.",
  },
  {
    question: "Which countries do you export to?",
    answer: "We export to 45+ countries including UAE, Saudi Arabia, UK, Germany, USA, Singapore, and many more. Contact us for specific market availability.",
  },
  {
    question: "What certifications do you have?",
    answer: "We are FSSAI, APEDA, ISO 22000, HACCP, and BRC certified. All our products come with necessary phytosanitary and origin certificates.",
  },
  {
    question: "What payment terms do you offer?",
    answer: "We accept LC at sight, T/T with advance payment, and other standard international payment methods. Terms are negotiable based on order size and relationship.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping time depends on destination. Middle East: 5-10 days, Europe: 20-25 days, USA: 25-35 days by sea. Air freight options available for urgent orders.",
  },
];

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
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
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Contact Us
          </span>
          <h1 className="heading-1 mb-6">
            Let's <span className="text-accent">Connect</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Have questions about our products or services? Our team is ready to help
            you with your export requirements.
          </p>
        </motion.div>
      </div>
    </section>,

    // Section 2: Contact Info & Form
    <section key="contact-form" className="section-padding bg-white">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="heading-3 text-primary mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Phone</h4>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-muted-foreground hover:text-accent">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Email</h4>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-muted-foreground hover:text-accent">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Address</h4>
                  <p className="text-muted-foreground">{COMPANY_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Business Hours</h4>
                  <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-8">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Thank you for contacting us. Our team will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="heading-3 text-primary mb-6">Send us a Message</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@company.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company</FormLabel>
                              <FormControl>
                                <Input placeholder="Your company name" {...field} />
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
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 234 567 8900" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="quote">Request a Quote</SelectItem>
                                <SelectItem value="products">Product Inquiry</SelectItem>
                                <SelectItem value="partnership">Partnership</SelectItem>
                                <SelectItem value="support">Support</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your requirements..."
                                rows={5}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full bg-accent hover:bg-green-dark">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>,

    // Section 3: FAQ
    <section key="faq" className="section-padding bg-secondary/30">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our export services
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="hover:no-underline text-left font-medium text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>,

    // Section 4: Quick Contact
    <section key="quick" className="section-padding bg-primary text-white">
      <div className="container-custom px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="heading-2 mb-4">Need Quick Assistance?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Chat with us on WhatsApp for instant support
          </p>
          <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E]" asChild>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>
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
      {!DEMO_CONFIG.unlockAllSections && <DemoLockOverlay pageName="Contact" />}
    </Layout>
  );
};

export default Contact;
