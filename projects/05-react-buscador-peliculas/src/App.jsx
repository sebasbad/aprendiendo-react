import { useState, useEffect } from 'react'
import './App.css'
// useRef es un hook que permite crear una referencia mutable que persiste
// durante todo el lifecycle del componente; muy útil para guardar datos
// mutables como un id, un elemento del DOM, un contador, etc. y que cada
// vez que cambia NO vuelve a renderizar el componente, NO dispara un nuevo
// renderizado; permite crear un valor mutable que persiste entre renderizados
// import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  // acceso a formularios
  // - de manera no controlada: accediendo directamente al DOM
  //   - ventajas: rapidez, no depende de react, etc.
  // - de manera controlada por react
  //   - desventajas: mucho más lento pq el código se ejecuta cada vez que
  //     se renderiza el componente
  //   - ventajas: acceso a los datos del formulario sin preocuparse por el DOM,
  //     validacinoes de formularios mucho más controladas

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    // validacione mediante use effect directamente con react
    // hay librerías que se encargan de estas cosas
    if (query === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' type='text' placeholder='Avengers, Star Wars, The Matrix ... ' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
