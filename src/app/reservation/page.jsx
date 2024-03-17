import BannerTitle from '@/components/BannerTitle'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import OurServices from '@/components/OurServices'
import ReservationForm from '@/components/ReservationForm'
import React from 'react'

function page() {
  return (
    <main className=' para-font-regular '>
        <div className="bg-gray-400 px-10 py-5">
            <Header />
        </div>
        <BannerTitle title='Resérvation' menu=' Resérvation' />
        <section className='py-[8%] px-10 bg-gray-400 h-auto '>
            <OurServices />
            <div className="flex flex-col items-center content-center justify-center gap-1 lg:gap-2 ">
                <h2 className='text-xl lg:text-2xl text-red-500 sous-title-font-bold  lg:mb-4'>Repas spécial </h2>
                <h1 className='title-font-regular text-2xl lg:text-[3rem] text-center uppercase '>Resérver votre table </h1>
            </div>
            <ReservationForm />

        </section>
        <Footer />


    </main>
    )
}

export default page