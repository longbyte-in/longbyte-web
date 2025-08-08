import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Globe, Send, MessageCircle } from "lucide-react";

const LongbyteContact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have an idea? Need a digital solution? Let's bring it to life together! Get in touch and let's discuss how we can transform your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Ready to start your digital transformation? We'd love to hear about your project and discuss how we can help you achieve your goals.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-surface text-primary group-hover:animate-pulse-glow">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Our Location</h4>
                    <p className="text-muted-foreground">Miryalaguda, Nalgonda, Telangana, India - 508278</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-surface text-secondary group-hover:animate-pulse-glow">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Email Us</h4>
                    <p className="text-muted-foreground">hello@longbyte.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-surface text-accent group-hover:animate-pulse-glow">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Website</h4>
                    <p className="text-muted-foreground">www.longbyte.com</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Benefits */}
            <div className="bg-surface p-6 rounded-lg border border-border/50">
              <h4 className="font-semibold mb-4 text-card-foreground">Why Start with Longbyte?</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Free project consultation and quote
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                  Fast turnaround with agile methodology
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                  AI-powered development for cost efficiency
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  End-to-end support throughout your journey
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-elegant border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Send us a Message</h3>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-card-foreground mb-2">
                    First Name *
                  </label>
                  <Input 
                    id="firstName" 
                    placeholder="Your first name"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-card-foreground mb-2">
                    Last Name *
                  </label>
                  <Input 
                    id="lastName" 
                    placeholder="Your last name"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email Address *
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-card-foreground mb-2">
                  Company / Organization
                </label>
                <Input 
                  id="company" 
                  placeholder="Your company name"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-card-foreground mb-2">
                  Project Type
                </label>
                <select 
                  id="projectType"
                  className="w-full p-3 rounded-md border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  <option value="">Select project type</option>
                  <option value="web-app">Web Application</option>
                  <option value="mobile-app">Mobile Application</option>
                  <option value="ai-integration">AI Integration</option>
                  <option value="e-commerce">E-Commerce Platform</option>
                  <option value="management-system">Management System</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Project Details *
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                  rows={5}
                  className="bg-background border-border"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll get back to you within 24 hours with a detailed response and next steps.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LongbyteContact;