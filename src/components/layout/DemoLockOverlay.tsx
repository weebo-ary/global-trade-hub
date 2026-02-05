import { Lock, Mail, Phone } from "lucide-react";
import { DEMO_CONFIG } from "@/config/demo";
import { Button } from "@/components/ui/button";

interface DemoLockOverlayProps {
  pageName: string;
}

const DemoLockOverlay = ({ pageName }: DemoLockOverlayProps) => {
  return (
    <div className="relative">
      {/* Gradient fade overlay */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-white/80 to-white pointer-events-none" />
      
      {/* Lock content */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
            <Lock className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="heading-3 text-primary mb-4">
            Demo Content Locked
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            This is a demo version of our {pageName} page. To view the complete content and all sections, please contact our team.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button className="btn-primary gap-2" asChild>
              <a href={`mailto:${DEMO_CONFIG.contactEmail}`}>
                <Mail className="w-4 h-4" />
                Request Full Access
              </a>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <a href={`tel:${DEMO_CONFIG.contactPhone}`}>
                <Phone className="w-4 h-4" />
                {DEMO_CONFIG.contactPhone}
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            For presentations and partnership discussions, contact{" "}
            <a href={`mailto:${DEMO_CONFIG.contactEmail}`} className="text-primary hover:underline">
              {DEMO_CONFIG.contactEmail}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoLockOverlay;
