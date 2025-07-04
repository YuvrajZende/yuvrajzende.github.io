import ArticleCard from "./ArticleCard";
import databaseArticle from "@/assets/database-article.jpg";
import educationArticle from "@/assets/education-article.jpg";

const ArticlesSection = () => {
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
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 mb-16">
      <div className="text-center mb-12">
        <p className="text-sm text-muted-foreground mb-2">Latest Articles</p>
        <h2 className="text-3xl font-bold mb-4">My thoughts on ... everything</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I love writing about tech, programming, and life in general. I hope you will click on them by mistake. 
          Here are a few of my latest articles. You can find more on my{" "}
          <a href="/blog" className="link">blog page</a>.
        </p>
      </div>

      <div className="space-y-6">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;