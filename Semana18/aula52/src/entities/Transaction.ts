export class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(newDescription: string, newValue:number, newDate:string){
        this.description = newDescription
        this.value = newValue
        this.date = newDate
    }

    getDescription(){
        return this.description
    }

    getValue(){
        return this.value
    }

    getDate(){
        return this.date
    }

    setDescription(newDescription: string){
        this.description = newDescription
    }

    setValue(newValue: number){
        this.value = newValue
    }

    setDate(newDate: string){
        this.date = newDate
    }
}