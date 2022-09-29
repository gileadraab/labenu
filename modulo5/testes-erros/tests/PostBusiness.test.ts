import { PostBusiness } from "../src/business/PostBusiness"
import { BaseError } from "../src/errors/BaseError"
import { ICreatePostInputDTO, IGetPostsInputDTO, Post } from "../src/models/Post"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PostDatabaseMock } from "./mocks/PostDatabaseMock"

describe("Testando a PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Deve retornar uma lista de posts", async () => {
        const input: IGetPostsInputDTO = {
            token: "token-mock-normal"
        }

        const response = await postBusiness.getPosts(input)
        expect(response.posts.length).toBe(3)
        expect(response.posts[0]).toBeInstanceOf(Post)
    })

    test("Deve ser possível criar um novo post", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock-normal",
            content: "Teste do mock"
        }

        const response = await postBusiness.createPost(input)

        expect(response.message).toBe("Post criado com sucesso")
        expect(response.post).toBeInstanceOf(Post)
        expect(response.post.getId()).toBe("id-mock")
        expect(response.post.getContent()).toBe("Teste do mock")
        expect(response.post.getLikes()).toBe(0)
        expect(response.post.getUserId()).toBe("id-mock")
    })

    //ERROS CREATE POST
    test("Erro na criação de post quando não for fornecido um token válido na autenticação", async () => {
        expect.assertions(2)

        try {
            const input: ICreatePostInputDTO = {
                token: "token-invalido",
                content: "bananinha123"
            }

            await postBusiness.createPost(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    })

    test("Erro no na criação quando 'content' for diferente do tipo string", async () => {
        expect.assertions(2)

        try {
            const input = {
                token: "token-mock-normal",
                content: 123456
            } as any

            await postBusiness.createPost(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'content' inválido")
            }
        }
    })
    
    test("Erro no na criação quando 'content' nao possuir conteudo", async () => {
        expect.assertions(2)

        try {
            const input: ICreatePostInputDTO = {
                token: "token-mock-normal",
                content: ""
            }

            await postBusiness.createPost(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'content' inválido: mínimo de 1 caracteres")
            }
        }
    })

    //ERROS GET POST
    test("Erro na busca quando não for fornecido um token válido na autenticação", async () => {
        expect.assertions(2)

        try {
            const input: IGetPostsInputDTO = {
                token: "token-invalido",
            }

            await postBusiness.getPosts(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    })

    

})