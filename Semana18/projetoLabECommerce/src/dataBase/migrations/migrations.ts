import { BaseDataBase } from "../BaseDataBase";

const dataBase = new BaseDataBase()

dataBase.createTables()
    .then(dataBase.insertUsers)
    .then(dataBase.insertProduct)
    .then(dataBase.closeConnection)