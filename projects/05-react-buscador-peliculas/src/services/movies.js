const API_KEY = import.meta.env.VITE_OMDBAPI_API_KEY

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const res = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
    const json = await res.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch {
    throw new Error('Error searching movies')
  }
}
