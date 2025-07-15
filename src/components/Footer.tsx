import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  MapPin, 
  Users, 
  Calendar, 
  MessageCircle,
  Mail,
  Phone,
  Github,
  Twitter,
  Instagram
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-field rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Matchee</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              The ultimate location-based sports platform connecting local teams for real-world competition and community building.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
              <li><a href="#teams" className="hover:text-accent transition-colors">Find Teams</a></li>
              <li><a href="#grounds" className="hover:text-accent transition-colors">Book Grounds</a></li>
              <li><a href="#leaderboards" className="hover:text-accent transition-colors">Leaderboards</a></li>
              <li><a href="#mobile" className="hover:text-accent transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sports</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#football" className="hover:text-accent transition-colors">Football</a></li>
              <li><a href="#cricket" className="hover:text-accent transition-colors">Cricket</a></li>
              <li><a href="#basketball" className="hover:text-accent transition-colors">Basketball</a></li>
              <li><a href="#volleyball" className="hover:text-accent transition-colors">Volleyball</a></li>
              <li><a href="#request-sport" className="hover:text-accent transition-colors">Request a Sport</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#help" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#community" className="hover:text-accent transition-colors">Community</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-white/70">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">hello@matchee.app</span>
              </div>
              <div className="flex items-center text-white/70">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="bg-gradient-field rounded-2xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Playing?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of teams using Matchee to organize matches, build rivalries, and strengthen local sports communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Create Your Team
              </Button>
              <Button variant="hero" size="lg" className="bg-white/20 hover:bg-white/30">
                <MapPin className="w-5 h-5 mr-2" />
                Download App
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Matchee. All rights reserved. Built for the love of local sports.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;