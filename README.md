# Welcome to our kata!

Hi! This project aims to test candidates applying for a position in our **engineering squad**. 
We encountered a scenario similar to this one during our 1st release and we're curious to see your approach to this problem. 

We need you to : 

 1. Find the **average income** for the **6 months** prior to the *most recent transaction*
 2. Find the **Min** and **Max** balance of the *test user* accounts whole history
 3. Check if each user have at least **3 years of activity**


We set up a minimal REST API with 3 endpoint :


Endpoint  | Data | Method
------------ | ------------- | ---------
/accounts | Fetch all bank accounts from a *test user*. | [GET]
/accounts/:account_id/transactions?from=*start_date*&to=*end_date* | Fetch the specified *account_id* transactions from the *start_date* to the *end_date*. It can't return more than **365 days** of transactions. If there are no date specified, the oldest transaction will be returned. | [GET]
/answer | Post your results in the body, the body needs to be of type AnswerDto. Every number needs to be rounded to the minimum. | [POST]

Root endpoint is : https://kata.getmansa.com/

You can find the *Data Transfer Object* (DTO) for the answer object in the src/dto folder of this repo. You will also find *Response Objects* (RO) for the accounts and the transactions in the src/ro folder.

**Your code must be written in TypeScript**

We want you to write code that meets the highest industry standard. It must be fast, robust, readable, and you need to include tests as well.

You will receive some more instructions when you find the correct answer.

Good luck and have fun !

*For any question, feel free to open an issue.*


