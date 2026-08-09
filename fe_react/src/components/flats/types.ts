import { type IOwner } from "@/src/components/owners/types";

export interface IFlat {
    _id: string;
    cadastralNumber: string;
    floor: number;
    note: string;
    porch: number;
    roomNumber: string;
    space: number;
    owners: IOwner[];
}

export interface IFlatField {
    name: keyof IFlat;
    title: string;
    isReadOnly: boolean;
    render?: (flat: IFlat) => React.ReactNode;
}

export const FLAT_FIELDS: IFlatField[] = [
    { name: 'roomNumber', title: 'Room #', isReadOnly: true },
    { name: 'porch', title: 'Porch', isReadOnly: true },
    { name: 'floor', title: 'Floor', isReadOnly: true },
    { name: 'space', title: 'Space, m²', isReadOnly: false },
    {
        name: 'owners',
        title: 'Owner(s)',
        isReadOnly: false,
        render: (flat) => flat.owners.map((o) => o.owner).join(', '),
    },
    { name: 'cadastralNumber', title: 'Cadastral #', isReadOnly: true },
    { name: 'note', title: 'Note', isReadOnly: false },
];
