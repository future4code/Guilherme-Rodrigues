import { connection } from "../connection";

export const selectTaskById = async (
   id: string
): Promise<any> => {
   const result = await connection.raw(`
        SELECT tasks.*, nickname FROM TodoListTask AS tasks
        JOIN TodoListUser AS users
        ON creator_user_id = users.id
        WHERE tasks.id = '${id}';
    `)
   return result[0][0]
}