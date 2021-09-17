import { BaseDataBase } from "../SQL/BaseDataBase";

const baseDataBase = new BaseDataBase()

baseDataBase.createTable()
.then(baseDataBase.closeConnection)