var Transaction = require('./transaction.js')
var AccountHistory = require('./accountHistory.js')

function Account(){
  this._balance = 0
  this._transactions = new AccountHistory;
}

Account.prototype = {
  deposit: function(value){
    newBalance = this._balance += value
    var now = new Date();
    this._transactions.add(new Transaction(now, "credit", value, newBalance))
  },

  withdrawal: function(value){
    newBalance = this._balance -= value
    var now = new Date();
    this._transactions.add(new Transaction(now, "debit", value, newBalance))
  },

  currentBalance: function(){
    return this._balance
  },

  printStatement: function (){
    var statement = this._transactions.statement();
    return statement;
  }
};

module.exports = Account
