import LongbyteHeader from "@/components/LongbyteHeader";
import LongbyteFooter from "@/components/LongbyteFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ArrowRight } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen">
      <LongbyteHeader />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Products</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Innovative solutions built by Longbyte to solve real-world problems and empower businesses.
              </p>
            </div>

            {/* Peekaboo Product */}
            <div className="max-w-4xl mx-auto">
              <Card className="relative overflow-hidden group hover:shadow-elegant transition-all duration-500 transform hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm">
                {/* Status Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <span className="px-4 py-2 text-sm font-medium rounded-full bg-accent text-accent-foreground">
                    Coming Soon
                  </span>
                </div>

                {/* Background gradient */}
                <div className="absolute inset-0 opacity-5 gradient-primary group-hover:opacity-10 transition-opacity duration-500"></div>

                <div className="relative p-8">
                  {/* Icon and Header */}
                  <div className="flex items-center mb-6">
                    <div className="p-4 rounded-xl gradient-primary mr-6">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-card-foreground group-hover:gradient-text transition-all duration-300">
                        Peekaboo
                      </h2>
                      <p className="text-lg text-muted-foreground">Upcoming Product</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    An exciting new project currently in development. Stay tuned for more details about this innovative solution that will transform user experiences and revolutionize how businesses interact with their customers.
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-card-foreground">What to Expect:</h3>
                      <div className="space-y-3">
                        {["Innovation Focused", "User-Centric Design", "Modern Tech Stack", "Scalable Architecture"].map((feature, index) => (
                          <div key={index} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-card-foreground">Target Benefits:</h3>
                      <div className="space-y-3">
                        {["Enhanced User Experience", "Business Growth", "Operational Efficiency", "Market Innovation"].map((benefit, index) => (
                          <div key={index} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <Button variant="outline" size="lg" disabled className="opacity-60">
                      <Eye className="w-5 h-5 mr-2" />
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Stay Updated Section */}
            <div className="text-center mt-16">
              <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-surface border border-border shadow-soft">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Be the first to know when Peekaboo launches. Get notified about updates and early access opportunities.
                </p>
                <Button variant="default" size="lg">
                  Notify Me
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LongbyteFooter />
    </div>
  );
};

export default Products;