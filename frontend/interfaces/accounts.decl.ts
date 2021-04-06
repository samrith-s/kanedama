export enum AccountType {
    TRANSACTION = 'TRANSACTION',
    SAVINGS = 'SAVINGS',
}

export interface Account {
    account_id: string;
    account_type: AccountType;
    iban: string;
    swift_bic: string;
    sort_code: string;
    account_number: string;
    currency: string;
    available: number;
    current: number;
    update_timestamp: string;
}
