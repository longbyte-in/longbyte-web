import { Card } from "@/components/ui/card";
import { Users, Target, Lightbulb, Heart, Award, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Expertise Across Latest Technologies",
    description: "We stay at the forefront of technology, mastering the latest frameworks and tools to deliver cutting-edge solutions."
  },
  {
    icon: Users,
    title: "Deep Understanding of Startup Challenges",
    description: "As a startup ourselves, we know the unique challenges and constraints that emerging businesses face."
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Our portfolio of successful products demonstrates our ability to deliver impactful solutions that drive business growth."
  },
  {
    icon: Heart,
    title: "Flexible & Collaborative Approach",
    description: "We adapt to your needs and work closely with you throughout the development journey."
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven Team",
    description: "Our team is passionate about technology and driven by creativity, always seeking innovative solutions to complex problems."
  },
  {
    icon: Rocket,
    title: "Building Lovable Digital Experiences",
    description: "We focus on creating products that users genuinely love to use, combining functionality with delightful user experiences."
  }
];

const LongbyteAbout = () => {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Longbyte</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Longbyte, our team is driven by creativity, innovation, and a love for technology. We believe exceptional digital products shouldn't come with a hefty price tag.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="p-8 text-center bg-gradient-hero border-border/50 shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              "We build client applications at dramatically lower costs using AI, empowering startups to flourish by delivering quality faster and more affordably than traditional development agencies."
            </p>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-elegant transition-all duration-300 transform hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm group"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface mb-4 group-hover:animate-pulse-glow">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Description */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            A Few Words About <span className="gradient-text">Us</span>
          </h3>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              By leveraging AI and modern frameworks, we simplify and accelerate development — helping our clients stand out in the competitive market. Whether you are an established enterprise or a budding startup, we are here to help you transform your ideas into delightful products that users love.
            </p>
            <p>
              We champion lean, agile processes for faster time-to-market, AI-assisted development that reduces effort and cost, and end-to-end support from ideation to deployment and beyond.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-secondary border-0 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🌈 Bringing Dreams to Digital Life
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              With Longbyte, building your dream application is just the beginning — we're your technology partners for every step of your growth journey.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LongbyteAbout;