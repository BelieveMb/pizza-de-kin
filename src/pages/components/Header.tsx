import React from 'react'
import Image from 'next/image'


function Header() {
  return (
    <header className='p-[2rem] flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center gap-5 '>
            <span className="text-2xl">
                <i className="bi bi-menu-app-fill"></i>
            </span>
            <div className="hidden lg:flex  items-center gap-2">
                <span className="text-2xl text-green-500">
                    <i className="bi bi-telephone"></i>
                </span>
                <div className="flex flex-col">
                    <b>24/7 Support center</b>
                    <a href="tel:+243817723066" className='font-semibold text-red-700 text-xl'>+243 817723066</a>
                </div>
            </div>
        </div>

        <div >
            <Image 
                src='./images/logo.svg'
                alt="Pizza de Kin Logo"
                className=""
                width={150}
                height={30}
                priority
            />
        </div>

        <div className='flex flex-row items-center gap-5 '>
            <span className="hidden text-sm text-gray-50 lg:flex items-baseline">
                <i className="bi bi-search text-xl"></i> 
                Recherche
            </span>
            <button className='hidden lg:flex gap-1 bg-red-500 rounded-lg px-4 py-3 text-gray-50 font-semibold  '>
              <i className="bi bi-cart4"></i> 
              Commander
            </button>
            <button className='bg-green-700 rounded-lg px-4 py-3 text-gray-50 font-semibold'>
              <i className="bi bi-basket2"></i> 
            </button>
            <button className='hidden lg:flex text-xl text-gray-50 font-semibold'>
              <i className="bi bi-ui-radios-grid"></i> 
            </button>

        </div>
    </header>
  )
}

export default Header