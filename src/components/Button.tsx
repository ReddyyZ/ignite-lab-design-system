import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            className={clsx(
                'py-4 px-3 bg-ciano-500 rounded font-semibold text-black text-sm w-full hover:bg-ciano-300 transition-colors focus:ring-2 ring-gray-100'
            )}>{children}</Comp>
    );
}