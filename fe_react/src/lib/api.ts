import { type IOwner } from '@/src/components/owners/types';
import { type IFlat } from '@/src/components/flats/types';
import { type INews } from '@/src/components/news/types';
import { getDb } from './db';

/* Owners */

export async function getOwners(): Promise<IOwner[]> {
    const res = await fetch('http://localhost:3000/v1/api/owners');
    if (!res.ok) throw new Error(`Failed to fetch owners: ${res.status}`);
    return res.json();
}

/* Flats */

export async function getFlats(): Promise<IFlat[]> {
    const db = await getDb();
    const docs = await db.collection('rooms').aggregate([
        {
            $lookup: {
                from: 'owners',
                localField: 'cadastralNumber',
                foreignField: 'cadastralNumber',
                as: 'owners',
            },
        },
    ]).toArray();
    return docs.map((doc) => ({
        ...doc,
        _id: String(doc._id),
        owners: (doc.owners as Array<Record<string, unknown>>).map((o) => ({
            ...o,
            _id: String(o._id),
        })),
    })) as IFlat[];
}

/* News */

export async function getNews(): Promise<INews[]> {
    const res = await fetch('http://localhost:3000/v1/api/news');
    if (!res.ok) throw new Error(`Failed to fetch news: ${res.status}`);
    return res.json();
}