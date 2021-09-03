export type UserDb = {
    id: string,
    name: string,
    email: string,
    age: number
}

export type ProductDB = {
    id: string,
    name: string,
    description: string,
    price: number,
    travelOrigin?: string,
    travelDestination?: string
}