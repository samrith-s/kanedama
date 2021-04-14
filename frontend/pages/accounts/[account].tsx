import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useMemo } from 'react';

import { Card } from '~components/Card';
import { CardItem } from '~components/Card/CardItem';
import { Grid } from '~components/Grid';
import { Layout } from '~components/Layout';
import { Select } from '~components/Select';
import { TransactionListItem } from '~components/TransactionListItem';

import { getTransactions } from '~data/getTransactions';
import { getYears } from '~data/getYears';

import { Account as IAccount } from '~interfaces/accounts.decl';
import { Transaction } from '~interfaces/transaction.decl';

interface AccountProps extends ReturnType<typeof getYears> {
    account: IAccount;
    transactions: Transaction[];
    queryYear?: number;
}

export default function Account({
    account,
    years,
    currentYear,
    queryYear,
    transactions,
}: AccountProps) {
    const { push, pathname, query } = useRouter();
    const transactionLength = useMemo(() => transactions.length, [transactions]);

    const year = queryYear || currentYear;

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            push({
                pathname,
                query: {
                    ...query,
                    year: e.target.value,
                },
            });
        },
        [years]
    );

    return (
        <Layout title={`${account.account_number} - View account`}>
            <Grid className='grid-cols-1'>
                <Link href='/accounts'>&larr; Back to accounts</Link>
                <Card title='Account information'>
                    <CardItem label='Account nuber' value={account.account_number} />
                    <CardItem label='IBAN' value={account.iban} />
                    <CardItem label='SWIFT/BIC' value={account.swift_bic} />
                    <CardItem label='Account Type' value={account.account_type} />
                    <CardItem label='Account nuber' value={account.account_number} />
                </Card>
                <Select defaultValue={year} onChange={handleChange}>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </Select>
                <Grid grid-cols-1>
                    <h2 className='text-lg font-bold'>
                        Transactions for {year} ({transactionLength})
                    </h2>
                    {!transactionLength && (
                        <p className='text-center text-gray-400'>
                            No transactions found for {year}!
                        </p>
                    )}
                    {!!transactionLength &&
                        transactions?.map((transaction) => (
                            <TransactionListItem
                                key={transaction.timestamp}
                                transaction={transaction}
                            />
                        ))}
                </Grid>
            </Grid>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps<AccountProps> = async (ctx) => {
    if (!ctx.params?.account || !ctx.query.data) {
        return {
            notFound: true,
        };
    }

    const account = JSON.parse(
        Buffer.from(ctx.query.data as string, 'base64').toString()
    ) as IAccount;
    const yearsData = getYears();
    const queryYear = parseInt((ctx.query?.year as string) || '', 10);

    const transactions = await getTransactions(ctx.params.account as string, queryYear);

    return {
        props: {
            ...yearsData,
            account,
            queryYear,
            transactions,
        },
    };
};
