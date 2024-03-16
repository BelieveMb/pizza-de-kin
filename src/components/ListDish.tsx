import React from 'react';
import Image from 'next/image';
import ButtonList from './smallComponents/ButtonList'
import ProductCard from './smallComponents/ProductCard';

function ListDish() {
  return (
    <section className="flex flex-col justify-center items-center py-[8%] bg-gray-400 " >
        <h1 className='title-font-regular text-3xl lg:text-[3rem] text-center uppercase text-gray-50 '>Le repas populaire </h1>
        <div className="flex justify-start gap-4 my-6">
            <a className='bg-red-700 px-8 py-4 rounded-xl cursor-pointer flex  content-baseline items-baseline gap-2'>
                <i className="bi bi-search"></i>
                Burger
            </a>
            <ButtonList iconName='search' nameBtn='Search' />
            <ButtonList iconName='search' nameBtn='Search' />
            <ButtonList iconName='search' nameBtn='Search' />
            <ButtonList iconName='search' nameBtn='Search' />
            <ButtonList iconName='search' nameBtn='Search' />
        </div>

        <aside className="flex justify-start gap-4 my-6  px-10 ">
           
            
            <ProductCard 
                titleCard='Big Mac'
                imageName='pizzaimg.png' 
                detailCard='contentText Lorem ipsum dolor sit amet consectetur'
                priceCard={50}
            /> 
            <ProductCard 
                titleCard='Big Mac'
                imageName='pizzaimg.png' 
                detailCard='contentText Lorem ipsum dolor sit amet consectetur'
                priceCard={50}
            /> 
            <ProductCard 
                titleCard='Big Mac'
                imageName='pizzaimg.png' 
                priceCard={50}
                detailCard='contentText Lorem ipsum dolor sit amet consectetur'
            /> 
             <ProductCard 
                titleCard='Big Mac'
                imageName='pizzaimg.png' 
                detailCard='contentText Lorem ipsum dolor sit amet consectetur'
                priceCard={50}
            /> 

        </aside>
    </section>
  )
}

export default ListDish