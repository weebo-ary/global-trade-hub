import jsPDF from "jspdf";
import { COMPANY_INFO } from "@/config/demo";

export const generateCompanyProfilePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(30, 58, 95); // Navy
  doc.rect(0, 0, pageWidth, 50, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text(COMPANY_INFO.name, pageWidth / 2, 25, { align: "center" });
  
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(COMPANY_INFO.tagline, pageWidth / 2, 38, { align: "center" });
  
  // Company Overview
  doc.setTextColor(30, 58, 95);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("Company Overview", 20, 70);
  
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  const overview = `${COMPANY_INFO.name} is a leading international exporter of premium agricultural products, FMCG goods, and processed foods. Established in ${COMPANY_INFO.founded}, we have grown to become a trusted partner for businesses across ${COMPANY_INFO.countries} countries.

Our extensive portfolio includes fresh fruits and vegetables, premium rice varieties, spices, superfoods like Fox Nut (Makhana), and a wide range of canned products. We take pride in our commitment to quality, compliance, and customer satisfaction.

With state-of-the-art infrastructure, cold chain facilities, and a dedicated team of export professionals, we ensure that our products meet the highest international standards while maintaining competitive pricing.`;
  
  const splitOverview = doc.splitTextToSize(overview, pageWidth - 40);
  doc.text(splitOverview, 20, 80);
  
  // Key Statistics
  doc.setTextColor(30, 58, 95);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("Key Figures", 20, 140);
  
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`• Countries Served: ${COMPANY_INFO.countries}`, 20, 155);
  doc.text(`• Products Portfolio: ${COMPANY_INFO.products}`, 20, 168);
  doc.text(`• Satisfied Clients: ${COMPANY_INFO.clients}`, 20, 181);
  doc.text(`• Founded: ${COMPANY_INFO.founded}`, 20, 194);
  
  // Certifications
  doc.setTextColor(30, 58, 95);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("Certifications & Compliance", 20, 220);
  
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  COMPANY_INFO.certifications.forEach((cert, index) => {
    doc.text(`✓ ${cert} Certified`, 20, 235 + (index * 13));
  });
  
  // Footer
  doc.setFillColor(34, 197, 94); // Green
  doc.rect(0, 280, pageWidth, 17, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(`${COMPANY_INFO.email} | ${COMPANY_INFO.phone} | ${COMPANY_INFO.website}`, pageWidth / 2, 290, { align: "center" });
  
  doc.save("HKR_Global_Trade_Company_Profile.pdf");
};

export const generateProductCatalogPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(30, 58, 95);
  doc.rect(0, 0, pageWidth, 50, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text("Product Catalog", pageWidth / 2, 25, { align: "center" });
  
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text(COMPANY_INFO.name, pageWidth / 2, 40, { align: "center" });
  
  // Fresh Produce Section
  doc.setTextColor(34, 197, 94);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Fresh Fruits & Vegetables", 20, 70);
  
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  const freshProducts = ["Premium Onions (Red & White)", "Green Chilly", "Lady Finger (Okra)", "Tindli (Ivy Gourd)", "Fresh Curry Leaves", "Leafy Vegetables Assortment", "Alphonso & Kesar Mangoes", "Thompson Seedless Grapes", "Premium Pomegranates"];
  
  freshProducts.forEach((product, index) => {
    doc.text(`• ${product}`, 25, 82 + (index * 10));
  });
  
  // FMCG Section
  doc.setTextColor(34, 197, 94);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("FMCG Products", 20, 180);
  
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(11);
  const fmcgProducts = ["Premium Basmati Rice (1121, Pusa)", "Traditional Spices (Turmeric, Cumin, Coriander)", "Whole & Ground Grains", "Packaged Food Items", "Ready-to-Eat Products"];
  
  fmcgProducts.forEach((product, index) => {
    doc.text(`• ${product}`, 25, 192 + (index * 10));
  });
  
  // Add new page
  doc.addPage();
  
  // Superfoods Section
  doc.setTextColor(34, 197, 94);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Superfoods", 20, 30);
  
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(11);
  const superfoods = ["Fox Nut (Makhana) - Plain & Flavored", "Organic Quinoa", "Chia Seeds", "Flax Seeds", "Mixed Dry Fruits"];
  
  superfoods.forEach((product, index) => {
    doc.text(`• ${product}`, 25, 42 + (index * 10));
  });
  
  // Canned Products Section
  doc.setTextColor(34, 197, 94);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Canned & Processed Foods", 20, 110);
  
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(11);
  const cannedProducts = ["Canned Vegetables", "Fruit Pulps & Purees", "Pickles & Chutneys", "Ready-to-Eat Curries", "Tomato Products", "Coconut Products"];
  
  cannedProducts.forEach((product, index) => {
    doc.text(`• ${product}`, 25, 122 + (index * 10));
  });
  
  // Contact Section
  doc.setFillColor(30, 58, 95);
  doc.rect(15, 200, pageWidth - 30, 60, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Request a Quote", pageWidth / 2, 218, { align: "center" });
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text(`Email: ${COMPANY_INFO.email}`, pageWidth / 2, 235, { align: "center" });
  doc.text(`Phone: ${COMPANY_INFO.phone}`, pageWidth / 2, 248, { align: "center" });
  
  // Footer
  doc.setFillColor(34, 197, 94);
  doc.rect(0, 280, pageWidth, 17, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(`${COMPANY_INFO.name} | ${COMPANY_INFO.website}`, pageWidth / 2, 290, { align: "center" });
  
  doc.save("HKR_Global_Trade_Product_Catalog.pdf");
};
