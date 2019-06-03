function Account(){
  this._balance = 0
}

Account.prototype = {
  deposit: function(value){
    this._balance += value
  },

  withdrawal: function(value){
    this._balance -= value
  },

  currentBalance: function(){
    return this._balance
  }
};

module.exports = Account
