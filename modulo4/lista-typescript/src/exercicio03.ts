enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type movie = {
  name: string, 
  year: number, 
  genre: GENERO, 
  rating: number
}

function createMovie (name: string, year: number, genre: GENERO, rating?: number): movie {
  return {
    name: name,
    year: year,
    genre: genre,
    rating: rating
  }
}

console.log(createMovie("Drive", 2011, GENERO.ACAO, 93))