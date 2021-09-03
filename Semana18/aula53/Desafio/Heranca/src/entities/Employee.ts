import { User } from "./User";

export class Employee extends User{
    static BENEFITS_VALUE: number = 400,
    constructor(
        protected admissinDate: string,
        protected baseSalary: number,
        id: string,
        email: string,
        name: string,
        password: string
    ){
        super(id,email,name, password)
    }

    getAdmissinDate(): string{
        return this.admissinDate
    }

    getBaseSalary(): number{
        return this.baseSalary
    }

    calculateTotalSalary(): number{
        return this.baseSalary + Employee.BENEFITS_VALUE;
    }
}