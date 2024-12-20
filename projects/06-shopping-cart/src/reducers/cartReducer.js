export const cartInitialState = []

export const CART_REDUCER_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
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
        return newState
      }

      return [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1
        }
      ]
    }
    case CART_REDUCER_ACTIONS.REMOVE_FROM_CART: {
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }
    case CART_REDUCER_ACTIONS.CLEAR_CART: {
      return cartInitialState
    }
  }
  return state
}
