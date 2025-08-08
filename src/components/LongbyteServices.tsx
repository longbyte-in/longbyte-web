import { Card } from "@/components/ui/card";
import { Brain, Code2, Smartphone, Zap, Users, Target } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Cutting-edge AI integrations that transform your business processes and enhance user experiences with intelligent automation.",
    color: "text-primary"
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Complete web applications using modern technologies like React, Node.js, and Java, ensuring scalable and maintainable solutions.",
    color: "text-secondary"
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps using React Native, delivering seamless experiences across iOS and Android.",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "Agile Methodology",
    description: "Rapid, reliable, and cost-effective delivery through proven agile practices that keep your project on track.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Startup Solutions",
    description: "Specialized services designed for startups, helping you build your MVP and scale efficiently without breaking the budget.",
    color: "text-secondary"
  },
  {
    icon: Target,
    title: "End-to-End Support",
    description: "From ideation to deployment and beyond, we provide comprehensive support throughout your digital transformation journey.",
    color: "text-accent"
  }
];

const LongbyteServices = () => {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in building complete applications across technologies, delivering cutting-edge digital solutions that empower your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-elegant transition-all duration-300 transform hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm group"
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 p-3 rounded-lg bg-surface ${service.color} group-hover:animate-pulse-glow`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your ideas into reality?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-block">
              <button className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-md font-medium shadow-soft hover:shadow-elegant transform hover:scale-105 transition-all duration-300">
                Discuss Your Project
              </button>
            </a>
            <a href="#projects" className="inline-block">
              <button className="bg-transparent border border-border hover:bg-muted text-foreground px-6 py-3 rounded-md font-medium transition-all duration-300">
                View Our Portfolio
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongbyteServices;