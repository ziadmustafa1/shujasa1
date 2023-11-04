/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useCart } from 'react-use-cart';
import { CartContext } from './context/ShoppingCartContext';
import { useContext } from 'react';
const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const { items = [] } = cart;
  return (
    <div>
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {items.map((item, index) => (
              <li key={index} className="flex py-6">
                <div className="h-auto w-36 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mr-4">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-center ml-5"
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col mt-14">
                  <div>
                    <div className="md:flex justify-evenly text-base font-medium text-gray-900">
                      <h3 className="flex justify-evenly">
                        {item.name}
                      </h3>
                      <p className="ml-4 flex justify-evenly text-red-600 mt-4 mb-4 md:mt-0 md:mb-0">{item.price}</p>
                      <button onClick={() => removeFromCart(item)} className="text-gray-500 hover:text-red-600 mr-28 md:mr-0"><i className="fa-regular fa-trash-can"></i> </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6 z-10">
        <div className="flex justify-between text-base font-medium text-gray-900">
          المبلغ الاجمالي {" "}
          ${cart.cartTotal.toFixed(2)}
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6">
          <a
            href="#"
            className="btn-c flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            إنتقل للتوصيل والدفع
          </a>
        </div>
      </div>
    </div>
  )
}
export default Cart
