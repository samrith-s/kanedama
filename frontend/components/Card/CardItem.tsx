interface CardItemProps {
    label: string;
    value: string | number | boolean;
}

export function CardItem({ label, value }: CardItemProps) {
    return (
        <div className='grid grid-cols-12 gap-0.25 sm:grid-flow-col grid-flow-row'>
            <div className='sm:col-span-2 col-span-12 font-bold'>{label}</div>
            <div className='sm:col-span-10 col-span-12'>{value}</div>
        </div>
    );
}
