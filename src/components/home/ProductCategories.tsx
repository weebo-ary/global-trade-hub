import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ShoppingCart, Sparkles, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const categories = [
  {
    id: "fresh",
    name: "Fresh Produce",
    icon: Leaf,
    color: "bg-green",
    description: "Premium fruits and vegetables directly from Indian farms",
    products: [
      { name: "Red Onion", image: "🧅" },
      { name: "Green Chilly", image: "🌶️" },
      { name: "Okra (Lady Finger)", image: "🥒" },
      { name: "Alphonso Mango", image: "🥭" },
      { name: "Thompson Grapes", image: "🍇" },
      { name: "Pomegranate", image: "🍎" },
    ],
  },
  {
    id: "fmcg",
    name: "FMCG",
    icon: ShoppingCart,
    color: "bg-primary",
    description: "Quality rice, spices, and packaged food products",
    products: [
      { name: "Basmati Rice 1121", image: "🍚" },
      { name: "Premium Spices", image: "🌿" },
      { name: "Turmeric Powder", image: "🟡" },
      { name: "Cumin Seeds", image: "🌰" },
      { name: "Coriander", image: "🌱" },
      { name: "Red Chilli Powder", image: "🌶️" },
    ],
  },
  {
    id: "superfoods",
    name: "Superfoods",
    icon: Sparkles,
    color: "bg-gold",
    description: "Nutrient-rich superfoods for health-conscious consumers",
    products: [
      { name: "Fox Nut (Makhana)", image: "⚪" },
      { name: "Chia Seeds", image: "🟤" },
      { name: "Flax Seeds", image: "🟫" },
      { name: "Quinoa", image: "🌾" },
      { name: "Mixed Dry Fruits", image: "🥜" },
      { name: "Moringa Powder", image: "🍃" },
    ],
  },
  {
    id: "canned",
    name: "Canned Foods",
    icon: Package,
    color: "bg-navy-light",
    description: "Chemical-free canned and processed food products",
    products: [
      { name: "Mango Pulp", image: "🥫" },
      { name: "Tomato Puree", image: "🍅" },
      { name: "Mixed Pickles", image: "🫙" },
      { name: "Coconut Milk", image: "🥥" },
      { name: "Fruit Jams", image: "🍯" },
      { name: "Ready Curries", image: "🍛" },
    ],
  },
];

const ProductCategories = () => {
  const [activeTab, setActiveTab] = useState("fresh");

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Product Range
          </span>
          <h2 className="heading-2 text-primary mb-4">
            Quality Products for <span className="text-accent">Every Market</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From farm-fresh produce to processed foods, explore our comprehensive product portfolio
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-12">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className={`flex items-center gap-2 py-4 px-6 rounded-xl data-[state=active]:shadow-lg transition-all ${
                  activeTab === cat.id
                    ? "bg-white data-[state=active]:text-primary"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              >
                <cat.icon className="w-5 h-5" />
                <span className="font-medium">{cat.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                    <Button className="bg-accent hover:bg-green-dark text-white" asChild>
                      <Link to={`/products?category=${category.id}`}>
                        View All Products
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {category.products.map((product, index) => (
                      <motion.div
                        key={product.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white rounded-xl p-4 text-center hover-lift cursor-pointer group"
                      >
                        <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                          {product.image}
                        </div>
                        <p className="text-sm font-medium text-primary">
                          {product.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductCategories;
