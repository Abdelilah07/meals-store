import { useSelector, useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity } from '../redux/cartSlice'
import { Plus, Minus } from 'tabler-icons-react'

export default function Cart() {

  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl text-gray-800">
      {cartItems.length === 0 ? (
        <p className="p-4">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 border-b">
              <div>
                <p className="">{item.name}</p>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="bg-amber-500 text-white p-1 rounded-full"
                >
                  <Minus/>
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="bg-amber-500 text-white p-1 rounded-full"
                >
                  <Plus/>
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center p-4 bg-amber-500 rounded-b">
            Total: ${totalPrice.toFixed(2)}
            <button
              className="text-amber-50 bg-amber-700 px-4 py-2 rounded hover:bg-amber-600 transition duration-300"
            >
              Order
            </button>
          </div>
        </div>
      )}
    </div>
  )
}