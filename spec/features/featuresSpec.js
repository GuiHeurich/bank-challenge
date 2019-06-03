var Account = require ('../../lib/account.js')

describe('Account', function(){
  var account;

  beforeEach(function(){
    account = new Account();
  })

  it('A User can deposit money into a new account', function(){
    expect(account.deposit(1000)).toBe(undefined);
  })

});
