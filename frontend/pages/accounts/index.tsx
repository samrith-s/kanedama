import { Layout } from '~components/Layout';
import { getAccounts } from '~data/getAccounts';
import { Account } from '~interfaces/accounts.decl';

interface AccountsProps {
    accounts: Account[] | null;
}

export default function Accounts({ accounts }: AccountsProps) {
    return (
        <Layout title='Accounts'>
            <pre>
                <code>{JSON.stringify(accounts, null, 4)}</code>
            </pre>
        </Layout>
    );
}

export async function getStaticProps() {
    const accounts = await getAccounts();

    return {
        props: {
            accounts,
        },
    };
}
