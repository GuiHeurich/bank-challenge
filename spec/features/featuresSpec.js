var Account = require ('../../lib/account.js')

describe('Account', function(){
  var account;

  beforeEach(function(){
    account = new Account();
  })

  it('A User can deposit money into a new account', function(){
    expect(account.deposit(1000)).toBe(undefined);
  })

  // As a bank user,
  // so that I can take money from my Account
  // I would like to be able to withdrawal a sum of my choosing.
  it('A user can withdrawal money from an account', function(){
    expect(account.withdrawal(1000)).toBe(undefined);
  })

});
