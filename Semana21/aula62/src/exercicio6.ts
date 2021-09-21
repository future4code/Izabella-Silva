import { connection } from "."

export const createPost = async(post: any) => {
    await connection("test_created_post").insert(post)
}

export const getPostById =  async(id: string) => {
    const post = await connection("test_created_post")
    .select().where("id", "=", `${id}`)

    return post[0]
}

export const deletePostById = async(id: string) => {
    await connection("test_created_post").delete()
    .where("id","=", `${id}`)
}

export const destroyConnection = () => connection.destroy()