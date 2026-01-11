import { getSortedArticlesData } from '@/lib/articles';
import { ArticleCard } from '@/components/ArticleCard';

export const metadata = {
    title: 'Blog - Bororme',
    description: 'Read our latest articles about Chan Buddhism and temple life.',
};

export default function BlogPage() {
    const allArticlesData = getSortedArticlesData();

    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Explore the wisdom of Chan Buddhism, learn about temple life, and discover the path to inner peace.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allArticlesData.map((article) => (
                    <ArticleCard
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        date={article.date}
                        description={article.description}
                        coverImage={article.coverImage}
                    />
                ))}
            </div>
        </div>
    );
}
