import { PostBusiness } from "../src/business/PostBusiness"
import { ICreatePostInputDTO, IGetPostsInputDTO, Post } from "../src/models/Post"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PostDatabaseMock } from "./mocks/PostDatabaseMock"

describe ("Testando a PostBusiness", ()=> {
  const postBusiness = new PostBusiness (
    new PostDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock(),
  )

  test("Retorna uma lista de posts", async () => {
    const input: IGetPostsInputDTO = {
      token: "token-mock-normal"
    }

    const response = await postBusiness.getPosts(input)
    expect(response.posts.length).toBe(3)
    expect(response.posts[0]).toBeInstanceOf(Post)
  })

  test("Verifica se é possivel a criação de um novo post", async () => {
    const input: ICreatePostInputDTO = {
      token: "token-mock-normal",
      content: "Mock post"
    }

    const response = await postBusiness.createPost(input)
    expect(response.message).toBe("Post criado com sucesso")
    expect(response.post).toBeInstanceOf(Post)
    expect(response.post.getId()).toBe("id-mock")
    expect(response.post.getContent()).toBe("Mock post")
    expect(response.post.getLikes()).toBe(0)
    expect(response.post.getUserId()).toBe("id-mock")

  })
})