function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
        // mala práctiva: este componente está muy acoplado a
        // la estructura de la respuesta de la api
        movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResult () {
  return (
    <p>No se encontraron película para esta búsqueda</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResult />
  )
}
