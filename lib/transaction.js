var dateFormat = require('dateformat')

function Transaction(date, name, value, balance){
  this._date = date
  this._name = name
  this._value = value
  this._accountBalance = balance
}

Transaction.prototype = {
  getDate: function(){
    date = dateFormat(this._date, "dd/mm/yy")
    return date;
  },

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
