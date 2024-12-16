import { useState, createContext } from 'react'

// 1. crear conntexto
export const CartContext = createContext()

// 2. crear provider
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    // check if product already in the cart
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      // producto ya está en el carritp
      // una forma sería usando structuredClone
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // producto no está en el carritp
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = product => {
    return setCart(cart.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
