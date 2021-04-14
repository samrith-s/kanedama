import { useMemo, ChangeEvent } from 'react';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import debounce from 'lodash.debounce';

import { getAccounts } from '~data/getAccounts';

import { Grid } from '~components/Grid';
import { Input } from '~components/Input';
import { Layout } from '~components/Layout';

import { Account } from '~interfaces/accounts.decl';
import { AccountCard } from '~components/AccountCard';

interface AccountsProps {
    accounts: Account[];
}

export default function Accounts({ accounts }: AccountsProps) {
    const { pathname, push, query } = useRouter();
    const resultsExist = useMemo(() => !!(accounts ? accounts.length : 0), [accounts]);

    const handleChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (value) {
            push(`${pathname}?q=${value}`);
        } else {
            push(pathname);
        }
    }, 300);

    return (
        <Layout title='Accounts'>
            <Grid className='grid-cols-1'>
                <Input
                    autoFocus
                    placeholder='Search by account number, type, IBAN, BIC or balance'
                    onChange={handleChange}
                    defaultValue={query.q || ''}
                    data-testid='accounts-input'
                />
                {!resultsExist && (
                    <Grid
                        className='grid-cols-1 text-center text-gray-400'
                        data-testid='accounts-no-result'
                    >
                        Sorry, no results found :(
                    </Grid>
                )}
                {resultsExist && (
                    <Grid className='md:grid-cols-3 grid-cols-1'>
                        {accounts?.map((account) => (
                            <AccountCard key={account.account_id} account={account} />
                        ))}
                    </Grid>
                )}
            </Grid>
        </Layout>
    );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    let accounts = await getAccounts();

    if (ctx.query.q) {
        const search = ctx.query.q as string;

        accounts = accounts.filter((account) => {
            return (
                account.account_number.toLowerCase().includes(search) ||
                account.account_type.toLowerCase().includes(search.toLowerCase()) ||
                account.iban.toLowerCase().includes(search.toLowerCase()) ||
                account.swift_bic.toLowerCase().includes(search.toLowerCase()) ||
                (parseInt(search, 10) && parseInt(search, 10) > account.available)
            );
        });
    }

    return {
        props: {
            accounts,
        },
    };
}
