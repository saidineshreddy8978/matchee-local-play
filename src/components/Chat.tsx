import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  Phone,
  Video,
  Calendar,
  MapPin,
  Users,
  Clock
} from "lucide-react";

const Chat = () => {
  const chatMessages = [
    {
      id: 1,
      sender: "Thunder Hawks FC",
      message: "Hey! We'd love to challenge you to a match this weekend. Are you available on Saturday afternoon?",
      time: "2:30 PM",
      isOwnTeam: false,
      senderColor: "bg-team-blue"
    },
    {
      id: 2,
      sender: "Your Team",
      message: "Sounds great! We're free on Saturday. What time works for you? We prefer afternoon matches.",
      time: "2:45 PM",
      isOwnTeam: true,
      senderColor: "bg-primary"
    },
    {
      id: 3,
      sender: "Thunder Hawks FC",
      message: "Perfect! How about 3:00 PM at Central Park Football Ground? We can book the field.",
      time: "2:47 PM",
      isOwnTeam: false,
      senderColor: "bg-team-blue"
    },
    {
      id: 4,
      sender: "Your Team",
      message: "That works perfectly for us. Should we confirm 11v11 format? Any specific rules we should know about?",
      time: "2:50 PM",
      isOwnTeam: true,
      senderColor: "bg-primary"
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Coordinate 
            <span className="text-primary"> In Real-Time</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Once a challenge is accepted, teams can chat directly to coordinate match details, share strategies, and build connections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50 h-[600px] flex flex-col">
              <CardHeader className="border-b border-border/50 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-team-blue rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Thunder Hawks FC</CardTitle>
                      <p className="text-sm text-muted-foreground">Challenge Chat</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Video className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 p-0 overflow-hidden">
                <div className="h-full flex flex-col">
                  {/* Messages */}
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    {chatMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwnTeam ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] ${message.isOwnTeam ? 'order-2' : 'order-1'}`}>
                          <div
                            className={`p-3 rounded-lg ${
                              message.isOwnTeam 
                                ? 'bg-primary text-primary-foreground ml-4' 
                                : 'bg-muted text-foreground mr-4'
                            }`}
                          >
                            <p className="text-sm">{message.message}</p>
                            <p className={`text-xs mt-1 ${
                              message.isOwnTeam ? 'text-primary-foreground/70' : 'text-muted-foreground'
                            }`}>
                              {message.time}
                            </p>
                          </div>
                        </div>
                        {!message.isOwnTeam && (
                          <div className={`w-8 h-8 ${message.senderColor} rounded-full flex items-center justify-center mr-2 order-1`}>
                            <Users className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="border-t border-border/50 p-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Type your message..."
                          className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <Button variant="default" size="icon">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Match Details Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Match Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Opponent</p>
                  <p className="font-semibold">{matchDetails.opponent}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date & Time</p>
                  <p className="font-semibold">{matchDetails.date}</p>
                  <p className="font-semibold">{matchDetails.time}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Venue</p>
                  <p className="font-semibold flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-primary" />
                    {matchDetails.venue}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Format</p>
                  <p className="font-semibold">{matchDetails.format}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge variant="secondary" className="bg-accent/20 text-accent">
                    {matchDetails.status}
                  </Badge>
                </div>
                <div className="pt-4 space-y-2">
                  <Button variant="hero" className="w-full">
                    Confirm Match
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Ground Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-field text-white border-0">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Real-Time Communication</h3>
                <p className="text-white/90 text-sm mb-4">
                  Chat instantly with challenging teams to coordinate every detail of your match.
                </p>
                <Button variant="secondary" size="sm">
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