import React from 'react'
import Image from 'next/image';

const PriceItem = ({product, price, detail} : {
  product : string,
  price : string,
  detail : string,
}) => {
  return (
    <>
      <div className="flex flex-row justify-between text-xl font-semibold">
          <b className='uppercase'> {product} </b>
          <b className='text-red-500'>{price} </b>
      </div>
      <span  className='text-gray-500 mb-5'>{detail} </span>
    </>
  )
}

function MenuPrice() {
  return (
    <section className="pt-10  flex flex-col  justify-center gap-2   bg-gray-100 text-gray-800 h-auto " >
      <div className="flex flex-col lg:flex-row items-center lg:items-baseline lg:justify-between px-20">
        <div className="flex flex-col justify-center lg:justify-start lg:content-normal items-center">
            <h4 className='text-sm  text-red-500 sous-title-font-bold mb-2'>Explorer nos repas spéciaux </h4>
            <h2 className='title-font-regular text-3xl lg:text-[4rem] uppercase w-full lg:w-[40rem] leading-[3rem] lg:text-left text-center '>WE LOVE You SURPRISE YOU </h2>
        </div>
        <Image 
            src='/images/pizzaimg.png'
            alt="pizza image"
            className='text-center'
            width={200}
            height={25}
        /> 
      </div>
      
      <div className="flex lg:flex-row flex-col justify-between content-start items-start gap-20">
        <div className='w-1/2 lg:block hidden'>
          <Image 
              src='/images/burger-personne.jpg'
              alt="person eats image"
              width={650}
              height={30}
              />
        </div>

        <div className="flex flex-col lg:justify-normal justify-center gap-4 w-full lg:w-1/2 px-10 py-6">
          <div className="flex flex-col gap-2">
            <PriceItem detail='Elementum tempus egestas' price='15.5$'
            product='Triple burger' />
            <PriceItem detail='Elementum tempus egestas' price='15.5$'
            product='Triple burger' />


          </div>
        </div>
      </div>

    </section>
  )
}
 
export default MenuPrice