import { Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg sm:text-xl text-foreground">HimSolarConsulting</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/70 hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/70 hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-foreground/70 hover:text-primary transition-colors font-medium"
            >
              Why Us
            </button>
            <Button
              size="sm"
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-white"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-foreground/70 hover:text-primary transition-colors font-medium text-left text-lg"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-foreground/70 hover:text-primary transition-colors font-medium text-left text-lg"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("why-us")}
                  className="text-foreground/70 hover:text-primary transition-colors font-medium text-left text-lg"
                >
                  Why Us
                </button>
                <Button
                  className="bg-gradient-primary hover:opacity-90 transition-opacity text-white w-full"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
