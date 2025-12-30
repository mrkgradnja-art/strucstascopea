import { MapPin, Compass, Users } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Urban environments only",
    description:
      "Public spaces, parks, streetscapes and residential developments, concentrating on spaces that enhance community life.",
  },
  {
    icon: Compass,
    title: "Clear and sustainable",
    description:
      "Drawings, schedules and visuals that help everyone understand what is proposed and how it will be delivered on site.",
  },
  {
    icon: Users,
    title: "Flexible involvement",
    description:
      "Appoint us for early concept planning, full landscape design or rolling support across multiple properties.",
  },
];

const OverviewSection = () => {
  return (
    <section id="approach" className="py-12 lg:py-16 -mt-[115px]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Overview Badge */}
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Overview
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left - Heading */}
          <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-foreground text-balance">
              Specialised design support for urban landscapes
            </h2>
          </div>

          {/* Right - Highlight Box */}
          <div className="opacity-0 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="bg-secondary text-secondary-foreground rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-1">
              <p className="text-secondary-foreground/90 leading-relaxed">
                We work with{" "}
                <span className="text-secondary-foreground font-medium">
                  local authorities, developers, architects and communities
                </span>{" "}
                to make better use of outdoor areas, enhance biodiversity and give each 
                space a clear, consistent character.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 lg:mt-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 text-accent-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
