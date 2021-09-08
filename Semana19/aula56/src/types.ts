export enum ROLE{
   NORMAL = "NORMAL",
   ADMIN = "ADMIN"
}

export type user = {
   id: string
   email: string
   name: string
   nickname: string
}

export type AuthenticationData = {
   id: string,
   role: ROLE
}