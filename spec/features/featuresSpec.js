var Account = require ('../../lib/account.js')

describe('Account', function(){
  var account;

  beforeEach(function(){
    account = new Account();
  })

  it('shows the correct balance after a deposit', function(){
    account.deposit(1000)
    expect(account.currentBalance()).toEqual(1000);
  })

  it('shows the correct balance after a withdrawal', function(){
    account.deposit(1000)
    account.withdrawal(500)
    expect(account.currentBalance()).toEqual(500);
  })

  it('prints a statement', function(){
    expect(account.printStatement()).toContain("date || credit || debit || balance");
  })

  it('prints a statement showing a deposit', function(){
    account.deposit(1000)
    expect(account.printStatement()).toContain("1000");
  })

  it('prints a statement showing a withdrawal', function(){
    account.deposit(1000)
    account.withdrawal(500)
    expect(account.printStatement()).toContain("500");
  })

});
