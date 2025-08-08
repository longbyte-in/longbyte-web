import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Zap } from "lucide-react";

const LongbyteHero = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Animated background elements - using logo colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Building Dreams into{" "}
            <span className="logo-color-transform">Digital Reality</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We build client applications at dramatically lower costs using AI, empowering startups to flourish with quality solutions delivered faster and more affordably.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-surface border border-border hover:shadow-elegant transition-all duration-300">
            <Code className="w-6 h-6 text-primary" />
            <span className="text-card-foreground font-medium">Full-Stack Development</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-surface border border-border hover:shadow-elegant transition-all duration-300">
            <Zap className="w-6 h-6 text-secondary" />
            <span className="text-card-foreground font-medium">AI Integration</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-surface border border-border hover:shadow-elegant transition-all duration-300">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-card-foreground font-medium">Startup Focused</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            View Our Work
          </Button>
        </div>

        {/* Location badge */}
        <div className="text-center">
          <span className="inline-flex items-center text-sm text-muted-foreground bg-surface px-4 py-2 rounded-full border border-border">
            📍 Miryalaguda, Nalgonda, Telangana, India
          </span>
        </div>
      </div>
    </section>
  );
};

export default LongbyteHero;