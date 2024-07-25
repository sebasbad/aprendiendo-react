import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFact = () => {
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
