import { Award, Mountain, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6 mb-12">
            <p className="text-center leading-relaxed text-xl">
              For over three decades, we have been deeply involved in solar energy development across 
              Himachal Pradesh, supporting rooftop, ground-mount, and utility-scale installations. 
              Our experience spans remote terrains, high-altitude sites, complex regulatory landscapes, 
              and community-driven programs.
            </p>
            
            <p className="text-center leading-relaxed text-xl">
              We specialize in delivering end-to-end solar consulting for organizations that want reliable 
              execution, transparent guidance, and long-term value. With unmatched understanding of Himachal's 
              solar policies, approval pathways, government schemes, and compliance checks, we ensure every 
              project moves forward smoothly and efficiently.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Our Commitment</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Expertise</h4>
                <p className="text-lg text-foreground/70">Deep knowledge and proven track record</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Clarity</h4>
                <p className="text-lg text-foreground/70">Transparent guidance every step</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Partnership</h4>
                <p className="text-lg text-foreground/70">Working hand-in-hand with you</p>
              </div>
            </div>
            
            <p className="text-center mt-8 text-lg font-semibold text-primary">
              We empower you with the expertise, clarity, and support you need — working hand-in-hand 
              to bring your solar project to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
