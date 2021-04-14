import fetch from 'jest-fetch-mock';

import { getTransactions } from '~data/getTransactions';

const ACCOUNT_ID = 'afcf2bd0-9a72-11e9-86ef-07c2f863fee7';

describe('getTransactions', () => {
    beforeEach(() => {
        fetch.resetMocks();
        fetch.dontMock();
    });

    it('should fetch 0 transactions for 2020', async () => {
        const transactions = await getTransactions(ACCOUNT_ID);
        expect(transactions.length).toBe(0);
    });

    it('shoud fetch 50 transaction for 2019', async () => {
        const transactions = await getTransactions(ACCOUNT_ID, 2019);
        expect(transactions.length).toBe(50);
    });

    it('should throw an error if no account id provided', async () => {
        await expect(getTransactions('')).rejects.toThrow();
    });

    it('should return empty array if backend throws error', async () => {
        fetch.mockResponseOnce(JSON.stringify({ error: 'random error' }));
        const transactions = await getTransactions(ACCOUNT_ID);
        expect(transactions.length).toBe(0);
    });

    it('should return an empty array if the promise fails', async () => {
        fetch.mockRejectOnce(new Error('dummy error'));
        const transactions = await getTransactions(ACCOUNT_ID);
        expect(transactions.length).toBe(0);
    });
});
