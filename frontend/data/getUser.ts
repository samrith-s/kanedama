import { User } from '~interfaces/user.decl';

export async function getUser(): Promise<User> {
    return await fetch(
        'https://randomuser.me/api/?seed=getmansa&nat=fr&noinfo&exc=login,location,registered,id,dob'
    )
        .then((res) => res.json())
        .then((data) => data.results?.[0] || {})
        .catch((error) => {
            console.error(error);
        });
}
