import { ReactNode } from 'react';

interface CardProps {
    children?: ReactNode;
    title?: string;
    className?: string;
    'data-testid'?: string;
}

export function Card({ title, children, className = '', ['data-testid']: dataTestId }: CardProps) {
    return (
        <div
            className={`shadow-md bg-white rounded p-6 border border-gray-200 ${className}`}
            data-testid={dataTestId}
        >
            {title && <h2 className='font-bold text-md mb-3.5 text-primary'>{title}</h2>}
            <div className='grid auto-rows-max grid-cols-1 sm:gap-1 gap-3'>{children}</div>
        </div>
    );
}
