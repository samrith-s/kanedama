export interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    phone: string;
    cell: string;
    nat: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    dob: {
        date: string;
    };
    id: {
        name: string;
        value: string;
    };
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: string | number;
        coordinates: {
            latitude: string;
            longitude: string;
        };
        timezone: {
            offset: string;
            description: string;
        };
    };
    registered: {
        date: string;
        age: number;
    };
}
