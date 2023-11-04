/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */

import React, { useContext } from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartContext } from './context/ShoppingCartContext'
const products = [
  { name: 'Shuja Hair Mists', description: '', href: 'shuja-hair-mists' },
  { name: 'Shuja Collection', description: '', href: 'shuja-collection' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Header2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cart } = useContext(CartContext);
  return (
    <header className="bg-white sticky top-0 z-10">
      <nav className="mx-auto px-10 flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className='md:block hidden'>
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-16 w-auto" src="https://assets.zid.store/themes/0f6ed6db-c6f5-45cb-a798-6f221d6a2f97/ShujaGreen.svg" alt="" />
            </a>
            <Popover.Group className="hidden lg:flex lg:gap-x-12 pt-5 pr-16">
              <a href="/" className="text-sm font-semibold leading-6 text-gray-500">
                الرئيسية
              </a>
              <Popover className="relative">

                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-500">
                  التصنيفات
                  <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4 flex justify-center">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-500">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </Popover.Group></div></div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/login" className="text-xl pl-4 font-semibold leading-6">
            <i className="fa-regular fa-user" style={{ color: '#5f5f5f' }}></i>
          </a>
          <div className='relative'>
            <Link to="cart">
              <span className='bg-n'> {cart.itemsCount} </span>
              <img className='h-6 w-6' src='https://assets.zid.store/themes/0f6ed6db-c6f5-45cb-a798-6f221d6a2f97/cart.png' />
            </Link></div> </div>
        <a href="/" className="-m-1.5 p-1.5 md:hidden">
          <span className="sr-only">Your Company</span>
          <img className="h-16 w-auto" src="https://assets.zid.store/themes/0f6ed6db-c6f5-45cb-a798-6f221d6a2f97/ShujaGreen.svg" alt="" />
        </a>
        <button >
          <div className='relative'>
            <Link to="cart">
              <span className='bg-n h-6 w-6 lg:hidden'>{cart.itemsCount}</span>
              <img className="h-6 w-6 lg:hidden" src='https://assets.zid.store/themes/0f6ed6db-c6f5-45cb-a798-6f221d6a2f97/cart.png' />
            </Link>
          </div>
        </button>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-24 pr-24 w-auto"
                src="https://assets.zid.store/themes/0f6ed6db-c6f5-45cb-a798-6f221d6a2f97/ShujaGreen.svg"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  الرئيسية
                </a>
                <a
                  href="shuja-hair-mists"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Shuja Hair Mists
                </a>
                <a
                  href="shuja-collection"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Shuja Collection
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header2

