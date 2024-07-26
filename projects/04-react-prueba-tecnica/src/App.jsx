import { useCatFact } from './hooks/useCatFact.js'
import { useCatImage } from './hooks/useCatImage.js'
import './App.css'
import { Otro } from './Components/Otro.jsx'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = refreshFact

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words from '${fact}'`} />}
    </main>
  )
}
