import './App.css'
// useRef es un hook que permite crear una referencia mutable que persiste
// durante todo el lifecycle del componente; muy útil para guardar datos
// mutables como un id, un elemento del DOM, un contador, etc. y que cada
// vez que cambia NO vuelve a renderizar el componente, NO dispara un nuevo
// renderizado
import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()

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
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
