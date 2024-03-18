import Link from 'next/link'
import React from 'react'

function ProductImage() {
  return (
    <section className="flex flex-col lg:flex-row  cursor-pointer">
        <div  className="flex flex-col  justify-center gap-4 px-14  bg-center bg-cover bg-no-repeat w-full h-[22rem] lg:h-[36rem]
                relative overflow-hidden transform transition-transform duration-700 hover:scale-110  hover:z-0 " 
            style={{ backgroundImage: "url('./images/fast-food.jpg')" }}>
                <h2 className='text-xl text-yellow-400  sous-title-font-bold'>Offre spécial </h2>
                <h1 className='w-[60%] lg:w-[80%] title-font-regular text-3xl lg:text-5xl  uppercase leading-snug lg:leading-none'>Super Pizza Air </h1>
                <h2 className='text-xl mb-6 lg:mb-2 sous-title-font-bold'>à seulement <span className="text-3xl text-yellow-400">13 $</span> </h2>
                <div className=' '>
                    <Link href='./shop/product' className='lg:w-[20%] btn-font-regular lg:flex gap-1 bg-green-700 rounded-lg px-4 py-3 text-gray-50 font-semibold  hover:bg-red-500 duration-700 '>
                        Commander <i className="bi bi-arrow-right"></i> 
                    </Link>        
                </div>
        </div>
        
        <div className="flex flex-col w-full lg:w-1/2 z-20">
            <div className='relative px-14  bg-center bg-cover bg-no-repeat w-full h-[18rem]'
             style={{ backgroundImage: "url('./images/plat.jpg')" }}>
                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                    <h1 className='w-[50%]  title-font-regular text-4xl  uppercase leading-snug lg:leading-none text-gray-100'>Combo Complet Xl </h1>
                    <h2 className=' sous-title-font-bold text-yellow-400 text-4xl'> à 5 $ </h2>
                 </div>

            </div>
            <div className='flex flex-col justify-center gap-4 px-14  bg-center bg-cover bg-no-repeat w-full h-[18rem] z-20'
             style={{ backgroundImage: "url('./images/plat-pizza.jpg')" }}>
                <h2 className='text-xl text-yellow-400  sous-title-font-bold'>Offre spécial </h2>
                <h1 className='text-gray-100 title-font-regular text-4xl  uppercase leading-snug lg:leading-none'>Deux Pizza M </h1>
                <h2 className='text-xl mb-2 sous-title-font-bold'>à seulement <br /> <span className="text-3xl text-yellow-400">30 $</span> </h2>
            </div>
        </div>
    </section>
  )
}

export default ProductImage