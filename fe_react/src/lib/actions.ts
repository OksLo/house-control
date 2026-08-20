'use server';

import { ObjectId } from 'mongodb';
import { type IUnit } from '@/src/components/units/types';

import { getDb, DB_COLLECTIONS } from './db';
import { getUnit } from "./api";

export async function updateFlat(id: string, data: Partial<IUnit>): Promise<IUnit> {
    const db = await getDb();
    // owners come from a $lookup on the owners collection — not stored on rooms documents
    const { owner, ...roomFields } = data;
    await db.collection(DB_COLLECTIONS.units).updateOne(
        { _id: new ObjectId(id) },
        { $set: roomFields },
    );
    return (await getUnit(id) as IUnit);
}
