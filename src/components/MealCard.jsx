import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'


function MealCard({meal}) {

    const dispatch = useDispatch()

    return (
        <div key={meal.id} className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-all">
            <img src={meal.image} alt={meal.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl  text-amber-900 ">{meal.name}</h2>
                <p className="text-gray-600 mt-2 ">${meal.price.toFixed(2)}</p>
                <button
                    onClick={() => dispatch(addToCart(meal))}
                    className="mt-4 bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition duration-300 "
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default MealCard;