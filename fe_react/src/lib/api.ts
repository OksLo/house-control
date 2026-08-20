import { ObjectId } from 'mongodb';
import { type IOwner } from '@/src/components/owners/types';
import { type IUnit } from '@/src/components/units/types';
import { type INews } from '@/src/components/news/types';
import { getDb } from './db';
import { DB_COLLECTIONS } from './db';


/* Owners */

export async function getOwners(): Promise<IOwner[]> {
    const res = await fetch('http://localhost:3000/v1/api/owners');
    if (!res.ok) throw new Error(`Failed to fetch owners: ${res.status}`);
    return res.json();
}

/* Flats */

export async function getUnits(): Promise<IUnit[]> {
    const db = await getDb();
    const docs = await db.collection(DB_COLLECTIONS.units).aggregate([
        {
            $lookup: {
                from: "owners",
                let: { ownerId: "$cadastralNumber" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$cadastralNumber", "$$ownerId"] } } },
                    { $sort: { dateOwnership: -1 } },  // newest first
                    { $limit: 1 },
                    { $project: { owner: 1 } }
                ],
                as: "owner"
            }
        },
        { $unwind: { path: "$owner", preserveNullAndEmptyArrays: true }}
    ]).toArray();

    return docs.map((doc) => ({
        ...doc,
        _id: String(doc._id),
        owner:  doc.owner ? { ...doc.owner, _id: String(doc.owner._id) } : null,
    })) as IUnit[];
}

export async function getUnit(id: string): Promise<IUnit | null> {
    const db = await getDb();
    const doc = await db.collection(DB_COLLECTIONS.units).aggregate([
        { $match: { _id: new ObjectId(id) } },
        {
            $lookup: {
                from: "owners",
                let: { ownerId: "$cadastralNumber" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$cadastralNumber", "$$ownerId"] } } },
                    { $sort: { dateOwnership: -1 } },
                    { $limit: 1 },
                    { $project: { owner: 1 } }
                ],
                as: "owner"
            }
        },
        { $unwind: { path: "$owner", preserveNullAndEmptyArrays: true } }
    ]).next();

    if (!doc) return null;

    return {
        ...doc,
        _id: String(doc._id),
        owner: doc.owner ? { ...doc.owner, _id: String(doc.owner._id) } : null,
    } as IUnit;
}

/* News */

export async function getNews(): Promise<INews[]> {
    const res = await fetch('http://localhost:3000/v1/api/news');
    if (!res.ok) throw new Error(`Failed to fetch news: ${res.status}`);
    return res.json();
}