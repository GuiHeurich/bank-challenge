var Transaction = require('./transaction.js')
var AccountHistory = require('./accountHistory.js')
var newBalance

function Account () {
  this._balance = 0
  this._transactions = new AccountHistory()
}

Account.prototype = {
  deposit: function (value) {
    newBalance = this._balance += value
    this._transactions.add(new Transaction('credit', value, newBalance))
  },

  withdrawal: function (value) {
    newBalance = this._balance -= value
    this._transactions.add(new Transaction('debit', value, newBalance))
  },

  currentBalance: function () {
    return this._balance
  },

  printStatement: function () {
    var statement = Array.prototype.concat.apply([], this._transactions.statement())
    return statement.map(function (row) {
      return row
    })
  }
}

module.exports = Account
