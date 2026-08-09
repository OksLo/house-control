import { type IOwner } from '@/src/components/owners/types';
import { type IFlat } from '@/src/components/flats/types';
import { type INews } from '@/src/components/news/types';

/* Owners */

export async function getOwners(): Promise<IOwner[]> {
    const res = await fetch('http://localhost:3000/v1/api/owners');
    if (!res.ok) throw new Error(`Failed to fetch owners: ${res.status}`);
    return res.json();
}

/* Flats */

export async function getFlats(): Promise<IFlat[]> {
    const res = await fetch('http://localhost:3000/v1/api/accounts');
    if (!res.ok) throw new Error(`Failed to fetch flats: ${res.status}`);
    return res.json();
}

export async function updateFlat(id: string, data: Partial<IFlat>): Promise<IFlat> {
    const res = await fetch(`http://localhost:3000/v1/api/accounts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Failed to update flat: ${res.status}`);
    return res.json();
}

/* News */

export async function getNews(): Promise<INews[]> {
    const res = await fetch('http://localhost:3000/v1/api/news');
    if (!res.ok) throw new Error(`Failed to fetch news: ${res.status}`);
    return res.json();
}