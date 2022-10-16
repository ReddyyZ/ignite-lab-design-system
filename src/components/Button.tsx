import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            className={clsx(
                'py-3 px-4 bg-ciano-500 rounded font-semibold text-black text-sm w-full hover:bg-ciano-300 transition-colors focus:ring-2 ring-gray-100',
                className
            )}
            {...props}
        >{children}</Comp>
    );
}