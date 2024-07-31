import { useState, useEffect, useRef } from 'react'
import './App.css'
// useRef es un hook que permite crear una referencia mutable que persiste
// durante todo el lifecycle del componente; muy útil para guardar datos
// mutables como un id, un elemento del DOM, un contador, etc. y que cada
// vez que cambia NO vuelve a renderizar el componente, NO dispara un nuevo
// renderizado; permite crear un valor mutable que persiste entre renderizados
// import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    // otro uso de useRef: ejecutar un código sólo la primera vez
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    // el set query es asíncrono, así que el valor de query
    // podría no estar actualizado en este punto
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}

function App () {
  const { search, setSearch, error } = useSearch()
  const { movies, getMoviwes } = useMovies({ search })

  console.log('render') //

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
    console.log({ search })
    getMoviwes(search)
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange} value={search} name='query' type='text' placeholder='Avengers, Star Wars, The Matrix ... '
          />
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
