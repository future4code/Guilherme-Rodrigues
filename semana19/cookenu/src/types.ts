export type user = {
   id: string
   name: string
   email: string
   password: string
}

export interface AuthenticationData {
   id: string
}

export type recipe = {
   id: string
   title: string
   description: string
   user_id: string
   created_at: number
}