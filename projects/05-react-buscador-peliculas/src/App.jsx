import './App.css'
import withResults from './mocks/with-results.json'
import noResults from './mocks/no-results.json'

function App () {
  const movies = withResults.Search
  const hasMovies = movies?.length > 0

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <input type='text' placeholder='Avengers, Star Wars, The Matrix ... ' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {
        hasMovies
          ? (
            <ul>
              {
              movies.map(movie => (
                <li key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  <img src={movie.Poster} alt={movie.Title} />
                </li>
              ))
            }
            </ul>
            )
          : (
            <p>No se encontraron película para esta búsqueda</p>
            )
       }
      </main>
    </div>
  )
}

export default App
