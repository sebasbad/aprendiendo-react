import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'
const CAR_ENDPOINNT_RANDOM_IMAGE_URL = 'https://api.thecatapi.com/v1/images/search'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Importante conocer fetch pq a veces no se permite usar
  // React Query, SWR, axios, apollo
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

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
      })
  }, /* la primera vez sólo */ [])

  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words from '${fact}'`} />}
    </main>
  )
}
