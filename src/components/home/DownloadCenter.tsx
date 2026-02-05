import { motion } from "framer-motion";
import { Download, FileText, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateCompanyProfilePDF, generateProductCatalogPDF } from "@/lib/pdf";

const DownloadCenter = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-navy-dark to-primary text-white">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Download Center
            </span>
            <h2 className="heading-2 text-white mb-6">
              Get Our <span className="text-accent">Resources</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Download our comprehensive company profile and product catalog to
              learn more about our offerings, certifications, and capabilities.
              Share with your team for informed decision-making.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Company Profile</h3>
              <p className="text-white/60 text-sm mb-4">
                Complete overview of our company, certifications, and capabilities
              </p>
              <Button
                onClick={generateCompanyProfilePDF}
                className="w-full bg-white text-primary hover:bg-white/90"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Product Catalog</h3>
              <p className="text-white/60 text-sm mb-4">
                Detailed catalog of all our products with specifications
              </p>
              <Button
                onClick={generateProductCatalogPDF}
                className="w-full bg-gold text-white hover:bg-gold/90"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCenter;
