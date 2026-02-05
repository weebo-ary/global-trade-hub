import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import DemoLockOverlay from "@/components/layout/DemoLockOverlay";
import { DEMO_CONFIG } from "@/config/demo";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Leaf, ShoppingCart, Sparkles, Package, ArrowRight } from "lucide-react";
import QuoteModal from "@/components/modals/QuoteModal";

const products = {
  fresh: [
    { name: "Red Onion", image: "🧅", desc: "Premium quality export-grade onions" },
    { name: "Green Chilly", image: "🌶️", desc: "Fresh and spicy green chillies" },
    { name: "Okra (Lady Finger)", image: "🥒", desc: "Tender okra for international markets" },
    { name: "Tindli (Ivy Gourd)", image: "🥬", desc: "Fresh ivy gourd for Asian cuisines" },
    { name: "Curry Leaves", image: "🍃", desc: "Aromatic curry leaves" },
    { name: "Leafy Vegetables", image: "🥬", desc: "Assorted fresh leafy greens" },
    { name: "Alphonso Mango", image: "🥭", desc: "King of mangoes from India" },
    { name: "Thompson Grapes", image: "🍇", desc: "Seedless table grapes" },
    { name: "Pomegranate", image: "🍎", desc: "Ruby red pomegranates" },
  ],
  fmcg: [
    { name: "Basmati Rice 1121", image: "🍚", desc: "Extra long grain premium rice" },
    { name: "Pusa Basmati", image: "🍚", desc: "Traditional aromatic rice" },
    { name: "Turmeric Powder", image: "🟡", desc: "Pure ground turmeric" },
    { name: "Cumin Seeds", image: "🌰", desc: "Whole cumin seeds" },
    { name: "Coriander Powder", image: "🌱", desc: "Ground coriander spice" },
    { name: "Red Chilli Powder", image: "🌶️", desc: "Spicy red chilli powder" },
    { name: "Garam Masala", image: "🫙", desc: "Traditional spice blend" },
    { name: "Black Pepper", image: "⚫", desc: "Premium black peppercorns" },
  ],
  superfoods: [
    { name: "Fox Nut (Makhana)", image: "⚪", desc: "Premium popped lotus seeds" },
    { name: "Organic Makhana", image: "⚪", desc: "Certified organic fox nuts" },
    { name: "Flavored Makhana", image: "⚪", desc: "Roasted & seasoned varieties" },
    { name: "Chia Seeds", image: "🟤", desc: "Nutrient-rich chia seeds" },
    { name: "Flax Seeds", image: "🟫", desc: "Golden flax seeds" },
    { name: "Quinoa", image: "🌾", desc: "White and red quinoa" },
    { name: "Moringa Powder", image: "🍃", desc: "Superfood moringa" },
    { name: "Mixed Dry Fruits", image: "🥜", desc: "Premium dry fruit mix" },
  ],
  canned: [
    { name: "Alphonso Mango Pulp", image: "🥫", desc: "Pure mango pulp" },
    { name: "Tomato Puree", image: "🍅", desc: "Concentrated tomato puree" },
    { name: "Mixed Pickles", image: "🫙", desc: "Traditional Indian pickles" },
    { name: "Mango Pickle", image: "🫙", desc: "Spicy mango pickle" },
    { name: "Coconut Milk", image: "🥥", desc: "Premium coconut milk" },
    { name: "Coconut Cream", image: "🥥", desc: "Rich coconut cream" },
    { name: "Fruit Jams", image: "🍯", desc: "Mixed fruit preserves" },
    { name: "Ready Curries", image: "🍛", desc: "Ready-to-eat curry pouches" },
    { name: "Tamarind Paste", image: "🟤", desc: "Concentrated tamarind" },
    { name: "Guava Pulp", image: "🥫", desc: "Fresh guava pulp" },
  ],
};

const categories = [
  { id: "fresh", name: "Fresh Produce", icon: Leaf },
  { id: "fmcg", name: "FMCG", icon: ShoppingCart },
  { id: "superfoods", name: "Superfoods", icon: Sparkles },
  { id: "canned", name: "Canned Foods", icon: Package },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState("fresh");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

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
            Our Products
          </span>
          <h1 className="heading-1 mb-6">
            Premium <span className="text-accent">Export Quality</span> Products
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Explore our comprehensive range of fresh produce, FMCG products, superfoods,
            and canned foods - all meeting international quality standards.
          </p>
        </motion.div>
      </div>
    </section>,

    // Section 2: Product Grid
    <section key="products" className="section-padding bg-white">
      <div className="container-custom px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-12">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className={`flex items-center gap-2 py-4 px-6 rounded-xl data-[state=active]:shadow-lg transition-all ${
                  activeTab === cat.id
                    ? "bg-primary text-white data-[state=active]:text-white"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                <cat.icon className="w-5 h-5" />
                <span className="font-medium">{cat.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(products).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {items.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card rounded-xl p-6 hover-lift group"
                  >
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                      {product.image}
                    </div>
                    <h3 className="font-semibold text-primary mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => setIsQuoteOpen(true)}
                    >
                      Request Quote
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>,

    // Section 3: Makhana Spotlight
    <section key="makhana" className="section-padding bg-gradient-to-r from-gold/10 to-accent/10">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-4 block">
              Featured Superfood
            </span>
            <h2 className="heading-2 text-primary mb-6">
              Fox Nut <span className="text-accent">(Makhana)</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              India's premium superfood export - nutrient-rich, low-calorie lotus seeds
              perfect for health-conscious consumers worldwide. Available in plain,
              roasted, and flavored varieties.
            </p>
            <ul className="space-y-3 mb-6">
              {["High protein & low fat", "Gluten-free & organic options", "Custom packaging available", "FDA compliant for US market"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="bg-accent hover:bg-green-dark" onClick={() => setIsQuoteOpen(true)}>
              Request Makhana Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-[200px] leading-none">⚪</div>
          </motion.div>
        </div>
      </div>
    </section>,

    // Section 4: Quality Promise
    <section key="quality" className="section-padding bg-white">
      <div className="container-custom px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 text-primary mb-4">Our Quality Promise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Every product undergoes rigorous quality checks at multiple stages
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {["Farm Selection", "Quality Testing", "Processing", "Packaging"].map((step, i) => (
              <div key={step} className="glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  {i + 1}
                </div>
                <h4 className="font-semibold text-primary">{step}</h4>
              </div>
            ))}
          </div>
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
          <h2 className="heading-2 mb-4">Need Custom Products?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            We can source and process products as per your exact specifications
          </p>
          <Button size="lg" className="bg-accent hover:bg-green-dark" onClick={() => setIsQuoteOpen(true)}>
            Get Custom Quote
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
      {!DEMO_CONFIG.unlockAllSections && <DemoLockOverlay pageName="Products" />}
      <QuoteModal open={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </Layout>
  );
};

export default Products;
