import { format } from 'date-fns';

import { Transaction } from '~interfaces/transaction.decl';

export async function getTransactions(accountId: string, year?: number): Promise<Transaction[]> {
    if (!accountId) {
        throw new Error('An `accountId` should be provided to fetch transactions.');
    }

    const formatString = "yyyy-MM-dd'T'HH:mm:ss";
    const currentYear = new Date().getFullYear();
    const from = format(new Date(`${year || currentYear}-01-01T00:00:00`), formatString);
    let to = '';

    if (!year || year === currentYear) {
        to = new Date().toISOString();
    } else {
        to = format(new Date(`${year}-12-31T23:59:59`), formatString);
    }

    return await fetch(
        `https://kata.getmansa.com/accounts/${accountId}/transactions?from=${from}&to=${to}`
    )
        .then((res) => res.json())
        .then((data) => {
            if (data.error) {
                throw data;
            }

            return data;
        })
        .catch((error) => {
            console.error(error);
            return [];
        });
}
