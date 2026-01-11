import { getAllArticleIds, getArticleData } from '@/lib/articles';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const paths = getAllArticleIds();
    return paths;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const articleData = await getArticleData(slug);

    if (!articleData) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: `${articleData.title} - Bororme`,
        description: articleData.description,
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const articleData = await getArticleData(slug);

    if (!articleData) {
        notFound();
    }

    return (
        <article className="container mx-auto py-12 px-4 max-w-3xl">
            <header className="mb-8 text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{articleData.title}</h1>
                <div className="flex items-center justify-center text-muted-foreground mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={articleData.date}>
                        {articleData.date ? format(new Date(articleData.date), 'LLLL d, yyyy') : ''}
                    </time>
                </div>

                {articleData.coverImage && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg mb-8">
                        {/* We can use standard img tag or next/image without fixed sizes given we want responsive */}
                        <img
                            src={articleData.coverImage}
                            alt={articleData.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </header>

            {/* 
        We use dangerouslySetInnerHTML because we converted markdown to HTML.
        The content is trusted as it comes from our repository.
        Add prose class for nice typography 
      */}
            <div
                className="prose prose-lg dark:prose-invert mx-auto break-words"
                dangerouslySetInnerHTML={{ __html: articleData.contentHtml || '' }}
            />
        </article>
    );
}
