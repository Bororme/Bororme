import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArticleCard } from "@/components/ArticleCard"
import { getSortedArticlesData } from "@/lib/articles"

export function RecentArticles() {
    const articles = getSortedArticlesData().slice(0, 3)

    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex items-end justify-between mb-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-serif tracking-tight">Latest Insights</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Explore wisdom from the Chan tradition and learn about life at the temple.
                        </p>
                    </div>

                    <Button variant="ghost" asChild className="hidden md:flex mb-2">
                        <Link href="/blog" className="group">
                            View all articles <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {articles.map((article) => (
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

                <div className="flex md:hidden justify-center">
                    <Button variant="outline" asChild>
                        <Link href="/blog">
                            View all articles
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
