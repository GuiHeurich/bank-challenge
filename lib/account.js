var Transaction = require('./transaction.js')
var AccountHistory = require('./accountHistory.js')

function Account(){
  this._balance = 0
  this._transactions = new AccountHistory;
}

Account.prototype = {
  deposit: function(value){
    newBalance = this._balance += value
    this._transactions.add(new Transaction("credit", value, newBalance))
  },

  withdrawal: function(value){
    newBalance = this._balance -= value
    this._transactions.add(new Transaction("debit", value, newBalance))
  },

  currentBalance: function(){
    return this._balance
  },

  printStatement: function (){
    return [
      "date || credit || debit || balance",
      this._transactions.getHistoryOfTransactions().map(function(transaction){
        if(transaction.getName() === "credit") {
          return `|| ${transaction.getValue()} || || ${transaction.getBalance()}`
        } else {
          return `|| || ${transaction.getValue()} || ${transaction.getBalance()}`
        }
      }).join('')
    ].join('')
  }
};

module.exports = Account
