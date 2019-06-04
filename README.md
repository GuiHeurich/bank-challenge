# WELCOME TO JAVA-BANK

This program simulates common transactions associated with a bank account. Once you have required and initialised a new instance of Account, please feel free to deposit and withdrawal how much money you want. At any point in time, you can also print your bank stamement.

Note: this program runs entirely on the terminal.

## How to use

In order to run this program program properly, make sure you have installed the following node.js packages:

- Date Format (```npm install dateformat```)
- Jasmine (```npm install --save-dev jasmine```)
- Eslint (```npm install --save-dev eslint```)
    and then ```eslint --init```)
- Istanbul (``` npm install --save-dev nyc``` )

Clone this repository.

Open node.js on your terminal (```node```), and type the following:

```
var Account = require('./lib/account.js')
var account = new Account();
```

From this moment on, you can do the following three actions at anytime:
(Don't forget to insert the value as an Integer!!!)

```
account.deposit(value)
account.withdrawal(value)
account.printStatement()
```

## Tech Stack, Tests, and Linter

Developed in Javascript for node.js. Using Jasmine standalone for testing, Eslint for linting, and Istanbul for test coverage.

To run the tests, coverage and the linter, please run ```npm test```.

#### User Stories

```
As a bank user,
so that I can add money to my Account
I would like to be able to deposit a sum of my choosing.

As a bank user,
so that I can take money from my Account
I would like to be able to withdrawal a sum of my choosing.

As a bank user,
so that I can keep track of how much money I have
I would like to be able to print a bank statement.

As a bank user,
so that I can keep track of my deposits
I would like my bank statement to show every deposit I made.

As a bank user,
so that I can keep track of my withdrawals
I would like my bank statement to show every withdrawal I made.

As a bank user,
so that I can visualise my deposits, withdrawals, and current balance in any given time,
I would like my bank statement to show the date in which each transaction occurred.

As a bank user,
so that I can visualise my most recent transactions first,
I would like my bank statement to show the date of each transaction in a descending order.
```

#### Process followed through this challenge
  0. Decided to use Javascript, Jasmine, Eslint and Istanbul.
  1. Read the challenge, took notes of the acceptance criteria
  2. Planned the functions Account and AccountHistory
  3. Wrote user Stories (see above)
  4. Redesigned my functions. They now are Account, Deposit and Withdrawal.
  5. Implemented User Stories with a TDD approach.
  6. Refactored the whole code to check for Single Responsibility principle issues
  7. Final check of the README.

## Screenshots



## Next Steps

- Create an interface with jQuery.
- Set up [Travis CI](https://travis-ci.org) to implement Continuous Integration.
