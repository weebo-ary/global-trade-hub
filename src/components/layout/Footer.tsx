import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Download,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, SOCIAL_LINKS } from "@/config/demo";
import { generateCompanyProfilePDF, generateProductCatalogPDF } from "@/lib/pdf";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "Global Markets", path: "/markets" },
    { name: "Contact Us", path: "/contact" },
  ],
  products: [
    { name: "Fresh Produce", path: "/products?category=fresh" },
    { name: "FMCG Products", path: "/products?category=fmcg" },
    { name: "Superfoods", path: "/products?category=superfoods" },
    { name: "Canned Foods", path: "/products?category=canned" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Export Policy", path: "/export-policy" },
  ],
};

const certifications = ["FSSAI", "APEDA", "ISO 22000", "HACCP", "BRC"];

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-accent font-bold text-2xl">H</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">{COMPANY_INFO.name}</h3>
                <p className="text-white/60 text-sm">{COMPANY_INFO.tagline}</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                {COMPANY_INFO.email}
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/distributor"
                  className="text-gold hover:text-gold/80 transition-colors font-medium"
                >
                  Become a Distributor
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads & Certifications */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Downloads</h4>
            <div className="space-y-3 mb-8">
              <Button
                onClick={generateCompanyProfilePDF}
                variant="outline"
                className="w-full justify-start gap-2 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                <Download className="w-4 h-4" />
                Company Profile
              </Button>
              <Button
                onClick={generateProductCatalogPDF}
                variant="outline"
                className="w-full justify-start gap-2 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                <Download className="w-4 h-4" />
                Product Catalog
              </Button>
            </div>

            <h4 className="font-semibold text-lg mb-4">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
