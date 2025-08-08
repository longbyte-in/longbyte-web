import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Zap } from "lucide-react";

const LongbyteHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 longbyte-pink rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 longbyte-green rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 longbyte-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface/80 backdrop-blur-sm border border-border mb-8 shadow-soft">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground">AI-Powered Development Solutions</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Building Dreams into{" "}
            <span className="gradient-text">Digital Reality</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We build client applications at dramatically lower costs using AI, empowering startups to flourish with quality solutions delivered faster and more affordably.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              <span>Full-Stack Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-secondary" />
              <span>AI Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <span>Startup Focused</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="glassy" size="lg" className="text-lg px-8 py-6">
              View Our Work
            </Button>
          </div>

          {/* Location badge */}
          <div className="mt-12 text-sm text-muted-foreground">
            <span className="inline-flex items-center">
              📍 Miryalaguda, Nalgonda, Telangana, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongbyteHero;