import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import { MessageSquare, Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const Guestbook = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const guestbookEntries = [
    {
      name: "Alex Chen",
      message: "Love your blog posts on databases! The TypeScript implementation was brilliant. Keep up the great work! 🚀",
      timestamp: "2 days ago",
      avatar: "AC"
    },
    {
      name: "Priya Sharma",
      message: "Your education trap article really resonated with me. As a fellow self-taught developer, I appreciate your honest perspective.",
      timestamp: "1 week ago", 
      avatar: "PS"
    },
    {
      name: "Michael Rodriguez",
      message: "Found your GitHub through your Chrome extension. Really impressive work for someone so young! Excited to see what you build next.",
      timestamp: "2 weeks ago",
      avatar: "MR"
    },
    {
      name: "Sarah Kim",
      message: "Just discovered your blog. Your writing style is so clear and engaging. Looking forward to more technical deep-dives!",
      timestamp: "3 weeks ago",
      avatar: "SK"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    console.log("Guestbook entry:", { name, message });
    setName("");
    setMessage("");
    alert("Thanks for signing my guestbook! 🎉");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentTime={currentTime} />
      <main className="w-full max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4 flex items-center gap-3">
            <MessageSquare className="w-12 h-12" />
            Guestbook
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Leave a message, share your thoughts, or just say hi! I love connecting with fellow developers and creators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Sign the Guestbook</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts, feedback, or just say hello..."
                  rows={4}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Sign Guestbook
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Recent Entries</h2>
            <div className="space-y-6">
              {guestbookEntries.map((entry, index) => (
                <div key={index} className="border border-border rounded-lg p-6 bg-card">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-sm font-medium">
                      {entry.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{entry.name}</h3>
                        <span className="text-xs text-muted-foreground">
                          {entry.timestamp}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {entry.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Heart className="w-4 h-4 text-red-500" />
            <span>Thanks for visiting! Your message means a lot to me.</span>
            <Heart className="w-4 h-4 text-red-500" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Guestbook;