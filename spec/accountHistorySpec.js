var AccountHistory = require('../lib/accountHistory.js')

describe('AccountHistory', function(){
  var accountHistory;
  var deposit;

  beforeEach(function(){
    deposit = jasmine.createSpy('deposit', ['debit', 1000, 1000])
    withdrawal = jasmine.createSpy('withdrawal', ['credit', 500, 500])
    accountHistory = new AccountHistory()
    accountHistory.add(deposit)
    accountHistory.add(withdrawal)
  })

  it('adds new transactions to a history of transactions', function(){
    expect(accountHistory.add()).toBe(undefined)
  })

  it('has a history of transactions', function(){
    expect(accountHistory.getHistoryOfTransactions()).toBeDefined()
    expect(accountHistory.getHistoryOfTransactions()[0][0]).toBe("debit")
    expect(accountHistory.getHistoryOfTransactions()[0][1]).toBe(1000)
    expect(accountHistory.getHistoryOfTransactions()[0][2]).toBe(1000)
    expect(accountHistory.getHistoryOfTransactions()[1][0]).toBe("credit")
    expect(accountHistory.getHistoryOfTransactions()[1][1]).toBe(500)
    expect(accountHistory.getHistoryOfTransactions()[1][2]).toBe(500)

  })
})
