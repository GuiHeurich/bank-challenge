var Account = require ('../lib/account.js')

describe('Account', function(){
  var account;

  beforeEach(function(){
    account = new Account();
  })

  it('Account shows the correct balance after a deposit', function(){
    account.deposit(1000)
    expect(account.currentBalance()).toEqual(1000);
  })

  it('Account shows the correct balance after a withdrawal', function(){
    account.deposit(1000)
    account.withdrawal(500)
    expect(account.currentBalance()).toEqual(500);
  })

});
