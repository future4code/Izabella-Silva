import { CreateBusiness } from "../src/business/CreateBusiness"
import { WalkBusiness } from "../src/business/WalkBusiness"
import { DogWalk, DogWalkInputDTO } from "../src/model/DogWalk"

const request = require("supertest")
const app = require("../src/server")

const createDataBase = {
    createWalk: jest.fn(async (dogWalk: DogWalk) => {}),
    getElementById: jest.fn(async(id: string) =>{
        if(id === "1"){
            return DogWalk.toDogWalk({
            id: "1",
            date: "21/11/2021",
            price: 25,
            duration: 30,
            latitude: "-16.7502595",
            longitude: "-43.8577682,15z",
            number_of_pets: 1,
            start_time: "09:00:00",
            end_time: "09:30:00",
            status: "PENDENTE",
            start_walk: "1634163493981",
            finish_walk: "1634164471085",
            })
        }else{
            throw new Error("Passeio não encontrado pelo id informado")
        }
    }),
    insertStartWalk: jest.fn(async(id: string, startWalk: number) => {}),
    insertFinishWalk: jest.fn(async(id: string, finishWalk: number) => {}),
    updateStatus: jest.fn(async(id:string, status: string) => {})
}

const idGenerator = {
    generate: jest.fn(() => "1265444584586")
}

const createDogBusiness = new CreateBusiness(
    idGenerator as any,
    createDataBase as any
)

const walkDogBusiness = new WalkBusiness(createDataBase as any)

describe("Test Create Walk", () => {
    it("Error when date field is empty", async() => {
        expect.assertions(2)

        const res = await request(app)
        .post("/dog-walk/create")
        .send({
            date: "",
            duration: 30,
            latitude: "-16.7502595",
            longitude: "-43.8577682,15z",
            numberOfPets: 2,
            startTime: "14:30:00",
            endTime: "15:00:00"
        })

        expect(res.statusCode).toEqual(400)
        expect(res.text).toBe("Os campos 'date', 'duration', 'latitude', 'longitude', 'numberOfPets', 'startTime' e 'endTime' são obrigatórios")
    })

    it("Create Walk Success", async() => {
        expect.assertions(1)

        const walk = {
            date: "25/11/2021",
            duration: 30,
            latitude: "-16.7502595",
            longitude: "-43.8577682,15z",
            numberOfPets: 2,
            startTime: "14:30:00",
            endTime: "15:00:00"
        } as DogWalkInputDTO

        const result = await createDogBusiness.createWalk(walk)
        expect(result.message).toBe("Passeio criado com sucesso")
       
    })
})

describe("start, finish and see walk", () => {
    it("Error when id is not exist", async() => {
        expect.assertions(1)
        const id = "2"

        try{
            await walkDogBusiness.showWalking(id)
        }catch(error: any){
            expect(error.message).toBe("Passeio não encontrado pelo id informado")
        }
    })

    it("Success when insert start walk", async() => {
        expect.assertions(1)
        const id = "1"

        const result = await walkDogBusiness.startWalk(id)
       
        expect(result.message).toBe("Inicio da caminhada inserida com sucesso")
    })

    it("Success when insert finish walk", async() => {
        expect.assertions(1)
        const id = "1"

        const result = await walkDogBusiness.finishWalk(id)
       
        expect(result.message).toBe("Término da caminhada inserida com sucesso")
    })

    it("Success when insert show walk", async() => {
        expect.assertions(1)
        const id = "1"

        const result = await walkDogBusiness.showWalking(id)
       
        expect(result.walkDuration).toBe("00:16:17")
    })

})