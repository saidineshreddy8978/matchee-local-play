
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Users, 
  Calendar, 
  MapPin, 
  Zap, 
  Target,
  Clock,
  Star,
  TrendingUp,
  Award,
  MessageCircle
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const userStats = {
    wins: 23,
    losses: 5,
    draws: 3,
    totalMatches: 31,
    rating: 4.8,
    rank: "Gold",
    winRate: 74
  };

  const recentMatches = [
    {
      id: 1,
      opponent: "Thunder Hawks FC",
      result: "Win",
      score: "3-2",
      date: "2 days ago",
      sport: "Football"
    },
    {
      id: 2,
      opponent: "City Eagles",
      result: "Loss",
      score: "1-2",
      date: "1 week ago",
      sport: "Cricket"
    },
    {
      id: 3,
      opponent: "Storm Riders",
      result: "Win",
      score: "2-0",
      date: "2 weeks ago",
      sport: "Football"
    }
  ];

  const upcomingMatches = [
    {
      id: 1,
      opponent: "Lightning Bolts",
      date: "Tomorrow",
      time: "3:00 PM",
      venue: "Central Park",
      sport: "Basketball"
    },
    {
      id: 2,
      opponent: "Fire Dragons",
      date: "Next Week",
      time: "5:00 PM",
      venue: "West Stadium",
      sport: "Football"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/20 to-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome back, Champion! 🏆
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your performance and manage your matches
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-field text-white border-0 hover:shadow-glow transition-all duration-300 animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">Total Wins</p>
                  <p className="text-3xl font-bold">{userStats.wins}</p>
                </div>
                <Trophy className="w-12 h-12 text-victory-gold animate-bounce-gentle" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-sky text-white border-0 hover:shadow-team transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">Win Rate</p>
                  <p className="text-3xl font-bold">{userStats.winRate}%</p>
                </div>
                <TrendingUp className="w-12 h-12 text-accent animate-pulse" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-team transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Rating</p>
                  <div className="flex items-center">
                    <p className="text-3xl font-bold text-foreground">{userStats.rating}</p>
                    <Star className="w-6 h-6 text-accent ml-1" />
                  </div>
                </div>
                <Award className="w-12 h-12 text-victory-gold animate-spin" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-team transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Matches</p>
                  <p className="text-3xl font-bold text-foreground">{userStats.totalMatches}</p>
                </div>
                <Target className="w-12 h-12 text-primary animate-bounce" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Matches */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50 hover:shadow-team transition-all duration-300 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Recent Matches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMatches.map((match, index) => (
                    <div 
                      key={match.id}
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-200 animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          match.result === 'Win' ? 'bg-green-500' : 
                          match.result === 'Loss' ? 'bg-red-500' : 'bg-yellow-500'
                        } animate-pulse`}></div>
                        <div>
                          <p className="font-semibold text-foreground">{match.opponent}</p>
                          <p className="text-sm text-muted-foreground">{match.sport} • {match.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={match.result === 'Win' ? 'default' : 'secondary'} className="mb-1">
                          {match.result}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{match.score}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Matches & Quick Actions */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border/50 hover:shadow-team transition-all duration-300 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Upcoming Matches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingMatches.map((match, index) => (
                    <div 
                      key={match.id}
                      className="p-4 bg-primary/5 rounded-lg border border-primary/20 hover:bg-primary/10 transition-all duration-200 animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-foreground">{match.opponent}</p>
                        <Badge variant="outline">{match.sport}</Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {match.date} at {match.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {match.venue}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-hero text-white border-0 hover:shadow-glow transition-all duration-300 animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 animate-bounce" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button variant="secondary" className="w-full justify-start hover:scale-105 transition-all duration-200">
                    <Users className="w-4 h-4 mr-2" />
                    Find Teams
                  </Button>
                  <Button variant="secondary" className="w-full justify-start hover:scale-105 transition-all duration-200">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Team Chat
                  </Button>
                  <Button variant="secondary" className="w-full justify-start hover:scale-105 transition-all duration-200">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Match
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
