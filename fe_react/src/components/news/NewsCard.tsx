import ImageWithFallback from '@/src/components/core/ImageWithFallback';
import { type INews } from './types';

export default function NewsCard({ news }: { news: INews }) {
    const date = new Date(news.datePublished);

    return (
        <article className="flex gap-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4">
            <figure className="flex justify-center items-center w-1/6 shrink-0 relative">
                <ImageWithFallback
                    src={news.image}
                    alt={news.title}
                />
            </figure>
            <div className="w-5/6 flex flex-col gap-1">
                <header>
                    <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{news.title}</h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{news.description}</p>
                </header>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 grow">{news.text}</p>
                <footer>
                    <time
                        dateTime={date.toISOString()}
                        className="text-xs text-zinc-400 dark:text-zinc-500"
                    >
                        {date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                </footer>
            </div>
        </article>
    );
}
