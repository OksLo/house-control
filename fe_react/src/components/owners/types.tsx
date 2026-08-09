export interface IOwner {
    _id: string;
    owner: string;
    dateOwnership: string;
    cadastralNumber: string;
    isPropertyCommon: boolean;
    phoneNumber: string;
    email: string;
}

export interface IOwnerField {
    name: keyof IOwner;
    title: string;
    isReadOnly: boolean;
    render?: (flat: IOwner) => React.ReactNode;
}

export const OWNER_FIELDS: IOwnerField[] = [
    { name: 'owner', title: 'Name', isReadOnly: false },
    { name: 'dateOwnership', title: 'Date of ownership', isReadOnly: false },
    { name: 'cadastralNumber', title: 'Cadastral #', isReadOnly: true },
    { name: 'isPropertyCommon', title: 'Common property', isReadOnly: false, render: (owner: IOwner) => (
        <input
            type="checkbox"
            name="isPropertyCommon"
            checked={owner.isPropertyCommon} readOnly />) },
    { name: 'phoneNumber', title: 'Phone', isReadOnly: false },
    { name: 'email', title: 'Email', isReadOnly: false },
];
