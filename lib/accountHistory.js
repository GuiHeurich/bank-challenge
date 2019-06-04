function AccountHistory () {
  this._history = []
}

AccountHistory.prototype = {
  add: function (t) {
    this._history.push(t)
  },

  getHistoryOfTransactions: function () {
    return this._history
  },

  statement: function () {
    return [
      'date || credit || debit || balance',
      this._history.map(function (t) {
        if (t.getName() === 'credit') {
          return `${t.getDate()} || ${t.getValue()}.00 || || ${t.getBalance()}.00`
        } else {
          return `${t.getDate()} || || ${t.getValue()}.00 || ${t.getBalance()}.00`
        }
      }).reverse()
    ]
  }
}

module.exports = AccountHistory
