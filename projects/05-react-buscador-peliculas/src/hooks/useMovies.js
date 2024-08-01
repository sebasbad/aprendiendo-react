import { useState, useRef, useMemo, useEffect } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useMemo(() => {
    return async ({ search }) => {
      if (search === previousSearch.current) { return }

      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setError(e.mssage)
      } finally {
      // tanto en el try como en el catch
        setLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    console.log('new getMovies received')
  }, [])

  // const getSortedMovies = () => {
  //   console.log('getSortedMovies')

  //   const sortedMovies = sort
  //     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //     : movies

  //   return sortedMovies
  // }

  // utilizar useMemo con mesura: sólo si hay problemas de rendimiento, etc.
  const sortedMovies = useMemo(() => {
    console.log('memoSortedMovies')
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading, error }
}
