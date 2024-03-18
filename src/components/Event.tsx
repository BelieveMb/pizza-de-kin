import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Event() {
  return (
    <section className="relative z-10 h-auto lg:h-screen flex flex-col items-center content-center justify-center gap-2 px-14 py-36 lg:py-0 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('./images/bg-spicies.avif')" }} >
      <h2 className='mt-8 lg:mt-0 text-center text-xl lg:text-3xl text-yellow-500 uppercase sous-title-font-bold'> Menu Duo à Partager </h2>
      <h1 className='lg:w-[60%] title-font-regular text-2xl lg:text-[3rem] text-center uppercase leading-snug lg:leading-none'>Savourer en Duo, Économiser en Duo </h1>
      <p className='my-4 lg:my-2 px-1 lg:px-10 py-4 lg:py-8 para-font-regular w-full lg:w-[50%] text-center '> 
        Profitez de notre irrésistible offre spéciale "Menu Duo à Partager" et partagez un festin gourmand avec votre moitié, un ami ou un proche. 
      </p>
      <div className="b">
        <Link href='./reservation' className='btn-font-regular lg:flex gap-1 bg-gray-50 text-red-500 rounded-lg px-8 py-5 hover:text-gray-50 font-bold  hover:bg-green-500 duration-700 '>
            Resérver maintenant <i className="bi bi-chevron-double-right"></i>
        </Link>

      </div>
      <div className="flex flex-col content-start items-start ">
        
        <Image 
            src='/images/semi-pizza.png'
            alt="semi pizza image"
            width={250}
            height={30}
            className=' hidden lg:block rounded-10  z-20 absolute right-0 top-[20rem] '
            priority
            />                
      </div>
    </section>
  )
}

export default Event