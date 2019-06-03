function AccountHistory() {
  this._history = []
}

AccountHistory.prototype = {
  add: function(transaction){
    this._history.push(transaction)
  },

  getHistoryOfTransactions: function(){
    return this._history;
  }
};

module.exports = AccountHistory;
