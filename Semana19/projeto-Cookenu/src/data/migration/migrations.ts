import { BaseDataBase } from "../BaseDataBase";

const dataBase = new BaseDataBase

dataBase.createTable()
.then(dataBase.closeConnection)