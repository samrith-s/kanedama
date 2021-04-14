import Link from 'next/link';
import { useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import CurrencyList from 'currency-list';

import { Card } from '~components/Card';

import { Account } from '~interfaces/accounts.decl';

interface AccountCardProps {
    account: Account;
}

const AccountBadge = styled.div<{ accountType: Account['account_type'] }>`
    ${tw`absolute top-0 right-0 text-sm py-1 px-2 rounded-bl`}
    ${(props) =>
        props.accountType === 'TRANSACTION'
            ? tw`bg-yellow-500 text-yellow-900`
            : tw`bg-green-500 text-green-900`}
`;

export function AccountCard({ account }: AccountCardProps) {
    const { account_id, account_number, account_type, iban, current, currency } = account;

    const cardClasses = useMemo(() => {
        let classNames = 'relative overflow-hidden transition transform hover:scale-105 hover:z-10';
        if (account.account_type === 'TRANSACTION') {
            return classNames + ' border-yellow-500';
        }

        return classNames + ' border-green-500';
    }, [account.account_type]);

    const currencyInfo = useMemo(() => {
        return CurrencyList.get(currency);
    }, [currency]);

    return (
        <Link href={`/accounts/${Buffer.from(JSON.stringify(account)).toString('base64')}`}>
            <a>
                <Card className={cardClasses}>
                    <AccountBadge accountType={account_type}>{account_type}</AccountBadge>
                    <p className='text-xl'>
                        <strong>{account_number}</strong>
                    </p>
                    <p className='text-sm text-gray-600'>{iban}</p>
                    <div className='h-0.5 bg-gray-100 my-2' />
                    <p className='text-right'>
                        Balance: {currencyInfo.symbol}
                        {current}
                    </p>
                </Card>
            </a>
        </Link>
    );
}
