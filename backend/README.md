# Welcome to our kata!

Hi! This project aims to evaluate candidates applying for a position in our **engineering squad**. 
We encountered a scenario similar to this one during our 1st release and we're curious to see your approach to this problem. 

## Exercise

We expect you to: 

 1. Find the **average amount of positive transactions** for the **6 months** prior to the *most recent transaction*. To clarify, the formula is:  
 Sum of positive transactions / Number of positive transactions. Round your result down.
 2. Find the **Min** and **Max** balance of the *test user* accounts whole history (all accounts aggregated!). Round your result down.
 3. Check if the user have at least **3 years of transaction history** between the oldest and the most recent transaction (all accounts aggregated!)

## API

We set up a minimal REST API with 3 endpoints:

Endpoint  | Data | Method
------------ | ------------- | ---------
/accounts | Fetch all bank accounts from a *test user*. | [GET]
/accounts/:account_id/transactions?from=*start_date*&to=*end_date* | Fetch the specified *account_id* transactions from the *start_date* to the *end_date*. Date are ISO 8601 UTC, so for example `2018-08-13T03:24:00` It can't return more than **365 days** of transactions. If there are no date specified, the oldest transaction will be returned. | [GET]
/answer | Post your results in the body, the body needs to be of type AnswerDto. Every number needs to be rounded to the minimum. Json Content-type please :) | [POST]

Root endpoint is : https://kata.getmansa.com/

You can find the *Data Transfer Object* (DTO) for the answer object in the `src/common/dto/` folder of this repo. You will also find *Response Objects* (RO) for the accounts and the transactions in the `src/common/ro/` folder.

## Project

- **Your project must be written in TypeScript**

- **You have to deliver a working NestJS project**

- **Your project must expose a `GET /answer` endpoint responding with an `AnswerDto` object**

- **Our `POST /answer` endpoint is here to verify your solution. If it's right, you'll get access code and instructions for the next step**

We want you to write code that meets the highest industry standard. It must be **fast**, **robust**, **readable**, and you need to **include tests** as well.

Good luck and have fun!

*For any question, feel free to send me an email at remy.tinco '@' getmansa.com.*

### Hints

Here's the expected answer:
```json
{
	"6_month_average_income": 407,
	"3_years_activity": true,
	"max_balance": 19540,
	"min_balance": -4285
}
```

Here the corresponding cURL command : 
```JSON
curl -d '{"6_month_average_income": 407,"3_years_activity": true,"max_balance": 19540,"min_balance": -4285}' -H "Content-Type: application/json" -X POST https://kata.getmansa.com/answer
```
