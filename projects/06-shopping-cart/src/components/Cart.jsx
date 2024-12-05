import './Cart.css'
import { useId } from 'react'
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from './Icons'

export function Cart () {
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
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
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
