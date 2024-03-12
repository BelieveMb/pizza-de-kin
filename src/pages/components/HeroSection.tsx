import React from 'react'

function HeroSection() {
  return (
    <section className='flex flex-col'>
        <aside className='my-[5rem] flex flex-row gap-4 justify-between content-center items-center'>
            <div className="w-[50%] flex flex-col justify-center content-center items-center text-center">
                <h2 className='text-3xl text-yellow-400 uppercase'>Super déliceuse Pizza</h2>
                <h1 className='text-[4rem] font-bold text-center uppercase leading-none'>Pizza <br /> au fromage <br /> Illimitée</h1>
                <p className='mt-4 px-10 py-8'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente porro aut esse .
                </p>
                <button className='hidden lg:flex gap-1 bg-green-700 rounded-lg px-4 py-3 text-gray-50 font-semibold  hover:bg-red-500 duration-700 '>
                    Commander maintenant <i className="bi bi-arrow-right"></i> 
                </button>
            </div>
            <div className="flex flex-col">
                <h1>TUT</h1>
            </div>
        </aside>
        <div className='flex justify-center content-center gap-2'>
            <span className=""> <i className="bi bi-record-circle"></i></span>
            <span className="text-gray-400"> <i className="bi bi-circle-fill"></i></span>
            <span className="text-gray-400"> <i className="bi bi-circle-fill"></i></span>
            <span className="text-gray-400"> <i className="bi bi-circle-fill"></i></span>
        </div>
    </section>
   )
}

export default HeroSection