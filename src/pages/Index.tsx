import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TeamDiscovery from "@/components/TeamDiscovery";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <TeamDiscovery />
      <Chat />
      <Footer />
    </div>
  );
};

export default Index;
