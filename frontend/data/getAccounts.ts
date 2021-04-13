import { Account } from '~interfaces/accounts.decl';

export async function getAccounts(): Promise<Account[]> {
    return await fetch('https://kata.getmansa.com/accounts')
        .then((res) => res.json() || [])
        .catch((error) => {
            console.error(error);
            return [];
        });
}
