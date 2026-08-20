import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017';

declare global {
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export enum DB_COLLECTIONS {
    units = 'units',
    owners = 'owners',
}

const clientPromise: Promise<MongoClient> =
    process.env.NODE_ENV === 'development'
        ? (global._mongoClientPromise ??= new MongoClient(uri).connect())
        : new MongoClient(uri).connect();

export async function getDb() {
    return (await clientPromise).db(process.env.DB_NAME);
}
