import { User } from '~interfaces/user.decl';

export async function getUser(): Promise<User | null> {
    return await fetch('https://randomuser.me/api/?seed=getmansa&nat=fr&noinfo&exc=login')
        .then((res) => res.json())
        .then((data) => {
            return data.results[0];
        })
        .catch((error) => {
            console.error(error);
            return null;
        });
}
