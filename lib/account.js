function Account(){
  this._balance = 0
}

Account.prototype = {
  deposit: function(value){
    this._balance += value
  },

  balance: function(){
    return this._balance
  }
};

module.exports = Account
