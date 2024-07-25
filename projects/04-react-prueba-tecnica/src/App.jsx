import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts.js'
import { useCatImage } from './hooks/useCatImage.js'
import './App.css'

export function App () {
  const [fact, setFact] = useState()
  const { imageUrl } = useCatImage({ fact })

  // Importante conocer fetch pq a veces no se permite usar
  // React Query, SWR, axios, apollo
  // para recuperar la cita al cargar la paágina
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
    // getRandomFactAsyncAwait().then(setFact)
  }, /* la primera vez sólo */ [])

  const handleClick = async () => {
    // const newFact = await getRandomFactAsyncAwait()
    // const newFact = await getRandomFact()
    // setFact(newFact)
    getRandomFact().then(newFact => setFact(newFact))
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words from '${fact}'`} />}
    </main>
  )
}
