import BannerTitle from '@/components/BannerTitle'
import Header from '@/components/Header'
import React from 'react';
import Image from 'next/image';

function page({ params }: { params: { product: string } }) {
  const imageName : string = 'pizzaimg.png'
  return (
    <main className=' para-font-regular '>
        <div className="bg-gray-200 px-10 py-5">
            <Header />
        </div>
        <BannerTitle title=' ' menu=' Shop' secondMenu='Pizza' />
        <section className='flex flex-row gap-6 py-[8%] px-10 bg-gray-200 h-auto '>
            <div>
                <Image 
                    src={`/images/${imageName}`}
                    alt="pizza image"
                    className='w-[38rem] '
                    width={350}
                    height={30}
                /> 
            </div>
            <div className="flex flex-col text-gray-700 gap-6">
                <h1 className='title-font-regular text-2xl lg:text-[3.6rem] uppercase leading-snug lg:leading-none'>Pizza au fromage </h1>
                <div className="flex gap-4 text-yellow-400 border-b border-gray-400 pb-4">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, optio?
                </p>
                <p className='text-red-500 font-semibold  text-3xl'>
                    3.90$ - 5.60$
                </p>
                <ul className="my-2 list-disc ml-4">
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                </ul>

                <div className='border-y border-gray-400 py-5 flex gap-3 justify-start items-center uppercase'>
                    <b>Quantité</b>
                    <div className="flex gap-5 text-xl p-2 border border-gray-400 rounded-lg">
                        <b>-</b>
                        <b>1</b>
                        <b>+</b>
                    </div>
                    <button className="bg-green-600 px-20 py-3 uppercase rounded-xl text-gray-50"> Add to cart</button>
                    <span className="border border-gray-400 py-3 px-4 rounded-xl"> <i className="bi bi-heart"></i> </span>


                </div>


            </div>
        </section>
    </main>
  )
}

export default page