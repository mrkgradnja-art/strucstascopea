import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 relative bg-muted/50">
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1250px] h-full bg-cover bg-center bg-no-repeat opacity-[0.10] pointer-events-none rounded-[20px]"
        style={{ backgroundImage: 'url(/2.jpg)' }}
      />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <div className="space-y-8 opacity-0 animate-fade-in-left" style={{ animationDelay: "0.1s" }}>
            <div className="space-y-4">
              <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Get in Touch
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Let's discuss your project
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              Ready to transform your outdoor spaces? Get in touch to discuss how we can 
              help bring your vision to life.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hello@strucstascope.com" className="text-foreground font-medium hover:text-primary transition-colors">
                    hello@strucstascope.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="opacity-0 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 lg:p-10 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-1">
              <div className="space-y-6">
                <h3 className="font-display text-2xl lg:text-3xl font-medium text-secondary-foreground">
                  Start a conversation
                </h3>
                <p className="text-secondary-foreground/80 leading-relaxed">
                  Whether you're at the early stages of a project or ready to appoint a 
                  landscape team, we'd love to hear from you. Share your brief with us and 
                  we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="mt-8">
                <Link to="/contact">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-full bg-primary-foreground text-secondary hover:bg-primary-foreground/90 gap-2"
                  >
                    Send us your brief
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
