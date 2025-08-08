import LongbyteHeader from "@/components/LongbyteHeader";
import LongbyteFooter from "@/components/LongbyteFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ArrowRight, Thermometer, Users, Camera, TrendingUp } from "lucide-react";

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
            <div className="max-w-6xl mx-auto">
              <Card className="relative overflow-hidden group hover:shadow-elegant transition-all duration-500 transform hover:scale-[1.02] border-border/50 bg-card/50 backdrop-blur-sm">
                {/* Status Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <span className="px-4 py-2 text-sm font-medium rounded-full bg-accent text-accent-foreground">
                    Coming Soon
                  </span>
                </div>

                {/* Background gradient */}
                <div className="absolute inset-0 opacity-5 gradient-primary group-hover:opacity-10 transition-opacity duration-500"></div>

                <div className="relative p-8">
                  {/* Header with Logo */}
                  <div className="flex items-center mb-8">
                    <div className="mr-6">
                      <img
                        src="peekaboo-logo.svg"
                        alt="Peekaboo Logo"
                        className="w-16 h-16"
                      />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-card-foreground group-hover:gradient-text transition-all duration-300">
                        Peekaboo
                      </h2>
                      <p className="text-xl text-muted-foreground italic">See the World Before You Go</p>
                    </div>
                  </div>

                  {/* Problem Statement */}
                  <div className="mb-8 p-6 bg-surface/50 rounded-lg border border-border/30">
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">The Travel Problem</h3>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Planning a trip is filled with uncertainty:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        What's the real-time weather?
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        How crowded is it?
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        Is the location as good as the photos?
                      </div>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      <p>• Most travel platforms show outdated or staged visuals</p>
                      <p>• Tourists often reach and regret the timing or the experience</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-card-foreground mb-4">Our Solution</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Peekaboo lets users view real-time CCTV footage of popular travel destinations around the world.
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="p-6 bg-surface/50 rounded-lg border border-border/30 text-center">
                      <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-card-foreground mb-2">🔴 Live Streams</h4>
                      <p className="text-muted-foreground">Real-time CCTV footage + environmental data (temperature, crowd level)</p>
                    </div>
                    <div className="p-6 bg-surface/50 rounded-lg border border-border/30 text-center">
                      <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-card-foreground mb-2">📊 Predictive Trends</h4>
                      <p className="text-muted-foreground">Best days/times to visit based on historical data and patterns</p>
                    </div>
                    <div className="p-6 bg-surface/50 rounded-lg border border-border/30 text-center">
                      <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-card-foreground mb-2">🧭 Local Insights</h4>
                      <p className="text-muted-foreground">Local tips, crowd status, and personalized travel suggestions</p>
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
                  Be the first to know when Peekaboo launches. Get real-time travel insights and never miss the perfect moment to visit your dream destination.
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