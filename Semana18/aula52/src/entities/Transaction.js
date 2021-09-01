"use strict";
exports.__esModule = true;
exports.Transaction = void 0;
var Transaction = /** @class */ (function () {
    function Transaction(newDescription, newValue, newDate) {
        this.description = newDescription;
        this.value = newValue;
        this.date = newDate;
    }
    Transaction.prototype.getDescription = function () {
        return this.description;
    };
    Transaction.prototype.getValue = function () {
        return this.value;
    };
    Transaction.prototype.getDate = function () {
        return this.date;
    };
    Transaction.prototype.setDescription = function (newDescription) {
        this.description = newDescription;
    };
    Transaction.prototype.setValue = function (newValue) {
        this.value = newValue;
    };
    Transaction.prototype.setDate = function (newDate) {
        this.date = newDate;
    };
    return Transaction;
}());
exports.Transaction = Transaction;
