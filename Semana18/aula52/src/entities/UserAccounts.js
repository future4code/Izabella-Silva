"use strict";
exports.__esModule = true;
exports.UserAccount = void 0;
var UserAccount = /** @class */ (function () {
    function UserAccount(cpf, name, age) {
        this.balance = 0;
        this.transactions = [];
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.getCpf = function () {
        return this.cpf;
    };
    UserAccount.prototype.getName = function () {
        return this.name;
    };
    UserAccount.prototype.getAge = function () {
        return this.age;
    };
    UserAccount.prototype.getBalance = function () {
        return this.balance;
    };
    UserAccount.prototype.getTransactions = function () {
        return this.transactions;
    };
    UserAccount.prototype.setCpf = function (newCPF) {
        this.cpf = newCPF;
    };
    UserAccount.prototype.setName = function (newName) {
        this.name = newName;
    };
    UserAccount.prototype.setAge = function (newAge) {
        this.age = newAge;
    };
    UserAccount.prototype.setBalance = function (newBalance) {
        this.balance = newBalance;
    };
    UserAccount.prototype.setTransactions = function (newTransaction) {
        this.transactions = newTransaction;
    };
    return UserAccount;
}());
exports.UserAccount = UserAccount;
