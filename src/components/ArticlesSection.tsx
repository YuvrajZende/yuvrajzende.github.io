import ArticleCard from "./ArticleCard";
import { articles } from "@/data/portfolio";

const ArticlesSection = () => {
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