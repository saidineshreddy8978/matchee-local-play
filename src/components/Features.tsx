import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  MapPin, 
  Calendar, 
  MessageCircle, 
  Trophy, 
  Target,
  Clock,
  Shield,
  Zap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Team Management",
      description: "Create and manage your team with up to 11 players, upload team logos, and track member stats.",
      color: "text-team-blue"
    },
    {
      icon: MapPin,
      title: "Location-Based Matching",
      description: "Discover and challenge teams in your city using smart geolocation powered by Google Maps.",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Book grounds, set match times, and coordinate with opponents seamlessly.",
      color: "text-accent"
    },
    {
      icon: MessageCircle,
      title: "Team Chat",
      description: "Communicate directly with challenging teams to coordinate match details and strategy.",
      color: "text-secondary"
    },
    {
      icon: Trophy,
      title: "Performance Tracking",
      description: "Track wins, losses, and team statistics with detailed match history and leaderboards.",
      color: "text-victory-gold"
    },
    {
      icon: Target,
      title: "Ground Selection",
      description: "Choose from verified local grounds with availability schedules and facility details.",
      color: "text-pitch-green"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Everything You Need to 
            <span className="text-primary"> Compete</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From team creation to match completion, Matchee provides all the tools you need for organized local sports competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="bg-gradient-card border-border/50 hover:shadow-team transition-all duration-300 hover:scale-105 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-field rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-12 h-12 text-accent mr-4" />
              <h3 className="text-3xl md:text-4xl font-bold">Ready to Play?</h3>
            </div>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of teams already using Matchee to organize matches, build communities, and compete locally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Create Team
              </Button>
              <Button variant="hero" size="lg" className="bg-white/20 hover:bg-white/30">
                <MapPin className="w-5 h-5 mr-2" />
                Find Teams Near Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;