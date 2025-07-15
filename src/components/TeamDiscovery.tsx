
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TeamCard from "./TeamCard";
import { 
  Search, 
  Filter, 
  MapPin, 
  Users, 
  Zap,
  Target,
  Trophy,
  Star
} from "lucide-react";

const TeamDiscovery = () => {
  const [selectedSport, setSelectedSport] = useState("All");
  const [challengeSuccess, setChallengeSuccess] = useState<number | null>(null);

  const teams = [
    {
      id: 1,
      name: "Thunder Hawks FC",
      sport: "Football",
      location: "Downtown Park",
      distance: "2.3 km",
      players: 11,
      rating: 4.8,
      wins: 23,
      losses: 5,
      image: "/placeholder.svg",
      status: 'available' as const,
      lastActive: "5 minutes ago"
    },
    {
      id: 2,
      name: "City Eagles",
      sport: "Cricket",
      location: "Central Ground",
      distance: "1.8 km",
      players: 15,
      rating: 4.6,
      wins: 18,
      losses: 7,
      image: "/placeholder.svg",
      status: 'busy' as const,
      lastActive: "2 hours ago"
    },
    {
      id: 3,
      name: "Storm Riders",
      sport: "Football",
      location: "West Stadium",
      distance: "3.1 km",
      players: 9,
      rating: 4.2,
      wins: 15,
      losses: 12,
      image: "/placeholder.svg",
      status: 'available' as const,
      lastActive: "1 hour ago"
    },
    {
      id: 4,
      name: "Lightning Bolts",
      sport: "Basketball",
      location: "Sports Complex",
      distance: "4.2 km",
      players: 8,
      rating: 4.9,
      wins: 31,
      losses: 3,
      image: "/placeholder.svg",
      status: 'offline' as const,
      lastActive: "1 day ago"
    }
  ];

  const sports = ["All", "Football", "Cricket", "Basketball", "Volleyball"];

  const filteredTeams = selectedSport === "All" 
    ? teams 
    : teams.filter(team => team.sport === selectedSport);

  const handleChallenge = (teamId: number) => {
    setChallengeSuccess(teamId);
    setTimeout(() => setChallengeSuccess(null), 3000);
  };

  const handleChat = (teamId: number) => {
    console.log(`Opening chat with team ${teamId}`);
  };

  return (
    <section id="teams" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-field rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-sky rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-accent/30 rounded-full animate-spin"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Discover Teams 
            <span className="text-primary animate-pulse"> Near You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find local teams in your area, check their availability, and send challenges for your next match.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="max-w-4xl mx-auto mb-12 animate-slide-up">
          <Card className="bg-gradient-card border-border/50 shadow-team">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search teams by name or location..."
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  />
                </div>

                {/* Sport Filter */}
                <div className="flex gap-2 flex-wrap">
                  {sports.map((sport) => (
                    <Button
                      key={sport}
                      variant={selectedSport === sport ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSport(sport)}
                      className={`hover:scale-105 transition-all duration-200 ${
                        selectedSport === sport ? 'shadow-glow' : ''
                      }`}
                    >
                      {sport}
                    </Button>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="hover:scale-105 transition-all duration-200">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredTeams.map((team, index) => (
            <div
              key={team.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TeamCard
                team={team}
                onChallenge={handleChallenge}
                onChat={handleChat}
              />
            </div>
          ))}
        </div>

        {/* Success Message */}
        {challengeSuccess && (
          <div className="fixed top-4 right-4 z-50 animate-slide-up">
            <Card className="bg-green-50 border-green-200 shadow-lg">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-green-800">Challenge Sent!</p>
                  <p className="text-sm text-green-600">Waiting for team response...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 -translate-x-20 animate-spin"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 translate-x-16 animate-bounce-gentle"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Target className="w-12 h-12 text-accent mr-4 animate-pulse" />
                <h3 className="text-3xl md:text-4xl font-bold">Ready to Challenge?</h3>
              </div>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Join the most active sports community in your city. Create your team and start competing today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Create Your Team
                </Button>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="bg-white/20 hover:bg-white/30 hover:scale-110 hover:shadow-glow transition-all duration-300"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Join Tournament
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDiscovery;
