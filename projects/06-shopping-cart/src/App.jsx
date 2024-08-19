import { useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products'

function App () {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          filters.category === product.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <Products products={filteredProducts} />
  )
}

export default App
