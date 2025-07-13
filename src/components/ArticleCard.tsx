import { Article } from "@/data/portfolio";

const ArticleCard = ({ title, readTime, publishDate, description, image, link }: Article) => {
  return (
    <article className="group cursor-pointer">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="flex flex-col sm:flex-row gap-4 p-6 rounded-lg border border-border hover:border-accent/50 transition-all duration-200 hover:shadow-md bg-card">
          <div className="flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full sm:w-20 sm:h-20 object-cover rounded-md bg-secondary"
            />
          </div>
          
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="font-semibold group-hover:text-accent transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                {description}
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>{readTime}</span>
              <span>•</span>
              <span>{publishDate}</span>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default ArticleCard;