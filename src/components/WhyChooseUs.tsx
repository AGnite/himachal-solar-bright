import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "30+", label: "Years of Solar Expertise" },
  { value: "25,000", label: "MW Solar Capacity Delivered" },
  { value: "100%", label: "Himachal Pradesh Focused" }
];

const benefits = [
  "30+ years of solar expertise in Himachal Pradesh",
  "25,000 MW of solar capacity delivered across the state",
  "Deep knowledge of government approvals, policies & subsidy mechanisms",
  "Proven capability in mountainous and remote terrains",
  "Transparent, structured, and reliable processes",
  "Trusted by industries, institutions, and public-sector bodies",
  "A collaborative partnership focused on shared success"
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-20 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg sm:text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
            Trusted Partner for Clean Energy Solutions
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-card rounded-2xl shadow-soft border border-border hover:shadow-card transition-all"
            >
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Benefits Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm:8px text-foreground/80">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
