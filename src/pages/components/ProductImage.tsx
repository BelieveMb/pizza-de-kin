import React from 'react'

function ProductImage() {
  return (
    <section className="flex flex-col lg:flex-row  cursor-pointer">
        <div  className="flex flex-col  justify-center gap-4 px-14  bg-center bg-cover bg-no-repeat w-full lg:w-1/2 h-[36rem]
                relative overflow-hidden transform transition-transform duration-700 hover:scale-110  hover:z-0 " 
            style={{ backgroundImage: "url('./images/fast-food.jpg')" , maxWidth: '50%'}}>
                <h2 className='text-xl text-yellow-400  sous-title-font-bold'>Offre spécial </h2>
                <h1 className='w-[80%] title-font-regular text-5xl  uppercase leading-snug lg:leading-none'>Pizza Grand Format </h1>
                <h2 className='text-xl mb-2 sous-title-font-bold'>à seulement <span className="text-3xl text-yellow-400">15 $</span> </h2>
                <div>
                    <button className='.btn-font-regular lg:flex gap-1 bg-green-700 rounded-lg px-4 py-3 text-gray-50 font-semibold  hover:bg-red-500 duration-700 '>
                        Commander <i className="bi bi-arrow-right"></i> 
                    </button>        
                </div>
        </div>
        
        <div className="flex flex-col w-full lg:w-1/2 z-20">
            <div className='relative px-14  bg-center bg-cover bg-no-repeat w-full h-[18rem]'
             style={{ backgroundImage: "url('./images/plat.jpg')" }}>
                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                    <h1 className='w-[50%]  title-font-regular text-4xl  uppercase leading-snug lg:leading-none text-gray-100'>Pizza Grand Format </h1>
                    <h2 className=' sous-title-font-bold text-yellow-400 text-4xl'> à 15 $ </h2>
                 </div>

            </div>
            <div className='flex flex-col justify-center gap-4 px-14  bg-center bg-cover bg-no-repeat w-full h-[18rem] z-20'
             style={{ backgroundImage: "url('./images/plat-pizza.jpg')" }}>
                <h2 className='text-xl text-yellow-400  sous-title-font-bold'>Offre spécial </h2>
                <h1 className='w-[60%] title-font-regular text-4xl  uppercase leading-snug lg:leading-none'>Pizza Grand Format </h1>
                <h2 className='text-xl mb-2 sous-title-font-bold'>à seulement <br /> <span className="text-3xl text-yellow-400">15 $</span> </h2>
            </div>
        </div>
    </section>
  )
}

export default ProductImage