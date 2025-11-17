import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground">HimSolarConsulting</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#services" className="text-foreground/70 hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#why-us" className="text-foreground/70 hover:text-primary transition-colors font-medium">
              Why Us
            </a>
            <Button 
              size="sm" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-white"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
