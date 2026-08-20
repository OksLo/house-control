import { type IOwner } from "@/src/components/owners/types";

export interface IUnit {
    _id: string;
    cadastralNumber: string;
    floor: number;
    note: string;
    porch: number;
    roomNumber: string;
    space: number;
    owner: IOwner;
}

export interface IUnitField {
    name: keyof IUnit;
    title: string;
    isReadOnly: boolean;
    render?: (flat: IUnit) => React.ReactNode;
    className?: string;
}

export const UNIT_FIELDS: IUnitField[] = [
    { name: 'roomNumber', title: '#', isReadOnly: true },
    { name: 'porch', title: 'Porch', isReadOnly: true },
    { name: 'floor', title: 'Floor', isReadOnly: true },
    { name: 'space', title: 'Space, m²', isReadOnly: false, className: 'w-28' },
    {
        name: 'owner',
        title: 'Owner',
        isReadOnly: true,
        render: (unit) => unit.owner.owner,
    },
    { name: 'cadastralNumber', title: 'Cadastral #', isReadOnly: true },
    { name: 'note', title: 'Note', isReadOnly: false, className: 'w-36' },
];
