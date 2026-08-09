import { getOwners } from '@/src/lib/api';
import OwnersTableClient from './OwnersTableClient';

export default async function OwnersTable() {
    const owners = await getOwners();
    return <OwnersTableClient owners={owners} />;
}

