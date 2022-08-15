//a)
type Post = {
  author: string,
  text: string
}

const posts: Post[] = [
  {
    author: "Alvo Dumbledore",
    text: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    author: "Severo Snape",
    text: "Menos 10 pontos para Grifinória!"
  },
  {
    author: "Hermione Granger",
    text: "É levi-ô-sa, não levio-sá!"
  },
  {
    author: "Dobby",
    text: "Dobby é um elfo livre!"
  },
  {
    author: "Lord Voldemort",
    text: "Avada Kedavra!"
  }
]
console.table(posts)

//b)
function buscarPostsPorAutor(posts: Post[], autorInformado: string) {
  return posts.filter(
    (post) => {
      return post.author === autorInformado
    }
  )
}

console.log(buscarPostsPorAutor(posts, process.argv[2]))