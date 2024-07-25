const CAT_ENDPOINT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'

export const getRandomFact = (setFact) => {
  fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
    .then(res => { return res.json() })
    .then(data => {
      const { fact } = data
      setFact(fact)
    })
}