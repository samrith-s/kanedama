from fastapi import FastAPI
from typing import List
from datetime import datetime
from pydantic import BaseModel, validator


class Account(BaseModel):
    update_date: datetime
    balance: float
    id: int


class Transaction(BaseModel):
    account_id: int
    amount: float
    date: datetime


class RequestPredict(BaseModel):
    account: Account
    transactions: List[Transaction]

    @validator("transactions")
    def validate_transaction_history(cls, v):
        # validate that the transaction list passed has at least 6 months history
        if len(v) < 1:
            raise ValueError("Must have at least one Transaction")

        oldest_t = v[0].date
        newest_t = v[0].date
        for t in v[1:]:
            if t.date < oldest_t:
                oldest_t = t.date
            if t.date > newest_t:
                newest_t = t.date

        assert (newest_t - oldest_t).days > 183, "Not Enough Transaction History"

        return v


class ResponsePredict(BaseModel):
    account_id: int
    predicted_amount: float


def preprocess_account(account: Account):
    return account


def preprocess_transactions(transactions: List[Transaction]):
    return transactions


def predict(transactions: List[Transaction], account: Account) -> float:
    transactions = preprocess_transactions(transactions)
    account = preprocess_account(account)

    raise NotImplementedError()


app = FastAPI()


@app.post("/predict")
async def root(predict_body: RequestPredict):
    transactions = predict_body.transactions
    account = predict_body.account

    # Call your prediction function/code here
    ####################################################
    # predicted_amount = predict(transactions, account)

    # Return predicted amount along with account id
    return {"account_id": account.id, "predicted_amount": 0}
