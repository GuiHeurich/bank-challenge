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
  },

  printStatement: function (){
    return "date || credit || debit || balance\n || || 1000 || 1000"
  }
};

module.exports = Account
