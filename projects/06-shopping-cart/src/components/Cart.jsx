import './Cart.css'
import { useId, useContext } from 'react'
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

function CartItem () {
  return (
    <li>
      <img
        src='https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png' alt='powder'
      />
      <div>
        <strong>Powder</strong> - $14,99
      </div>
      <footer>
        <small>
          Qty: 1
        </small>
        <button>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const { clearCart } = useCart()
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <CartItem />
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
