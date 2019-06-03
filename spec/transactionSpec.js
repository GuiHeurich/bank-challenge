var Transaction = require ('../lib/transaction.js')

describe('Transaction', function(){
  var transaction;

  it('returns the values of a deposit', function(){
    transaction = new Transaction("credit", 1000, 1000)
    expect(transaction.getName()).toBe("credit");
    expect(transaction.getValue()).toBe(1000);
    expect(transaction.getBalance()).toBe(1000)
  })

  it('returns the values of a withdrawal', function(){
    transaction = new Transaction("debit", 400, 600)
    expect(transaction.getName()).toBe("debit");
    expect(transaction.getValue()).toBe(400);
    expect(transaction.getBalance()).toBe(600)
  })
});
