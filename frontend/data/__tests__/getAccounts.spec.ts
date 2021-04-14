import fetch from 'jest-fetch-mock';

import { getAccounts } from '~data/getAccounts';

const RESPONSE = [
    {
        account_id: 'afcf2bd0-9a72-11e9-86ef-07c2f863fee7',
        account_type: 'TRANSACTION',
        iban: 'GB08TXME00835326178346',
        swift_bic: 'TXMEGB40',
        sort_code: '008353',
        account_number: '26178346',
        currency: 'GBP',
        available: 175.52,
        current: 175.52,
        update_timestamp: '2019-08-13 17:29:12',
    },
    {
        account_id: '4f7eff50-c261-11e9-9c35-59cda6eb4cf9',
        account_type: 'TRANSACTION',
        iban: 'GB24ATUV00903119040061',
        swift_bic: 'ATUVGB06',
        sort_code: '009031',
        account_number: '19040061',
        currency: 'GBP',
        available: 1844.99,
        current: 1844.99,
        update_timestamp: '2019-08-13 17:29:12',
    },
    {
        account_id: 'f775a790-c261-11e9-83e6-b9a4fa56ff7b',
        account_type: 'TRANSACTION',
        iban: 'GB45QXUM05272705035482',
        swift_bic: 'QXUMGB72',
        sort_code: '052727',
        account_number: '05035482',
        currency: 'GBP',
        available: 1906.47,
        current: 1906.47,
        update_timestamp: '2019-08-13 17:29:12',
    },
    {
        account_id: 'd5cb80c0-c265-11e9-8d91-dd29edb1aea5',
        account_type: 'TRANSACTION',
        iban: 'GB87NPMA07400310171236',
        swift_bic: 'NPMAGB04',
        sort_code: '074003',
        account_number: '10171236',
        currency: 'GBP',
        available: 1578.34,
        current: 1578.34,
        update_timestamp: '2019-08-13 17:29:12',
    },
    {
        account_id: 'b5c283a0-c265-11e9-a626-bdfc89d76be6',
        account_type: 'SAVINGS',
        iban: 'GB09QQLC18400209692639',
        swift_bic: 'QQLCGB69',
        account_number: '09692639',
        sort_code: '184002',
        currency: 'GBP',
        available: 851.97,
        current: 851.97,
        update_timestamp: '2019-08-19 09:11:21',
    },
];

describe('getAccounts', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('should return the accounts', async () => {
        fetch.dontMock();
        const accounts = await getAccounts();
        expect(accounts).toEqual(RESPONSE);
    });

    it('should catch error and return empty array gracefully', async () => {
        fetch.mockRejectOnce(() => Promise.reject(new Error('rejected')));
        const accounts = await getAccounts();
        expect(accounts).toEqual([]);
    });
});
