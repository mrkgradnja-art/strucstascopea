import { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/111.webp",
      alt: "Kitchen space",
      title: "Kitchen space"
    },
    {
      src: "/222.webp",
      alt: "Corridor space",
      title: "Corridor space"
    },
    {
      src: "/333.jpg",
      alt: "Creative studio",
      title: "Creative studio refurbishment"
    }
  ];

  return (
    <section id="projects" className="py-12 lg:py-16 bg-muted/50 -mt-[55px]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {/* Section Header */}
          <div className="mb-6">
            <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-3">
              Recent Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
              Recent projects
            </h2>
          </div>

          {/* Image Collage in Light Gray Box */}
          <div className="bg-secondary rounded-2xl p-6 lg:p-8 overflow-hidden">
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Top Left - Kitchen */}
              <div 
                className="aspect-[4/3] rounded-xl overflow-hidden relative cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
                onClick={() => setSelectedImage(images[0].src)}
              >
                <img 
                  src="/111.webp" 
                  alt="Kitchen space" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Dark Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-6">
                  <h3 className="font-display text-xl font-medium mb-1">
                    Kitchen space
                  </h3>
                </div>
              </div>
              
              {/* Top Right - Corridor */}
              <div 
                className="aspect-[4/3] rounded-xl overflow-hidden relative cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
                onClick={() => setSelectedImage(images[1].src)}
              >
                <img 
                  src="/222.webp" 
                  alt="Corridor space" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Dark Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-6">
                  <h3 className="font-display text-xl font-medium mb-1">
                    Corridor space
                  </h3>
                </div>
              </div>
              
              {/* Bottom - Office/Studio (spans full width) */}
              <div 
                className="col-span-2 aspect-[16/6] rounded-xl overflow-hidden relative cursor-pointer group transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/20"
                onClick={() => setSelectedImage(images[2].src)}
              >
                <img 
                  src="/333.jpg" 
                  alt="Creative studio" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Dark Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-6">
                  <h3 className="font-display text-xl font-medium mb-1">
                    Creative studio refurbishment
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent 
          className="!max-w-[95vw] !max-h-[95vh] !w-fit !h-fit !p-0 !grid border-4 border-primary/40 bg-transparent shadow-2xl overflow-visible"
          style={{ display: 'inline-block' }}
        >
          {selectedImage && (
            <div className="relative inline-block">
              <img 
                src={selectedImage} 
                alt={images.find(img => img.src === selectedImage)?.alt || "Project image"}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain block"
              />
              {images.find(img => img.src === selectedImage)?.description && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="font-display text-2xl font-medium text-white mb-1">
                    {images.find(img => img.src === selectedImage)?.title}
                  </h3>
                  <p className="text-sm text-white/90">
                    {images.find(img => img.src === selectedImage)?.description}
                  </p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
