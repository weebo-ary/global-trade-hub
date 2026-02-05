import { AlertTriangle } from "lucide-react";

const DemoBanner = () => {
  return (
    <div className="demo-banner fixed top-0 left-0 right-0 z-50 h-8">
      <div className="flex animate-marquee whitespace-nowrap h-full items-center">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-8 flex items-center gap-2 text-sm font-medium">
            <AlertTriangle className="h-4 w-4" />
            This is a Demo Website – For Presentation Purposes Only
            <AlertTriangle className="h-4 w-4" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default DemoBanner;
