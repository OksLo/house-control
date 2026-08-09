'use client';

import { useState } from 'react';
import { updateFlat } from '@/src/lib/api';
import { type IOwner, OWNER_FIELDS } from './types';
import ButtonIcon from '@/src/components/core/ButtonIcon';

type Draft = Partial<Record<keyof IOwner, unknown>>;

export default function FlatsTableRow({ owner, index }: {
    owner: IOwner;
    index: number;
}) {
    const fields = OWNER_FIELDS;
    const [isEditing, setIsEditing] = useState(false);
    const [currentOwner, setCurrentOwner] = useState<IOwner>(owner);
    const [draftOwner, setDraftOwner] = useState<Draft>({});

    function startEdit() {
        setDraftOwner(
            Object.fromEntries(
                fields
                    .filter((f) => !f.isReadOnly)
                    .map((f) => [
                        f.name,
                        f.render ? String(f.render(currentOwner)) : currentOwner[f.name],
                    ])
            )
        );
        setIsEditing(true);
    }

    async function handleSave() {
        await updateFlat(currentOwner._id, draftOwner as Partial<IOwner>);
        setCurrentOwner((prev) => ({ ...prev, ...draftOwner } as IOwner));
        setIsEditing(false);
    }

    return (
        <tr className={index % 2 === 0 ? 'bg-white dark:bg-black' : 'bg-zinc-50 dark:bg-zinc-950'}>
            {fields.map((field) => {
                const editable = isEditing && !field.isReadOnly;
                return (
                    <td key={field.name} className="px-4 py-3">
                        {editable ? (
                            <input
                                type={typeof currentOwner[field.name] === 'number' ? 'number' : 'text'}
                                value={String(draftOwner[field.name] ?? '')}
                                onChange={(e) => setDraftOwner((prev) => ({
                                    ...prev,
                                    [field.name]: typeof currentOwner[field.name] === 'number'
                                        ? Number(e.target.value)
                                        : e.target.value,
                                }))}
                                className="w-full rounded border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-400"
                            />
                        ) : (
                            field.render
                                ? field.render(currentOwner)
                                : currentOwner[field.name] as React.ReactNode
                        )}
                    </td>
                );
            })}
            <td className="px-4 py-3">
                {isEditing ? (
                    <div className="flex items-center gap-1">
                        <ButtonIcon iconName="save" onClick={handleSave} className="text-green-700 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-950" />
                        <ButtonIcon iconName="cancel" onClick={() => setIsEditing(false)} className=" text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800" />
                    </div>
                ) : (
                    <ButtonIcon iconName="edit" onClick={startEdit} title="Edit" className="text-xs text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100" />
                )}
            </td>
        </tr>
    );
}
