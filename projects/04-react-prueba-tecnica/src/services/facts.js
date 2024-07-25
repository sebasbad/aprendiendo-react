const CAT_ENDPOINT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
    .then(res => { return res.json() })
    .then(data => {
      const { fact } = data
      return fact
    })
}

export const getRandomFactAsyncAwait = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
  const data = await res.json()
  const { fact } = data
  return fact
}
