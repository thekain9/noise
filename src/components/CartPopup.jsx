import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from '../utils/state/cartslice';
// import { StaticReadUsage } from "three";

const CartPopup = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const groupedItems = cartItems.reduce((acc, item) => {
        if (!acc[item.id]) {
          acc[item.id] = { ...item, count: 1 };
        } else {
          acc[item.id].count += 1;
        }
        return acc;
      }, {});

    const handleRemoveFromCart = (id) => {
        dispatch(removeItemFromCart(id));
       }


return (
    <div >
      {Object.keys(groupedItems).length > 0 ? (
        <ul className="space-y-4">
        {Object.values(groupedItems).map((item) => (
                        <li key={item.id} className="flex items-center space-x-4">
                            <div className="relative">
                                <img src={item.img} alt={item.title} className="w-12 h-12 object-cover rounded-md" />
                                {item.count > 1 && (
                                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                                        {item.count}
                                    </span>
                                )}
                                </div>
              <div className="flex-1">
                <p className="text-gray-800 font-semibold">{item.title}</p>
                <p className="text-gray-600">£{item.price}</p>
              </div>
              <button
                className="text-sm text-red-500 hover:underline"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPopup;