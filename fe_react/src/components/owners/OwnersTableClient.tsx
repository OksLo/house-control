'use client';

import { useState } from 'react';
import { OWNER_FIELDS, type IOwner } from './types';
import OwnersTableRow from './OwnersTableRow';

export default function OwnersTableClient({ owners }: { owners: IOwner[] }) {
    const [filterFieldName, setFilterFieldName] = useState<keyof IOwner>(OWNER_FIELDS[0].name);
    const [filterFieldValue, setFilterFieldValue] = useState<string>('');

    const ownersFiltered: IOwner[] = filterFieldValue && filterFieldName
        ? owners.filter((o) => o[filterFieldName]?.toString().toLowerCase().includes(filterFieldValue.toLowerCase()))
        : owners;

    return (
        <>
            <div className="flex items-stretch justify-end gap-x-3 mb-3">
                <label htmlFor="filterFieldValue" className="self-center text-sm/6 font-medium text-gray-900">Filter: </label>
                <select
                    value={filterFieldName}
                    onChange={(e) => setFilterFieldName(e.target.value as keyof IOwner)}
                    id="filterFieldName"
                    className="rounded-md bg-white pl-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-1 focus:-outline-offset-1 focus:outline-green-900 sm:text-sm/6"
                >
                    { OWNER_FIELDS.map((field) => (
                        <option value={field.name} key={field.name}>{field.title}</option>
                    ))}
                </select>
                <input
                    value={filterFieldValue}
                    onChange={(e) => setFilterFieldValue(e.target.value)}
                    placeholder="Enter value for selected field"
                    type="text"
                    id="filterFieldValue"
                    className="rounded-md bg-white px-3 py-2 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-green-900 sm:text-sm/6"
                />
            </div>
            <table className="w-full text-sm text-left text-zinc-700 dark:text-zinc-300">
                <thead className="sticky top-0 z-10 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                    <tr>
                        {OWNER_FIELDS.map((field) => (
                            <th key={field.name} className="px-4 py-3 font-medium">{field.title}</th>
                        ))}
                        <th className="p-3 font-medium w-23">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {ownersFiltered.map((owner, i) => (
                        <OwnersTableRow key={owner._id} owner={owner} index={i} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
