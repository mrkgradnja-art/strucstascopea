import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQSection = () => {
  return (
    <section id="faq" className="pt-6 pb-12 lg:pt-6 lg:pb-16 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1250px]">
        <div className="bg-secondary rounded-2xl p-8 lg:p-12 text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
            <div className="flex-1 space-y-4">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-white">
                FAQ
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Common questions about how we work, what we do and what to expect when working with STRUCSTA SCOPE.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link to="/faq">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 rounded-full px-8"
                >
                  View all questions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
