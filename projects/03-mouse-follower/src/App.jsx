import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('effect', [enabled])

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', clientX, clientY)
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // la función devuelta se ejecuta cuando se desmonte el componente
    // asociado a este useEffect y cada vez que cambie la dependencia del useEffect
    return () => {
      // aquí el código para limpiar el efecto
      window.removeEventListener('pointermove', handleMove)
      // en la consola del navegador se pueden ver las suscripciones
      // a los eventos de un objeto: getEventListeners(window)
    }
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
