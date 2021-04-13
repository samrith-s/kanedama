import { rem } from 'polished';
import { useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import CurrencyList from 'currency-list';
import { format } from 'date-fns';

import { Transaction } from '~interfaces/transaction.decl';

interface TransactionListItemProps {
    transaction: Transaction;
}

const ListItem = styled.div`
    grid-template-columns: max-content max-content auto max-content;
    column-gap: ${rem(20)};
    ${tw`grid w-full h-full items-center border-b border-gray-200 pb-5`};

    &:last-of-type {
        ${tw`border-b-0`}
    }
`;

const StatusBadge = styled.span<{ status: string }>`
    text-transform: uppercase;
    ${tw`text-xl cursor-default`};
    ${(props) => (props.status === 'SUCCEEDED' ? tw`text-green-500` : tw`text-red-500`)}
`;

const Type = styled.span<{ type: string }>`
    ${tw`px-4 py-1 rounded text-white`}
    ${(props) =>
        props.type.toLowerCase() === 'credit'
            ? tw`bg-green-200 text-green-600`
            : tw`bg-red-200 text-red-600`}
`;

const Amount = styled.span<{ type: string }>`
    ${tw`font-bold`}
    ${(props) => (props.type.toLowerCase() === 'credit' ? tw`text-green-700` : tw`text-red-700`)}
`;

export function TransactionListItem({
    transaction: { status, transaction_type, amount, currency, timestamp },
}: TransactionListItemProps) {
    const isNegative = !!(amount < 0);
    const type = `${transaction_type.charAt(0).toUpperCase()}${transaction_type
        .substr(1)
        .toLowerCase()}`;

    const currencyData = useMemo(() => {
        return CurrencyList.get(currency);
    }, [currency]);

    const stamp = useMemo(() => {
        const date = new Date(timestamp);
        return {
            date: format(date, 'do MMMM yyyy'),
            time: format(date, 'H:mma'),
        };
    }, [timestamp]);

    return (
        <ListItem>
            <StatusBadge status={status} title={status}>
                {status === 'SUCCEEDED' ? '✔' : 'ｘ'}
            </StatusBadge>
            <Type type={type}>{type}</Type>
            <div className='text-sm'>
                <div>{stamp.date}</div>
                <div>{stamp.time}</div>
            </div>
            <Amount type={type}>
                {isNegative && '-'}
                {currencyData.symbol}
                {Math.abs(amount)}
            </Amount>
        </ListItem>
    );
}
