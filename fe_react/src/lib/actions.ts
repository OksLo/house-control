'use server';

import { ObjectId } from 'mongodb';
import { getDb } from './db';
import { type IFlat } from '@/src/components/flats/types';

export async function updateFlat(id: string, data: Partial<IFlat>): Promise<IFlat> {
    const db = await getDb();
    // owners come from a $lookup on the owners collection — not stored on rooms documents
    const { owners, ...roomFields } = data;
    await db.collection('rooms').updateOne(
        { _id: new ObjectId(id) },
        { $set: roomFields },
    );
    const [flat] = await db.collection('rooms').aggregate([
        { $match: { _id: new ObjectId(id) } },
        {
            $lookup: {
                from: 'owners',
                localField: 'cadastralNumber',
                foreignField: 'cadastralNumber',
                as: 'owners',
            },
        },
    ]).toArray();
    return {
        ...flat,
        _id: String(flat._id),
        owners: (flat.owners as Array<Record<string, unknown>>).map((o) => ({
            ...o,
            _id: String(o._id),
        })),
    } as IFlat;
}
