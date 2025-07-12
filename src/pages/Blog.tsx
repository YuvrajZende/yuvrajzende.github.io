import FloatingNavigation from "@/components/FloatingNavigation";
import ArticleCard from "@/components/ArticleCard";
import databaseArticle from "@/assets/database-article.jpg";
import educationArticle from "@/assets/education-article.jpg";

const Blog = () => {

  const articles = [
    {
      title: "Build your own Custom Database using TypeScript",
      readTime: "200 mins read",
      publishDate: "March 19, 2025 (3mo ago)",
      description: "As a developer, I wanted to understand how databases work under the hood. Instead of just reading about them, I decided to build my own database from scratch in TypeScript.",
      imageUrl: databaseArticle,
      link: "https://b.devwtf.in/byodb"
    },
    {
      title: "The education trap",
      readTime: "15 mins read", 
      publishDate: "October 10, 2024 (8mo ago)",
      description: "A good degree is all you need. Do really skills matter? Education is a scam? The education trap.",
      imageUrl: educationArticle,
      link: "#"
    },
    {
      title: "How I Built My First Chrome Extension",
      readTime: "12 mins read",
      publishDate: "September 15, 2024 (9mo ago)",
      description: "Journey of creating a developer-focused Chrome extension that now has over 10,000 users. Learn from my mistakes and successes.",
      imageUrl: databaseArticle,
      link: "#"
    },
    {
      title: "The Reality of Being a Teen Developer",
      readTime: "8 mins read",
      publishDate: "August 20, 2024 (10mo ago)",
      description: "Honest thoughts about starting your programming journey young, dealing with imposter syndrome, and finding your place in the tech community.",
      imageUrl: educationArticle,
      link: "#"
    },
    {
      title: "Open Source: More Than Just Code",
      readTime: "10 mins read",
      publishDate: "July 5, 2024 (11mo ago)",
      description: "Why contributing to open source changed my perspective on software development and how it can accelerate your learning journey.",
      imageUrl: databaseArticle,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingNavigation />
      <main className="w-full max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            My thoughts on technology, programming, life, and everything in between.
          </p>
        </div>

        <div className="space-y-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            More articles coming soon. Subscribe to stay updated!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Blog;