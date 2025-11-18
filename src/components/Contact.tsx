import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Card className="max-w-4xl mx-auto border-border shadow-card bg-card/95 backdrop-blur">
          <CardContent className="p-8 sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Ready to Explore Solar Solutions?
              </h2>
              <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Let's work together to build clean, reliable, and future-ready energy systems.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-white font-semibold shadow-soft group w-full sm:w-auto"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us for Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="border-t border-border pt-8 mt-8">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3 text-foreground/70">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-foreground/50">Call Us</div>
                    <div className="font-semibold text-foreground">Get in Touch</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-foreground/70">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs text-foreground/50">Email Us</div>
                    <div className="font-semibold text-foreground">Quick Response</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-lg text-foreground/60 italic">
            Your partner in Himachal's solar energy transformation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
