import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const headlines = [
    "Sustainable environments.",
    "Master plans that transform communities.",
    "Innovative design solutions."
  ];

  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentHeadlineIndex((prev) => (prev + 1) % headlines.length);
        setIsVisible(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <section id="home" className="pt-24 lg:pt-32 pb-12 lg:pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Column - Main Content */}
          <div className="opacity-0 animate-fade-in-left flex flex-col h-full" style={{ animationDelay: "0.1s" }}>
            {/* Main Content Card */}
            <div className="bg-card text-card-foreground rounded-2xl p-8 space-y-6 border border-border flex-1 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  Urban Planning & Landscape Architecture
                </p>
                
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] text-foreground text-balance">
                  Design for spaces that inspire
                </h1>
              </div>

              {/* Dark Box - Rotating Headlines */}
              <div className="bg-secondary text-secondary-foreground rounded-2xl p-6">
                <p 
                  className={`text-sm sm:text-base text-secondary-foreground/90 whitespace-nowrap transition-opacity duration-300 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {headlines[currentHeadlineIndex]}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                STRUCSTA SCOPE specialises in urban planning and landscape architecture, creating 
                well-designed, sustainable spaces that reflect the needs of modern communities.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/projects">
                  <Button variant="hero" size="lg" className="gap-2">
                    Explore services
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="heroOutline" size="lg">
                    Contact the studio
                  </Button>
                </Link>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">From concept to construction</span>{" "}
                  flexible support that sits neatly alongside your existing project team.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Dark Cards */}
          <div className="opacity-0 animate-fade-in-right flex flex-col h-full gap-6" style={{ animationDelay: "0.3s" }}>
            {/* Focus Card */}
            <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 space-y-6 flex-1 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-1">
              <p className="text-xs font-medium tracking-[0.15em] text-dark-card-muted uppercase">
                What We Focus On
              </p>
              
              <p className="text-secondary-foreground/90 leading-relaxed">
                Urban planning and landscape design for{" "}
                <span className="text-secondary-foreground font-medium">
                  public spaces, residential communities, and commercial developments
                </span>
                , plus the technical information needed for planning approval and construction.
              </p>

              <div className="pt-4 border-t border-secondary-foreground/10">
                <h3 className="font-display text-2xl font-medium text-secondary-foreground mb-3">
                  Vision-first, build-ready.
                </h3>
                <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                  Master plans, planting schemes, and technical details aligned with 
                  planners, engineers and contractors.
                </p>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 flex-1 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-1">
              <p className="text-secondary-foreground/80 leading-relaxed">
                Use STRUCSTA SCOPE as an extension of your team from a single project 
                or first site, through to ongoing support across several locations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
