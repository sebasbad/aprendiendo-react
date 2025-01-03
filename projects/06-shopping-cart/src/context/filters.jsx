import { createContext, useState } from 'react'

// 1. Crear el Contexto
// Este es el que tenemos que consumir
export const FiltersContext = createContext()

// 2. Crear el Provider, para proveer el contexto
// Este es el que nos provee acceso al contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 10
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
