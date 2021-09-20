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

export type PuchasesDB = {
    "purchase_id": string,
    "product_id": string,
    "user_id": string,
    "quantity": number,
    "total_amount": number
}