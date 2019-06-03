var Account = require ('../lib/account.js')

describe('Account', function(){
  var account;

  beforeEach(function(){
    account = new Account();
  })

  it('deposits money into a new account', function(){
    expect(account.deposit(1000)).toBe(undefined);
  })

  it('withdrawals money from an account', function(){
    expect(account.withdrawal(1000)).toBe(undefined);
  })

  it('prints a statement from an account', function(){
    expect(account.printStatement()).toBeDefined();
  })
});
