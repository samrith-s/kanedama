import { Layout } from '~components/Layout';

import { getUser } from '~data/getUser';

import { User } from '~interfaces/user.decl';

interface HomeProps {
    user: User;
}

export default function Home({ user }: HomeProps) {
    return <Layout title='Profile'>{JSON.stringify(user, null, 2)}</Layout>;
}

export async function getStaticProps() {
    const user = await getUser();

    return {
        props: {
            user,
        },
    };
}
