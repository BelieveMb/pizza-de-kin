import React from 'react'
import Image from 'next/image'


function Header() {
  return (
    <header className='p-[2rem] flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center gap-5 border-4 border-green-400'>
            <span className="text-2xl">
                <i className="bi bi-menu-app-fill"></i>
            </span>
            <div className="flex  items-center gap-2">
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
        <div className='w-20 border-4 border-green-400'>
            <h2>Block 3</h2>
        </div>
    </header>
  )
}

export default Header