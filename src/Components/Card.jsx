/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
import React, { useContext, useEffect } from 'react'
import { CartContext } from './context/ShoppingCartContext';
const products = [
  {
    id: 1,
    name: 'Diriyah',
    href: '#',
    imageSrc: 'https://media.zid.store/bda63855-f7ff-4be7-bd9f-1d497a22336c/7cad1f3f-ab5a-4c42-888f-71b8127c4133.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '193.00 ر.س',
    color: '',
  },
  // More products...
]
const Card = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="bg-h">
      <div className="text-center">
        <h1> Shuja Perfumes </h1>
        <p className="p"> مجموعة عطور شجاع </p>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="card-container mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="card bg-white">
              <div className="aspect-h-1 aspect-w-1  h-20 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="img-top-2  object-cover object-center "
                />
              </div>
              <div className="mt-4 text-center m-4">
                <div>
                  <h3 className="text-sm text-slate-950">
                    <a href={product.href}>
                      <span aria-hidden="true" className="" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-slate-950">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-red-600">
                  {product.price}
                </p>
              </div>
              <div
                className="w-full flex justify-end items-center"
                onMouseEnter={() => {
                  // Add hover effect here
                }}
                onMouseLeave={() => {
                  // Remove hover effect here
                }}
              >
                <div className="d">
                  <div className="il"><a
                    href="javascript:void(0)"
                    data-modal="#stt-modal-product-preview"
                    data-toggle="stt-modal"
                    className="btn-wc-additional wooler-preview-button"
                    data-product-id="e7a9cdcc-be63-4763-9596-236262067e46"
                    data-wl-tooltip="Preview"
                    data-wl-tooltip-placement="left"
                    tabindex="-1"
                  >
                    <i className="fa-regular fa-circle-question"></i>
                  </a>
                  </div>
                  <div>

                    <button onClick={() => addToCart(product)} className="bg-gray-200 text-gray-500 py-2 px-4 rounded-md btn2">
                      أضف للسلة
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Card