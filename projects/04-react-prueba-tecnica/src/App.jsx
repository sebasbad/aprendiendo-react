import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts.js'
import { useCatImage } from './hooks/useCatImage.js'
import './App.css'

const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
    // getRandomFactAsyncAwait().then(setFact)
  }

  // Importante conocer fetch pq a veces no se permite usar
  // React Query, SWR, axios, apollo
  // para recuperar la cita al cargar la paágina
  useEffect(refreshFact, /* la primera vez sólo */ [])

  return { fact, refreshFact }
}

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = refreshFact

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words from '${fact}'`} />}
    </main>
  )
}
