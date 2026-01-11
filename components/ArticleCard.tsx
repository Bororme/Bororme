import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';

interface ArticleCardProps {
    id: string;
    title: string;
    date: string;
    description?: string;
    coverImage?: string;
}

export function ArticleCard({ id, title, date, description, coverImage }: ArticleCardProps) {
    return (
        <Link href={`/blog/${id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <div className="aspect-video bg-muted relative overflow-hidden">
                    {coverImage ? (
                        <Image
                            src={coverImage}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:scale-105 transition-transform duration-500" />
                    )}
                </div>
                <CardHeader>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        <time dateTime={date}>{date ? format(new Date(date), 'LLLL d, yyyy') : 'No Date'}</time>
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="line-clamp-3">
                        {description || "Click to read more about this topic..."}
                    </CardDescription>
                </CardContent>
            </Card>
        </Link>
    );
}
