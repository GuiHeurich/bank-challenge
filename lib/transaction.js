function Transaction(name, value, balance){
  this._name = name
  this._value = value
  this._accountBalance = balance
}

Transaction.prototype = {
  getName: function(){
    return this._name;
  },

  getValue: function(){
    return this._value;
  },

  getBalance: function(){
    return this._accountBalance;
  }
};

module.exports = Transaction;
