import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import { Book, ExternalLink, Star } from "lucide-react";

const Shelf = () => {
  const [currentTime, setCurrentTime] = useState("");

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

  const books = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      rating: 5,
      status: "Read",
      thoughts: "A masterpiece for writing maintainable code. Changed how I approach software development.",
      link: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      rating: 5,
      status: "Read",
      thoughts: "Essential reading for every developer. Practical wisdom that applies beyond just coding.",
      link: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/"
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      rating: 4,
      status: "Currently Reading",
      thoughts: "Deep dive into distributed systems. Perfect for understanding modern architecture.",
      link: "https://dataintensive.net/"
    },
    {
      title: "The Lean Startup", 
      author: "Eric Ries",
      rating: 4,
      status: "Read",
      thoughts: "Great insights on building products that matter. Applies to both startups and side projects.",
      link: "https://theleanstartup.com/"
    }
  ];

  const tools = [
    {
      name: "VS Code",
      category: "Editor",
      description: "My daily driver for coding. Extensible and fast.",
      link: "https://code.visualstudio.com/"
    },
    {
      name: "GitHub Copilot",
      category: "AI Assistant", 
      description: "Game-changer for productivity. Like having a pair programming partner.",
      link: "https://github.com/features/copilot"
    },
    {
      name: "Figma",
      category: "Design",
      description: "For UI/UX design and prototyping. Clean interface, great collaboration.",
      link: "https://figma.com/"
    },
    {
      name: "Postman",
      category: "API Testing",
      description: "Essential for API development and testing. Clean and powerful.",
      link: "https://postman.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentTime={currentTime} />
      <main className="w-full max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4">Shelf</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Books I'm reading, tools I use, and resources that shape my thinking.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Book className="w-6 h-6" />
              Books
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {books.map((book, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-200 hover:shadow-md bg-card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{book.title}</h3>
                      <p className="text-sm text-muted-foreground">{book.author}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < book.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className={`badge text-xs ${
                      book.status === 'Read' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {book.status}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {book.thoughts}
                  </p>
                  
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Book
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-8">Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-200 hover:shadow-md bg-card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{tool.name}</h3>
                      <span className="badge text-xs">{tool.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Check it out
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Shelf;