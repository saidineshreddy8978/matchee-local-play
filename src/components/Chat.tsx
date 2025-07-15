
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ChatInterface from "./ChatInterface";
import { 
  MessageCircle, 
  Calendar,
  MapPin,
  Users,
  Clock,
  Zap,
  Trophy
} from "lucide-react";

const Chat = () => {
  const chatMessages = [
    {
      id: 1,
      sender: "Thunder Hawks FC",
      message: "Hey! We'd love to challenge you to a match this weekend. Are you available on Saturday afternoon?",
      time: "2:30 PM",
      isOwnTeam: false,
      senderColor: "bg-team-blue",
      status: 'delivered' as const
    },
    {
      id: 2,
      sender: "Your Team",
      message: "Sounds great! We're free on Saturday. What time works for you? We prefer afternoon matches.",
      time: "2:45 PM",
      isOwnTeam: true,
      senderColor: "bg-primary",
      status: 'read' as const
    },
    {
      id: 3,
      sender: "Thunder Hawks FC",
      message: "Perfect! How about 3:00 PM at Central Park Football Ground? We can book the field.",
      time: "2:47 PM",
      isOwnTeam: false,
      senderColor: "bg-team-blue",
      status: 'delivered' as const
    },
    {
      id: 4,
      sender: "Your Team",
      message: "That works perfectly for us. Should we confirm 11v11 format? Any specific rules we should know about?",
      time: "2:50 PM",
      isOwnTeam: true,
      senderColor: "bg-primary",
      status: 'sent' as const
    }
  ];

  const matchDetails = {
    opponent: "Thunder Hawks FC",
    date: "Saturday, Dec 16",
    time: "3:00 PM",
    venue: "Central Park Football Ground",
    format: "11v11",
    status: "Pending Confirmation"
  };

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent/20 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Coordinate 
            <span className="text-primary animate-pulse"> In Real-Time</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Once a challenge is accepted, teams can chat directly to coordinate match details, share strategies, and build connections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Chat Interface */}
          <div className="lg:col-span-2 animate-slide-up">
            <ChatInterface 
              opponent={matchDetails.opponent}
              messages={chatMessages}
            />
          </div>

          {/* Match Details Sidebar */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-gradient-card border-border/50 hover:shadow-team transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-lg flex items-center group-hover:text-primary transition-colors duration-300">
                  <Calendar className="w-5 h-5 mr-2 text-primary group-hover:animate-bounce" />
                  Match Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="animate-fade-in">
                    <p className="text-sm text-muted-foreground">Opponent</p>
                    <p className="font-semibold flex items-center">
                      <Trophy className="w-4 h-4 mr-2 text-victory-gold" />
                      {matchDetails.opponent}
                    </p>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <p className="text-sm text-muted-foreground">Date & Time</p>
                    <p className="font-semibold flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      {matchDetails.date}
                    </p>
                    <p className="font-semibold ml-6">{matchDetails.time}</p>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <p className="text-sm text-muted-foreground">Venue</p>
                    <p className="font-semibold flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-primary animate-pulse" />
                      {matchDetails.venue}
                    </p>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <p className="text-sm text-muted-foreground">Format</p>
                    <p className="font-semibold flex items-center">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      {matchDetails.format}
                    </p>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge variant="secondary" className="bg-accent/20 text-accent animate-pulse">
                      {matchDetails.status}
                    </Badge>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <Button 
                    variant="hero" 
                    className="w-full hover:shadow-glow hover:scale-105 transition-all duration-300 group/btn"
                  >
                    <Zap className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
                    Confirm Match
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                  >
                    View Ground Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-field text-white border-0 hover:shadow-glow transition-all duration-500 group overflow-hidden relative">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:animate-spin"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 group-hover:animate-bounce"></div>
              </div>
              
              <CardContent className="p-6 text-center relative z-10">
                <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4 group-hover:animate-bounce-gentle" />
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  Real-Time Communication
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  Chat instantly with challenging teams to coordinate every detail of your match.
                </p>
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
