import { selectTaskById } from "../../data/task/selectTaskById"

export const getTaskByIdBusiness = async (
   id: string
) => {
   const result = await selectTaskById(id)


   if (!result) {
      throw new Error("Tarefa não encontrada")
   }

   const taskWithUserInfo = {
      id: result.id,
      title: result.title,
      description: result.description,
      status: result.status,
      limit_date: result.limit_date,
      creator_user_id: result.creator_user_id,
      authorNickname: result.nickname
   }
   
   return taskWithUserInfo
}