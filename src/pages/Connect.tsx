import FloatingNavigation from "@/components/FloatingNavigation";
import { Mail, Linkedin, Instagram, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Connect = () => {
  const contactMethods = [
    {
      name: "Email",
      description: "Drop me a line anytime",
      icon: Mail,
      link: "mailto:hello@devwtf.in",
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-900/20"
    },
    {
      name: "LinkedIn",
      description: "Let's connect professionally",
      icon: Linkedin,
      link: "https://linkedin.com/in/skidgod",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      name: "Instagram", 
      description: "Follow my journey",
      icon: Instagram,
      link: "https://instagram.com/skidgod",
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-900/20"
    },
    {
      name: "X (Twitter)",
      description: "Latest thoughts and updates",
      icon: Twitter,
      link: "https://x.com/skidgod",
      color: "text-gray-900 dark:text-gray-100",
      bgColor: "bg-gray-50 dark:bg-gray-900/20"
    },
    {
      name: "WhatsApp",
      description: "Quick chats and discussions",
      icon: MessageCircle,
      link: "https://wa.me/+919876543210",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingNavigation />
      <main className="w-full max-w-4xl mx-auto px-6 pt-16">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Let's Connect</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I love connecting with fellow developers, creators, and curious minds. 
            Feel free to reach out through any of these platforms!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={method.name}
              className="border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-200 hover:shadow-md bg-card group"
            >
              <div className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <method.icon className={`w-6 h-6 ${method.color}`} />
              </div>
              
              <h3 className="font-semibold text-lg mb-2">{method.name}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {method.description}
              </p>
              
              <Button asChild variant="outline" className="w-full">
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <method.icon className="w-4 h-4" />
                  Connect on {method.name}
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center pb-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Collaboration & Work</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm always open to interesting projects, collaborations, and opportunities. 
              Whether you have a project idea, want to discuss technology, or just want to say hi, 
              I'd love to hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <a href="mailto:hello@devwtf.in">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://linkedin.com/in/skidgod" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  View Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Connect;