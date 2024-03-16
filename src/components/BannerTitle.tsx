import React from 'react'

function BannerTitle() {
  return (
    <section className="flex flex-col justify-center items-center py-[7%] bg-center bg-cover bg-no-repeat " 
      style={{ backgroundImage: "url('./images/bg-spicies.avif')" }}>
        <h1 className='text-[4rem] '>Menu du Restaurant</h1>
        <div className="flex gap-2">
            <a href="./" className='hover:text-green-500'>Home</a>
            <i className="bi bi-arrow-right"></i>
            <b>Menu Restaurant</b>
        </div>
    </section>
  )
}

export default BannerTitle