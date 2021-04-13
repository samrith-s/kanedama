import { Transaction } from '~interfaces/transaction.decl';
import { subDays } from 'date-fns';

export async function getTransactions(
    accountId: string,
    options: {
        from: string;
        to: string;
    } = {
        from: subDays(new Date(), 365).toISOString(),
        to: new Date().toISOString(),
    }
): Promise<Transaction[]> {
    if (!accountId) {
        throw new Error('An `accountId` should be provided to fetch transactions.');
    }

    const { from, to } = options;

    let promise: Promise<any>;

    if (options?.from && options?.to) {
        promise = fetch(
            `https://kata.getmansa.com/accounts/${accountId}/transactions?from=${from}&to=${to}`
        );
    } else {
        promise = fetch(`https://kata.getmansa.com/accounts/${accountId}/transactions`);
    }

    return await promise
        .then((res) => res.json())
        .catch((error) => {
            console.error(error);
            return [];
        });
}
