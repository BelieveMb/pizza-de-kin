import BannerTitle from '@/components/BannerTitle'
import Header from '@/components/Header'
import OurServices from '@/components/OurServices'
import React from 'react'

function page() {
  return (
    <main className=' para-font-regular '>
        <div className="bg-gray-400 px-10 py-5">
            <Header />
        </div>
        <BannerTitle title='Le menu du restaurant' menu=' menu' />
        <OurServices />

    </main>
    )
}

export default page