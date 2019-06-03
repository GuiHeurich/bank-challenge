var Transaction = require('./transaction.js')

function Account(){
  this._balance = 0
  this._transactions = [];
}

Account.prototype = {
  deposit: function(value){
    this._balance += value
    this._transactions.push(new Transaction("credit", value, this._balance))
  },

  withdrawal: function(value){
    this._balance -= value
    this._transactions.push(new Transaction("debit", value, this._balance))
  },

  currentBalance: function(){
    return this._balance
  },

  printStatement: function (){
    return [
      "date || credit || debit || balance",
      this._transactions.map(function(transaction){
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
