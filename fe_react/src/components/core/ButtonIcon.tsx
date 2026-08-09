'use client';

import { Check, X, Pencil, Warehouse, type LucideIcon } from 'lucide-react';

const icons = {
    save: Check,
    cancel: X,
    edit: Pencil,
    warehouse: Warehouse,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

type Props = { iconName: IconName } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonIcon({ iconName, className, ...props }: Props) {
    const Icon = icons[iconName];
    return (
        <button className={`className="flex items-center rounded p-1 transition-colors ${className}`} {...props}>
            <Icon size={20} />
        </button>
    );
}
