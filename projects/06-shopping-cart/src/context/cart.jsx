import { useReducer, createContext } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cartReducer'

// 1. crear conntexto
export const CartContext = createContext()

// 2. crear provider
export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({ type: 'ADD_TO_CART', payload: product })

  const removeFromCart = product => dispatch({ type: 'REMOVE_TO_CART', payload: product })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
