import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import QuoteModal from "@/components/modals/QuoteModal";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Global Markets", path: "/markets" },
  { name: "Infrastructure", path: "/infrastructure" },
  { name: "Contact", path: "/contact" },
];

const languages = [
  { code: "EN", name: "English" },
  { code: "AR", name: "العربية" },
  { code: "ES", name: "Español" },
  { code: "DE", name: "Deutsch" },
  { code: "FR", name: "Français" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20 px-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">H</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg text-primary leading-tight">
                  HKR Global Trade
                </h1>
                <p className="text-xs text-muted-foreground">
                  Premium Export Solutions
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-1 hidden md:flex text-foreground">
                    <Globe className="w-4 h-4" />
                    {selectedLang}
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white z-50">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setSelectedLang(lang.code)}
                      className={selectedLang === lang.code ? "bg-accent/10" : ""}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Get Quote Button */}
              <Button
                onClick={() => setIsQuoteOpen(true)}
                className="bg-accent hover:bg-green-dark text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all hidden sm:flex"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden text-foreground">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-white">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-xl">H</span>
                        </div>
                        <span className="font-bold text-primary">HKR Global</span>
                      </div>
                    </div>

                    <nav className="flex flex-col gap-2">
                      {navLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsMobileOpen(false)}
                          className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                            location.pathname === link.path
                              ? "text-accent-foreground bg-accent"
                              : "text-foreground hover:bg-secondary"
                          }`}
                        >
                          {link.name}
                        </Link>
                      ))}
                      <Link
                        to="/distributor"
                        onClick={() => setIsMobileOpen(false)}
                        className="px-4 py-3 rounded-lg text-base font-medium text-gold hover:bg-gold/10 border border-gold/30"
                      >
                        Become a Distributor
                      </Link>
                    </nav>

                    <div className="mt-auto pt-8">
                      <Button
                        onClick={() => {
                          setIsMobileOpen(false);
                          setIsQuoteOpen(true);
                        }}
                        className="w-full bg-accent hover:bg-green-dark text-accent-foreground font-semibold"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <QuoteModal open={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </>
  );
};

export default Header;
