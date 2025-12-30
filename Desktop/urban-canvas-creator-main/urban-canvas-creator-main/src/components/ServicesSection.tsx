const ServicesSection = () => {
  const serviceCategories = [
    {
      title: "Concept & Planning",
      services: [
        {
          title: "Concept design for commercial spaces",
          description: "Early layouts, sketches and spatial strategies to set the direction for new developments, public realm projects or area regeneration schemes."
        },
        {
          title: "Space planning and layout design",
          description: "Measured plans to organise circulation routes, public spaces, trading areas and amenity zones within urban developments and public realm schemes."
        },
        {
          title: "Feasibility and test-fit studies",
          description: "Options showing how many units, amenity spaces or public areas can practically fit within a site, supporting early-stage decision-making and planning applications."
        }
      ]
    },
    {
      title: "Technical & Documentation",
      services: [
        {
          title: "Technical drawings for construction",
          description: "Detailed plans, sections and construction details suitable for pricing, coordination and use on site, prepared to UK construction standards."
        },
        {
          title: "Tender & construction information packs",
          description: "Drawing sets and outline specifications that contractors can quote, programme and build from, including planting schedules and material specifications."
        },
        {
          title: "Landlord & tenant works packs",
          description: "Information showing who is responsible for which landscape elements before, during and after development, supporting lease negotiations and handover processes."
        }
      ]
    },
    {
      title: "Interior Design",
      services: [
        {
          title: "Office fit-out design",
          description: "Landscape frameworks for commercial developments, including external works, amenity spaces and public realm areas that support workplace environments."
        },
        {
          title: "Retail unit design and refits",
          description: "Public realm and streetscape proposals to improve customer experience, wayfinding and the presentation of retail environments within urban settings."
        },
        {
          title: "Hospitality interior design",
          description: "Landscape schemes for cafés, restaurants and venues, from external seating areas and terraces to planting and hard landscaping that enhance the hospitality experience."
        }
      ]
    },
    {
      title: "Support & Coordination",
      services: [
        {
          title: "Design coordination",
          description: "Liaison with project managers, engineers, architects and contractors to keep landscape drawings and information aligned with overall project goals."
        },
        {
          title: "3D visuals & presentation boards",
          description: "Visuals and simple boards to support internal sign-off, investment packs or stakeholder presentations, helping communicate landscape proposals clearly."
        },
        {
          title: "Multi-site & roll-out design support",
          description: "Standard landscape layouts and design guidelines to roll a concept out consistently across several locations, maintaining quality and character."
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-12 lg:py-16 bg-muted/30 -mt-[57px]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* All content in one box */}
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="bg-secondary text-secondary-foreground rounded-2xl p-6 lg:p-8">
            {/* Page Introduction */}
            <div className="mb-8">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-secondary-foreground mb-4">
                Services
              </h2>
              <p className="text-secondary-foreground/90 leading-relaxed max-w-3xl mb-8">
                We provide practical design services for urban planning and landscape architecture, from early concept development through to detailed drawing packs and schedules for construction. Each service can be appointed on its own or combined into a full package.
              </p>

              {/* Service List Introduction */}
              <div className="mb-6">
                <p className="text-xs font-medium tracking-[0.2em] text-secondary-foreground/70 uppercase mb-3">
                  Service list
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-medium text-secondary-foreground">
                  What you can appoint us to do
                </h3>
              </div>
            </div>

            {/* Service Categories */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={category.title} className="space-y-2 flex flex-col">
                  <h4 className="font-display text-xl md:text-2xl font-medium text-secondary-foreground">
                    {category.title}
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5" style={{ gridAutoRows: '1fr' }}>
                    {category.services.map((service, serviceIndex) => (
                      <div 
                        key={serviceIndex} 
                        className="group bg-card text-card-foreground rounded-xl p-4 border border-border/50 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30 cursor-pointer"
                      >
                        <div className="flex gap-3 flex-1">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-muted-foreground/40 mt-1.5 transition-colors duration-300 group-hover:bg-primary/60" />
                          <div className="flex-1 flex flex-col">
                            <h5 className="font-display text-lg font-medium text-foreground mb-1.5 transition-colors duration-300 group-hover:text-primary">
                              {service.title}
                            </h5>
                            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
