import { getFlats } from '@/src/lib/api';

import FlatsTableRow from './FlatsTableRow';
import { FLAT_FIELDS } from './types';

export default async function FlatsTable() {
    const flats = await getFlats();

    return (
        <table className="w-full text-sm text-left text-zinc-700 dark:text-zinc-300">
            <thead className="sticky top-0 z-10 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                <tr>
                    {FLAT_FIELDS.map((field) => (
                        <th key={field.name} className="px-4 py-3 font-medium">{field.title}</th>
                    ))}
                    <th className="px-4 py-3 font-medium w-23">Actions</th>
                </tr>
            </thead>
            <tbody>
                {flats.map((flat, i) => (
                    <FlatsTableRow key={flat._id} flat={flat} index={i} />
                ))}
            </tbody>
        </table>
    );
}
