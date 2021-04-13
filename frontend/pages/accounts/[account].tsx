import { GetServerSidePropsContext } from 'next';

import { Layout } from '~components/Layout';

import { getTransactions } from '~data/getTransactions';

export default function Account({ account, transactions }) {
    return (
        <Layout title='View account'>
            <pre>
                <code>{JSON.stringify(account, null, 4)}</code>
            </pre>
            <br />
            <br />
            <pre>
                <code>{JSON.stringify(transactions, null, 4)}</code>
            </pre>
        </Layout>
    );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    if (!ctx.params?.account || !ctx.query.data) {
        return {
            notFound: true,
        };
    }

    const account = JSON.parse(Buffer.from(ctx.query.data as string, 'base64').toString());
    const transactions = await getTransactions(ctx.params.account as string);

    return {
        props: {
            account,
            transactions,
        },
    };
}
