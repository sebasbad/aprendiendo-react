import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'
// const CAR_ENDPOINNT_RANDOM_IMAGE_URL = 'https://api.thecatapi.com/v1/images/search'

export function App () {
  const [fact, setFact] = useState()

  // Importante conocer fetch pq a veces no se permite usar
  // React Query, SWR, axios, apollo
  //   useEffect(() => {
  //     fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
  //       .then(res => res.json())
  //       .then(data => setFact(data.fact))
  //   }, /* la primera vez sólo */ [])

  useEffect(() => {
    async function getRandomCatFact () {
      const res = await fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
      const json = await res.json()
      setFact(json.fact)
    }

    getRandomCatFact()
  }, /* la primera vez sólo */ [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact ?? <p>{fact}</p>}
    </main>
  )
}
