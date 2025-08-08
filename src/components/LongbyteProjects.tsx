import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Gem, GraduationCap, Eye, ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Pournami",
    type: "Jewelry E-Commerce Platform",
    description: "A feature-rich, elegant jewelry e-commerce platform that helps jewelers showcase and sell their products online with beautiful galleries, secure payments, and inventory management.",
    features: ["Product Catalog", "Secure Payments", "Inventory Management", "Mobile Responsive"],
    icon: Gem,
    gradient: "gradient-primary",
    status: "Live",
    logo: "/pournami-logo.png"
  },
  {
    name: "VRemind",
    type: "School Education Management",
    description: "A comprehensive school management platform available on Play Store, enabling real-time attendance tracking, exam results, staff payroll, and communication tools — transforming how schools operate.",
    features: ["Attendance Tracking", "Exam Management", "Staff Payroll", "Parent Communication"],
    icon: GraduationCap,
    gradient: "gradient-secondary",
    status: "Play Store",
    logo: "/vremind-logo.jpeg"
  }
];

const LongbyteProjects = () => {
  const handleProjectClick = (projectName: string) => {
    if (projectName === "VRemind") {
      window.open("https://vremind.vxsoftwaresolutions.com/login", "_blank");
    }
    // Add other project URLs here as needed
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Consultancy Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the impactful consultancy solutions we've delivered for our clients, from elegant e-commerce platforms to comprehensive management systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group hover:shadow-elegant transition-all duration-500 transform hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${project.status === 'Live' ? 'bg-secondary text-secondary-foreground' :
                  project.status === 'Play Store' ? 'bg-primary text-primary-foreground' :
                    'bg-accent text-accent-foreground'
                  }`}>
                  {project.status}
                </span>
              </div>

              {/* Background gradient */}
              <div className={`absolute inset-0 opacity-5 ${project.gradient} group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative p-6">
                {/* Logo and Icon */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-sm mr-4">
                    <img src={project.logo} alt={`${project.name} logo`} className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground group-hover:gradient-text transition-all duration-300">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-card-foreground mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                {project.status !== 'Coming Soon' && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                    onClick={() => handleProjectClick(project.name)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-surface border border-border shadow-soft">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Join our portfolio of successful projects. Let's discuss how we can bring your vision to life.
            </p>
            <Button variant="hero" size="lg">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongbyteProjects;