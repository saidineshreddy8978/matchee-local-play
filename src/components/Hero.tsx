import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-sports-field.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sports field aerial view" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-secondary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Connect. Challenge. 
            <span className="text-accent"> Compete.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            The ultimate location-based sports platform that brings local teams together for real-world competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="animate-scale-in">
              Create Your Team
            </Button>
            <Button variant="secondary" size="xl" className="animate-scale-in">
              Find Opponents
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg animate-slide-up">
              <MapPin className="w-8 h-8 mb-2 text-accent" />
              <span className="text-sm font-medium">Location-Based</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg animate-slide-up">
              <Users className="w-8 h-8 mb-2 text-accent" />
              <span className="text-sm font-medium">Team Management</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg animate-slide-up">
              <Calendar className="w-8 h-8 mb-2 text-accent" />
              <span className="text-sm font-medium">Match Scheduling</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg animate-slide-up">
              <MessageCircle className="w-8 h-8 mb-2 text-accent" />
              <span className="text-sm font-medium">Team Chat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;