import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts.js'

const CAR_ENDPOINNT_RANDOM_IMAGE_URL = 'https://api.thecatapi.com/v1/images/search'

function useCatImage () {
  return 'https://api.thecatapi.com/v1/images/search'
}

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const catImageUrl = useCatImage()

  // Importante conocer fetch pq a veces no se permite usar
  // React Query, SWR, axios, apollo
  // para recuperar la cita al cargar la paágina
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
    // getRandomFactAsyncAwait().then(setFact)
  }, /* la primera vez sólo */ [])

  // para recuperar la imagen cada vez que tenemos una cita nuneva
  useEffect(() => {
    if (!fact) { return }

    const firstWord = fact.split(' ')[0]
    const first3Words = fact.split(' ').slice(0, 3).join(' ')
    const first3WordsNoSlice = fact.split(' ', 3).join(' ')
    console.log(firstWord)
    console.log(first3Words)
    console.log(first3WordsNoSlice)

    fetch(CAR_ENDPOINNT_RANDOM_IMAGE_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const { url } = data[0]
        console.log(url)
        setImageUrl(url)
      })
  }, [fact])

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
