import { useState, useEffect } from 'react'
const CAR_ENDPOINNT_RANDOM_IMAGE_URL = 'https://api.thecatapi.com/v1/images/search'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

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

  return { imageUrl, fact }
}
