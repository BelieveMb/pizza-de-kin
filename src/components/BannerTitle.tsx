import React from 'react'

function BannerTitle({title, menu, secondMenu}:
  {title:string, menu:string, secondMenu:string}) {
  return (
    <section className="flex flex-col justify-center items-center py-[5rem] lg:py-[7%] bg-center bg-cover bg-no-repeat " 
      style={{ backgroundImage: "url('./images/bg-spicies.avif')" }}>
        <h1 className='text-3xl lg:text-[4rem] uppercase'> {title} </h1>
        <div className="flex gap-2 mt-5">
            <a href="./" className='hover:text-green-500'>Home</a>
            <i className="bi bi-arrow-right"></i>
            <b>{menu} </b>
            <i className="bi bi-arrow-right"></i>
            <b>{secondMenu} </b>

        </div>
    </section>
  )
}

export default BannerTitle