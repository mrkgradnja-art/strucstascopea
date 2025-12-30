import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const workspaceProjects = [
    {
      title: "OFFICE - City centre fit-out",
      description: "Full workplace design for a single floorplate, including meeting suite, collaboration areas and quiet focus zones, coordinated with M&E engineers and the fit-out contractor.",
      image: "/project-1.jpg"
    },
    {
      title: "STUDIO - Creative studio refurbishment",
      description: "Re-working of an existing studio to introduce new team settings and informal areas while keeping disruption to live operations low.",
      image: "/project-2.jpg"
    },
    {
      title: "LANDLORD - Lettable CAT A+ layouts",
      description: "Pre-fitted layouts and finishes designed to make floorplates more attractive to potential occupiers and quicker to take on.",
      image: "/project-3.jpg"
    }
  ];

  const retailProjects = [
    {
      title: "RETAIL - High street store refresh",
      description: "Updated layouts, display approach and finishes for a trading unit, translated into a simple kit of parts for additional locations.",
      image: "/project-4.jpg"
    },
    {
      title: "HOSPITALITY - Neighbourhood café-bar",
      description: "Zoning, seating, bar layout and interior scheme to balance covers, atmosphere and operational efficiency.",
      image: "/project-5.jpg"
    },
    {
      title: "ROLL-OUT - Multi-site fit-out support",
      description: "Standardised design information used across several locations, adapted to local conditions while keeping the overall concept consistent.",
      image: "/project-6.jpg"
    }
  ];

  const allProjects = [...workspaceProjects, ...retailProjects];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-24">
        <section className="py-12 lg:py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Page Header */}
            <div className="mb-12 lg:mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-3">
                Recent Work
              </p>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
                Our project types
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                A selection of typical briefs. These can be replaced or expanded with your own project case studies and imagery as they are completed.
              </p>
            </div>

            {/* WORKSPACE Section */}
            <div className="mb-16 lg:mb-20 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
                WORKSPACE
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workspaceProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group bg-card text-card-foreground rounded-xl p-4 border border-border/50 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30 cursor-pointer"
                  >
                    <div className="flex gap-3 flex-1 mb-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-muted-foreground/40 mt-1.5 transition-colors duration-300 group-hover:bg-primary/60" />
                      <div className="flex-1 flex flex-col">
                        <h3 className="font-display text-lg font-medium text-foreground mb-1.5 transition-colors duration-300 group-hover:text-primary">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Image */}
                    {project.image && (
                      <div 
                        className="rounded-lg overflow-hidden mt-4 cursor-pointer group/image transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 aspect-square"
                        onClick={() => setSelectedImage(project.image)}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/image:scale-110"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* RETAIL & HOSPITALITY Section */}
            <div className="mb-16 lg:mb-20 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
                RETAIL & HOSPITALITY
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {retailProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group bg-card text-card-foreground rounded-xl p-4 border border-border/50 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30 cursor-pointer"
                  >
                    <div className="flex gap-3 flex-1 mb-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-muted-foreground/40 mt-1.5 transition-colors duration-300 group-hover:bg-primary/60" />
                      <div className="flex-1 flex flex-col">
                        <h3 className="font-display text-lg font-medium text-foreground mb-1.5 transition-colors duration-300 group-hover:text-primary">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Image */}
                    {project.image && (
                      <div 
                        className="rounded-lg overflow-hidden mt-4 cursor-pointer group/image transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 aspect-square"
                        onClick={() => setSelectedImage(project.image)}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/image:scale-110"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

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
                alt={allProjects.find(p => p.image === selectedImage)?.title || "Project image"}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain block"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
