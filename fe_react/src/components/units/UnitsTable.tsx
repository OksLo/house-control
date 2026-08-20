import { getUnits } from '@/src/lib/api';

import UnitsTableRow from './UnitsTableRow';
import { type IUnit, type IUnitField, UNIT_FIELDS } from './types';

export default async function UnitsTable() {
    const units: IUnit[] = await getUnits();

    return (
        <table className="w-full text-sm text-left text-zinc-700 dark:text-zinc-300">
            <thead className="sticky top-0 z-10 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                <tr>
                    {UNIT_FIELDS.map((field: IUnitField) => (
                        <th key={field.name} className={`px-4 py-3 font-medium ${field.className || ''}`}>{field.title}</th>
                    ))}
                    <th className="px-4 py-3 font-medium w-23">Actions</th>
                </tr>
            </thead>
            <tbody>
                {units.map((unit, i) => (
                    <UnitsTableRow key={unit._id} unit={unit} index={i} />
                ))}
            </tbody>
        </table>
    );
}
