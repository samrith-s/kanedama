import { format } from 'date-fns';

import { Grid } from '~components/Grid';
import { Layout } from '~components/Layout';

import { getUser } from '~data/getUser';

import { User } from '~interfaces/user.decl';

interface HomeProps {
    user: User;
}

export default function Home({ user }: HomeProps) {
    return (
        <Layout title='Profile'>
            <Grid columns='max-content auto'>
                <img
                    src={user.picture.large}
                    className='border border-gray-200 rounded'
                    width='75px'
                />
                <div>
                    <h2 className='text-lg font-bold'>
                        {user.name.title}. {user.name.first} {user.name.last}
                    </h2>
                    <p>{user.email}</p>
                    <p className='text-gray-500 text-sm'>
                        Member since {format(new Date(user.registered.date), 'dd/MM/yyyy')}
                    </p>
                </div>
            </Grid>
        </Layout>
    );
}

export async function getStaticProps() {
    const user = await getUser();

    return {
        props: {
            user,
        },
    };
}
