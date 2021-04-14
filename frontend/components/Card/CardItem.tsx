interface CardItemProps {
    label: string;
    value: string | number | boolean;
    'data-testid'?: string;
}

export function CardItem({ label, value, ['data-testid']: dataTestId }: CardItemProps) {
    return (
        <div className='grid grid-cols-12 gap-0.25 sm:grid-flow-col grid-flow-row'>
            <div className='sm:col-span-2 col-span-12 font-bold' data-testid={dataTestId}>
                {label}
            </div>
            <div className='sm:col-span-10 col-span-12' data-testid={dataTestId}>
                {value}
            </div>
        </div>
    );
}
