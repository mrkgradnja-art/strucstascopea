import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OurApproach = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-24">
        <section className="py-12 lg:py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1250px]">
            {/* About Section */}
            <div className="mb-16 lg:mb-20">
              <div className="bg-card text-card-foreground rounded-2xl p-8 space-y-6 border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                  About STRUCSTA SCOPE
                </h1>
                <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
                  <p>
                    STRUCSTA SCOPE is a design studio focused on commercial intent and construction detail. 
                    We plan and design workplaces, retail units, hospitality spaces and public realm areas 
                    for property owners, occupiers and landlords.
                  </p>
                  <p>
                    Our approach combines early-stage spatial thinking with practical drawing and specification 
                    work, helping projects move from concept through to construction-ready information.
                  </p>
                  <p>
                    We work as part of wider project teams, coordinating with architects, engineers, contractors 
                    and other consultants to deliver clear, buildable design information.
                  </p>
                </div>
              </div>
            </div>

            {/* STUDIO Section */}
            <div className="mb-16 lg:mb-20">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Main Text */}
                <div className="space-y-4">
                  <h2 className="font-display text-xl md:text-2xl font-medium text-muted-foreground uppercase tracking-wider mb-6">
                    STUDIO
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      STRUCSTA SCOPE supports commercial projects where interior design and landscape architecture 
                      need to align with property strategy, planning requirements and construction delivery.
                    </p>
                    <p>
                      We understand the market pressures that shape commercial development and refurbishment, 
                      and we design with those constraints in mind.
                    </p>
                    <p>
                      Our role typically involves design coordination and information delivery, working alongside 
                      project managers, engineers and contractors to keep design work aligned with overall project 
                      goals and buildability.
                    </p>
                  </div>
                </div>

                {/* Location and reach Box */}
                <div className="bg-secondary text-secondary-foreground rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-1">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-medium text-secondary-foreground mb-3">
                        Location and reach
                      </h3>
                      <p className="text-secondary-foreground/90 leading-relaxed">
                        Based in London, we work on projects across the UK. Our registered office is at 
                        86-90 Paul Street, London, EC2A 4NE.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-medium text-secondary-foreground mb-3">
                        Typical appointment
                      </h3>
                      <p className="text-secondary-foreground/90 leading-relaxed mb-4">
                        We are typically appointed to provide design services for commercial interior and 
                        landscape projects, either as standalone services or as part of a wider design team.
                      </p>
                      <div className="text-sm text-secondary-foreground/80 space-y-1">
                        <p>Company NO. 15199280</p>
                        <p>Registered office address: 86-90 Paul Street, London, EC2A 4NE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WHO WE SUPPORT Section */}
            <div className="mb-16 lg:mb-20">
              <h2 className="font-display text-xl md:text-2xl font-medium text-muted-foreground uppercase tracking-wider mb-6">
                WHO WE SUPPORT
              </h2>
              <h3 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
                Organisations we most often work with.
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
                Flexible involvement for single sites or portfolios, from first-time projects through to 
                experienced property teams.
              </p>

              {/* Three Content Boxes */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="group bg-card text-card-foreground rounded-xl p-6 border border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30">
                  <h4 className="font-display text-xl font-medium text-foreground mb-3">
                    Owners & occupiers
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Companies and organisations looking to fit out or refurbish their own spaces, from 
                    single sites to multi-location roll-outs.
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    HQs • Studios • Production space
                  </p>
                </div>

                <div className="group bg-card text-card-foreground rounded-xl p-6 border border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30">
                  <h4 className="font-display text-xl font-medium text-foreground mb-3">
                    Landlords & managing agents
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Property owners and their agents who need design services to support lettings, 
                    refurbishments or public realm improvements.
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    CAT A+ • Common areas • Public realm
                  </p>
                </div>

                <div className="group bg-card text-card-foreground rounded-xl p-6 border border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30">
                  <h4 className="font-display text-xl font-medium text-foreground mb-3">
                    Retail & hospitality operators
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Brands and operators rolling out new concepts or refreshing existing locations, 
                    needing design coordination and drawing packs.
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    Stores • Cafés • Restaurants • Venues
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["Workplaces", "Retail", "Hospitality", "Studios", "Leisure", "Mixed-use"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurApproach;
