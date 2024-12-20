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

const UPDATE_STATE_BY_ACTION = {
  [CART_REDUCER_ACTIONS.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    // check if product already in the cart
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) {
      // producto ya está en el carrito
      // una forma sería usando structuredClone (el más legible)
      // const newState = structuredClone(state)
      // newState[productInCartIndex].quantity += 1

      // usando map (el más conocido)
      //   const newState = state.map(item => {
      //     if (item.id === id) {
      //       return {
      //         ...item,
      //         quantity: item.quantity + 1
      //       }
      //     }
      //     return item
      //   })

      // updando spread operator y slice (el más rápido ?)
      const newState = [
        ...state.slice(0, productInCartIndex),
        {
          ...state[productInCartIndex],
          quantity: state[productInCartIndex].quantity + 1
        },
        ...state.slice(productInCartIndex + 1)
      ]

      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload, // product
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
  },
  [CART_REDUCER_ACTIONS.REMOVE_FROM_CART]: (state, action) => {
    console.log(state, action)
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  [CART_REDUCER_ACTIONS.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  }
}

export const cartReducer = (state, action) => {
  const { type: actionType } = action

  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
