"use strict";
exports.__esModule = true;
var UserAccounts_1 = require("./entities/UserAccounts");
//01)
// a) Permite inicializar campos internos da classe e alocar recursos que um objeto da classe possa demandar
// é invocada com o new
//b) 1 vez
var user = new UserAccounts_1.UserAccount("111.111.111-11", "Izabella", 29);
//c) dentro da propria classe através do this
