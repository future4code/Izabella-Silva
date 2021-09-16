export enum POST_TYPE{
    NORMAL = "normal",
    EVENT = "event"
}

export interface Post{
    id: string,
    image: string,
    description: string,
    criation_date: Date,
    type: string,
    user_id: string
}