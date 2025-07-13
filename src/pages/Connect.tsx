import FloatingNavigation from "@/components/FloatingNavigation";
import { Mail, Linkedin, Instagram, Twitter, MessageCircle, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks, contactInfo } from "@/data/portfolio";

const Connect = () => {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github': return Github;
      case 'linkedin': return Linkedin;
      case 'twitter': return Twitter;
      case 'instagram': return Instagram;
      case 'mail': return Mail;
      default: return MessageCircle;
    }
  };

  const getIconColor = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github': return "text-gray-900 dark:text-gray-100";
      case 'linkedin': return "text-blue-600";
      case 'twitter': return "text-blue-400";
      case 'instagram': return "text-pink-500";
      case 'mail': return "text-red-500";
      default: return "text-green-500";
    }
  };

  const getBgColor = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github': return "bg-gray-50 dark:bg-gray-900/20";
      case 'linkedin': return "bg-blue-50 dark:bg-blue-900/20";
      case 'twitter': return "bg-blue-50 dark:bg-blue-900/20";
      case 'instagram': return "bg-pink-50 dark:bg-pink-900/20";
      case 'mail': return "bg-red-50 dark:bg-red-900/20";
      default: return "bg-green-50 dark:bg-green-900/20";
    }
  };

  const contactMethods = socialLinks.map(link => ({
    name: link.name,
    description: `Connect with me on ${link.name}`,
    icon: getIcon(link.icon),
    link: link.url,
    color: getIconColor(link.icon),
    bgColor: getBgColor(link.icon)
  }));

  return (
    <div className="min-h-screen bg-background">
      <FloatingNavigation />
      <main className="w-full max-w-4xl mx-auto px-6 pt-16">
        <div className="mb-16 text-center pt-8">
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
              className="border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 bg-card group"
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
              <Button asChild className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-200">
                <a href={`mailto:${contactInfo.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </a>
              </Button>
              <Button asChild variant="outline" className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-200">
                <a href={socialLinks.find(s => s.name === "LinkedIn")?.url || "#"} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  View Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      {/* Bottom padding for comfortable scrolling */}
      <div className="h-20"></div>
    </div>
  );
};

export default Connect;