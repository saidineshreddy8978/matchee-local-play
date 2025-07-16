
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, MessageCircle, Zap, Trophy, Target } from "lucide-react";
import heroImage from "@/assets/hero-sports-field.jpg";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const dynamicTexts = ["Connect.", "Challenge.", "Compete.", "Conquer."];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sports field aerial view" 
          className="w-full h-full object-cover transform scale-110 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-secondary/60"></div>
        
        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-gentle"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-secondary/20 rounded-full animate-spin"></div>
          <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="animate-slide-up inline-block">Connect.</span>{" "}
            <span className="animate-slide-up inline-block" style={{ animationDelay: '0.2s' }}>Challenge.</span>
            <br />
            <span 
              key={currentText}
              className="text-accent animate-scale-in inline-block"
            >
              {dynamicTexts[currentText]}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            The ultimate location-based sports platform that brings local teams together for real-world competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/signup">
              <Button 
                variant="hero" 
                size="xl" 
                className="animate-scale-in hover:scale-110 hover:shadow-glow transition-all duration-300 group"
                style={{ animationDelay: '0.6s' }}
              >
                <Trophy className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Join Matchee
              </Button>
            </Link>
            <Link to="/#teams">
              <Button 
                variant="secondary" 
                size="xl" 
                className="animate-scale-in hover:scale-110 hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: '0.8s' }}
              >
                <Target className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Find Teams
              </Button>
            </Link>
          </div>

          {/* Enhanced Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { icon: MapPin, label: "Location-Based", delay: '1.0s' },
              { icon: Users, label: "Team Management", delay: '1.2s' },
              { icon: Calendar, label: "Match Scheduling", delay: '1.4s' },
              { icon: MessageCircle, label: "Team Chat", delay: '1.6s' }
            ].map((feature, index) => (
              <div 
                key={feature.label}
                className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg animate-slide-up hover:bg-white/20 hover:scale-110 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: feature.delay }}
              >
                <feature.icon className="w-8 h-8 mb-2 text-accent group-hover:animate-bounce" />
                <span className="text-sm font-medium group-hover:text-accent transition-colors duration-300">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          {/* Floating CTA */}
          <div className="mt-12 animate-bounce-gentle">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <Zap className="w-5 h-5 mr-2 text-accent group-hover:animate-spin" />
              <span className="text-sm font-medium">Join 10,000+ Teams Competing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-accent transition-colors duration-300 cursor-pointer group">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse group-hover:bg-accent transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
