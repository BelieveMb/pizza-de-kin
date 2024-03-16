import React from 'react';
import Header from '@/components/Header';
import BannerTitle from '@/components/BannerTitle';
import ListDish from '@/components/ListDish';

function Page() {
  return (
    <main className=' para-font-regular '>
      <div className="bg-gray-400 px-10 py-5">
        <Header />
      </div>
      <BannerTitle />
      <ListDish />
    </main>
  )
}

export default Page