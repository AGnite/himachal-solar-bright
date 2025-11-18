import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/solar-hero.jpg";
const Hero = () => {
  return <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-lg"> Himachal's Solar Energy Experts</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
            Powering Himachal's{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Clean Energy Future
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            With 30+ years of on-ground experience in the Himalayan region and a proven track record of 
            <span className="font-semibold text-primary"> 180+ MW </span>
            of solar projects delivered, we help businesses, institutions, and government bodies implement 
            solar projects with confidence, compliance, and complete peace of mind.
          </p>
          
          <p className="text-md sm:text-lg text-foreground/70 mb-10 font-medium">
            From feasibility to commissioning — you gain clarity while we manage the complexity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-white font-semibold shadow-soft group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 text-lg text-foreground/100 italic">
            → Empowering sustainable growth across the mountains.
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;