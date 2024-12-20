export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_REDUCER_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

// update local storage state for cart
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_REDUCER_ACTIONS.ADD_TO_CART: {
      const { id } = actionPayload
      // check if product already in the cart
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        // producto ya está en el carritp
        // una forma sería usando structuredClone
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalStorage(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }
    case CART_REDUCER_ACTIONS.REMOVE_FROM_CART: {
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }
    case CART_REDUCER_ACTIONS.CLEAR_CART: {
      updateLocalStorage(cartInitialState)
      return cartInitialState
    }
  }
  return state
}
