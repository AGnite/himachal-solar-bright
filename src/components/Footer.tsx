import { Sun } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground">HimSolarConsulting</span>
          </div>
          
          <p className="text-center text-foreground/70 max-w-md">
            Empowering Himachal Pradesh with 30+ years of solar energy expertise
          </p>
          
          <div className="text-center text-sm text-foreground/50">
            © 2024 Himachal Solar Consulting. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
