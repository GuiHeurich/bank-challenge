function Account(){
  this._balance = 0
  this._transactions = [];
}

Account.prototype = {
  deposit: function(value){
    this._balance += value
    this._transactions.push({name: "credit", value: value, balance: this._balance})
  },

  withdrawal: function(value){
    this._balance -= value
    this._transactions.push({name: "debit", value: value, balance: this._balance})
  },

  currentBalance: function(){
    return this._balance
  },

  printStatement: function (){
    return [
      "date || credit || debit || balance",
      this._transactions.map(function(transaction){
        if(transaction.name === "credit") {
          return `|| ${transaction.value} || || ${transaction.balance}`
        } else {
          return `|| || ${transaction.value} || ${transaction.balance}`
        }
      }).join('')
    ].join('')
  }
};

module.exports = Account
