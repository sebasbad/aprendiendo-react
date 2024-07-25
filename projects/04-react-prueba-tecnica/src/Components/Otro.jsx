import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageUrl, fact } = useCatImage({ fact: 'Random cat' })

  return (
    <>
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words from '${fact}'`} />}
    </>
  )
}
