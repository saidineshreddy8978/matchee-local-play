
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  Trophy, 
  Star,
  MessageCircle,
  Calendar,
  Target,
  Zap,
  Clock // ✅ Add this
} from "lucide-react";

interface TeamCardProps {
  team: {
    id: number;
    name: string;
    sport: string;
    location: string;
    distance: string;
    players: number;
    rating: number;
    wins: number;
    losses: number;
    image: string;
    status: 'available' | 'busy' | 'offline';
    lastActive: string;
  };
  onChallenge: (teamId: number) => void;
  onChat: (teamId: number) => void;
}

const TeamCard = ({ team, onChallenge, onChat }: TeamCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChallenge = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onChallenge(team.id);
      setIsAnimating(false);
    }, 600);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'busy': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Available';
      case 'busy': return 'In Match';
      case 'offline': return 'Offline';
      default: return 'Unknown';
    }
  };

  return (
    <Card 
      className={`group relative overflow-hidden bg-gradient-card border-border/50 hover:shadow-team transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
        isAnimating ? 'animate-pulse scale-110' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Status Indicator */}
      <div className="absolute top-3 right-3 z-10">
        <div className={`w-3 h-3 ${getStatusColor(team.status)} rounded-full animate-pulse shadow-lg`}></div>
      </div>

      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

      <CardHeader className="relative pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-field rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              {/* Floating Ring Animation */}
              <div className={`absolute inset-0 rounded-xl border-2 border-primary/30 animate-ping ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                {team.name}
              </h3>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="text-xs animate-fade-in">
                  {team.sport}
                </Badge>
                <Badge 
                  variant={team.status === 'available' ? 'default' : 'secondary'} 
                  className={`text-xs animate-scale-in ${team.status === 'available' ? 'bg-green-100 text-green-700' : ''}`}
                >
                  {getStatusText(team.status)}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-4">
        {/* Stats Row with Floating Numbers */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center group-hover:animate-bounce-gentle">
            <div className="flex items-center justify-center space-x-1">
              <Trophy className="w-4 h-4 text-victory-gold" />
              <span className="font-bold text-lg text-foreground">{team.wins}</span>
            </div>
            <p className="text-xs text-muted-foreground">Wins</p>
          </div>
          <div className="text-center group-hover:animate-bounce-gentle" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-center space-x-1">
              <Users className="w-4 h-4 text-primary" />
              <span className="font-bold text-lg text-foreground">{team.players}</span>
            </div>
            <p className="text-xs text-muted-foreground">Players</p>
          </div>
          <div className="text-center group-hover:animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center space-x-1">
              <Star className="w-4 h-4 text-accent" />
              <span className="font-bold text-lg text-foreground">{team.rating}</span>
            </div>
            <p className="text-xs text-muted-foreground">Rating</p>
          </div>
        </div>

        {/* Location with Animated Icon */}
        <div className="flex items-center space-x-2 text-muted-foreground">
          <MapPin className={`w-4 h-4 text-primary transition-transform duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
          <span className="text-sm">{team.location}</span>
          <span className="text-xs bg-muted px-2 py-1 rounded-full">{team.distance}</span>
        </div>

        {/* Action Buttons with Hover Effects */}
        <div className="flex space-x-2 pt-2">
          <Button 
            onClick={handleChallenge}
            variant="hero" 
            size="sm" 
            className={`flex-1 group/btn hover:shadow-glow transition-all duration-300 ${
              isAnimating ? 'animate-pulse' : ''
            }`}
            disabled={team.status !== 'available'}
          >
            <Target className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
            <span className="group-hover/btn:scale-110 transition-transform duration-200">
              Challenge
            </span>
            {isAnimating && <Zap className="w-4 h-4 ml-2 animate-bounce text-accent" />}
          </Button>
          <Button 
            onClick={() => onChat(team.id)}
            variant="outline" 
            size="sm"
            className="hover:bg-primary/10 hover:border-primary hover:scale-110 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
          </Button>
        </div>

        {/* Last Active */}
        <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border/20">
          <Clock className="w-3 h-3 inline mr-1" />
          Last active: {team.lastActive}
        </div>
      </CardContent>

      {/* Floating Action Indicator */}
      {isAnimating && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-full p-4 shadow-glow animate-scale-in">
            <Zap className="w-8 h-8 text-primary animate-bounce" />
          </div>
        </div>
      )}
    </Card>
  );
};

export default TeamCard;
