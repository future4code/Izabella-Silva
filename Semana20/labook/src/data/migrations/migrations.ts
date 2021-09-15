import { BaseDataBase } from "../BaseDataBase";

const baseDataBase = new BaseDataBase()

baseDataBase.createTable()
.then(baseDataBase.closeConnection)