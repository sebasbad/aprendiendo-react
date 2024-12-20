import { useReducer, createContext } from 'react'
import { CART_REDUCER_ACTIONS, cartInitialState, cartReducer } from '../reducers/cartReducer'

// 1. crear conntexto
export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({ type: CART_REDUCER_ACTIONS.ADD_TO_CART, payload: product })

  const removeFromCart = product => dispatch({ type: CART_REDUCER_ACTIONS.REMOVE_FROM_CART, payload: product })

  const clearCart = () => dispatch({ type: CART_REDUCER_ACTIONS.CLEAR_CART })

  return {
    cart: state,
    addToCart,
    removeFromCart,
    clearCart
  }
}

// 2. crear provider
export function CartProvider ({ children }) {
  const { cart, addToCart, removeFromCart, clearCart } = useCartReducer()

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
