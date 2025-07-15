import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  Calendar, 
  MessageCircle, 
  Star,
  Trophy,
  Target,
  Clock
} from "lucide-react";

const TeamDiscovery = () => {
  const nearbyTeams = [
    {
      id: 1,
      name: "Thunder Hawks FC",
      location: "Central Park, 2.3 km",
      players: 11,
      rating: 4.7,
      matches: 23,
      wins: 15,
      sport: "Football",
      availability: "Weekend Evenings",
      lastActive: "2 hours ago",
      teamColor: "bg-team-blue"
    },
    {
      id: 2,
      name: "City Strikers",
      location: "Sports Complex, 1.8 km",
      players: 9,
      rating: 4.5,
      matches: 18,
      wins: 12,
      sport: "Football",
      availability: "Weekday Mornings",
      lastActive: "5 minutes ago",
      teamColor: "bg-team-red"
    },
    {
      id: 3,
      name: "Lightning Bolts",
      location: "Community Ground, 3.1 km",
      players: 11,
      rating: 4.8,
      matches: 31,
      wins: 22,
      sport: "Cricket",
      availability: "Weekend Mornings",
      lastActive: "1 hour ago",
      teamColor: "bg-victory-gold"
    }
  ];

  return (
    <section id="teams" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Discover Teams 
            <span className="text-primary"> Near You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with local teams in your area, challenge them to matches, and build lasting rivalries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <MapPin className="w-5 h-5 mr-2" />
              Find Teams Near Me
            </Button>
            <Button variant="outline" size="lg">
              <Target className="w-5 h-5 mr-2" />
              Filter by Sport
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {nearbyTeams.map((team, index) => (
            <Card 
              key={team.id} 
              className="bg-gradient-card border-border/50 hover:shadow-team transition-all duration-300 hover:scale-105 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${team.teamColor} rounded-lg flex items-center justify-center`}>
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {team.sport}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {team.name}
                </CardTitle>
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  {team.location}
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  Last active: {team.lastActive}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span>{team.players} players</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-victory-gold" />
                    <span>{team.rating} rating</span>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-accent" />
                    <span>{team.wins}/{team.matches} wins</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-secondary" />
                    <span className="text-xs">{team.availability}</span>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Button variant="challenge" className="w-full">
                    <Target className="w-4 h-4 mr-2" />
                    Challenge Team
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Preview Section */}
        <div className="bg-gradient-field rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Interactive Team Map</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Visualize all teams in your area on an interactive map. Filter by sport, skill level, and availability.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-2">Coming Soon: Live Map View</h4>
              <p className="text-white/80 mb-6">
                See all teams plotted on Google Maps with real-time availability status.
              </p>
              <Button variant="secondary" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Request Early Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDiscovery;