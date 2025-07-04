import { Clock, MapPin, Heart } from "lucide-react";

interface NavigationProps {
  currentTime: string;
}

const Navigation = ({ currentTime }: NavigationProps) => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Shelf", href: "/shelf" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blog" },
    { name: "Guestbook", href: "/guestbook" },
  ];

  return (
    <nav className="w-full max-w-4xl mx-auto px-6 py-8">
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="nav-link"
          >
            {link.name}
          </a>
        ))}
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
        <div className="badge">
          <MapPin className="w-3 h-3" />
          East Delhi, India
        </div>
        <div className="badge">
          <Clock className="w-3 h-3" />
          {currentTime}
        </div>
        <a href="#sponsor" className="badge hover:bg-accent hover:text-accent-foreground transition-colors">
          <Heart className="w-3 h-3" />
          Sponsor
        </a>
      </div>
    </nav>
  );
};

export default Navigation;