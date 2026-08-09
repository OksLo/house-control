import NewsCard from './NewsCard';
import { INews } from './types';

import { getNews } from '@/src/lib/api';

export default async function NewsList() {
    const news = await getNews();

    return (
        <ul className="flex flex-col gap-4">
            { news.map((newsItem: INews) => (<li key={newsItem._id}><NewsCard news={newsItem} /></li>)) }
        </ul>
    );
}