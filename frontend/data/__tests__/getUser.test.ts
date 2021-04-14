import fetch from 'jest-fetch-mock';

import { getUser } from '~data/getUser';

const RESPONSE = {
    gender: 'male',
    name: {
        title: 'Mr',
        first: 'Joris',
        last: 'Caron',
    },
    location: {
        street: {
            number: 5901,
            name: "Rue de L'Abbé-Gillet",
        },
        city: 'Boulogne-Billancourt',
        state: 'Haute-Savoie',
        country: 'France',
        postcode: 19577,
        coordinates: {
            latitude: '30.4596',
            longitude: '-63.2499',
        },
        timezone: {
            offset: '-6:00',
            description: 'Central Time (US & Canada), Mexico City',
        },
    },
    email: 'joris.caron@example.com',
    dob: {
        date: '1963-09-05T07:26:34.646Z',
        age: 58,
    },
    registered: {
        date: '2017-09-29T21:32:27.098Z',
        age: 4,
    },
    phone: '05-44-93-29-58',
    cell: '06-59-96-88-79',
    id: {
        name: 'INSEE',
        value: '1NNaN46702872 66',
    },
    picture: {
        large: 'https://randomuser.me/api/portraits/men/23.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/23.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/23.jpg',
    },
    nat: 'FR',
};

describe('getUser', () => {
    beforeEach(() => {
        fetch.resetMocks();
        fetch.dontMock();
    });

    it('should get the user', async () => {
        const user = await getUser();
        expect(user).toEqual(RESPONSE);
    });

    it('should return null on error', async () => {
        fetch.mockRejectOnce(new Error('dummy error'));
        const user = await getUser();
        expect(user).toBeNull();
    });
});
