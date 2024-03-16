import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ProductImage from '../components/ProductImage'
import Event from '../components/Event'
import PizzaSection from '../components/PizzaSection'
import MenuPrice from '../components/MenuPrice'
import Footer from '../components/Footer'

function Index() {
  return (
    <main className=' '>
        <div className="p-[2rem]  bg-center bg-cover bg-no-repeat h-max-[10%]" 
         style={{ backgroundImage: "url('./images/bg-pizza.jpg')" }}>
          <Header/>
          <HeroSection />
        </div>

        <div className="text-sm lg:text-xl bg-gray-50 text-gray-800 uppercase para-font-regular flex justify-center lg:py-6 py-10 px-5 text-center relative z-10 " >
          
          <p className='leading-8 lg:leading-normal font-bold'>Gagnez de <span className="text-red-500">réduction</span>  et de <span className="text-red-500">coupon</span> facilement, <a href='#' className="border-2 border-gray-800 rounded-xl px-3 py-2 hover:bg-red-500 hover:text-gray-50 hover:border-red-500">Rejoinnez - nous</a>  ou <a className="text-green-600 border-b-2 border-green-600 hover:border-none cursor-pointer">Connectez vous</a> </p>
        </div>
        <ProductImage />
        <Event />
        <PizzaSection />
        <MenuPrice />
        <Footer />
    
    </main>
    

  )
}

export default Index