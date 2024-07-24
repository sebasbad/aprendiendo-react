import { useEffect, useState } from 'react'

export function App () {
  const [fact, setFact] = useState('lorem ipsum cat fact whatever')

  // Importante conocer fetch pq a veces no se permite usar
  // React Query, SWR, axios, apollo
  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, /* la primera vez sólo */ [])

  return (
    <main>
      <h1>App de gatitos</h1>
      <p>{fact}</p>
    </main>
  )
}
