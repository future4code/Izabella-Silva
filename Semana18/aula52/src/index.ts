
import { UserAccount } from "./entities/UserAccounts";

//01)
// a) Permite inicializar campos internos da classe e alocar recursos que um objeto da classe possa demandar
// é invocada com o new

//b) 1 vez

const user = new UserAccount("111.111.111-11", "Izabella", 29)

//c) dentro da propria classe através do this