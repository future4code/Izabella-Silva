import { createPost, deletePostById, destroyConnection, getPostById } from "../src/exercicio6"

describe("Testando criação de post", () => {
    test("Create Post", async() => {
        const post = {
            id: "1",
            title: "TEST",
            content: "testando criação de post"
        }

        await createPost(post)
        const postFromDB = await getPostById(post.id)

        expect(postFromDB).not.toBe(undefined)
        expect(postFromDB).toEqual({
            id:"1",
            title: "TEST",
            content: "testando criação de post"
        })

        afterAll(async () => {
            await deletePostById(post.id)
            await destroyConnection()
        })
    })

    test("Create the same post", async() => {
        try {
            const post = {
              id: "id do post",
              title: "Título",
              content: "Conteúdo",
            };
        
            await createPost(post);
            await createPost(post);
          } catch (err) {
            expect(err).not.toBe(undefined)
          }
    })
})