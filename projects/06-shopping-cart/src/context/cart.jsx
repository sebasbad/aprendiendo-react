import { useState, createContext } from 'react'

// 1. crear conntexto
export const CartContext = createContext()

// 2. crear provider
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {}
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart
    }}
    />
  )
}
