'use client';

import {JSX} from "react";

export default function Button({children, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement> & {children: React.ReactNode}): JSX.Element {
    return (
        <button
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            {...props}>
            { children }
        </button>
    );
}