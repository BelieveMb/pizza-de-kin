import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function ProductCard({imageName, titleCard, detailCard, priceCard} :
    {imageName:string, titleCard:string, detailCard:string, priceCard:number}) {
  return (
    // w-full lg:w-[33%]
    <div className="flex flex-col  gap-2 justify-center items-center">
        <Image 
            src={`/images/${imageName}`}
            alt="pizza image"
            className='relative z-10'
            width={350}
            height={30}
        /> 
        <div className="bg-gray-50 text-gray-700 rounded-xl px-5 py-4 
           h-auto -mt-36 pt-32 cursor-pointer ">
            <div className="flex justify-between">
                <Link href="./shop/product"  className='text-xl font-semibold uppercase hover:text-green-600'>{titleCard} </Link >
                <span className="text-2xl hover:text-red-700">
                    <i className="bi bi-heart"></i>
                </span>
            </div>
            <p className=' para-font-regular my-4'>{detailCard}        </p>
            <div className="flex justify-between items-baseline my-2">
                <b className='text-3xl text-red-600 sous-title-font-bold'>{priceCard}$</b>
                <button className='bg-green-600 px-4 py-2 rounded-xl text-gray-50'><i className="bi bi-cart3"></i></button>
            </div>
        </div>

    </div> 
    )
}

export default ProductCard