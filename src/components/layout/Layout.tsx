import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import DemoBanner from "./DemoBanner";
import Header from "./Header";
import Footer from "./Footer";
import FloatingElements from "./FloatingElements";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <DemoBanner />
      <Header />
      <main className="flex-1 pt-28">{children}</main>
      <Footer />
      <FloatingElements />
    </div>
  );
};

export default Layout;
