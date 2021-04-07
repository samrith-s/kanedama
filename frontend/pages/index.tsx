import { format } from 'date-fns';

import { Card } from '~components/Card';
import { CardItem } from '~components/Card/CardItem';
import { Grid } from '~components/Grid';
import { Layout } from '~components/Layout';

import { getUser } from '~data/getUser';

import { User } from '~interfaces/user.decl';

interface HomeProps {
    user: User;
}

export default function Home({ user }: HomeProps) {
    if (!user) {
        return <>There was an error fetching this page</>;
    }

    const { picture, name, id, registered, gender, dob, email, cell, phone, location } = user;

    return (
        <Layout title='Profile'>
            <Grid columns='max-content auto' className='items-center'>
                <img src={picture.large} className='border border-gray-200 rounded' width='75px' />
                <div>
                    <h2 className='text-lg font-bold'>
                        {name.title}. {name.first} {name.last}
                    </h2>
                    <p className='text-gray-400 text-sm font-bold'>
                        {id.name} {id.value}
                    </p>
                    <p className='text-gray-500 text-sm'>
                        Member since {format(new Date(registered.date), 'dd/MM/yyyy')}
                    </p>
                </div>
            </Grid>
            <Grid className='grid-cols-1'>
                <Card title='Personal information'>
                    <CardItem label='Title' value={name.title} />
                    <CardItem label='First name' value={name.first} />
                    <CardItem label='Last name' value={name.last} />
                    <CardItem
                        label='Gender'
                        value={gender.charAt(0).toUpperCase() + gender.substr(1)}
                    />
                    <CardItem
                        label='Date of birth'
                        value={format(new Date(dob.date), 'dd/MM/yyyy')}
                    />
                </Card>
                <Card title='Contact information'>
                    <CardItem label='Email' value={email} />
                    <CardItem label='Mobile' value={cell} />
                    <CardItem label='Telephone' value={phone} />
                    <CardItem
                        label='Address'
                        value={`${location.street.number} ${location.street.name}`}
                    />
                    <CardItem label='Postcode' value={location.postcode} />
                    <CardItem label='City' value={location.city} />
                    <CardItem label='State' value={location.state} />
                    <CardItem label='Country' value={location.country} />
                </Card>
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
