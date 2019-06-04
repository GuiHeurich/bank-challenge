var Transaction = require ('../lib/transaction.js')

describe('Transaction', function(){
  var transaction;
  var baseTime = new Date(2019, 5, 3)

  it('returns the values of a deposit', function(){
    transaction = new Transaction(baseTime, "credit", 1000, 1000)
    expect(transaction.getDate()).toBe("03/06/19")
    expect(transaction.getName()).toBe("credit");
    expect(transaction.getValue()).toBe(1000);
    expect(transaction.getBalance()).toBe(1000)
  })

  it('returns the date of a deposit', function(){
    transaction = new Transaction(baseTime, "credit", 1000, 1000)
    expect(transaction.getDate()).toBe("03/06/19")
  })

  it('returns the values of a withdrawal', function(){
    transaction = new Transaction(baseTime, "debit", 400, 600)
    expect(transaction.getDate()).toBe("03/06/19")
    expect(transaction.getName()).toBe("debit");
    expect(transaction.getValue()).toBe(400);
    expect(transaction.getBalance()).toBe(600)
  })

  it('returns the date of a withdrawal', function(){
    transaction = new Transaction(baseTime, "debit", 400, 600)
    expect(transaction.getDate()).toBe("03/06/19")
  })
});
