import withResults from '../mocks/with-results.json'
import noResults from '../mocks/no-results.json'
import { useState } from 'react'

export function useMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMoviwes = () => {
    if (search) {
      // setResponseMovies(withResults)
      fetch(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
        .then(res => res.json())
        .then(json => setResponseMovies(json))
    } else {
      setResponseMovies(noResults)
    }
  }

  return { movies: mappedMovies, getMoviwes }
}
