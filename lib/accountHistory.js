function AccountHistory() {
  this._history = []
}

AccountHistory.prototype = {
  add: function(t){
    this._history.push(t)
  },

  getHistoryOfTransactions: function(){
    return this._history;
  },

  statement: function(){
    return [
      "date || credit || debit || balance",
      this._history.map(function(t){
        if(t.getName() === "credit") {
          return `${t.getDate()} || ${t.getValue()} || || ${t.getBalance()}`
        } else {
          return `${t.getDate()} || || ${t.getValue()} || ${t.getBalance()}`
        }
        }).join('')
      ].join('')
    }
  };

module.exports = AccountHistory;
