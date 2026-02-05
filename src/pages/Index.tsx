import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GlobalPresence from "@/components/home/GlobalPresence";
import ProductCategories from "@/components/home/ProductCategories";
import CertificationsSection from "@/components/home/CertificationsSection";
import ExportProcess from "@/components/home/ExportProcess";
import LogisticsSection from "@/components/home/LogisticsSection";
import CaseStudies from "@/components/home/CaseStudies";
import DownloadCenter from "@/components/home/DownloadCenter";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <WhyChooseUs />
      <GlobalPresence />
      <ProductCategories />
      <CertificationsSection />
      <ExportProcess />
      <LogisticsSection />
      <CaseStudies />
      <DownloadCenter />
      <CTASection />
    </Layout>
  );
};

export default Index;
