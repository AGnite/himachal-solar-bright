import { 
  MapPin, 
  FileText, 
  Shield, 
  Hammer, 
  Settings, 
  GraduationCap, 
  Sun 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: MapPin,
    title: "Project Feasibility & Site Survey",
    description: "We conduct detailed site evaluations across diverse Himalayan terrains, assessing solar potential, land suitability, shading, grid availability, and environmental conditions.",
    outcome: "A clear feasibility report to help you make confident, informed decisions."
  },
  {
    icon: FileText,
    title: "Tender & Bid Management",
    description: "We prepare technical specifications, define scope, identify vendors, and manage the tendering and evaluation process end-to-end.",
    outcome: "The most suitable vendor selected with full transparency and zero stress."
  },
  {
    icon: Shield,
    title: "Regulatory & Scheme Advisory",
    description: "With decades of experience navigating Himachal Government policies, MNRE guidelines, approvals, and subsidy schemes, we guide you through documentation, compliance, and benefit optimization.",
    outcome: "Faster clearances, accurate compliance, and maximized incentives."
  },
  {
    icon: Hammer,
    title: "Project Implementation & Logistics",
    description: "We oversee procurement, construction, installation, commissioning, and logistics — ensuring quality and timelines even in challenging mountain regions.",
    outcome: "Smooth execution under experienced supervision."
  },
  {
    icon: Settings,
    title: "Asset Management & O&M",
    description: "Our post-installation services include periodic inspections, troubleshooting, preventive maintenance, and performance audits.",
    outcome: "Better performance, higher annual yield, and longer asset life."
  },
  {
    icon: GraduationCap,
    title: "Community Training & Awareness",
    description: "We conduct training programs for staff, communities, panchayats, SHGs, and stakeholders to build capacity and improve solar adoption.",
    outcome: "Empowered local teams supporting long-term sustainability."
  },
  {
    icon: Sun,
    title: "Rooftop & Ground-Mount Solar Solutions",
    description: "We assist institutions, industries, government departments, hotels, and farms with the design, tendering, and execution of rooftop and ground-mounted solar systems.",
    outcome: "Tailored solutions built for reliability and efficiency."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solar consulting solutions tailored for the Himalayan region
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-base text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-3 border-t border-border">
                  <p className="text-sm font-semibold text-primary">
                    Outcome: <span className="font-normal text-foreground/80">{service.outcome}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
