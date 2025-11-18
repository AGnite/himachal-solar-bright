import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000, { message: "Message must be less than 1000 characters" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", data);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    reset();
  };

  return (
    <section className="py-12 sm:py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Card className="max-w-4xl mx-auto border-border shadow-card bg-card/95 backdrop-blur">
          <CardContent className="p-6 sm:p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Ready to Explore Solar Solutions?
              </h2>
              <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
              <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Let's work together to build clean, reliable, and future-ready energy systems.
              </p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-8">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your full name"
                  {...register("name")}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="your.email@example.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your solar project requirements..."
                  rows={5}
                  {...register("message")}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <Button 
                type="submit"
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-white font-semibold shadow-soft group w-full"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
            
            <div className="border-t border-border pt-8 mt-8">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3 text-foreground/70">
                  <a href="tel:+919418456377" className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-foreground/50">Call Us</div>
                    <div className="font-semibold text-foreground">Get in Touch</div>
                  </div>
                </a>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <a href="mailto:vinsood99@gmail.com" className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/50">Email Us</div>
                      <div className="font-semibold text-foreground">Quick Response</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-base sm:text-lg text-foreground/60 italic">
            Your partner in Himachal's solar energy transformation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
