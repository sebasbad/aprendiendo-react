import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'
const CAR_ENDPOINNT_RANDOM_IMAGE_URL = 'https://api.thecatapi.com/v1/images/search'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [factError, setFactError] = useState()

  // Importante conocer fetch pq a veces no se permite usar
  // React Query, SWR, axios, apollo
  // para recuperar la cita al cargar la paágina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
      .then(res => {
        if (!res.ok) {
          setFactError('No se ha podido recuperar la cita')
        }

        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
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

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words from '${fact}'`} />}
    </main>
  )
}
