export class DogWalk {
    
    constructor(
        private id: string,
        private date: Date,
        private price: number,
        private duration: number,
        private latitude: string,
        private longitude: string,
        private numberOfPets: number,
        private startTime: number,
        private endTime: number,
        private status?: string,
        private startWalk?: Date,
        private finishWalk?: Date,

    ){}

    public getId(): string{
        return this.id
    }

    public getDate(): Date{
        return this.date
    }

    public getPrice(): number{
        return this.price
    }

    public getDuration(): number{
        return this.duration
    }

    public getLatitude(): string{
        return this.latitude
    }

    public getLongitude(): string{
        return this.longitude
    }

    public getNumberOfPets(): number{
        return this.numberOfPets
    }

    public getStartTime(): number{
        return this.startTime
    }

    public getEndTime(): number{
        return this.endTime
    }

    public getStatus(): string | undefined{
        return this.status
    }

    public getStartWalk(): Date | undefined{
        return this.startWalk
    }

    public getFinishWalk(): Date | undefined{
        return this.finishWalk
    }

    public static toDogWalk(data?: any): DogWalk{
        return(data && new DogWalk(
            data.id,
            data.date,
            data.price,
            data.duration,
            data.latitude,
            data.longitude,
            data.numberOfPets || data.number_of_pets,
            data.startTime || data.start_time,
            data.endTime || data.end_time,
            data.status,
            data.startWalk || data.start_walk,
            data.finishWalk || data.finish_walk,
        ))
    }
}

export interface DogWalkInputDTO{
    date: string,
    duration: number,
    latitude: string,
    longitude: string,
    numberOfPets: number,
    startTime: number,
    endTime: number
}


export interface DogWalkOutputDTO{
    id: string,
    date: Date,
    price: number,
    duration: number,
    latitude: string,
    longitude: string,
    number_of_pets: number,
    start_time: number,
    end_time: number,
    status: string,
    start_walk?: Date,
    finish_walk?: Date
}