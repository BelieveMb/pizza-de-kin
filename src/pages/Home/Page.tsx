import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

function Page() {
  return (
    <main className=' '>
        <div className="p-[2rem]  bg-center bg-cover bg-no-repeat h-full" 
         style={{ backgroundImage: "url('./images/bg-pizza.jpg')" }}>
          <Header/>
          <HeroSection />
        </div>

    
    </main>
    

  )
}

export default Page