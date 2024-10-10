import React, { useState } from 'react'
import { useSelector} from 'react-redux'
import { ShoppingCart } from 'tabler-icons-react'
import Cart from './Cart'

export default function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartItems = useSelector((state) => state.cart.items)

  const totalItems = cartItems.length

  return (
    <nav className="bg-amber-800 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl ">Meals</h1>
        <div className="relative">
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="flex items-center space-x-1 bg-amber-700 px-4 py-2 rounded hover:bg-amber-600 transition duration-300"
          >
            <span><ShoppingCart/></span>
            <span className="bg-amber-500 text-amber-900 px-2 py-1 rounded-full text-xs">
              {totalItems}
            </span>
          </button>
          {isCartOpen && (
            <Cart/>
          )}
        </div>
      </div>
    </nav>
  )
}