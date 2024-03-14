import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

function Page() {
  return (
    <main className=' '>
        <div className="p-[2rem]  bg-center bg-cover bg-no-repeat h-max-[10%]" 
         style={{ backgroundImage: "url('./images/bg-pizza.jpg')" }}>
          <Header/>
          <HeroSection />
        </div>

        <div className="bg-gray-50 text-gray-800 uppercase font-semibold flex justify-center py-6" >
          <p>Gagnez de <span className="text-red-500">réduction</span>  et de <span className="text-red-500">coupon</span> facilement, <a href='#' className="border-2 border-gray-800 rounded-xl px-3 py-2 hover:bg-red-500 hover:text-gray-50 hover:border-red-500">Rejoinnez - nous</a>  ou <a className="text-green-600 border-b-2 border-green-600 hover:border-none">Connectez vous</a> </p>
        </div>

    
    </main>
    

  )
}

export default Page