import { UserAccount } from "./UserAccounts"

export class Bank{
    private accounts: UserAccount[]

    constructor(newAccounts: UserAccount[]){
        this.accounts = newAccounts
    }

    getAccounts(){
        return this.accounts
    }

    setAccounts(newAccounts: UserAccount[]){
        this.accounts = newAccounts
    }
}