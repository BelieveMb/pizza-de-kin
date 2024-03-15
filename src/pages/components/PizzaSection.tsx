import React from 'react'
import Image from 'next/image';

function PizzaSection() {
  return (
    <section className="relative z-10  flex flex-col  justify-center gap-2 px-14 py-[6rem]  bg-gray-200/75 text-gray-800 h-auto " >
        <div className="flex flex-col items-center content-center justify-center gap-2 ">
            <h2 className='text-xl lg:text-2xl text-red-500 sous-title-font-bold'>Repas spécial </h2>
            <h1 className='title-font-regular text-5xl lg:text-[5rem] text-center uppercase leading-snug lg:leading-none'>Super Week-end </h1>
            <p className=' px-10 py-4 para-font-regular w-[50%] text-center '>
                contentText Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, amet consequuntur ad delectus laudantium officiis.
            </p>
        </div>

        <div className="flex flex-row gap-4 justify-center items-center">
            <div className="flex flex-col w-[33%] gap-2 justify-center items-center">
                <Image 
                    src='/images/pizzaimg.png'
                    alt="pizza image"
                    className=''
                    width={350}
                    height={30}
                /> 
                <h3 className='text-xl font-semibold uppercase '>Méga plat de pizza</h3>
                <p className=' para-font-regular  text-center '>
                    contentText Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, amet consequuntur ad delectus laudantium officiis.
                </p>

            </div>
            <div className="flex flex-col w-[33%] gap-2 justify-center items-center">
                <Image 
                    src='/images/pizzaimg.png'
                    alt="pizza image"
                    className=''
                    width={350}
                    height={30}
                /> 
                <h3 className='text-xl font-semibold uppercase '>Méga plat de pizza</h3>
                <p className=' para-font-regular  text-center '>
                    contentText Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, amet consequuntur ad delectus laudantium officiis.
                </p>

            </div>
            <div className="flex flex-col w-[33%] gap-2 justify-center items-center">
                <Image 
                    src='/images/pizzaimg.png'
                    alt="pizza image"
                    className=''
                    width={350}
                    height={30}
                /> 
                <h3 className='text-xl font-semibold uppercase '>Méga plat de pizza</h3>
                <p className=' para-font-regular  text-center '>
                    contentText Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, amet consequuntur ad delectus laudantium officiis.
                </p>

            </div>
           
        </div>
        {/* ajouter un slider avec le point  */}
    </section>
  )
}

export default PizzaSection