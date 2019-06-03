function AccountHistory() {
  this._history = []
}

AccountHistory.prototype = {
  add: function(transaction){
    this._history.push(transaction)
  },

  getHistoryOfTransactions: function(){
    return this._history;
  },

  statement: function(){
    return [
      "date || credit || debit || balance",
      this._history.map(function(transaction){
        if(transaction.getName() === "credit") {
          return `|| ${transaction.getValue()} || || ${transaction.getBalance()}`
        } else {
          return `|| || ${transaction.getValue()} || ${transaction.getBalance()}`
        }
        }).join('')
      ].join('')
    }
  };

module.exports = AccountHistory;
