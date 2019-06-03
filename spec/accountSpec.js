var Account = require ('../lib/account.js')

describe('Account', function(){
  var account;

  beforeEach(function(){
    account = new Account();
  })

  it('A User can deposit money into a new account', function(){
    expect(account.deposit(1000)).toBe(undefined);
  })

  it('A user can withdrawal money from an account', function(){
    expect(account.withdrawal(1000)).toBe(undefined);
  })

  it('A user can print a statement from an account', function(){
    expect(account.printStatement()).toBeDefined();
  })
});
