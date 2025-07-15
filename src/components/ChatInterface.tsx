
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Phone,
  Video,
  Paperclip,
  Smile,
  MoreVertical,
  Users,
  Clock,
  CheckCheck
} from "lucide-react";

interface Message {
  id: number;
  sender: string;
  message: string;
  time: string;
  isOwnTeam: boolean;
  senderColor: string;
  status?: 'sent' | 'delivered' | 'read';
}

interface ChatInterfaceProps {
  opponent: string;
  messages: Message[];
}

const ChatInterface = ({ opponent, messages: initialMessages }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        sender: "Your Team",
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwnTeam: true,
        senderColor: "bg-primary",
        status: 'sent'
      };

      setMessages([...messages, message]);
      setNewMessage("");

      // Simulate typing indicator
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        // Simulate opponent response
        const response: Message = {
          id: messages.length + 2,
          sender: opponent,
          message: "Got it! We'll coordinate the details shortly.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isOwnTeam: false,
          senderColor: "bg-team-blue",
          status: 'delivered'
        };
        setMessages(prev => [...prev, response]);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-gradient-card border-border/50 h-[600px] flex flex-col rounded-lg overflow-hidden shadow-team">
      {/* Header */}
      <div className="border-b border-border/50 p-4 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-team-blue rounded-lg flex items-center justify-center animate-pulse-slow">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-bounce-gentle"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{opponent}</h3>
              <p className="text-sm text-muted-foreground flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:scale-110 transition-all duration-200">
              <Phone className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:scale-110 transition-all duration-200">
              <Video className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:scale-110 transition-all duration-200">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gradient-to-b from-muted/10 to-muted/30">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex animate-slide-up ${message.isOwnTeam ? 'justify-end' : 'justify-start'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`max-w-[80%] ${message.isOwnTeam ? 'order-2' : 'order-1'}`}>
              <div
                className={`p-3 rounded-2xl shadow-sm transform hover:scale-105 transition-all duration-200 ${
                  message.isOwnTeam 
                    ? 'bg-primary text-primary-foreground ml-4 rounded-br-md' 
                    : 'bg-white text-foreground mr-4 rounded-bl-md border border-border/20'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.message}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className={`text-xs ${
                    message.isOwnTeam ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {message.time}
                  </p>
                  {message.isOwnTeam && (
                    <div className="flex items-center space-x-1">
                      <CheckCheck className={`w-3 h-3 ${
                        message.status === 'read' ? 'text-team-blue' : 'text-primary-foreground/50'
                      }`} />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {!message.isOwnTeam && (
              <div className={`w-8 h-8 ${message.senderColor} rounded-full flex items-center justify-center mr-2 order-1 animate-scale-in`}>
                <Users className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-white border border-border/20 p-3 rounded-2xl rounded-bl-md mr-4 shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border/50 p-4 bg-white/50 backdrop-blur-sm">
        <div className="flex items-end space-x-2">
          <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:scale-110 transition-all duration-200">
            <Paperclip className="w-4 h-4" />
          </Button>
          <div className="flex-1 relative">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              rows={1}
              className="w-full px-4 py-3 bg-white border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-200 hover:shadow-sm"
            />
          </div>
          <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:scale-110 transition-all duration-200">
            <Smile className="w-4 h-4" />
          </Button>
          <Button 
            onClick={handleSendMessage}
            variant="default" 
            size="icon"
            className="bg-primary hover:bg-primary-glow hover:scale-110 transition-all duration-200 shadow-glow"
            disabled={!newMessage.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
