/* eslint-disable no-unused-vars */
import { StarIcon } from '@heroicons/react/20/solid'
import QuantityInput from './from'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from './context/ShoppingCartContext';
import { useParams } from 'react-router-dom';


const route = window.location.pathname;
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const CardDetails = () => {
  const api_url = "https://bak-end-shujasa.onrender.com/posts";
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <div className="bg-h">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <div className="flex items-center">
                  <a href="#" className="mr-2 text-sm font-medium text-gray-900">  Shuja Collection </a>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a href="#" className="mr-2 text-sm font-medium text-gray-900"> الرئيسية  </a>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600"> {product.name} </a>
              </li>
            </ol>
          </nav>
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 d-s lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            {/* Product info */}
            <div className="w-g1 md:block aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              {product.images && product.images.length >= 4 && (
                <img
                  src={product.images[3].src}
                  alt={product.images[3].alt}
                  className="w-h object-cover object-center"
                />
              )}
            </div>
            <div className="mx-auto text-center max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
              <div className='bg-white p-10 rounded-2xl'>
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                </div>
                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-red-500">{product.price}</p>
                  {/* Reviews */}
                  <div className="mt-6 flex justify-center">
                    <h3 className="sr-only"> آراء المتسوقين  </h3>
                    <div className="">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only pb-3">{reviews.average} out of 5 stars</p>
                      <a href={reviews.href} className="ml-3 pt-3 text-sm font-medium text-gray-500 hover:text-gray-400">
                        {reviews.totalCount}  آراء المتسوقين
                      </a>
                    </div>
                  </div>
                  <form className="mt-10">
                    <QuantityInput />
                    <button
                      onClick={() => addToCart(product)}
                      type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-ad px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      أضف للسلة
                    </button>
                  </form>
                  <div className='m mt-7'> وسائل دفع أمنة 100%
                    <div className='logo'>
                      <img className='w-3' src="https://assets.zid.store/themes/0f6ed6db-c6f5-45cb-a798-6f221d6a2f97/PaymentMethods.svg" alt="PaymentMethods" width="350" height="auto" />
                    </div></div>
                </div>
                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  {/* Description and details */}
                </div>
              </div>
              <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg">
                {product.images && product.images.length >= 4 && (
                  <img
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    className="w-h object-cover object-center"
                  />
                )}
              </div>
              <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  {product.images && product.images.length >= 4 && (
                    <img
                      src={product.images[1].src}
                      alt={product.images[1].alt}
                      className="w-h object-cover object-center"
                    />
                  )}
                </div>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  {product.images && product.images.length >= 4 && (
                    <img
                      src={product.images[2].src}
                      alt={product.images[2].alt}
                      className="w-h object-cover object-center"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="w-g aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              {product.images && product.images.length >= 4 && (
                <img
                  src={product.images[3].src}
                  alt={product.images[3].alt}
                  className="w-h object-cover object-center"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails